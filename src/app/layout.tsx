import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.callrabbitsfoot.com"),

  title: {
    default:
      "Rabbit's Foot Handyman Services | Handyman in Mishawaka, IN",
    template: "%s | Rabbit's Foot Handyman Services",
  },

  description:
    "Professional handyman services in Mishawaka, South Bend, Granger, Elkhart, and nearby Northern Indiana communities. Drywall repair, TV mounting, door repair, furniture assembly, fixture installation, and general home repairs. Request a free estimate today.",

  keywords: [
    "handyman Mishawaka",
    "handyman South Bend",
    "handyman near me",
    "handyman services",
    "home repair Mishawaka",
    "drywall repair Mishawaka",
    "TV mounting South Bend",
    "door repair",
    "furniture assembly",
    "Rabbit's Foot Handyman Services",
  ],

  authors: [
    {
      name: "Rabbit's Foot Handyman Services",
      url: "https://www.callrabbitsfoot.com",
    },
  ],

  creator: "Rabbit's Foot Handyman Services",
  publisher: "Rabbit's Foot Handyman Services",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.callrabbitsfoot.com",
    siteName: "Rabbit's Foot Handyman Services",
    title:
      "Rabbit's Foot Handyman Services | Handyman in Mishawaka, IN",
    description:
      "Professional handyman and home repair services in Mishawaka, South Bend, Granger, Elkhart, and nearby Northern Indiana communities.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rabbit's Foot Handyman Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Rabbit's Foot Handyman Services | Handyman in Mishawaka, IN",
    description:
      "Professional handyman and home repair services throughout Mishawaka, South Bend, Granger, Elkhart, and nearby communities.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="site-shell">
          <div className="site-watermark" aria-hidden="true" />

          <div className="site-content">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}