import type { Metadata } from "next";
import TransitionWrapper from "@/components/transition-wrapper";
import { Geist, Geist_Mono } from "next/font/google";
import DesktopNavbar from "@/components/desktop-navbar";
import MobileNavbar from "@/components/mobile-navbar";
import BackButton from "@/components/back-button";
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
        <DesktopNavbar />
        <MobileNavbar />
        <BackButton />
        {/* <TransitionWrapper> */}
          {children}
        {/* </TransitionWrapper> */}
      </body>
    </html>
  );
}
