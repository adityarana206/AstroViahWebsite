import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "AI Tarot Reading - Virtual Card Spreads & Insights",
  description:
    "Experience AI-powered tarot card readings. Get daily, three-card, Celtic Cross, and love tarot spreads with instant AI interpretations for guidance.",
  keywords: ["tarot reading", "AI tarot", "tarot cards", "tarot spread", "online tarot", "love tarot"],
  alternates: { canonical: "/tarot" },
  openGraph: {
    title: "AI Tarot Reading - Virtual Card Spreads & Insights | AstroViah",
    description: "Experience AI-powered tarot card readings with instant interpretations.",
    url: "/tarot",
  },
};

const tarotSpreads = [
  {
    name: "Daily Card",
    cards: 1,
    description: "Pull a single card for daily guidance and reflection. Perfect for your morning routine.",
    duration: "1 minute",
    icon: "\uD83C\uDF05",
  },
  {
    name: "Three-Card Spread",
    cards: 3,
    description: "Past, present, and future — a classic spread revealing the trajectory of your situation.",
    duration: "3 minutes",
    icon: "\u2728",
  },
  {
    name: "Love Spread",
    cards: 5,
    description: "Deep dive into your romantic life. Understand your feelings, your partner's, and the relationship's potential.",
    duration: "5 minutes",
    icon: "\u2764\uFE0F",
  },
  {
    name: "Career Spread",
    cards: 5,
    description: "Gain clarity on professional decisions, opportunities, and the energy around your career path.",
    duration: "5 minutes",
    icon: "\uD83D\uDCBC",
  },
  {
    name: "Celtic Cross",
    cards: 10,
    description: "The most comprehensive tarot spread. Covers all life aspects with deep analysis of challenges and outcomes.",
    duration: "10 minutes",
    icon: "\u2694\uFE0F",
  },
  {
    name: "Yes / No",
    cards: 1,
    description: "Ask a specific question and receive a clear yes or no answer with an AI-explained reasoning.",
    duration: "1 minute",
    icon: "\u2753",
  },
];

const majorArcana = [
  { name: "The Fool", number: 0, meaning: "New beginnings, spontaneity, innocence" },
  { name: "The Magician", number: 1, meaning: "Willpower, manifestation, resourcefulness" },
  { name: "The High Priestess", number: 2, meaning: "Intuition, mystery, inner knowledge" },
  { name: "The Empress", number: 3, meaning: "Abundance, fertility, nurturing" },
  { name: "The Emperor", number: 4, meaning: "Authority, structure, leadership" },
  { name: "The Hierophant", number: 5, meaning: "Tradition, spiritual guidance, conformity" },
  { name: "The Lovers", number: 6, meaning: "Love, harmony, choices" },
  { name: "The Chariot", number: 7, meaning: "Determination, victory, willpower" },
  { name: "Strength", number: 8, meaning: "Courage, inner strength, compassion" },
  { name: "The Hermit", number: 9, meaning: "Soul-searching, introspection, wisdom" },
  { name: "Wheel of Fortune", number: 10, meaning: "Destiny, change, cycles" },
  { name: "Justice", number: 11, meaning: "Truth, fairness, karmic justice" },
];

const features = [
  { title: "AI Interpretation", description: "Every card is interpreted by our AI considering your question, spread position, and surrounding cards.", icon: "\uD83E\uDD16" },
  { title: "Reversed Meanings", description: "Full reversed card interpretations are included, adding depth and nuance to every reading.", icon: "\uD83D\uDD04" },
  { title: "Reading History", description: "Save and revisit your past readings. Track patterns and how predictions have unfolded over time.", icon: "\uD83D\uDCDA" },
  { title: "Daily Draws", description: "Get a free daily tarot card every morning with a personalized message and action suggestion.", icon: "\uD83C\uDF1E" },
];

export default function TarotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "AI Tarot Reading - AstroViah",
            description: "AI-powered tarot card readings with instant interpretations.",
            url: "https://astroviah.com/tarot",
          }),
        }}
      />

      <PageHeader
        badge="&#127183; Tarot Reading"
        title="AI-Powered"
        titleHighlight="Tarot Insights"
        description="Draw virtual tarot cards and receive instant AI-interpreted insights. From daily single-card pulls to comprehensive Celtic Cross spreads."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tarot Reading" }]}
      />

      {/* Spread Types */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="spreads-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="spreads-heading" className="text-2xl font-bold text-center mb-2">Choose Your Spread</h2>
          <p className="text-muted text-center mb-10">Select a tarot spread that matches your question and depth of insight needed.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tarotSpreads.map((spread) => (
              <article key={spread.name} className="card-hover bg-white rounded-2xl p-6 border border-border/50 shadow-sm cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl" aria-hidden="true">{spread.icon}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-primary font-medium">
                    {spread.cards} {spread.cards === 1 ? "card" : "cards"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {spread.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-3">{spread.description}</p>
                <p className="text-xs text-muted">&#9201; {spread.duration}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Tarot Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle" aria-labelledby="tarot-features">
        <div className="max-w-7xl mx-auto">
          <h2 id="tarot-features" className="text-2xl font-bold text-center mb-2">Why Our AI Tarot Is Different</h2>
          <p className="text-muted text-center mb-10 max-w-2xl mx-auto">
            Unlike generic tarot apps, AstroViah&apos;s AI considers context, card relationships, and your personal energy profile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm flex gap-4">
                <span className="text-3xl flex-shrink-0" aria-hidden="true">{feature.icon}</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Arcana Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="arcana-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="arcana-heading" className="text-2xl font-bold text-center mb-2">Major Arcana Guide</h2>
          <p className="text-muted text-center mb-10">Learn the key meanings of the 12 most significant Major Arcana cards.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {majorArcana.map((card) => (
              <div key={card.name} className="card-hover bg-white rounded-xl p-4 border border-border/50 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                    {card.number}
                  </span>
                  <h3 className="font-semibold text-sm">{card.name}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">{card.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Tarot Reading?</h2>
          <p className="text-muted text-lg mb-6">Pull your first card and discover what the universe wants you to know today.</p>
          <Link href="/pricing" className="gradient-bg text-white px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-xl shadow-purple-300/40 inline-block">
            Start Your Reading &#127183;
          </Link>
        </div>
      </section>
    </>
  );
}
