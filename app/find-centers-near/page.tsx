import dynamic from "next/dynamic";
import { useMemo } from "react";
import { LoaderCircle } from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Find Driving Test Centers Near You",
  description:
    "Discover nearby driving exam centers with ease. Use our tool to locate the nearest centers for your convenience. Get accurate directions and contact information instantly.",
  keywords:
    "Find Driving Test Centers Near Me, Nearby Driving Test Centers, Local Driving Test Centers, Driving Test Center Locator, Driving Test Centers Near Me, Directions to Driving Test Centers, Driving Test Center Contact Information",
  openGraph: {
    images:
      "https://utfs.io/f/Ug3TBysra1dXA9sImtE41SFw0mNZDItClxTshGraHEp72j4e", // Replace with a relevant image URL
  },
};
export default async function Page() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map/Map"), {
        loading: () => (
          <div className="w-full h-screen flex items-center justify-center">
            <LoaderCircle size={30} className="text-blue-500 animate-spin" />
          </div>
        ),
        ssr: false,
      }),
    []
  );

  return (
    <>
      <div className=" h-full">
        <Map />
      </div>
    </>
  );
}
