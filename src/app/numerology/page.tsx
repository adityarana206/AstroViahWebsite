import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Numerology - AI Life Path & Destiny Number Analysis",
  description:
    "Discover the hidden power of numbers in your life. AI-powered numerology readings for life path, destiny, soul urge, and personality numbers with detailed interpretations.",
  keywords: ["numerology", "life path number", "destiny number", "soul urge number", "numerology reading", "name numerology"],
  alternates: { canonical: "/numerology" },
  openGraph: {
    title: "Numerology - AI Life Path & Destiny Number Analysis | AstroViah",
    description: "Discover the hidden power of numbers. AI-powered life path and destiny number analysis.",
    url: "/numerology",
  },
};

const coreNumbers = [
  {
    name: "Life Path Number",
    description: "The most important number in numerology. Derived from your full birth date, it reveals your life purpose, natural talents, and the journey your soul chose.",
    calculation: "Sum all digits of your birth date and reduce to a single digit (or master number).",
    icon: "\uD83D\uDEE4\uFE0F",
  },
  {
    name: "Destiny Number",
    description: "Calculated from your full birth name, it reveals what you are destined to accomplish, your ultimate goals, and the opportunities that will come your way.",
    calculation: "Convert each letter of your full name to a number and sum to a single digit.",
    icon: "\uD83C\uDFAF",
  },
  {
    name: "Soul Urge Number",
    description: "Also called the Heart's Desire number. Derived from the vowels in your name, it reveals your innermost motivations, desires, and what truly drives you.",
    calculation: "Sum the numerical values of all vowels in your full name.",
    icon: "\u2764\uFE0F",
  },
  {
    name: "Personality Number",
    description: "Derived from the consonants in your name, it represents the outer you — the face you show to the world and how others perceive you.",
    calculation: "Sum the numerical values of all consonants in your full name.",
    icon: "\uD83C\uDFAD",
  },
  {
    name: "Birthday Number",
    description: "Simply the day of the month you were born. It reveals a special talent or gift that will help you on your life path journey.",
    calculation: "The day of the month you were born (reduced if double digit).",
    icon: "\uD83C\uDF82",
  },
  {
    name: "Maturity Number",
    description: "The sum of your Life Path and Destiny numbers. It reveals the true you that emerges in the second half of life — your mature, authentic self.",
    calculation: "Life Path Number + Destiny Number, reduced to a single digit.",
    icon: "\uD83C\uDF3F",
  },
];

const lifePathMeanings = [
  { number: 1, title: "The Leader", traits: "Independent, ambitious, pioneering, innovative, determined" },
  { number: 2, title: "The Diplomat", traits: "Cooperative, sensitive, balanced, intuitive, peacemaker" },
  { number: 3, title: "The Communicator", traits: "Creative, expressive, joyful, artistic, optimistic" },
  { number: 4, title: "The Builder", traits: "Practical, disciplined, hardworking, reliable, organized" },
  { number: 5, title: "The Adventurer", traits: "Freedom-loving, versatile, curious, dynamic, progressive" },
  { number: 6, title: "The Nurturer", traits: "Responsible, caring, harmonious, domestic, supportive" },
  { number: 7, title: "The Seeker", traits: "Analytical, spiritual, introspective, wise, mysterious" },
  { number: 8, title: "The Powerhouse", traits: "Authoritative, ambitious, materialistic, successful, karmic" },
  { number: 9, title: "The Humanitarian", traits: "Compassionate, generous, idealistic, global-minded, wise" },
  { number: 11, title: "The Illuminator", traits: "Visionary, intuitive, spiritual teacher, inspirational (Master)" },
  { number: 22, title: "The Master Builder", traits: "Visionary architect, practical idealist, powerful manifester (Master)" },
  { number: 33, title: "The Master Teacher", traits: "Selfless service, healing, spiritual uplifting, love (Master)" },
];

const services = [
  { title: "Name Analysis", description: "Discover the vibrational energy of your name and how it shapes your destiny, relationships, and career.", icon: "\uD83D\uDCDD" },
  { title: "Business Numerology", description: "Find the perfect business name, launch date, and brand number for maximum success and prosperity.", icon: "\uD83D\uDCBC" },
  { title: "Compatibility Numbers", description: "Check numerological compatibility with your partner, business associate, or potential collaborator.", icon: "\uD83D\uDC65" },
  { title: "Personal Year Forecast", description: "Know the theme and energy of your current personal year cycle (1-9) and plan accordingly.", icon: "\uD83D\uDCC5" },
  { title: "Lucky Numbers", description: "Get your personalized lucky numbers for lottery, important decisions, dates, and daily guidance.", icon: "\uD83C\uDFB0" },
  { title: "Mobile & Vehicle Numbers", description: "Analyze and optimize your phone number, vehicle number, and house number for positive energy.", icon: "\uD83D\uDCF1" },
];

export default function NumerologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Numerology - AstroViah",
            description: "AI-powered numerology readings for life path, destiny, and personality numbers.",
            url: "https://astroviah.com/numerology",
          }),
        }}
      />

      <PageHeader
        badge="&#128290; Numerology"
        title="The Hidden Power of"
        titleHighlight="Numbers"
        description="Every number carries a unique vibration that influences your life. Discover your core numbers and unlock the numeric blueprint of your destiny."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Numerology" }]}
      />

      {/* Core Numbers */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="core-numbers">
        <div className="max-w-7xl mx-auto">
          <h2 id="core-numbers" className="text-2xl font-bold text-center mb-10">Your Core Numerology Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreNumbers.map((num) => (
              <article key={num.name} className="card-hover bg-white rounded-2xl p-6 border border-border/50 shadow-sm">
                <span className="text-3xl mb-3 block" aria-hidden="true">{num.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{num.name}</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">{num.description}</p>
                <p className="text-xs bg-purple-50 text-primary px-3 py-2 rounded-lg">
                  <strong>How it&apos;s calculated:</strong> {num.calculation}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Life Path Meanings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle" aria-labelledby="life-path-meanings">
        <div className="max-w-7xl mx-auto">
          <h2 id="life-path-meanings" className="text-2xl font-bold text-center mb-2">Life Path Number Meanings</h2>
          <p className="text-muted text-center mb-10">Find your life path number and discover your soul&apos;s purpose.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {lifePathMeanings.map((lp) => (
              <div key={lp.number} className="card-hover bg-white rounded-xl p-4 border border-border/50 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                    {lp.number}
                  </span>
                  <h3 className="font-semibold text-sm">{lp.title}</h3>
                </div>
                <p className="text-xs text-muted leading-relaxed">{lp.traits}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="num-services">
        <div className="max-w-7xl mx-auto">
          <h2 id="num-services" className="text-2xl font-bold text-center mb-2">Numerology Services</h2>
          <p className="text-muted text-center mb-10">Beyond personal readings — numerology for every aspect of your life.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="card-hover bg-white rounded-2xl p-6 border border-border/50 shadow-sm">
                <span className="text-3xl mb-3 block" aria-hidden="true">{svc.icon}</span>
                <h3 className="font-semibold mb-2">{svc.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Discover Your Numbers</h2>
          <p className="text-muted text-lg mb-6">Enter your full name and birth date to receive a complete AI-powered numerology profile.</p>
          <Link href="/pricing" className="gradient-bg text-white px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-xl shadow-purple-300/40 inline-block">
            Get My Numerology Report &#128290;
          </Link>
        </div>
      </section>
    </>
  );
}
