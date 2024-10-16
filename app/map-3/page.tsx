"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Location {
  name: string;
  latitude: number;
  longitude: number;
  zoom: number;
}

const locations: Location[] = [
  { name: "Kathmandu", latitude: 27.7172, longitude: 85.324, zoom: 13 },
  { name: "Lalitpur", latitude: 27.6588, longitude: 85.3247, zoom: 14 },
  { name: "Pokhara", latitude: 28.2096, longitude: 83.9856, zoom: 13 },
  { name: "Biratnagar", latitude: 26.4525, longitude: 87.2718, zoom: 14 },
];

export default function InteractiveNepalMap() {
  const [activeLocation, setActiveLocation] = useState<Location>(locations[0]);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const getMapUrl = (location: Location) => {
    const { latitude, longitude, zoom } = location;
    return `https://www.openstreetmap.org/export/embed.html?bbox=${
      longitude - 0.02
    },${latitude - 0.02},${longitude + 0.02},${
      latitude + 0.02
    }&layer=mapnik&marker=${latitude},${longitude}&zoom=${zoom}`;
  };

  const smoothTransition = (targetLocation: Location) => {
    if (iframeRef.current) {
      const currentZoom = activeLocation.zoom;
      const targetZoom = targetLocation.zoom;
      const steps = 30;
      let step = 0;

      const animate = () => {
        if (step < steps) {
          const progress = step / steps;
          const lat =
            activeLocation.latitude +
            (targetLocation.latitude - activeLocation.latitude) * progress;
          const lon =
            activeLocation.longitude +
            (targetLocation.longitude - activeLocation.longitude) * progress;
          const zoom = currentZoom + (targetZoom - currentZoom) * progress;

          iframeRef.current!.src = getMapUrl({
            ...targetLocation,
            latitude: lat,
            longitude: lon,
            zoom,
          });
          step++;
          requestAnimationFrame(animate);
        } else {
          setActiveLocation(targetLocation);
        }
      };

      animate();
    }
  };

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = getMapUrl(activeLocation);
    }
  }, []);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Interactive Nepal Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          {locations.map((location) => (
            <Button
              key={location.name}
              onClick={() => smoothTransition(location)}
              variant={
                activeLocation.name === location.name ? "default" : "outline"
              }
            >
              {location.name}
            </Button>
          ))}
        </div>
        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            ref={iframeRef}
            width="100%"
            height="100%"
            className="border-none"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}
