import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function Nav() {
  return (
    <div className=" flex items-center py-4 justify-center  bg-white">
      <div className="w-[90%] md:w-5/6 xl:w-4/6 flex items-center justify-between  ">
        <Link className="text-xl font-bold text-blue-600" href="/">
          Likhit.np
        </Link>
        <div className="flex flex-row items-center md:gap-4  gap-2">
          <Link
            className="text-sm hover:underline transition-all font-medium hidden sm:block"
            href="/"
          >
            Home
          </Link>

          <NavigationMenu className=" hidden sm:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link
                    className="text-sm font-medium hover:underline transition-all"
                    href="/"
                  >
                    Resources
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-56 border-green">
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="text-sm font-medium bg-blue-500 hover:bg-blue-600">
            Take a test
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
