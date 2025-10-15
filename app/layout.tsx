import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "R3ACTR - Student initiative startup",
  description:
    "R3ACTR is a student-led startup focused on innovation and building next-generation software solutions.",
  generator: "Next.js",
  applicationName: "R3ACTR",
  keywords: [
    "student",
    "startup",
    "innovation",
    "technology",
    "software",
    "developer",
    "frontend",
    "react",
    "nextjs",
    "portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "R3ACTR - Student initiative startup",
    description:
      "R3ACTR is a student-led startup focused on innovation and building next-generation software solutions.",
    url: "https://www.r3actr.com/",
    siteName: "www.r3actr.com",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
        width: 1200,
        height: 630,
        alt: "R3ACTR - Student initiative startup",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "R3ACTR - Student initiative startup",
    description:
      "R3ACTR is a student-led startup focused on innovation and building next-generation software solutions.",
    creator: "r3actr",
    images: [
      "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
