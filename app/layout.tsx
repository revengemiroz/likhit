import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import Head from "next/head";

import { ConvexClientProvider } from "./ConvexClientProvider";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import "simplebar-react/dist/simplebar.min.css";
import Nav from "@/components/home/Nav";
import "leaflet/dist/leaflet.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Likhit Exam Nepal",
  description:
    "Rev up your journey in Nepal with our ultimate guide to getting your driving license! Whether you're hitting the scenic highways or navigating bustling city streets, we've got the tips and tricks to steer you through the process. Fast-track your way to freedom on four wheels—let's drive into the future together!",
  keywords:
    "Driving License Nepal, Nepal Driving License Process, How to Get Driving License in Nepal, Driving License Application Nepal, Nepal Driving Test, Online Driving License Application Nepal, Renew Driving License Nepal, Driving License Requirements Nepal, Driving License Fees Nepal, Best Tips for Driving Test Nepal, Nepal Transport Authority, Driving License Verification Nepal, Learner's License Nepal, International Driving License Nepal, Road Safety in Nepal",
  openGraph: {
    images:
      "https://utfs.io/f/Ug3TBysra1dXA9sImtE41SFw0mNZDItClxTshGraHEp72j4e",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased font-poppins`}
      >
        <ConvexClientProvider>
          <div className="min-h-screen w-full relative">
            <Nav />
            {children}
            <div
              className="fixed inset-0 z-[-1] bg-transparent h-screen w-screen" // bg-gradient-to-b from-muted to-background
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--muted)), hsl(var(--background)))",
              }}
            >
              <div
                className="w-full h-full" // bg-[length:50px_50px]
                style={{
                  backgroundSize: "50px 50px",
                  backgroundImage:
                    "linear-gradient(0deg, transparent 24%, hsl(var(--muted)/80%) 25%, hsl(var(--muted)/80%) 26%, transparent 27%, transparent 74%, hsl(var(--muted)/80%) 75%, hsl(var(--muted)/80%) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, hsl(var(--muted)/80%) 25%, hsl(var(--muted)/80%) 26%, transparent 27%, transparent 74%, hsl(var(--muted)/80%) 75%, hsl(var(--muted)/80%) 76%, transparent 77%, transparent)",
                }}
              />
            </div>
          </div>
          <Toaster />
        </ConvexClientProvider>
      </body>

      <>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}`}
        />

        <Script id="" strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}');
          `}
        </Script>
      </>
    </html>
  );
}
