import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trettau Studio | Luxury Hospitality & Retail Design",
    template: "%s | Trettau Studio",
  },
  description:
    "Trettau Studio creates luxury hospitality interiors, flagship retail environments, and Michelin-caliber restaurant spaces. Strategy-led design with global reach.",
  applicationName: "Trettau Studio",
  authors: [{ name: "Trettau Studio" }],
  keywords: [
    "Trettau Studio",
    "luxury hospitality design",
    "retail design studio",
    "flagship store design",
    "restaurant interior design",
    "Michelin restaurant design",
    "San Francisco design studio",
  ],
  metadataBase: new URL("https://trettaustudio.com"),
  openGraph: {
    title: "Trettau Studio | Luxury Hospitality & Retail Design",
    description:
      "Luxury hospitality interiors, flagship retail environments, and fine dining spaces designed to elevate brand experience and commercial performance.",
    url: "https://trettaustudio.com",
    siteName: "Trettau Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trettau Studio | Luxury Hospitality & Retail Design",
    description:
      "Luxury hospitality interiors, flagship retail environments, and fine dining spaces designed by Trettau Studio.",
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
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
