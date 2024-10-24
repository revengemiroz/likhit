"use client";
import { forwardRef, useImperativeHandle } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ChevronDown, ChevronUp, Clock, ExternalLink } from "lucide-react";
import { CiteType } from "@/data/driving-centers-locations/locations";
import { useState, Dispatch, SetStateAction } from "react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import Image from "next/image";
import { Cross2Icon } from "@radix-ui/react-icons";

const SidebarContent = ({
  showAllHours,
  setShowAllHours,
  location,
}: {
  showAllHours: boolean;
  setShowAllHours: Dispatch<SetStateAction<boolean>>;
  location: CiteType;
}) => (
  <div className="h-full flex flex-col">
    <div className="min-h-32 flex px-7 items-center bg-blue-400">
      <h2 className="text-2xl font-bold text-white">{location.name}</h2>
    </div>

    <ScrollArea className="h-full flex flex-col">
      <div className="flex flex-col">
        <div className="flex flex-col px-6 py-2 mt-8 gap-2 ">
          <p className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            {location?.location}
          </p>
          <p className="flex items-center text-sm text-gray-600">
            <Phone className="w-4 h-4 mr-2" />
            {location?.number}
          </p>
          <a
            href={location.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-blue-600 hover:underline"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View on Google Maps
          </a>
        </div>
        <div className="flex flex-col px-6 py-2 gap-2">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Clock className="w-4 h-4 mr-2" /> Opening Hours
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            {location.openingHours
              .slice(0, showAllHours ? undefined : 3)
              .map((hours, index) => (
                <li key={index}>{hours}</li>
              ))}
          </ul>
          {location.openingHours.length > 3 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAllHours(!showAllHours)}
              className="mt-2 w-fit text-blue-600"
            >
              {showAllHours ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" /> Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" /> Show All Hours
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 p-6">
        <Image
          src={location.image}
          alt={`${location.name}`}
          width={500}
          height={300}
          loading="lazy"
          className="rounded-lg object-cover w-full h-48"
        />
      </div>

      <div className=" p-6">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-sm text-gray-600">{location.description}</p>
      </div>
    </ScrollArea>
  </div>
);

const ResponsiveSidebar = forwardRef(
  (
    {
      location,
    }: {
      location: CiteType;
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(true);
    const [showAllHours, setShowAllHours] = useState(false);
    const closeSidebar = () => {
      setIsOpen(false);
    };
    const openSidebar = () => {
      setIsOpen(true);
    };
    useImperativeHandle(ref, () => ({
      closeSidebar,
      openSidebar,
    }));
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className=" lg:w-[80rem]  p-0 z-[200]">
          <Cross2Icon
            onClick={closeSidebar}
            className="h-6 w-6 cursor-pointer text-white z-10 absolute right-3 top-[28px] "
          />
          <SidebarContent
            showAllHours={showAllHours}
            setShowAllHours={setShowAllHours}
            location={location}
          />
        </SheetContent>
      </Sheet>
    );
  }
);

export default ResponsiveSidebar;
