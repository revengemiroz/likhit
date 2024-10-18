"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import Nav from "@/components/home/Nav";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function UserFeedbackTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch feedback data from the API
  const getFeedback = useQuery(api.feedback.getFeedback);
  const deleteFeedback = useMutation(api.feedback.deleteFeedback);

  // Calculate the total pages based on the length of feedback data
  const totalPages = Math.ceil((getFeedback?.length ?? 0) / itemsPerPage);

  // Show loading state while fetching data
  if (!getFeedback) {
    return <div>Loading...</div>;
  }

  // Calculate the current page data to display
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return getFeedback.slice(startIndex, endIndex);
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen">
      <Nav />
      <div className="w-2/4 flex flex-col flex-1 mx-auto items-center justify-center">
        <Card className="w-full p-4 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Feedback
            </CardTitle>
          </CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead>Feedback Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {getCurrentPageData().map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {index + 1 + (currentPage - 1) * itemsPerPage}
                  </TableCell>
                  <TableCell>{item.message}</TableCell>
                  <TableCell>
                    {new Date(item.timeStamp).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <span
                      onClick={() => deleteFeedback({ id: item._id })}
                      className={`px-2 cursor-pointer py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800`}
                    >
                      Delete
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-500">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, getFeedback.length)} of{" "}
              {getFeedback.length} entries
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                variant="outline"
              >
                Previous
              </Button>
              <Button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                variant="outline"
              >
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
