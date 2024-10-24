"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import L from "leaflet";

import ResponsiveSidebar from "./SideBar";

import {
  centerLocations,
  CiteType,
} from "@/data/driving-centers-locations/locations";

import "leaflet/dist/leaflet.css";

// Fixing Leaflet's default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker1.png",
  iconUrl: "/images/marker1.png",
  shadowUrl: "/leaflet/images/marker-shadow.png",
});

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
  const [activeLocation, setActiveLocation] = useState<string>(
    locations[0].name
  );

  const markersRef = useRef<L.Marker[]>([]);
  useEffect(() => {
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

  const sidebarRef = useRef<{
    openSidebar: () => void;
    closeSidebar: () => void;
  }>();
  const [selectedCite, setSelectedCite] = useState<CiteType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const flyToLocation = (location: CiteType) => {
    setSelectedCite(location);
    if (mapRef.current) {
      mapRef.current.flyTo(location.coordinates, 13, {
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
    <div className="w-full   justify-center items-center flex flex-col gap-6 py-12 ">
      <div className="w-full  flex flex-col gap-6 justify-center items-center">
        <Image
          src="https://openfreemap.org/logo.jpg"
          alt="map"
          width={100}
          height={100}
          className=" P-4 border shadow-md overflow-hidden"
        />
        <div className="w-full border shadow-md bg-white rounded-lg h-[20rem] md:max-h-[70rem] max-w-[20rem] md:max-w-3xl p-4">
          <div
            id="map"
            className="w-full h-full border shadow-md z-20 rounded-lg overflow-hidden"
          ></div>
        </div>
      </div>

      <div className="w-full h-full  bg-white rounded-lg p-6 max-w-[20rem] md:max-w-3xl shadow-md border">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto">
          {Object.keys(centerLocations).map((city) => {
            return (
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-sm  sm:text-xl">{city}</h3>
                <ul className="ktm hover:underline">
                  {centerLocations[city].map((obj) => (
                    <li
                      className="cursor-pointer hover:opacity-70 text-sm"
                      onClick={() => {
                        sidebarRef.current?.openSidebar();
                        flyToLocation(obj);
                        setIsOpen(true);
                      }}
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
      {selectedCite && (
        <ResponsiveSidebar ref={sidebarRef} location={selectedCite} />
      )}
    </div>
  );
}
