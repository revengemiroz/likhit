"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Car, Book, CheckCircle, ChevronRight, Eye } from "lucide-react";
import Nav from "@/components/home/Nav";
import { useRouter } from "next/navigation";

import Timeline from "@/components/home/Timeline";

export default function Component() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen bg-transparent dark:bg-gray-900">
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-6">
        <section className="py-12 md:py-20 flex flex-col items-center text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3c24Ae3dKwxVOIEM2KzvfcBMQKJ3hm.png"
            alt="Nepal Driving Test Logo"
            width={250}
            height={250}
            className="mb-8"
          />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Master Your Nepal Driving Test
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            Practice, learn, and succeed with our comprehensive mock exams.
          </p>
          <Button
            size="lg"
            onClick={() => router.push("/all-tests")}
            className="text-sm font-medium bg-blue-500 hover:bg-blue-600"
          >
            Start Free Mock Test
          </Button>
        </section>

        <section className="py-12 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why Choose Us?
          </h2>

          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <div className="flex flex-col items-center p-8 rounded-xl text-center">
              <Book className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-lg font-semibold mb-1">Practice Questions</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cover all aspects of the test syllabus. Take the test in English
                or Nepali.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 shadow-md rounded-xl text-center">
              <CheckCircle className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-lg font-semibold mb-1">See Results</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Want to see the license results? You can see the latest results
                here.
              </p>
            </div>

            <div className="flex flex-col items-center p-8 rounded-xl text-center">
              <Eye className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-lg font-semibold mb-1">Take Eye Test</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Find out if you have good eyesight for driving.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 shadow-md rounded-xl text-center">
              <Car className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-lg font-semibold mb-1">
                Tips Nepal-specific
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get tips on how to pass the test and what to expect.
              </p>
            </div>

            <div className="flex flex-col items-center p-8 rounded-xl text-center">
              <Car className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-lg font-semibold mb-1">TAX Information</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Find out about the tax for your vehicle. Don’t miss out on the
                latest updates.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 shadow-md rounded-xl text-center">
              <Car className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-lg font-semibold mb-1">
                Helpful Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Useful details for aspiring drivers, including vehicle tax.
              </p>
            </div>

            <div className="flex flex-col items-center transition-all duration-300 cursor-pointer ease-in-out p-8 col-span-full hover:bg-white hover:shadow-md rounded-xl text-center">
              <Car className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-lg font-semibold mb-1">Study Materials</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                View study materials to help you prepare for the test.
              </p>
            </div>
          </div>
        </section>

        <Timeline />

        <section className="py-12">
          <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How many questions are in the mock test?
              </AccordionTrigger>
              <AccordionContent>
                Our mock tests contain 50 questions, mirroring the actual Nepali
                driving theory test.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is this mock test free?</AccordionTrigger>
              <AccordionContent>
                Yes, our basic mock tests are completely free. Premium tests
                with additional features are available for a small fee.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How often are the questions updated?
              </AccordionTrigger>
              <AccordionContent>
                We regularly update our question bank to align with the latest
                Nepali traffic rules and regulations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I take the test on my mobile phone?
              </AccordionTrigger>
              <AccordionContent>
                Yes, our website is fully responsive and can be accessed on
                smartphones, tablets, and desktop computers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="py-12 text-center bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Begin your journey towards your Nepali driving license today.
          </p>
          <Button
            size="lg"
            onClick={() => router.push("/all-tests")}
            className="text-sm font-medium bg-blue-500 hover:bg-blue-600"
          >
            Start Free Mock Test
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </main>

      <footer className="w-full max-w-4xl mx-auto px-4 py-8 mt-12 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
          © 2024 Nepal Driving Mock Test. All rights reserved.
        </p>
        <nav className="flex justify-center gap-4 mb-4">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <p>Contact us: info@likhitnepal.com</p>
          <p>Phone: +1 4375334199</p>
        </div>
      </footer>
    </div>
  );
}
