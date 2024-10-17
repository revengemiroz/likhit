"use client";
import { forwardRef, useImperativeHandle } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Image as IMAGE } from "lucide-react";
import { CiteType } from "@/data/centers/locations";
import { MenuIcon, Newspaper, BadgePlus, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import Image from "next/image";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Clock8 } from "lucide-react";
const menuItems = [
  { icon: Newspaper, label: "Blog", href: "/" },
  { icon: BadgePlus, label: "Create", href: "/create" },
];

const menuItemsOut = [
  { icon: LogIn, label: "Login", href: "/sign-in" },

  { icon: LogOut, label: "Register", href: "/sign-up" },
];
const SidebarContent = ({ location }: { location: CiteType }) => (
  <ScrollArea className="h-full">
    <div className="h-20 mb-10 flex px-10 items-center bg-blue-400">
      <h2 className="text-2xl text-white font-semibold ">{location.name}</h2>
    </div>

    <div className="flex flex-col gap-5 items-start px-6 text-[15px]">
      <div className="flex items-center gap-2">
        <MapPin className="text-white fill-blue-500" />
        <p className="font">{location.location}</p>
      </div>

      <div
        className="flex text-black gap-2"
        onClick={() => {
          navigator.clipboard.writeText(location.number);
        }}
      >
        <Phone className="text-white fill-blue-500" />
        {location.number}
      </div>
      <Link
        href={location.link}
        target="_blank"
        className="text-blue-400 flex gap-1 items-center"
      >
        {" "}
        Google Maps{" "}
      </Link>
      <hr className="bg-gray-500 h-[2.2px] w-full" />

      <div className="hours ">
        <h3 className="flex gap-1 mb-3 ">
          {" "}
          <Clock8 className="text-white fill-blue-500 w-5 h-5" /> Open Hours
        </h3>
        <table>
          {location.hours.map((time) => (
            <>
              <tr className="">
                <td>{`${time[0]}`}</td>
                <td className="pl-10">{`${time[1]}`}</td>
              </tr>
            </>
          ))}
        </table>
      </div>
      <hr className="bg-gray-500 h-[2.2px] w-full" />
      <p className="text-lg font-spaceGrotesk flex gap-1 items-center">
        {" "}
        <IMAGE className="text-white fill-blue-500" /> Images:{" "}
      </p>
      <Image
        alt="ekantakuna"
        src={"/images/Ekantakuna.png"}
        width={400}
        height={300}
      ></Image>
    </div>
  </ScrollArea>
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
      <div className={`absolute h-screen `}>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="left" className="w-[80rem]  p-0 z-[200]">
            {" "}
            <Cross2Icon
              onClick={closeSidebar}
              className="h-4 w-4 cursor-pointer  z-10 absolute right-3 top-3 "
            />
            <SidebarContent location={location} />
          </SheetContent>
        </Sheet>
      </div>
    );
  }
);

export default ResponsiveSidebar;
