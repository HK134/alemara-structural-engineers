
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

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

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYWxlbWFyYSIsImEiOiJjbHdudDMwd3oxODdlMnFvdG93N2lrb3p5In0.F2KLjtF_IIJ26qQz3S6-IA';
mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

const LeadsMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [leads, setLeads] = useState<GeocodedLead[]>([]);
  const [loading, setLoading] = useState(true);

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
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${cleanPostcode}.json?country=gb&types=postcode&access_token=${MAPBOX_ACCESS_TOKEN}`
      );
      
      const data = await response.json();
      
      if (data.features && data.features.length > 0) {
        const [longitude, latitude] = data.features[0].center;
        return [longitude, latitude];
      }
      
      return null;
    } catch (error) {
      console.error('Error geocoding postcode:', error);
      return null;
    }
  };

  const fetchAndGeocodLeads = async () => {
    try {
      setLoading(true);
      
      // Fetch all form submissions with postcodes
      const { data, error } = await supabase
        .from('form_submissions')
        .select('*');
      
      if (error) throw error;
      
      if (!data) {
        setLeads([]);
        return;
      }
      
      // Create a map of postcode -> coordinates to avoid redundant geocoding
      const postcodeCache: Record<string, [number, number] | null> = {};
      
      // For each lead, geocode the postcode
      const geocodePromises = data.map(async (lead) => {
        if (!lead.postcode || lead.postcode === 'Unknown') {
          return { ...lead, longitude: undefined, latitude: undefined };
        }
        
        // Check cache first
        if (!postcodeCache[lead.postcode]) {
          postcodeCache[lead.postcode] = await geocodePostcode(lead.postcode);
        }
        
        const coords = postcodeCache[lead.postcode];
        
        if (coords) {
          const [longitude, latitude] = coords;
          return { ...lead, longitude, latitude };
        }
        
        return { ...lead, longitude: undefined, latitude: undefined };
      });
      
      const geocodedLeads = await Promise.all(geocodePromises);
      setLeads(geocodedLeads);
    } catch (error) {
      console.error('Error fetching leads:', error);
      toast.error('Failed to load leads data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndGeocodLeads();
  }, []);

  useEffect(() => {
    if (!mapContainer.current) return;

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

    // Cleanup function
    return () => {
      map.current?.remove();
    };
  }, []);

  // Add markers once the map is loaded and we have geocoded leads
  useEffect(() => {
    if (!map.current || loading) return;

    // Wait for the map to be fully loaded
    map.current.on('load', () => {
      // Add markers for each lead with coordinates
      leads.forEach((lead) => {
        if (lead.longitude && lead.latitude) {
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
        }
      });
    });
  }, [leads, loading]);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-border">
      {loading && (
        <div className="absolute inset-0 bg-background/50 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
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
    </div>
  );
};

export default LeadsMap;
