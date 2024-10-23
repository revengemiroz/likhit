import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin } from "lucide-react";

const cities = [
  {
    name: "Kathmandu",
    attractions: [
      "Swayambhunath Stupa",
      "Thamel",
      "Pashupatinath Temple",
      "Boudhanath Stupa",
      "Durbar Square",
    ],
  },
  {
    name: "Lalitpur",
    attractions: [
      "Patan Durbar Square",
      "Golden Temple",
      "Kumbheshwar Temple",
      "Mahabouddha Temple",
      "Rato Machhindranath Temple",
    ],
  },
  {
    name: "Pokhara",
    attractions: [
      "Phewa Lake",
      "World Peace Pagoda",
      "Sarangkot",
      "Davis Falls",
      "International Mountain Museum",
    ],
  },
  {
    name: "Biratnagar",
    attractions: [
      "Koshi Tappu Wildlife Reserve",
      "Biratnagar Jute Mills",
      "Dharan Clock Tower",
      "Budha Subba Temple",
      "Kali Mandir",
    ],
  },
];
const MapComponent = () => {
  const latitude = 27.7172; // Latitude for Kathmandu
  const longitude = 85.324; // Longitude for Kathmandu
  const zoomLevel = 13; // Adjust zoom level as needed

  return (
    <div className="w-full h-[600px] border-[1px] border-[#ccc]">
      <iframe
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${
          longitude - 0.01
        },${latitude - 0.01},${longitude + 0.01},${
          latitude + 0.01
        }&layer=mapnik&marker=${latitude},${longitude}`}
        width="100%"
        height="100%"
        className="border-none"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>

      <div className="w-full mt-20 ">
        <div className="grid grid-cols-4 container mx-auto ">
          <div>
            {" "}
            <h3 className="font-medium text-lg">Kathmandu</h3>
            <ul className="ktm">
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </div>
          <div>
            {" "}
            <h3 className="font-medium text-lg">Lalitpur</h3>
            <ul className="ktm">
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </div>
          <div>
            {" "}
            <h3 className="font-medium text-lg">Pokhara</h3>
            <ul className="ktm">
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </div>
          <div>
            {" "}
            <h3 className="font-medium text-lg">Biratnagar</h3>
            <ul className="ktm">
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
