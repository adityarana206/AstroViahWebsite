import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "AI Astrology - Personalized Vedic & Western Readings",
  description:
    "Get hyper-personalized astrology readings powered by AI. Combines Vedic and Western astrology for birth chart analysis, planetary transits, dasha predictions, and life guidance.",
  keywords: ["AI astrology", "vedic astrology", "western astrology", "personalized horoscope", "planetary transit", "dasha prediction"],
  alternates: { canonical: "/ai-astrology" },
  openGraph: {
    title: "AI Astrology - Personalized Vedic & Western Readings | AstroViah",
    description: "Hyper-personalized astrology readings powered by AI combining Vedic and Western systems.",
    url: "/ai-astrology",
  },
};

const capabilities = [
  {
    title: "Vedic Astrology (Jyotish)",
    description: "Traditional Indian astrology system using the sidereal zodiac. Includes Rashi chart, Navamsha, Dasha periods, and planetary yogas.",
    points: ["Rashi & Navamsha charts", "Vimshottari Dasha timeline", "Planetary Yogas & Doshas", "Gochar (transit) analysis"],
    icon: "\uD83C\uDF3A",
  },
  {
    title: "Western Astrology",
    description: "Tropical zodiac system with detailed house analysis, aspects, and psychological interpretation of planetary placements.",
    points: ["Tropical birth chart", "House system analysis", "Planetary aspects & orbs", "Psychological profiling"],
    icon: "\u2B50",
  },
  {
    title: "Transit Predictions",
    description: "Real-time analysis of current planetary positions and how they interact with your natal chart for accurate predictions.",
    points: ["Daily transit alerts", "Major transit windows", "Retrograde impact analysis", "Eclipse predictions"],
    icon: "\uD83C\uDF0D",
  },
  {
    title: "Life Event Timing",
    description: "AI predicts favorable periods for marriage, career changes, travel, investments, and major life decisions.",
    points: ["Marriage Muhurta", "Career opportunity windows", "Wealth periods", "Health advisory periods"],
    icon: "\u23F0",
  },
];

const aiAdvantages = [
  { title: "Processes 1000+ Data Points", description: "Our AI analyzes over 1000 astrological parameters simultaneously — impossible for a human astrologer in a single session.", icon: "\uD83D\uDCCA" },
  { title: "Cross-System Analysis", description: "Combines insights from Vedic, Western, and Chinese astrology systems for a holistic perspective.", icon: "\uD83C\uDF10" },
  { title: "Real-Time Transits", description: "Continuously updated predictions based on current planetary movements against your birth chart.", icon: "\u26A1" },
  { title: "Pattern Recognition", description: "AI identifies recurring patterns in your chart that reveal karmic cycles, strengths, and growth areas.", icon: "\uD83E\uDDE0" },
  { title: "Personalized Remedies", description: "Suggests gemstones, mantras, colors, and rituals based on your specific planetary weaknesses.", icon: "\uD83D\uDC8E" },
  { title: "Conversational Queries", description: "Ask any astrology question in plain language and get an AI response grounded in your birth chart.", icon: "\uD83D\uDCAC" },
];

const planets = [
  { name: "Sun", sanskrit: "Surya", governs: "Soul, vitality, father, authority", symbol: "\u2600\uFE0F" },
  { name: "Moon", sanskrit: "Chandra", governs: "Mind, emotions, mother, comfort", symbol: "\uD83C\uDF19" },
  { name: "Mars", sanskrit: "Mangal", governs: "Energy, courage, siblings, property", symbol: "\u2642\uFE0F" },
  { name: "Mercury", sanskrit: "Budh", governs: "Intelligence, speech, commerce, skills", symbol: "\u263F" },
  { name: "Jupiter", sanskrit: "Guru", governs: "Wisdom, fortune, children, spirituality", symbol: "\u2643" },
  { name: "Venus", sanskrit: "Shukra", governs: "Love, beauty, art, marriage, luxury", symbol: "\u2640" },
  { name: "Saturn", sanskrit: "Shani", governs: "Discipline, karma, longevity, hardship", symbol: "\u2644" },
  { name: "Rahu", sanskrit: "Rahu", governs: "Desire, obsession, foreign lands, illusion", symbol: "\uD83C\uDF11" },
  { name: "Ketu", sanskrit: "Ketu", governs: "Spirituality, detachment, past life karma", symbol: "\uD83C\uDF1F" },
];

export default function AIAstrologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "AI Astrology - AstroViah",
            description: "Hyper-personalized AI astrology readings combining Vedic and Western systems.",
            url: "https://astroviah.com/ai-astrology",
          }),
        }}
      />

      <PageHeader
        badge="&#10024; AI Astrology"
        title="The Future of"
        titleHighlight="Astrology Is AI"
        description="Experience astrology like never before. Our AI processes thousands of data points from your birth chart to deliver hyper-personalized readings combining Vedic and Western wisdom."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "AI Astrology" }]}
      />

      {/* Capabilities */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="capabilities">
        <div className="max-w-7xl mx-auto">
          <h2 id="capabilities" className="text-2xl font-bold text-center mb-10">What Our AI Astrologer Can Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <article key={cap.title} className="card-hover bg-white rounded-2xl p-6 border border-border/50 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl" aria-hidden="true">{cap.icon}</span>
                  <h3 className="text-xl font-semibold">{cap.title}</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AI Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle" aria-labelledby="why-ai">
        <div className="max-w-7xl mx-auto">
          <h2 id="why-ai" className="text-2xl font-bold text-center mb-2">Why AI Astrology?</h2>
          <p className="text-muted text-center mb-10 max-w-2xl mx-auto">
            Traditional astrologers are limited by time and cognitive capacity. Our AI has no such limits.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiAdvantages.map((adv) => (
              <div key={adv.title} className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm">
                <span className="text-3xl mb-3 block" aria-hidden="true">{adv.icon}</span>
                <h3 className="font-semibold mb-2">{adv.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navagraha */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="planets-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="planets-heading" className="text-2xl font-bold text-center mb-2">The Nine Planets (Navagraha)</h2>
          <p className="text-muted text-center mb-10">Every planet influences different areas of your life. Our AI tracks all nine.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {planets.map((planet) => (
              <div key={planet.name} className="card-hover bg-white rounded-xl p-4 border border-border/50 shadow-sm flex gap-4">
                <span className="text-2xl flex-shrink-0" aria-hidden="true">{planet.symbol}</span>
                <div>
                  <h3 className="font-semibold text-sm">{planet.name} <span className="text-muted font-normal">({planet.sanskrit})</span></h3>
                  <p className="text-xs text-muted mt-1">{planet.governs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your AI Astrology Reading</h2>
          <p className="text-muted text-lg mb-6">Enter your birth details and let our AI decode your cosmic blueprint in seconds.</p>
          <Link href="/pricing" className="gradient-bg text-white px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-xl shadow-purple-300/40 inline-block">
            Start AI Reading &#10024;
          </Link>
        </div>
      </section>
    </>
  );
}
