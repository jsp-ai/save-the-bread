import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://savethebread.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Save The Bread | Smart Money for the Next Generation",
    template: "%s | Save The Bread",
  },
  description:
    "The Gen Z guide to making, saving, and growing money. Real stories from young creators, entrepreneurs, and hustlers. Real numbers. No cap.",
  keywords: [
    "Gen Z finance",
    "personal finance for young adults",
    "side hustle ideas",
    "budgeting for beginners",
    "investing 101",
    "creator economy",
    "financial literacy",
    "money tips",
    "save money",
    "young entrepreneurs",
  ],
  authors: [{ name: "Save The Bread", url: BASE_URL }],
  creator: "Save The Bread",
  publisher: "Save The Bread",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Save The Bread",
    title: "Save The Bread | Smart Money for the Next Generation",
    description:
      "The Gen Z guide to making, saving, and growing money. Real stories from young creators, entrepreneurs, and hustlers. Real numbers. No cap.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Save The Bread | Smart Money for the Next Generation",
    description:
      "The Gen Z guide to making, saving, and growing money. Real stories, real numbers.",
    creator: "@savethebread",
  },
  alternates: {
    canonical: BASE_URL,
    types: {
      "application/rss+xml": `${BASE_URL}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
