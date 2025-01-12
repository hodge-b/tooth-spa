import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Footer, Header } from "@/components";

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
  title: "Tooth Spa | Dental Hygiene",
  description:
    "We bring professional dental hygiene services to your location. Book now for convenient and expert care.",
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
      </body>
    </html>
  );
}
