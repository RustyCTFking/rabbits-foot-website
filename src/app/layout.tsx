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
  title: "Rabbit's Foot Handyman Services",
  description:
    "Dependable handyman services in Mishawaka, South Bend, Granger, Elkhart, and surrounding Northern Indiana communities.",
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