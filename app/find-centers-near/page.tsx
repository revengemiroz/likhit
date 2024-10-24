import dynamic from "next/dynamic";
import { useMemo } from "react";
import { LoaderCircle } from "lucide-react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Find Centers Near You",
  description:
    "Discover nearby centers with ease. Use our tool to locate the nearest centers for your needs, whether it's for health, education, or leisure. Get directions and contact information instantly.",
  keywords:
    "Find Centers Near Me, Nearby Centers, Local Centers, Center Locator, Health Centers Near Me, Education Centers Near Me, Leisure Centers Near Me, Directions to Centers, Center Contact Information",
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
