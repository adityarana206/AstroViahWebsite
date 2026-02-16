import Link from "next/link";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import ComingSoonApp from "@/components/ComingSoonApp";
import CallToAction from "@/components/CallToAction";

const features = [
  {
    icon: "\u2728",
    title: "AI Astrology",
    description: "Hyper-personalized astrology readings powered by advanced AI and Vedic wisdom.",
    href: "/ai-astrology",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: "\uD83C\uDCCF",
    title: "Tarot Reading",
    description: "Draw virtual tarot cards and receive AI-interpreted insights for life guidance.",
    href: "/tarot",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "\u2764\uFE0F",
    title: "Kundli Matchmaking",
    description: "AI-powered kundli compatibility analysis with gun milan and dosha checks.",
    href: "/matchmaking",
    gradient: "from-pink-500 to-rose-400",
  },
  {
    icon: "\uD83C\uDF1E",
    title: "Daily Horoscope",
    description: "Personalized daily predictions for love, career, health, and finances.",
    href: "/horoscope",
    gradient: "from-amber-400 to-orange-400",
  },
  {
    icon: "\uD83D\uDDFA\uFE0F",
    title: "Birth Chart Analysis",
    description: "Detailed natal chart with AI interpretation of planetary positions.",
    href: "/birth-chart",
    gradient: "from-blue-400 to-violet-500",
  },
  {
    icon: "\uD83D\uDD22",
    title: "Numerology",
    description: "Unlock hidden meanings of numbers — life path, destiny, and forecasts.",
    href: "/numerology",
    gradient: "from-teal-400 to-cyan-400",
  },
];

const howItWorks = [
  { step: "01", title: "Create Your Profile", description: "Enter your birth date, time, and location.", icon: "\uD83D\uDC64" },
  { step: "02", title: "Get AI Analysis", description: "AI analyzes planetary positions and cosmic patterns.", icon: "\uD83E\uDD16" },
  { step: "03", title: "Receive Insights", description: "Get personalized daily readings and predictions.", icon: "\uD83D\uDCA1" },
  { step: "04", title: "Track & Grow", description: "Follow your cosmic journey with daily updates.", icon: "\uD83C\uDF1F" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AstroViah",
  url: "https://astroviah.com",
  description: "AI-powered astrology platform offering personalized horoscope readings, tarot card insights, kundli matchmaking, birth chart analysis, numerology, and daily zodiac updates.",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web, Android, iOS",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "50000", bestRating: "5" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AstroViah",
  url: "https://astroviah.com",
  logo: "https://astroviah.com/logo.png",
  sameAs: ["https://facebook.com/astroviah", "https://instagram.com/astroviah", "https://twitter.com/astroviah"],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      <Hero />

      {/* Features Overview */}
      <section id="features" aria-labelledby="features-heading" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-primary text-sm font-medium mb-4">
              &#10024; Our Features
            </span>
            <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need From The <span className="gradient-text">Stars</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              AstroViah combines ancient Vedic wisdom with modern AI to bring you the most accurate and personalized astrology experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link key={feature.title} href={feature.href} className="card-hover bg-white rounded-2xl p-6 border border-border/50 shadow-sm block group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-4 shadow-lg`} aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title} <span className="text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </h3>
                <p className="text-muted leading-relaxed text-sm">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" aria-labelledby="how-heading" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-primary text-sm font-medium mb-4">&#128640; How It Works</span>
            <h2 id="how-heading" className="text-3xl sm:text-4xl font-bold mb-4">
              Your Cosmic Journey in <span className="gradient-text">4 Steps</span>
            </h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none p-0">
            {howItWorks.map((item, index) => (
              <li key={item.step} className="relative text-center">
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-border" aria-hidden="true" />
                )}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 to-pink-50 flex items-center justify-center mx-auto mb-4 shadow-md" aria-hidden="true">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {item.step}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Testimonials />
      <ComingSoonApp />
      <CallToAction />
    </>
  );
}
