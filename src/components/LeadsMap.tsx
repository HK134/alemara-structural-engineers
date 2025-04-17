
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/components/ui/use-toast';

// Set your Mapbox token here
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FuYWFuZW5nIiwiYSI6ImNscnA5cmF5eTAwcmIya2xrNWQzOGs2ZzUifQ.sPJryXmbGXmQ9dZLrh_bsw';

// Sample data for map points (in a real app, this would come from an API)
const sampleLocations = [
  {
    id: 1,
    name: "Home Extension Project",
    client: "James Wilson",
    address: "123 Oxford Street, London",
    postcode: "W1D 1BS",
    coordinates: [-0.1279, 51.5074], // London coordinates (longitude, latitude)
    status: "In Progress"
  },
  {
    id: 2,
    name: "Structural Assessment",
    client: "Sarah Johnson",
    address: "456 Baker Street, London",
    postcode: "NW1 6XE",
    coordinates: [-0.1578, 51.5226],
    status: "Completed"
  },
  {
    id: 3,
    name: "Building Regulations",
    client: "Architect Studio Inc.",
    address: "78 Kensington High Street, London",
    postcode: "W8 5SE",
    coordinates: [-0.1919, 51.5015],
    status: "Awaiting Info"
  },
  {
    id: 4,
    name: "Commercial Development",
    client: "BuildCo Architects",
    address: "22 Liverpool Street, London",
    postcode: "EC2M 7PY",
    coordinates: [-0.0833, 51.5185],
    status: "In Progress"
  },
  {
    id: 5,
    name: "Residential Conversion",
    client: "David Thompson",
    address: "114 Camden High Street, London",
    postcode: "NW1 0LU",
    coordinates: [-0.1426, 51.5388],
    status: "Completed"
  }
];

// Custom popup content function
const createPopupContent = (location: any) => {
  const statusColor = 
    location.status === "Completed" ? "bg-green-100 text-green-800" :
    location.status === "In Progress" ? "bg-blue-100 text-blue-800" :
    "bg-yellow-100 text-yellow-800";
  
  return `
    <div class="p-2 max-w-xs">
      <h3 class="font-bold text-sm">${location.name}</h3>
      <p class="text-xs text-gray-600">${location.address}</p>
      <p class="text-xs text-gray-600">${location.postcode}</p>
      <div class="flex justify-between items-center mt-2">
        <p class="text-xs"><span class="font-semibold">Client:</span> ${location.client}</p>
        <span class="text-xs px-2 py-1 rounded-full ${statusColor}">${location.status}</span>
      </div>
    </div>
  `;
};

// Define a type for our location objects to ensure type safety
type ProjectLocation = {
  id: number;
  name: string;
  client: string;
  address: string;
  postcode: string;
  coordinates: [number, number]; // Explicitly typed as a tuple with two numbers
  status: string;
};

const LeadsMap = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState<ProjectLocation[]>(sampleLocations as ProjectLocation[]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Initialize the map
    if (!mapContainer.current) return;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-0.1278, 51.5074], // London center
        zoom: 10
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Set up map load event
      map.current.on('load', () => {
        setLoading(false);
        
        // Add markers for each location
        locations.forEach(location => {
          if (!map.current) return;
          
          // Create a marker element
          const markerElement = document.createElement('div');
          markerElement.className = 'w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold border-2 border-white';
          markerElement.innerHTML = `<span>${location.id}</span>`;
          
          // Create popup
          const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(createPopupContent(location));
          
          // Add marker to map - ensure coordinates are properly typed
          new mapboxgl.Marker(markerElement)
            .setLngLat(location.coordinates) // This is now properly typed as [number, number]
            .setPopup(popup)
            .addTo(map.current);
        });
      });

      // Clean up on unmount
      return () => {
        if (map.current) {
          map.current.remove();
        }
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred with the map';
      setError(errorMessage);
      setLoading(false);
      toast({
        title: "Map Error",
        description: errorMessage,
        variant: "destructive",
      });
      console.error("Error initializing map:", err);
    }
  }, [locations]);

  if (error) {
    return (
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="p-4 text-center text-red-500">
            <p>Error loading map: {error}</p>
            <p className="text-sm mt-2">Please check your internet connection and try again.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {loading ? (
          <Skeleton className="w-full h-[400px]" />
        ) : (
          <div ref={mapContainer} className="w-full h-[400px]" />
        )}
      </CardContent>
    </Card>
  );
};

export default LeadsMap;
