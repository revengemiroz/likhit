"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Nav from "@/components/home/Nav";

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
      <div className="flex flex-col flex-1 items-center justify-center ">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Driving Exam Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Result</TableHead>
                  <TableHead>Date Published</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredResults.map((result) => (
                  <TableRow key={result.id}>
                    <TableCell>{result.name}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          result.passed
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {result.passed ? "Passed" : "Failed"}
                      </span>
                    </TableCell>
                    <TableCell>{result.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {filteredResults.length === 0 && (
              <p className="text-center text-gray-500 mt-4">
                No results found.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
