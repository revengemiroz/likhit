import dynamic from "next/dynamic";
import { useMemo } from "react";
import { LoaderCircle } from "lucide-react";
export default async function Page() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => (
          <div className="w-full h-screen flex mt-[20rem] justify-center">
            {" "}
            <LoaderCircle size={30} className="animate-spin" />
          </div>
        ),
        ssr: false,
      }),
    []
  );

  return (
    <>
      <div className="bg-white-700 mx-auto my-5 w-[98%] h-[480px]">
        <Map />
      </div>
    </>
  );
}
