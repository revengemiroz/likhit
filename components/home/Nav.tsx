"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Feedback from "@/components/home/Feedback";
import { useRouter } from "next/navigation";

function Nav() {
  const router = useRouter();

  return (
    <div className="bg-white w-full">
      <div className=" flex items-center justify-center  bg-white py-4   lg:container lg:mx-auto">
        <div className="w-[90%] md:w-5/6 xl:w-4/6 flex items-center justify-between  ">
          <Link className="text-lg sm:text-xl font-bold text-blue-600" href="/">
            Likhit.np
          </Link>
          <div className="flex flex-row items-center md:gap-2 gap-2">
            <Feedback />

            <NavigationMenu className="  z-[100] hidden sm:block">
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
                  <NavigationMenuContent className="min-w-max px-4 py-2 pb-3 flex flex-col gap-2">
                    <NavigationMenuLink className="m-0 p-0">
                      <Link
                        href="/blind-test"
                        className="text-xs font-medium hover:underline transition-all"
                      >
                        Color Blindness Test
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="m-0 p-0">
                      <Link
                        href="/find-centers-near"
                        className="text-xs font-medium hover:underline transition-all"
                      >
                        Find nearest driving exam center
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="m-0 p-0">
                      <Link
                        href="/blog"
                        className="text-xs font-medium hover:underline transition-all"
                      >
                        How it works ?
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="m-0 p-0">
                      <Link
                        href="/written-result"
                        className="text-xs font-medium hover:underline transition-all"
                      >
                        Check your Result
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              onClick={() => router.push("/all-tests")}
              className="text-sm font-medium bg-blue-500 hover:bg-blue-600"
            >
              Take a test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
