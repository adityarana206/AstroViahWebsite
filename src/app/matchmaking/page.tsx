import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Kundli Matchmaking - AI-Powered Compatibility Analysis",
  description:
    "Find your perfect cosmic match with AI-powered kundli matchmaking. Gun milan, mangal dosha check, nakshatra compatibility, and detailed relationship analysis.",
  keywords: ["kundli matchmaking", "gun milan", "marriage compatibility", "kundli match", "mangal dosha", "horoscope matching"],
  alternates: { canonical: "/matchmaking" },
  openGraph: {
    title: "Kundli Matchmaking - AI-Powered Compatibility | AstroViah",
    description: "Find your perfect cosmic match with AI-powered kundli matchmaking and gun milan analysis.",
    url: "/matchmaking",
  },
};

const gunMilan = [
  { gun: "Varna", points: 1, description: "Spiritual compatibility and ego levels between partners" },
  { gun: "Vashya", points: 2, description: "Mutual attraction, dominance, and control in the relationship" },
  { gun: "Tara", points: 3, description: "Birth star compatibility and overall destiny alignment" },
  { gun: "Yoni", points: 4, description: "Physical and intimate compatibility between partners" },
  { gun: "Graha Maitri", points: 5, description: "Mental compatibility based on Moon sign lords" },
  { gun: "Gana", points: 6, description: "Temperament matching — Deva, Manushya, or Rakshasa" },
  { gun: "Bhakut", points: 7, description: "Emotional connection, family welfare, and financial prosperity" },
  { gun: "Nadi", points: 8, description: "Health compatibility and genetic factors for future children" },
];

const features = [
  { title: "Ashtakoot Gun Milan", description: "Complete 36-point gun matching system analyzing 8 key aspects of compatibility.", icon: "\uD83D\uDCCA" },
  { title: "Mangal Dosha Check", description: "Detect Mars dosha in both charts with severity analysis and remedies.", icon: "\u2642\uFE0F" },
  { title: "Nakshatra Analysis", description: "Deep nakshatra-level compatibility check beyond basic sun/moon sign matching.", icon: "\u2B50" },
  { title: "AI Recommendations", description: "Get AI-generated relationship advice, remedies for doshas, and compatibility insights.", icon: "\uD83E\uDD16" },
  { title: "Detailed Report", description: "Download a comprehensive PDF report with charts, scores, and personalized analysis.", icon: "\uD83D\uDCC4" },
  { title: "Dosha Remedies", description: "Receive specific Vedic remedies for any compatibility issues found in your match.", icon: "\uD83D\uDE4F" },
];

const compatibilityLevels = [
  { range: "0-17", label: "Not Recommended", color: "bg-red-100 text-red-700", description: "Significant challenges — seek detailed consultation." },
  { range: "18-24", label: "Average Match", color: "bg-amber-100 text-amber-700", description: "Workable with effort — check individual doshas carefully." },
  { range: "25-32", label: "Good Match", color: "bg-green-100 text-green-700", description: "Strong compatibility — most areas are well aligned." },
  { range: "33-36", label: "Excellent Match", color: "bg-emerald-100 text-emerald-700", description: "Exceptional cosmic alignment — highly favorable union." },
];

export default function MatchmakingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Kundli Matchmaking - AstroViah",
            description: "AI-powered kundli matchmaking with gun milan analysis.",
            url: "https://astroviah.com/matchmaking",
          }),
        }}
      />

      <PageHeader
        badge="&#10084;&#65039; Matchmaking"
        title="AI-Powered Kundli"
        titleHighlight="Matchmaking"
        description="Find your perfect cosmic match using the ancient Ashtakoot system powered by modern AI. Comprehensive compatibility analysis for a harmonious partnership."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Kundli Matchmaking" }]}
      />

      {/* Gun Milan Breakdown */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="gun-milan-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="gun-milan-heading" className="text-2xl font-bold text-center mb-2">Ashtakoot Gun Milan — 36-Point System</h2>
          <p className="text-muted text-center mb-10 max-w-2xl mx-auto">
            The Ashtakoot system evaluates 8 fundamental aspects (Gunas) of compatibility, totaling 36 points.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gunMilan.map((gun) => (
              <article key={gun.gun} className="card-hover bg-white rounded-2xl p-5 border border-border/50 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">{gun.gun}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-purple-100 text-primary font-bold">
                    {gun.points} pts
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{gun.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility Score Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle" aria-labelledby="score-guide">
        <div className="max-w-4xl mx-auto">
          <h2 id="score-guide" className="text-2xl font-bold text-center mb-8">Understanding Your Score</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {compatibilityLevels.map((level) => (
              <div key={level.range} className="bg-white rounded-2xl p-5 border border-border/50 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs px-3 py-1 rounded-full font-bold ${level.color}`}>{level.range} points</span>
                  <h3 className="font-semibold">{level.label}</h3>
                </div>
                <p className="text-sm text-muted">{level.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="match-features">
        <div className="max-w-7xl mx-auto">
          <h2 id="match-features" className="text-2xl font-bold text-center mb-2">What You Get</h2>
          <p className="text-muted text-center mb-10">A complete matchmaking analysis covering every aspect of your compatibility.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-hover bg-white rounded-2xl p-6 border border-border/50 shadow-sm">
                <span className="text-3xl mb-3 block" aria-hidden="true">{feature.icon}</span>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Check Your Compatibility Now</h2>
          <p className="text-muted text-lg mb-6">Enter both birth details and get an instant AI-powered kundli matching report.</p>
          <Link href="/pricing" className="gradient-bg text-white px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-xl shadow-purple-300/40 inline-block">
            Match Your Kundli &#10084;&#65039;
          </Link>
        </div>
      </section>
    </>
  );
}
