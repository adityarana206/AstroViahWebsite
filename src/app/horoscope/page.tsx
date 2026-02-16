import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Daily Horoscope - Free AI-Powered Zodiac Predictions",
  description:
    "Get your free daily horoscope powered by AI. Personalized predictions for all 12 zodiac signs covering love, career, health, and finances. Updated every day.",
  keywords: ["daily horoscope", "horoscope today", "zodiac predictions", "free horoscope", "AI horoscope"],
  alternates: { canonical: "/horoscope" },
  openGraph: {
    title: "Daily Horoscope - Free AI-Powered Zodiac Predictions | AstroViah",
    description: "Get your free daily horoscope powered by AI. Personalized predictions for all 12 zodiac signs.",
    url: "/horoscope",
  },
};

const zodiacSigns = [
  { sign: "Aries", symbol: "\u2648", date: "Mar 21 - Apr 19", element: "Fire", ruling: "Mars", trait: "Bold & Ambitious" },
  { sign: "Taurus", symbol: "\u2649", date: "Apr 20 - May 20", element: "Earth", ruling: "Venus", trait: "Reliable & Patient" },
  { sign: "Gemini", symbol: "\u264A", date: "May 21 - Jun 20", element: "Air", ruling: "Mercury", trait: "Curious & Adaptable" },
  { sign: "Cancer", symbol: "\u264B", date: "Jun 21 - Jul 22", element: "Water", ruling: "Moon", trait: "Nurturing & Intuitive" },
  { sign: "Leo", symbol: "\u264C", date: "Jul 23 - Aug 22", element: "Fire", ruling: "Sun", trait: "Creative & Passionate" },
  { sign: "Virgo", symbol: "\u264D", date: "Aug 23 - Sep 22", element: "Earth", ruling: "Mercury", trait: "Analytical & Practical" },
  { sign: "Libra", symbol: "\u264E", date: "Sep 23 - Oct 22", element: "Air", ruling: "Venus", trait: "Harmonious & Diplomatic" },
  { sign: "Scorpio", symbol: "\u264F", date: "Oct 23 - Nov 21", element: "Water", ruling: "Pluto", trait: "Intense & Passionate" },
  { sign: "Sagittarius", symbol: "\u2650", date: "Nov 22 - Dec 21", element: "Fire", ruling: "Jupiter", trait: "Adventurous & Optimistic" },
  { sign: "Capricorn", symbol: "\u2651", date: "Dec 22 - Jan 19", element: "Earth", ruling: "Saturn", trait: "Disciplined & Ambitious" },
  { sign: "Aquarius", symbol: "\u2652", date: "Jan 20 - Feb 18", element: "Air", ruling: "Uranus", trait: "Innovative & Independent" },
  { sign: "Pisces", symbol: "\u2653", date: "Feb 19 - Mar 20", element: "Water", ruling: "Neptune", trait: "Compassionate & Dreamy" },
];

const elementColors: Record<string, string> = {
  Fire: "bg-orange-100 text-orange-700",
  Earth: "bg-green-100 text-green-700",
  Air: "bg-sky-100 text-sky-700",
  Water: "bg-blue-100 text-blue-700",
};

function StarRating({ filled, total = 5 }: { filled: number; total?: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${filled} out of ${total} stars`}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={`text-sm ${i < filled ? "text-amber-400" : "text-gray-300"}`} aria-hidden="true">&#9733;</span>
      ))}
    </div>
  );
}

export default function HoroscopePage() {
  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Daily Horoscope - AstroViah",
            description: "Free AI-powered daily horoscope for all 12 zodiac signs.",
            url: "https://astroviah.com/horoscope",
          }),
        }}
      />

      <PageHeader
        badge="&#9728;&#65039; Daily Horoscope"
        title="Your"
        titleHighlight="Zodiac Awaits"
        description="Select your zodiac sign and get AI-powered daily predictions for love, career, health, and more. Updated fresh every morning."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Daily Horoscope" }]}
      />

      {/* Zodiac Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {zodiacSigns.map((zodiac) => (
              <article
                key={zodiac.sign}
                className="card-hover bg-white rounded-2xl p-5 border border-border/50 shadow-sm cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform" aria-hidden="true">
                    {zodiac.symbol}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-foreground">{zodiac.sign}</h2>
                    <p className="text-xs text-muted mb-2">{zodiac.date}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${elementColors[zodiac.element]}`}>
                        {zodiac.element}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-medium">
                        {zodiac.ruling}
                      </span>
                    </div>
                    <p className="text-xs text-muted mt-2 italic">{zodiac.trait}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Detailed Reading */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle" aria-labelledby="sample-reading">
        <div className="max-w-4xl mx-auto">
          <h2 id="sample-reading" className="text-2xl font-bold text-center mb-8">
            Today&apos;s Featured Reading
          </h2>

          <article className="bg-white rounded-3xl p-8 border border-border/50 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-100 to-transparent rounded-bl-full" aria-hidden="true" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl" aria-hidden="true">&#9800;</span>
                <div>
                  <h3 className="text-2xl font-bold">Aries Daily Horoscope</h3>
                  <time className="text-sm text-muted" dateTime={new Date().toISOString().split("T")[0]}>{today}</time>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">General Overview</h4>
                  <p className="text-muted leading-relaxed">
                    The stars align in your favor today, Aries. With Mars energizing your fifth house, creativity and romance are highlighted.
                    Trust your instincts in career decisions — a new opportunity may present itself by evening. The cosmic energy supports bold moves
                    and new beginnings. Channel your natural leadership qualities and don&apos;t hesitate to take the initiative.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Love & Relationships</h4>
                  <p className="text-muted leading-relaxed">
                    Venus forms a positive aspect with your ruling planet Mars, creating a magnetic energy around your romantic life.
                    Single Aries may find themselves drawn to someone unexpected. Couples should plan a spontaneous date night —
                    the universe favors connection and deep conversations today.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Career & Finance</h4>
                  <p className="text-muted leading-relaxed">
                    Jupiter&apos;s influence on your tenth house of career brings expansion and recognition. A project you&apos;ve been working on
                    may finally get the green light. Financially, avoid impulsive purchases. A disciplined approach to money matters
                    will serve you well through the rest of the week.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Love", stars: 4 },
                  { label: "Career", stars: 5 },
                  { label: "Health", stars: 3 },
                  { label: "Finance", stars: 4 },
                ].map((category) => (
                  <div key={category.label} className="bg-purple-50 rounded-xl p-3 text-center">
                    <p className="text-xs text-muted mb-1 font-medium">{category.label}</p>
                    <StarRating filled={category.stars} />
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-xs text-muted mb-1">Lucky Number</p>
                  <p className="text-lg font-bold text-primary">7</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted mb-1">Lucky Color</p>
                  <p className="text-lg font-bold text-primary">Crimson Red</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted mb-1">Compatible Sign</p>
                  <p className="text-lg font-bold text-primary">Leo &#9804;</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Want Personalized Readings?</h2>
          <p className="text-muted text-lg mb-6">Sign up to unlock AI-personalized horoscopes based on your exact birth chart — not just your sun sign.</p>
          <Link href="/pricing" className="gradient-bg text-white px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-xl shadow-purple-300/40 inline-block">
            Get Personalized Horoscope &#10024;
          </Link>
        </div>
      </section>
    </>
  );
}
