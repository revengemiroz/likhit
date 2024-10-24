import { Metadata } from "next";
import ResultScreen from "./Screen";
export const metadata: Metadata = {
  title: "Test Result",
  description:
    "View your test results and analyze your performance. See your score, review your answers, and find out how you can improve.",
  keywords:
    "Test Result, Performance Analysis, Score Review, Answer Review, Improve Test Performance",
  openGraph: {
    images:
      "https://utfs.io/f/Ug3TBysra1dXA9sImtE41SFw0mNZDItClxTshGraHEp72j4e", // Using the same image URL
  },
};

function Page() {
  return <ResultScreen />;
}

export default Page;
