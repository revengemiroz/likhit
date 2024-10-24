"use client";
import React from "react";
import { useRouter } from "next/navigation";
function Card({
  title,
  description,
  buttonText,
  push,
}: {
  title: string;
  description: string;
  buttonText: string;
  push: string;
}) {
  const router = useRouter();
  return (
    <div className="bg-white flex flex-col gap-2 p-4  items-start rounded-lg shadow-md">
      <p className="text-black text-base font-semibold">{title}</p>
      <p className="text-muted-foreground font-normal leading-4 text-left text-xs">
        {description}
      </p>
      <button
        onClick={() => {
          router.push(push);
        }}
        className="text-blue-500 capitalize font-medium mt-2 text-sm"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Card;
