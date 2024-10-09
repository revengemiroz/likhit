"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Note: Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

declare global {
  interface Window {
    google: any;
  }
}

export default function DrivingTestCentersLocator() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [userLocation, setUserLocation] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [searchRadius, setSearchRadius] = useState<number>(5000); // 5km default
  const [testCenters, setTestCenters] = useState<
    google.maps.places.PlaceResult[]
  >([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (mapRef.current) {
      const mapOptions: google.maps.MapOptions = {
        center: { lat: 0, lng: 0 },
        zoom: 12,
      };
      const newMap = new window.google.maps.Map(mapRef.current, mapOptions);
      setMap(newMap);
      getUserLocation();
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLoc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLoc);
          if (map) {
            map.setCenter(userLoc);
            new window.google.maps.Marker({
              position: userLoc,
              map: map,
              title: "Your Location",
              icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              },
            });
            searchNearbyTestCenters(userLoc);
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const searchNearbyTestCenters = (location: google.maps.LatLngLiteral) => {
    if (map) {
      const service = new window.google.maps.places.PlacesService(map);
      const request = {
        location: location,
        radius: searchRadius,
        keyword: "driving test center",
      };

      service.nearbySearch(
        request,
        (
          results: google.maps.places.PlaceResult[],
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            results
          ) {
            setTestCenters(results);
            results.forEach((place) => {
              if (place.geometry && place.geometry.location) {
                new window.google.maps.Marker({
                  position: place.geometry.location,
                  map: map,
                  title: place.name,
                });
              }
            });
          }
        }
      );
    }
  };

  const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRadius = parseInt(event.target.value, 10) * 1000; // Convert km to meters
    setSearchRadius(newRadius);
  };

  const handleSearch = () => {
    if (userLocation) {
      searchNearbyTestCenters(userLocation);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Find Nearby Driving Test Centers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-end gap-4">
            <div className="flex-1">
              <Label htmlFor="searchRadius">Search Radius (km)</Label>
              <Input
                id="searchRadius"
                type="number"
                min="1"
                max="50"
                value={searchRadius / 1000}
                onChange={handleRadiusChange}
              />
            </div>
            <Button onClick={handleSearch}>Search</Button>
          </div>
          {/* MAP */}
          <div
            ref={mapRef}
            className="w-full h-[400px] rounded-lg overflow-hidden"
          ></div>
          {/* // */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Nearby Test Centers:</h3>
            <ul className="space-y-2">
              {testCenters.map((center, index) => (
                <li key={index} className="bg-white p-2 rounded shadow">
                  {center.name} - {center.vicinity}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
