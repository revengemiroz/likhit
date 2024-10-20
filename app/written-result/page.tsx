"use client";

import { useState } from "react";

import Nav from "@/components/home/Nav";
const PdfRenderer = dynamic(() => import("@/components/home/PdfRender"), {
  loading: () => <p>Loading...</p>,
});

// import PdfRenderer from "@/components/home/PdfRender";
import dynamic from "next/dynamic";

// Sample data for demonstration
const examResults = [
  { id: 1, name: "John Doe", passed: true, date: "2023-10-15" },
  { id: 2, name: "Jane Smith", passed: false, date: "2023-10-15" },
  { id: 3, name: "Bob Johnson", passed: true, date: "2023-10-15" },
  { id: 4, name: "Alice Brown", passed: true, date: "2023-10-15" },
  { id: 5, name: "Charlie Davis", passed: false, date: "2023-10-15" },
];

export default function DrivingExamResults() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResults = examResults.filter((result) =>
    result.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col ">
      <Nav />
      <div className="flex flex-col flex-1 items-center  justify-center ">
        <div className="w-3/5 py-12 flex flex-col items-center">
          <span className="text-2xl font-bold mb-6">Written Result</span>
          {/* <PdfRenderer url="https://utfs.io/f/Ug3TBysra1dXFFFEzOuAZLuxpKXShfMY6GqCmHoy2VraUn8B" /> */}
        </div>
      </div>
    </div>
  );
}
