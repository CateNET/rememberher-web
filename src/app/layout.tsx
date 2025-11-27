/**
 * Copyright (c) 2024 RememberHer. All rights reserved.
 * Proprietary code - unauthorized use prohibited.
 * 
 * @see LICENSE for full license terms.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rememberher.app"),
  title: {
    default: "RememberHer – Never forget the moments that matter",
    template: "%s | RememberHer",
  },
  applicationName: "RememberHer",
  description:
    "RememberHer is the AI relationship assistant with LoveAI chat, image analysis, and smart reminders. Never forget anniversaries, gift ideas, or partner preferences—show up with confidence.",
  alternates: {
    canonical: "https://rememberher.app",
  },
  keywords: [
    "RememberHer",
    "LoveAI Assistant",
    "AI relationship assistant",
    "relationship reminders",
    "AI gift ideas",
    "anniversary tracker",
    "partner app",
    "date ideas",
    "image analysis",
    "relationship advice",
  ],
  authors: [{ name: "RememberHer" }],
  category: "lifestyle",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "RememberHer – Never forget the moments that matter",
    description:
      "RememberHer with LoveAI Assistant: chat, image analysis, smart reminders, gift inspiration, and partner insights so you never miss a meaningful moment again.",
    url: "https://rememberher.app",
    siteName: "RememberHer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RememberHer marketing preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RememberHer – Never forget the moments that matter",
    description:
      "RememberHer with LoveAI Assistant: chat, image analysis, smart reminders, gift inspiration, and partner insights so you never miss a meaningful moment again.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#050814] text-white">
          <Header />
          {children}
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
