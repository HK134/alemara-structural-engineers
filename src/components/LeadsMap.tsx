
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, Map } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Type definition for our geocoded form submissions
type GeocodedLead = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  postcode: string;
  service_type: string;
  status: string;
  longitude?: number;
  latitude?: number;
};

// Type for API errors that might include a status code
interface ApiError extends Error {
  status?: number;
}

// Try to get the token from localStorage if available
const getStoredMapboxToken = () => {
  return localStorage.getItem('mapbox_token') || '';
};

// Store token for future use
const storeMapboxToken = (token: string) => {
  localStorage.setItem('mapbox_token', token);
};

const LeadsMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [leads, setLeads] = useState<GeocodedLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mapboxToken, setMapboxToken] = useState(getStoredMapboxToken());
  const [isConfiguring, setIsConfiguring] = useState(!getStoredMapboxToken());

  // London's coordinates as center
  const [center, setCenter] = useState<[number, number]>([-0.118092, 51.509865]);
  const [zoom, setZoom] = useState(10);

  const geocodePostcode = async (postcode: string): Promise<[number, number] | null> => {
    if (!postcode || postcode === 'Unknown') return null;
    
    try {
      // Clean up postcode - remove spaces and ensure uppercase
      const cleanPostcode = postcode.replace(/\s+/g, '').toUpperCase();
      
      // Use Mapbox geocoding API
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${cleanPostcode}.json?country=gb&types=postcode&access_token=${mapboxToken}`
      );
      
      if (!response.ok) {
        throw new Error(`Geocoding API error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (data.features && data.features.length > 0) {
        const [longitude, latitude] = data.features[0].center;
        return [longitude, latitude];
      }
      
      console.log(`No coordinates found for postcode: ${postcode}`);
      return null;
    } catch (error) {
      console.error('Error geocoding postcode:', error);
      return null;
    }
  };

  const fetchAndGeocodLeads = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch all form submissions with postcodes
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*');
      
      if (error) throw error;
      
      if (!data || data.length === 0) {
        console.log("No leads found in database");
        setLeads([]);
        setLoading(false);
        return;
      }
      
      console.log(`Found ${data.length} leads in database:`, data);
      
      // Create a map of postcode -> coordinates to avoid redundant geocoding
      const postcodeCache: Record<string, [number, number] | null> = {};
      
      // For each lead, geocode the postcode
      const geocodePromises = data.map(async (lead) => {
        if (!lead.postcode || lead.postcode === 'Unknown') {
          console.log(`Lead ${lead.id} has no postcode`);
          return { ...lead, longitude: undefined, latitude: undefined };
        }
        
        console.log(`Geocoding postcode: ${lead.postcode} for lead ${lead.id}`);
        
        // Check cache first
        if (!postcodeCache[lead.postcode]) {
          postcodeCache[lead.postcode] = await geocodePostcode(lead.postcode);
        }
        
        const coords = postcodeCache[lead.postcode];
        
        if (coords) {
          const [longitude, latitude] = coords;
          console.log(`Found coordinates for ${lead.postcode}: [${longitude}, ${latitude}]`);
          return { ...lead, longitude, latitude };
        }
        
        console.log(`No coordinates found for ${lead.postcode}`);
        return { ...lead, longitude: undefined, latitude: undefined };
      });
      
      const geocodedLeads = await Promise.all(geocodePromises);
      
      // Filter out leads with no coordinates
      const leadsWithCoordinates = geocodedLeads.filter(
        lead => lead.longitude !== undefined && lead.latitude !== undefined
      );
      
      console.log(`${leadsWithCoordinates.length} out of ${geocodedLeads.length} leads have coordinates`);
      
      setLeads(geocodedLeads);
      
      if (leadsWithCoordinates.length === 0 && geocodedLeads.length > 0) {
        setError("None of the leads could be geocoded. Please check the postcodes or try a different Mapbox token.");
      }
    } catch (error) {
      console.error('Error fetching leads:', error);
      setError(formatError(error));
      toast.error('Failed to load leads data');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveToken = () => {
    if (!mapboxToken.trim()) {
      toast.error("Please enter a valid Mapbox access token");
      return;
    }
    
    storeMapboxToken(mapboxToken);
    setIsConfiguring(false);
    toast.success("Mapbox token saved. Initializing map...");
    
    // Clean up any existing map instance
    if (map.current) {
      map.current.remove();
      map.current = null;
    }
    
    // Refetch and initialize map with new token
    fetchAndGeocodLeads();
  };

  // Initialize map when component mounts or token changes
  useEffect(() => {
    if (isConfiguring || !mapboxToken || !mapContainer.current) return;
    
    try {
      mapboxgl.accessToken = mapboxToken;
      
      // Initialize the map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center,
        zoom,
        attributionControl: false
      });
      
      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      // Handle map load errors
      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        if (e.error && e.error.status === 401) {
          setError("Invalid Mapbox access token. Please provide a valid token.");
          setIsConfiguring(true);
        }
      });
      
      // Add markers once the map is loaded
      map.current.on('load', () => {
        // Add markers for each lead with coordinates
        leads.forEach((lead) => {
          if (lead.longitude && lead.latitude) {
            addMarkerToMap(lead);
          }
        });
        
        // Fit bounds if we have leads with coordinates
        const leadsWithCoords = leads.filter(l => l.longitude && l.latitude);
        if (leadsWithCoords.length > 0) {
          fitMapToBounds(leadsWithCoords);
        }
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      setError('Failed to initialize map. Please check your Mapbox token.');
    }
    
    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxToken, isConfiguring, leads]);

  // Fetch leads when component mounts
  useEffect(() => {
    if (!isConfiguring && mapboxToken) {
      fetchAndGeocodLeads();
    }
  }, [mapboxToken, isConfiguring]);

  const addMarkerToMap = (lead: GeocodedLead) => {
    if (!map.current || !lead.longitude || !lead.latitude) return;
    
    const marker = document.createElement('div');
    marker.className = 'marker';
    marker.style.width = '20px';
    marker.style.height = '20px';
    marker.style.borderRadius = '50%';
    
    // Color by status
    if (lead.status === 'new') {
      marker.style.backgroundColor = '#3b82f6'; // blue
    } else if (lead.status === 'contacted') {
      marker.style.backgroundColor = '#eab308'; // yellow
    } else if (lead.status === 'closed') {
      marker.style.backgroundColor = '#22c55e'; // green
    } else if (lead.status === 'archived') {
      marker.style.backgroundColor = '#6b7280'; // gray
    } else {
      marker.style.backgroundColor = '#6366f1'; // indigo
    }
    
    // Add popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <div style="padding: 8px;">
        <strong>${lead.first_name} ${lead.last_name}</strong><br/>
        <span>${lead.email}</span><br/>
        <span>Service: ${lead.service_type}</span><br/>
        <span>Status: ${lead.status}</span><br/>
        <span>Postcode: ${lead.postcode}</span>
      </div>
    `);
    
    // Add marker to map
    new mapboxgl.Marker(marker)
      .setLngLat([lead.longitude, lead.latitude])
      .setPopup(popup)
      .addTo(map.current!);
  };

  const fitMapToBounds = (leadsWithCoords: GeocodedLead[]) => {
    if (!map.current || leadsWithCoords.length === 0) return;
    
    const bounds = new mapboxgl.LngLatBounds();
    
    leadsWithCoords.forEach(lead => {
      if (lead.longitude && lead.latitude) {
        bounds.extend([lead.longitude, lead.latitude]);
      }
    });
    
    map.current.fitBounds(bounds, {
      padding: 50,
      maxZoom: 15
    });
  };

  const formatError = (error: unknown): string => {
    if (error instanceof Error) {
      // Standard Error object
      return error.message || 'Unknown error';
    }
    
    if (error && typeof error === 'object') {
      // Check if it's an API error with status
      if ('status' in error && 'message' in error) {
        const apiError = error as ApiError;
        return `API Error ${apiError.status}: ${apiError.message || 'Unknown error'}`;
      }
      
      // Try to stringify the object
      try {
        return JSON.stringify(error);
      } catch {
        return 'Unknown error object';
      }
    }
    
    return String(error) || 'Unknown error occurred';
  };

  // Render functions
  if (isConfiguring) {
    return (
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <Map className="h-6 w-6 mr-2 text-blue-500" />
          <h3 className="text-lg font-semibold">Map Configuration</h3>
        </div>
        
        <Alert className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Mapbox Token Required</AlertTitle>
          <AlertDescription>
            To display the lead map, please enter your Mapbox access token. 
            You can get a token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">mapbox.com</a> by creating an account.
          </AlertDescription>
        </Alert>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="mapboxToken" className="block text-sm font-medium text-gray-700 mb-1">
              Mapbox Access Token
            </label>
            <Input
              id="mapboxToken"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="pk.eyJ1Ijoie3VzZXJuYW1lfSIsImEiOiJ7dG9rZW59In0.{signature}"
              className="w-full"
            />
          </div>
          <Button onClick={handleSaveToken} className="w-full">
            Save and Load Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-border">
      {loading && (
        <div className="absolute inset-0 bg-background/50 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center z-10 p-4">
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-md">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2" />
              <div>
                <h3 className="font-medium text-gray-900">Map Error</h3>
                <p className="text-sm text-gray-500 mt-1">{error}</p>
                <div className="mt-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setIsConfiguring(true)}
                  >
                    Configure Mapbox
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => fetchAndGeocodLeads()}
                    className="ml-2"
                  >
                    Retry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div ref={mapContainer} className="w-full h-full" />
      
      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md z-10">
        <h3 className="text-sm font-semibold mb-2">Lead Status</h3>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <span className="text-xs">New</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <span className="text-xs">Contacted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-xs">Closed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-500"></div>
            <span className="text-xs">Archived</span>
          </div>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 z-10">
        <Button 
          size="sm"
          variant="secondary"
          onClick={() => setIsConfiguring(true)}
        >
          Change Mapbox Token
        </Button>
      </div>
      
      {leads.length > 0 && (
        <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md z-10">
          <span className="text-xs font-medium">
            Showing {leads.filter(l => l.longitude && l.latitude).length} of {leads.length} leads on map
          </span>
        </div>
      )}
    </div>
  );
};

export default LeadsMap;
