import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DailyHoroscope from "@/components/DailyHoroscope";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ComingSoonApp from "@/components/ComingSoonApp";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AstroViah",
  url: "https://astroviah.com",
  description:
    "AI-powered astrology platform offering personalized horoscope readings, tarot card insights, kundli matchmaking, birth chart analysis, numerology, and daily zodiac updates.",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, Android, iOS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Free daily horoscope and astrology readings",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50000",
    bestRating: "5",
  },
  featureList: [
    "AI-Powered Astrology Readings",
    "Tarot Card Reading",
    "Kundli Matchmaking",
    "Daily Horoscope",
    "Birth Chart Analysis",
    "Numerology",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://astroviah.com",
    },
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AstroViah",
  url: "https://astroviah.com",
  logo: "https://astroviah.com/logo.png",
  sameAs: [
    "https://facebook.com/astroviah",
    "https://instagram.com/astroviah",
    "https://twitter.com/astroviah",
    "https://youtube.com/@astroviah",
  ],
  description:
    "AstroViah is an AI-powered astrology platform combining ancient Vedic wisdom with modern artificial intelligence for personalized cosmic guidance.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <DailyHoroscope />
          <HowItWorks />
          <Testimonials />
          <ComingSoonApp />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
}
