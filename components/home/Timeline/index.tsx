import {
  Search,
  ClipboardList,
  FileText,
  Send,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function Component() {
  const processSteps = [
    {
      icon: <Search className="w-5 h-5 sm:w-5 sm:h-5" />,
      title: "Online Form - Click, Pray, and Submit",
      link: "https://applydl.dotm.gov.np/login",
      linkTitle: "Submit Online - If you are lucky",
      description:
        "Want to start driving legally? First, you’ll need to apply online, but don’t get too excited! Quotas are as tight as parking in Kathmandu, so cross your fingers. If things get tricky, consider hiring an agent—they might just be your new best friend.",
    },
    {
      icon: <ClipboardList className="w-5 h-5 sm:w-5 sm:h-5" />,
      title: "Document Submission - The Paper Parade",
      link: "https://www.likhitnepal.com/blind-test/",
      linkTitle: "Color Blind Test - 🤓",
      description:
        "Congrats, you made it through the online maze! Now, show up on your appointment day with all your paperwork. Prepare for a mini health check—yes, they’ll make sure you’re not colorblind. Oh, and don’t forget to pay the fee, or you’ll be driving… nothing.",
    },
    {
      icon: <FileText className="w-5 h-5 sm:w-5 sm:h-5" />,
      title: "Exam (Likhit) - The Quiz of Destiny",
      link: "https://www.likhitnepal.com/all-tests/",
      linkTitle: "Practice Online - Be a rambahadur",
      description:
        "Time to prove you know the rules of the road with 20 questions! Don’t worry, they’ll throw in some traffic signs for fun. Results? Insta-SMS, Facebook update, or check online—because who doesn’t love waiting for notifications?",
    },
    {
      icon: <Send className="w-5 h-5 sm:w-5 sm:h-5" />,
      title: "Trial - The Real Deal",
      link: "https://www.likhitnepal.com/written-result/",
      linkTitle: "Check Trial Status - Passed? Yay!",
      description:
        "Got this far? Impressive! Now, show the world (and the examiner) you can drive without flattening cones. Three strikes, and you’re out, but don’t worry, you’ve got 10 days between tries to recover from the trauma.",
    },
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-5 sm:h-5" />,
      title: "Payment & License - Almost There!",
      link: "https://dotm.gov.np/DrivingLicense/SearchLicense/",
      linkTitle: "Check License Status - If it's ready that is 😂",
      description:
        "Woohoo! You passed the trial? Celebrate by paying your final fee and get a slip that legally allows you to drive. Hold on to that slip like your life depends on it, because your fancy smart license might take a while to arrive. Oh, and you’ll need to text to see if it’s ready—Nepal Post style.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        License Application Process
      </h2>
      <div className="space-y-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="flex sm:flex-row flex-col items-center space-x-0 sm:space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            {/* Mobile: Icon on top, Desktop: Icon on left */}
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {step.icon}
              </div>
            </div>

            <div className="flex-grow text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                <span className="text-primary mr-2">{index + 1}.</span>
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {step.description}
              </p>

              <p className="mt-2">
                {step.link && (
                  <Link
                    target="_blank"
                    className="text-xs sm:text-sm text-blue-500 font-medium hover:underline underline-offset-4"
                    href={step.link}
                  >
                    {step.linkTitle}
                  </Link>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
