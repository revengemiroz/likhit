"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { centerLocations } from "@/data/centers/locations";

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

interface Location {
  name: string;
  coordinates: [number, number];
  zoom: number;
}

const locations: Location[] = [
  { name: "Kathmandu", coordinates: [27.7172, 85.324], zoom: 12 },
  {
    name: "Ekantkuna",
    coordinates: [27.665311212571552, 85.31123496596034],
    zoom: 12,
  },
  { name: "Lalitpur", coordinates: [27.6588, 85.3247], zoom: 13 },
  { name: "Pokhara", coordinates: [28.2096, 83.9856], zoom: 12 },
  { name: "Biratnagar", coordinates: [26.4525, 87.2718], zoom: 13 },
];

export default function DrivingTestCentersLocator() {
  const mapRef = useRef<L.Map | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [searchRadius, setSearchRadius] = useState<number>(5); // 5km default
  const [testCenters, setTestCenters] = useState<TestCenter[]>([]);
  const [activeLocation, setActiveLocation] = useState<string>(
    locations[0].name
  );
  const markersRef = useRef<L.Marker[]>([]);
  useEffect(() => {
    // console.log(window, typeof window);
    if (typeof window !== undefined) {
      mapRef.current = L.map("map").setView([51.505, -0.09], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
      // Add markers for all locations
      locations.forEach((location) => {
        const marker = L.marker(location.coordinates)
          .addTo(mapRef.current!)
          .bindPopup(location.name);
        markersRef.current.push(marker);
      });

      getUserLocation();
    }
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
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

  const flyToLocation = (location: Location) => {
    if (mapRef.current) {
      mapRef.current.flyTo(location.coordinates, location.zoom, {
        duration: 2, // Duration of animation in seconds
      });
      setActiveLocation(location.name);

      // Find and open the popup for the selected location
      const marker = markersRef.current.find((m) =>
        m.getLatLng().equals(L.latLng(location.coordinates))
      );
      if (marker) {
        marker.openPopup();
      }
    }
  };

  return (
    <>
      <div
        id="map"
        className="w-full mt-10  h-[600px] rounded-lg overflow-hidden"
      ></div>

      <div className="w-full mt-20 ">
        <div className="grid grid-cols-4 container mx-auto ">
          {Object.keys(centerLocations).map((city) => {
            return (
              <div>
                <h3 className="font-medium text-lg">{city}</h3>
                <ul className="ktm">
                  {centerLocations[city].map((obj) => (
                    <li
                      onClick={() =>
                        flyToLocation({
                          name: obj.name,
                          coordinates: obj.coordinates,
                          zoom: 13,
                        })
                      }
                    >
                      {obj.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
