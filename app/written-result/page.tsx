import Nav from "@/components/home/Nav";
import dynamic from "next/dynamic";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Written Result",
  description:
    "View your written test results. Offical result of written test released here. ",
  keywords:
    "Written Result, Test Results, Performance Analysis, Detailed Reports, Skill Improvement, Exam Results",
  openGraph: {
    images:
      "https://utfs.io/f/Ug3TBysra1dXA9sImtE41SFw0mNZDItClxTshGraHEp72j4e", // Using the same image URL
  },
};
const PdfRenderer = dynamic(() => import("@/components/home/PdfRender"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

// import PdfRenderer from "@/components/home/PdfRender";

// Sample data for demonstration
const examResults = [
  { id: 1, name: "John Doe", passed: true, date: "2023-10-15" },
  { id: 2, name: "Jane Smith", passed: false, date: "2023-10-15" },
  { id: 3, name: "Bob Johnson", passed: true, date: "2023-10-15" },
  { id: 4, name: "Alice Brown", passed: true, date: "2023-10-15" },
  { id: 5, name: "Charlie Davis", passed: false, date: "2023-10-15" },
];

export default function DrivingExamResults() {
  // const [searchQuery, setSearchQuery] = useState("");

  // const filteredResults = examResults.filter((result) =>
  //   result.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  // if (typeof Promise.withResolvers === "undefined") {
  //   if (typeof window !== "undefined") {
  //     // @ts-expect-error This does not exist outside of polyfill which this is doing
  //     window.Promise.withResolvers = function () {
  //       let resolve, reject;
  //       const promise = new Promise((res, rej) => {
  //         resolve = res;
  //         reject = rej;
  //       });
  //       return { promise, resolve, reject };
  //     };
  //   } else {
  //     // @ts-expect-error This does not exist outside of polyfill which this is doing
  //     global.Promise.withResolvers = function () {
  //       let resolve, reject;
  //       const promise = new Promise((res, rej) => {
  //         resolve = res;
  //         reject = rej;
  //       });
  //       return { promise, resolve, reject };
  //     };
  //   }
  // }

  return (
    <div className="min-h-screen flex flex-col ">
      <div className="flex flex-col flex-1 items-center  justify-center ">
        <div className="w-4/5 sm:w-3/5 py-12 flex flex-col items-center">
          <span className="text-2xl font-bold mb-6">Written Result</span>
          <PdfRenderer url="https://utfs.io/f/Ug3TBysra1dXFFFEzOuAZLuxpKXShfMY6GqCmHoy2VraUn8B" />
        </div>
      </div>
    </div>
  );
}
