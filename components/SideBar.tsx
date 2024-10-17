"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiteType } from "@/data/centers/locations";
import { MenuIcon, Newspaper, BadgePlus, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MapPin } from "lucide-react";
const menuItems = [
  { icon: Newspaper, label: "Blog", href: "/" },
  { icon: BadgePlus, label: "Create", href: "/create" },
];

const menuItemsOut = [
  { icon: LogIn, label: "Login", href: "/sign-in" },

  { icon: LogOut, label: "Register", href: "/sign-up" },
];
const SidebarContent = ({ location }: { location: CiteType }) => (
  <ScrollArea className="h-full py-6 pl-6 pr-6 lg:pr-0">
    <h2 className="mb-4 text-lg font-semibold">{location.name}</h2>
    <Link
      href={location.link}
      target="_blank"
      className="text-blue-400 flex gap-1 items-center"
    >
      {" "}
      <MapPin /> Google Maps{" "}
    </Link>
  </ScrollArea>
);
export default function ResponsiveSidebar({
  location,
}: {
  location: CiteType;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <div className={`absolute h-screen   `}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {/* <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed left-4 top-5 z-40 lg:hidden"
          >
            <MenuIcon className="h-4 w-4" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger> */}
        <SheetContent side="left" className="w-[60rem] p-0 z-[200]">
          <SidebarContent location={location} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
