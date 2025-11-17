import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "RememberHer is the AI relationship assistant that remembers anniversaries, gift ideas, and partner preferences so you can show up with confidence.",
  alternates: {
    canonical: "https://rememberher.app",
  },
  keywords: [
    "RememberHer",
    "relationship reminders",
    "AI gift ideas",
    "anniversary tracker",
    "partner app",
    "date ideas",
  ],
  authors: [{ name: "RememberHer" }],
  category: "lifestyle",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "RememberHer – Never forget the moments that matter",
    description:
      "RememberHer blends AI reminders, gift inspiration, and partner insights so you never miss a meaningful moment again.",
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
      "RememberHer blends AI reminders, gift inspiration, and partner insights so you never miss a meaningful moment again.",
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
        <div className="bg-[#0a0d1a] text-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
