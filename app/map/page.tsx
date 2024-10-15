import React from "react";

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
    </div>
  );
};

export default MapComponent;
