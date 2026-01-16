import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nomadas - Remote Workers Guide",
  description: "Find the best places for remote work. Discover countries, cities, and their economies.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
