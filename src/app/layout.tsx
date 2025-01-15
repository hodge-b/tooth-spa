import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Footer, Header } from "@/components";
import { Analytics } from "@vercel/analytics/next";

import headerResponse from "@/data/menus/headerResponse.json";
import homePageResponse from "@/data/pages/homePageResponse.json";
import footerResponse from "@/data/footer/footerResponse.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tooth Spa Dental Hygiene",
    template: "%s | Tooth Spa",
  },
  description:
    "We offer professional dental hygiene services at our location or we bring this experience directly to you. Book now for convenient and expert care.",
  keywords: [
    "dental",
    "hygiene",
    "spa",
    "teeth",
    "cleaning",
    "clean",
    "relaxed",
    "tranquil",
    "mobile",
  ],
  authors: {
    name: "Brad Hodge",
    url: "https://bradleyhodge.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: headerData } = headerResponse;
  const { data: homePageData } = homePageResponse;
  const { data: footerData } = footerResponse;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-gray-100 to-gray-200`}
      >
        <Header data={headerData} socialMedia={homePageData.socialMedia} />
        {children}
        <Toaster className="bg-white z-50" />
        <Footer data={footerData} menu={headerData.menu} />
        <Analytics />
      </body>
    </html>
  );
}
