import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Birth Chart Analysis - AI Natal Chart Interpretation",
  description:
    "Generate your detailed birth chart (Kundli) with AI-powered interpretation. Discover your ascendant, moon sign, planetary positions, house placements, and life predictions.",
  keywords: ["birth chart", "natal chart", "kundli", "ascendant", "moon sign", "planetary positions", "janam kundli"],
  alternates: { canonical: "/birth-chart" },
  openGraph: {
    title: "Birth Chart Analysis - AI Natal Chart Interpretation | AstroViah",
    description: "Generate your detailed birth chart with AI-powered interpretation of planetary positions.",
    url: "/birth-chart",
  },
};

const chartSections = [
  {
    title: "Ascendant (Lagna)",
    description: "Your rising sign at the time of birth defines your outer personality, physical appearance, and how others perceive you. It sets the framework for all house placements.",
    icon: "\uD83C\uDF05",
  },
  {
    title: "Sun Sign",
    description: "Your core identity, ego, and life purpose. The sun represents your conscious self, vitality, and the qualities you express most naturally.",
    icon: "\u2600\uFE0F",
  },
  {
    title: "Moon Sign",
    description: "Your emotional nature, instincts, and subconscious patterns. In Vedic astrology, the moon sign is considered even more important than the sun sign.",
    icon: "\uD83C\uDF19",
  },
  {
    title: "Planetary Positions",
    description: "The exact placement of all 9 planets across the 12 houses at your birth moment. Each placement reveals specific life themes and tendencies.",
    icon: "\uD83C\uDF0D",
  },
  {
    title: "House Analysis",
    description: "All 12 houses represent different life areas — self, wealth, siblings, home, children, enemies, marriage, longevity, fortune, career, gains, and losses.",
    icon: "\uD83C\uDFE0",
  },
  {
    title: "Planetary Aspects",
    description: "How planets influence each other through angular relationships. Conjunctions, oppositions, trines, and squares create the nuanced story of your chart.",
    icon: "\uD83D\uDD17",
  },
];

const houses = [
  { number: 1, name: "Self & Personality", description: "Physical body, appearance, temperament, and overall life path" },
  { number: 2, name: "Wealth & Family", description: "Money, possessions, family values, speech, and food habits" },
  { number: 3, name: "Courage & Siblings", description: "Communication, short travel, siblings, and self-effort" },
  { number: 4, name: "Home & Mother", description: "Property, vehicles, mother, domestic happiness, and education" },
  { number: 5, name: "Children & Creativity", description: "Intelligence, romance, children, speculation, and past life merit" },
  { number: 6, name: "Health & Enemies", description: "Diseases, debts, enemies, service, and daily routine" },
  { number: 7, name: "Marriage & Partnership", description: "Spouse, business partners, public dealing, and foreign travel" },
  { number: 8, name: "Transformation", description: "Longevity, inheritance, sudden events, occult, and research" },
  { number: 9, name: "Fortune & Dharma", description: "Luck, higher education, father, religion, and long journeys" },
  { number: 10, name: "Career & Status", description: "Profession, reputation, government, authority, and achievements" },
  { number: 11, name: "Gains & Desires", description: "Income, elder siblings, social circles, hopes, and fulfillment" },
  { number: 12, name: "Losses & Liberation", description: "Expenses, foreign settlement, spirituality, and moksha" },
];

const chartTypes = [
  { name: "Rashi Chart (D-1)", description: "The primary natal chart showing planetary positions in signs." },
  { name: "Navamsha (D-9)", description: "Marriage and dharma chart — essential for relationship analysis." },
  { name: "Dashamsha (D-10)", description: "Career chart revealing professional strengths and timing." },
  { name: "Dreshkana (D-3)", description: "Siblings and courage chart for understanding inner strength." },
  { name: "Saptamsha (D-7)", description: "Children and progeny chart for fertility and offspring analysis." },
  { name: "Shodashamsha (D-16)", description: "Vehicles, property, and comforts chart." },
];

export default function BirthChartPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Birth Chart Analysis - AstroViah",
            description: "AI-powered birth chart (Kundli) generation and interpretation.",
            url: "https://astroviah.com/birth-chart",
          }),
        }}
      />

      <PageHeader
        badge="&#127759; Birth Chart"
        title="Your Cosmic"
        titleHighlight="Blueprint"
        description="Your birth chart is a snapshot of the sky at the exact moment you were born. It holds the key to understanding your personality, relationships, career, and life purpose."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Birth Chart Analysis" }]}
      />

      {/* What's In Your Chart */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="chart-sections">
        <div className="max-w-7xl mx-auto">
          <h2 id="chart-sections" className="text-2xl font-bold text-center mb-10">What&apos;s In Your Birth Chart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chartSections.map((section) => (
              <article key={section.title} className="card-hover bg-white rounded-2xl p-6 border border-border/50 shadow-sm">
                <span className="text-3xl mb-3 block" aria-hidden="true">{section.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{section.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12 Houses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle" aria-labelledby="houses-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="houses-heading" className="text-2xl font-bold text-center mb-2">The 12 Houses of Astrology</h2>
          <p className="text-muted text-center mb-10 max-w-2xl mx-auto">
            Each house governs a specific domain of your life. Planets placed in each house color those life areas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {houses.map((house) => (
              <div key={house.number} className="bg-white rounded-xl p-4 border border-border/50 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                    {house.number}
                  </span>
                  <h3 className="font-semibold text-sm">{house.name}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">{house.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisional Charts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="divisional-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="divisional-heading" className="text-2xl font-bold text-center mb-2">Divisional Charts (Varga)</h2>
          <p className="text-muted text-center mb-10 max-w-2xl mx-auto">
            Beyond the main chart, Vedic astrology uses 16+ divisional charts for precise life-area analysis.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chartTypes.map((chart) => (
              <div key={chart.name} className="card-hover bg-white rounded-xl p-5 border border-border/50 shadow-sm">
                <h3 className="font-semibold text-sm mb-1">{chart.name}</h3>
                <p className="text-xs text-muted leading-relaxed">{chart.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Generate Your Birth Chart</h2>
          <p className="text-muted text-lg mb-6">Enter your birth date, time, and place to receive a complete AI-interpreted natal chart with all divisional charts.</p>
          <Link href="/pricing" className="gradient-bg text-white px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-xl shadow-purple-300/40 inline-block">
            Create My Chart &#127759;
          </Link>
        </div>
      </section>
    </>
  );
}
