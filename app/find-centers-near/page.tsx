import dynamic from "next/dynamic";
import { useMemo } from "react";
import { LoaderCircle } from "lucide-react";

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
