import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About AstroViah - Our Mission & Story",
  description:
    "Learn about AstroViah — an AI-powered astrology platform blending ancient Vedic wisdom with cutting-edge artificial intelligence. Meet our mission, values, and vision.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About AstroViah - Our Mission & Story",
    description: "AI-powered astrology platform blending ancient Vedic wisdom with modern AI.",
    url: "/about",
  },
};

const values = [
  { title: "Ancient Wisdom", description: "We honor thousands of years of Vedic astrological tradition, preserving its depth and accuracy in every reading.", icon: "\uD83D\uDCDC" },
  { title: "Modern Technology", description: "Our AI processes millions of astrological data points to deliver readings that are precise, fast, and personalized.", icon: "\uD83E\uDD16" },
  { title: "Accessibility", description: "Everyone deserves cosmic guidance. We make professional-grade astrology available to all, regardless of budget.", icon: "\uD83C\uDF0D" },
  { title: "Privacy First", description: "Your birth data is sacred. We use bank-grade encryption and never share your personal information with third parties.", icon: "\uD83D\uDD12" },
  { title: "Continuous Learning", description: "Our AI improves with every reading, incorporating user feedback and new astrological research to enhance accuracy.", icon: "\uD83D\uDCDA" },
  { title: "Community", description: "We're building a community of cosmic enthusiasts who share, learn, and grow together on their spiritual journey.", icon: "\uD83E\uDD1D" },
];

const team = [
  { name: "Astrology Engine", role: "Vedic & Western astrology computation layer with ephemeris-grade accuracy.", icon: "\u2699\uFE0F" },
  { name: "AI Interpreter", role: "Natural language AI that translates complex planetary data into actionable insights.", icon: "\uD83E\uDDE0" },
  { name: "Expert Panel", role: "Advisory board of certified Vedic astrologers who train and validate our AI models.", icon: "\uD83D\uDC68\u200D\uD83C\uDFEB" },
  { name: "Research Team", role: "Constantly studying astrological texts, research papers, and user patterns for improvement.", icon: "\uD83D\uDD2C" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="&#127758; About Us"
        title="Where Ancient Wisdom Meets"
        titleHighlight="Modern AI"
        description="AstroViah was born from a simple belief: the cosmos has answers, and everyone deserves access to them. We bridge the gap between 5,000 years of Vedic wisdom and cutting-edge AI."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Mission */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="mission">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border/50 shadow-lg text-center">
            <h2 id="mission" className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted text-lg leading-relaxed">
              To democratize astrology by making personalized, accurate, and insightful cosmic guidance accessible to everyone through
              the power of artificial intelligence — while preserving the depth and authenticity of ancient Vedic and Western astrological traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="values-heading" className="text-2xl font-bold text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <article key={value.title} className="card-hover bg-white rounded-2xl p-6 border border-border/50 shadow-sm">
                <span className="text-3xl mb-3 block" aria-hidden="true">{value.icon}</span>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the AI */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle" aria-labelledby="behind-ai">
        <div className="max-w-7xl mx-auto">
          <h2 id="behind-ai" className="text-2xl font-bold text-center mb-2">Behind the AI</h2>
          <p className="text-muted text-center mb-10 max-w-2xl mx-auto">Our platform is powered by a combination of specialized systems working together.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm text-center">
                <span className="text-4xl mb-3 block" aria-hidden="true">{member.icon}</span>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-xs text-muted leading-relaxed">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Cosmic Community</h2>
          <p className="text-muted text-lg mb-6">Start your journey with AstroViah and discover what the stars have planned for you.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing" className="gradient-bg text-white px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-xl shadow-purple-300/40 inline-block">
              Get Started &#10024;
            </Link>
            <Link href="/contact" className="px-8 py-3.5 rounded-full border-2 border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
