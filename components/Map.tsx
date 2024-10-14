"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Fixing Leaflet's default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker1.png",
  iconUrl: "/images/marker1.png",
  shadowUrl: "/leaflet/images/marker-shadow.png",
});

interface TestCenter {
  name: string;
  lat: number;
  lon: number;
  distance: number;
}

export default function DrivingTestCentersLocator() {
  const mapRef = useRef<L.Map | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [searchRadius, setSearchRadius] = useState<number>(5); // 5km default
  const [testCenters, setTestCenters] = useState<TestCenter[]>([]);

  useEffect(() => {
    // console.log(window, typeof window);
    if (typeof window !== undefined) {
      mapRef.current = L.map("map").setView([51.505, -0.09], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      getUserLocation();
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  const getUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          if (mapRef.current) {
            mapRef.current.setView([latitude, longitude], 13);
            L.marker([latitude, longitude])
              .addTo(mapRef.current)
              .bindPopup("Your Location")
              .openPopup();
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

  const searchNearbyTestCenters = async () => {
    if (!userLocation) return;

    const [lat, lon] = userLocation;
    const query = `
      [out:json];
      (
        node["amenity"="driving_school"](around:${
          searchRadius * 1000
        },${lat},${lon});
        way["amenity"="driving_school"](around:${
          searchRadius * 1000
        },${lat},${lon});
        relation["amenity"="driving_school"](around:${
          searchRadius * 1000
        },${lat},${lon});
      );
      out center;
    `;

    try {
      const response = await fetch(`https://overpass-api.de/api/interpreter`, {
        method: "POST",
        body: query,
      });
      const data = await response.json();

      const centers: TestCenter[] = data.elements.map((element: any) => ({
        name: element.tags.name || "Unnamed Driving School",
        lat: element.lat || element.center.lat,
        lon: element.lon || element.center.lon,
        distance: calculateDistance(
          lat,
          lon,
          element.lat || element.center.lat,
          element.lon || element.center.lon
        ),
      }));

      setTestCenters(centers.sort((a, b) => a.distance - b.distance));

      if (mapRef.current) {
        // Clear existing markers
        mapRef.current.eachLayer((layer) => {
          if (layer instanceof L.Marker) {
            mapRef.current?.removeLayer(layer);
          }
        });

        // Add user location marker
        L.marker([lat, lon])
          .addTo(mapRef.current)
          .bindPopup("Your Location")
          .openPopup();

        // Add test center markers
        centers.forEach((center) => {
          L.marker([center.lat, center.lon])
            .addTo(mapRef.current!)
            .bindPopup(center.name);
        });
      }
    } catch (error) {
      console.error("Error fetching nearby test centers:", error);
    }
  };

  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return Math.round(d * 100) / 100;
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRadius(parseInt(event.target.value, 10));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className=" mx-auto">
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
                value={searchRadius}
                onChange={handleRadiusChange}
              />
            </div>
            <Button onClick={searchNearbyTestCenters}>Search</Button>
          </div>
          <div
            id="map"
            className="w-full h-[400px] rounded-lg overflow-hidden"
          ></div>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Nearby Test Centers:</h3>
            <ul className="space-y-2">
              {testCenters.map((center, index) => (
                <li key={index} className="bg-white p-2 rounded shadow">
                  {center.name} - {center.distance} km away
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
