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

export default function DrivingTestCentersLocator() {
  const mapRef = useRef<L.Map | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [selectedCite, setSelectedCite] = useState<CiteType | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const sidebarRef = useRef<{
    openSidebar: () => void;
    closeSidebar: () => void;
  }>();

  useEffect(() => {
    // Initialize the map and add markers
    if (mapRef.current === null) {
      mapRef.current = L.map("map").setView([27.7172, 85.324], 12); // Default to Kathmandu
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      // Add markers for all locations
      Object.values(centerLocations).forEach((cityCenters) => {
        cityCenters.forEach((location) => {
          const marker = L.marker(location.coordinates)
            .addTo(mapRef.current!)
            .bindPopup(location.name);
          markersRef.current.push(marker);
        });
      });

      // Get user location
      if (navigator.geolocation) {
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
          (error) => console.error("Error getting user location:", error)
        );
      }
    }

    return () => {
      // Clean up map when component unmounts
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Function to fly to the selected location
  const flyToLocation = (location: CiteType) => {
    setSelectedCite(location);
    if (mapRef.current) {
      mapRef.current.flyTo(location.coordinates, 13, { duration: 2 });
      const marker = markersRef.current.find((m) =>
        m.getLatLng().equals(L.latLng(location.coordinates))
      );
      if (marker) marker.openPopup();
    }
    sidebarRef.current?.openSidebar();
  };

  return (
    <div className="w-full justify-center items-center flex flex-col gap-6 py-12">
      <div className="w-full flex flex-col gap-6 justify-center items-center">
        <Image
          src="https://openfreemap.org/logo.jpg"
          alt="map"
          width={100}
          height={100}
          className="p-4 border shadow-md overflow-hidden"
        />
        <div className="w-full border shadow-md bg-white rounded-lg h-[20rem] md:max-h-[70rem] max-w-[20rem] md:max-w-3xl p-4">
          <div
            id="map"
            className="w-full h-full border shadow-md z-20 rounded-lg overflow-hidden"
          ></div>
        </div>
      </div>

      <div className="w-full h-full bg-white rounded-lg p-6 max-w-[20rem] md:max-w-3xl shadow-md border">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto">
          {Object.keys(centerLocations).map((city) => (
            <div className="flex flex-col gap-2" key={city}>
              <h3 className="font-semibold text-sm sm:text-xl">{city}</h3>
              <ul className="ktm hover:underline">
                {centerLocations[city].map((location) => (
                  <li
                    key={location.name}
                    className="cursor-pointer hover:opacity-70 text-sm"
                    onClick={() => flyToLocation(location)}
                  >
                    {location.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {selectedCite && (
        <ResponsiveSidebar ref={sidebarRef} location={selectedCite} />
      )}
    </div>
  );
}
