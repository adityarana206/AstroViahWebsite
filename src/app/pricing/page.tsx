import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Pricing - Free & Premium Astrology Plans",
  description:
    "Choose your AstroViah plan. Free daily horoscopes or unlock premium AI astrology readings, tarot spreads, kundli matchmaking, birth chart analysis, and more.",
  keywords: ["astrology pricing", "horoscope subscription", "premium astrology", "free horoscope"],
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing - Free & Premium Plans | AstroViah",
    description: "Choose your plan — free daily horoscopes or unlock premium AI astrology features.",
    url: "/pricing",
  },
};

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Perfect for daily cosmic guidance and exploring what AstroViah offers.",
    features: [
      "Daily horoscope for your sign",
      "Basic zodiac compatibility",
      "1 tarot card draw per day",
      "Weekly astrology newsletter",
      "Community access",
    ],
    cta: "Get Started Free",
    popular: false,
    gradient: false,
  },
  {
    name: "Premium",
    price: "299",
    period: "/month",
    description: "Unlock the full power of AI astrology with in-depth personalized readings.",
    features: [
      "Everything in Free",
      "Personalized AI horoscope (not just sun sign)",
      "Unlimited tarot spreads (all types)",
      "Full birth chart with AI interpretation",
      "Kundli matchmaking (unlimited matches)",
      "Numerology profile & forecast",
      "Transit alerts & notifications",
      "Downloadable PDF reports",
      "Priority support",
    ],
    cta: "Start Premium",
    popular: true,
    gradient: true,
  },
  {
    name: "Yearly",
    price: "1,999",
    period: "/year",
    description: "Best value — save over 44% with annual billing. All Premium features included.",
    features: [
      "Everything in Premium",
      "Save &#8377;1,589 per year",
      "Exclusive yearly forecast report",
      "Early access to new features",
      "1-on-1 AI astrologer chat (monthly)",
      "Custom remedies & gemstone advice",
    ],
    cta: "Start Yearly",
    popular: false,
    gradient: false,
  },
];

const comparisons = [
  { feature: "Daily Horoscope", free: true, premium: true, yearly: true },
  { feature: "Personalized AI Horoscope", free: false, premium: true, yearly: true },
  { feature: "Tarot Card Draws", free: "1/day", premium: "Unlimited", yearly: "Unlimited" },
  { feature: "Tarot Spread Types", free: "Daily only", premium: "All 6 types", yearly: "All 6 types" },
  { feature: "Birth Chart Generation", free: false, premium: true, yearly: true },
  { feature: "AI Chart Interpretation", free: false, premium: true, yearly: true },
  { feature: "Kundli Matchmaking", free: false, premium: true, yearly: true },
  { feature: "Numerology Report", free: false, premium: true, yearly: true },
  { feature: "Transit Alerts", free: false, premium: true, yearly: true },
  { feature: "PDF Report Downloads", free: false, premium: true, yearly: true },
  { feature: "1-on-1 AI Astrologer Chat", free: false, premium: false, yearly: "Monthly" },
  { feature: "Custom Remedies", free: false, premium: false, yearly: true },
];

function CheckIcon() {
  return <span className="text-green-500 font-bold">&#10003;</span>;
}

function CrossIcon() {
  return <span className="text-gray-300 font-bold">&#10005;</span>;
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Pricing - AstroViah",
            description: "Free and premium pricing plans for AI astrology services.",
            url: "https://astroviah.com/pricing",
          }),
        }}
      />

      <PageHeader
        badge="&#128176; Pricing"
        title="Simple, Transparent"
        titleHighlight="Pricing"
        description="Start free and upgrade when you're ready. No hidden fees, cancel anytime. All prices in INR."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="plans-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="plans-heading" className="sr-only">Available Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-3xl p-8 border shadow-sm relative ${
                  plan.gradient
                    ? "bg-gradient-to-b from-purple-50 to-white border-primary/30 shadow-lg shadow-purple-100"
                    : "bg-white border-border/50"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-white text-xs font-bold">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted">&#8377;</span>
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                      <span className="text-foreground" dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                    plan.gradient
                      ? "gradient-bg text-white hover:opacity-90 shadow-lg shadow-purple-300/30"
                      : "border-2 border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {plan.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle" aria-labelledby="comparison-heading">
        <div className="max-w-5xl mx-auto">
          <h2 id="comparison-heading" className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
          <div className="bg-white rounded-2xl border border-border/50 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center p-4 font-semibold text-foreground">Free</th>
                    <th className="text-center p-4 font-semibold text-primary">Premium</th>
                    <th className="text-center p-4 font-semibold text-foreground">Yearly</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-purple-50/30" : ""}>
                      <td className="p-4 text-foreground">{row.feature}</td>
                      {[row.free, row.premium, row.yearly].map((val, j) => (
                        <td key={j} className="p-4 text-center">
                          {val === true ? <CheckIcon /> : val === false ? <CrossIcon /> : <span className="text-xs text-muted">{val}</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Money-back guarantee */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-5xl mb-4 block" aria-hidden="true">&#128170;</span>
          <h2 className="text-2xl font-bold mb-4">7-Day Money-Back Guarantee</h2>
          <p className="text-muted text-lg mb-6 leading-relaxed">
            Not satisfied? Get a full refund within 7 days of purchase — no questions asked.
            We&apos;re confident you&apos;ll love AstroViah, but we want you to feel completely risk-free.
          </p>
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            Have questions? Contact us &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
