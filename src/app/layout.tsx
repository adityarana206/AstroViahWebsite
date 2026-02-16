import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "AstroViah - AI-Powered Astrology, Tarot & Matchmaking",
    template: "%s | AstroViah",
  },
  description:
    "Discover your cosmic destiny with AstroViah. AI-powered astrology readings, tarot card insights, kundli matchmaking, daily horoscopes, birth chart analysis, and numerology.",
  keywords: [
    "astrology",
    "AI astrology",
    "tarot reading",
    "kundli matchmaking",
    "daily horoscope",
    "birth chart",
    "numerology",
    "zodiac signs",
    "vedic astrology",
    "horoscope today",
    "love compatibility",
    "astrology app",
  ],
  authors: [{ name: "AstroViah" }],
  creator: "AstroViah",
  publisher: "AstroViah",
  metadataBase: new URL("https://astroviah.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://astroviah.com",
    siteName: "AstroViah",
    title: "AstroViah - AI-Powered Astrology, Tarot & Matchmaking",
    description:
      "Unlock the secrets of the stars with AstroViah. Get personalized AI astrology readings, tarot insights, kundli matchmaking, and daily horoscopes.",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "AstroViah - AI Astrology Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AstroViah - AI-Powered Astrology, Tarot & Matchmaking",
    description:
      "Unlock the secrets of the stars with AstroViah. AI astrology readings, tarot insights, matchmaking & daily horoscopes.",
    images: ["/logo.png"],
    creator: "@astroviah",
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
  verification: {
    // Add your verification codes here when ready
    // google: "your-google-verification-code",
  },
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
        {children}
      </body>
    </html>
  );
}
