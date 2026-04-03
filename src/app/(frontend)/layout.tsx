import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Save The Bread | Smart Money for the Next Generation",
    template: "%s | Save The Bread",
  },
  description:
    "The Gen Z guide to making, saving, and growing money. Real stories from young creators, entrepreneurs, and hustlers. Real numbers. No cap.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Save The Bread",
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
