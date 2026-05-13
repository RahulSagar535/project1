import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Preloader } from "@/components/preloader";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cavalier | Luxury Hospitality & Retail Design",
    template: "%s | Cavalier",
  },
  description:
    "Cavalier creates luxury hospitality interiors, flagship retail environments, and Michelin-caliber restaurant spaces. Strategy-led design with global reach.",
  applicationName: "Cavalier",
  authors: [{ name: "Cavalier" }],
  keywords: [
    "Cavalier",
    "luxury hospitality design",
    "retail design studio",
    "flagship store design",
    "restaurant interior design",
    "Michelin restaurant design",
    "San Francisco design studio",
  ],
  metadataBase: new URL("https://Cavalierstudio.com"),
  openGraph: {
    title: "Cavalier | Luxury Hospitality & Retail Design",
    description:
      "Luxury hospitality interiors, flagship retail environments, and fine dining spaces designed to elevate brand experience and commercial performance.",
    url: "https://Cavalierstudio.com",
    siteName: "Cavalier",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cavalier | Luxury Hospitality & Retail Design",
    description:
      "Luxury hospitality interiors, flagship retail environments, and fine dining spaces designed by Cavalier.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interTight.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen antialiased">
        <Preloader />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
