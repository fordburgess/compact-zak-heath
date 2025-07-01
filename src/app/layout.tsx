import type { Metadata } from "next";
import TransitionWrapper from "@/components/transition-wrapper";
import { Geist, Geist_Mono } from "next/font/google";
import DesktopNavbar from "@/components/desktop-navbar";
import MobileNavbar from "@/components/mobile-navbar";
import BackButton from "@/components/back-button";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "COMPACT",
  description: "By Zak Heath",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
  {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <DesktopNavbar />
        <MobileNavbar />
        <BackButton />
          {children}
        <Script
          async
          defer
          data-website-id='b586141a-e887-443e-ac9a-ed7a42668b58'
          src='https://cloud.umami.is/script.js'
        />
      </body>
    </html>
  );
}
