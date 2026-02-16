import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact Us - Get In Touch",
  description:
    "Have questions about AstroViah? Contact us for support, partnerships, or feedback. We'd love to hear from you.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | AstroViah",
    description: "Get in touch with the AstroViah team for support, partnerships, or feedback.",
    url: "/contact",
  },
};

const contactMethods = [
  {
    title: "Email Us",
    description: "For general inquiries and support requests.",
    detail: "support@astroviah.com",
    icon: "\uD83D\uDCE7",
  },
  {
    title: "Call Us",
    description: "Available Mon-Sat, 9 AM - 7 PM IST.",
    detail: "+91 98765 43210",
    icon: "\uD83D\uDCDE",
  },
  {
    title: "Visit Us",
    description: "Our headquarters in India.",
    detail: "Bangalore, Karnataka, India",
    icon: "\uD83D\uDCCD",
  },
];

const faqs = [
  { q: "How accurate are AI astrology readings?", a: "Our AI processes over 1000 astrological data points and is continuously validated by our expert panel of certified Vedic astrologers. While no prediction system is 100% accurate, our users report very high satisfaction with the relevance and accuracy of their readings." },
  { q: "What birth details do I need to provide?", a: "For the most accurate reading, we need your date of birth, exact time of birth, and place of birth. The time of birth is crucial for calculating your ascendant (Lagna) and house placements accurately." },
  { q: "Is my personal data safe?", a: "Absolutely. We use bank-grade encryption to protect all personal data. Your birth details are never shared with third parties and are stored securely on encrypted servers." },
  { q: "Can I get a refund if I'm not satisfied?", a: "Yes! We offer a 7-day money-back guarantee on all premium plans. If you're not satisfied with the service, contact us for a full refund — no questions asked." },
  { q: "When will the mobile app launch?", a: "Our Android and iOS apps are currently in development and expected to launch soon. Sign up on our homepage to get early access notifications." },
  { q: "Do you support languages other than English?", a: "Currently our platform is in English, with Hindi support coming soon. We plan to add Tamil, Telugu, Bengali, and other regional languages in future updates." },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="&#128222; Contact"
        title="Get In"
        titleHighlight="Touch"
        description="Have a question, suggestion, or partnership inquiry? We'd love to hear from you. Our team typically responds within 24 hours."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <div key={method.title} className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm text-center">
                <span className="text-4xl mb-3 block" aria-hidden="true">{method.icon}</span>
                <h2 className="font-semibold mb-1">{method.title}</h2>
                <p className="text-sm text-muted mb-2">{method.description}</p>
                <p className="text-sm font-medium text-primary">{method.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 gradient-bg-subtle" aria-labelledby="contact-form">
        <div className="max-w-2xl mx-auto">
          <h2 id="contact-form" className="text-2xl font-bold text-center mb-8">Send Us a Message</h2>
          <div className="bg-white rounded-3xl p-8 border border-border/50 shadow-lg">
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us more..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button className="w-full gradient-bg text-white py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-purple-300/30">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-2xl border border-border/50 shadow-sm group">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-foreground font-medium text-sm list-none">
                  {faq.q}
                  <span className="text-primary ml-4 flex-shrink-0 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
