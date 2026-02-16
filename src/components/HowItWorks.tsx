const steps = [
  {
    step: "01",
    title: "Create Your Profile",
    description: "Enter your birth date, time, and location to generate your unique cosmic profile.",
    icon: "\uD83D\uDC64",
  },
  {
    step: "02",
    title: "Get AI Analysis",
    description: "Our AI analyzes planetary positions, transits, and cosmic patterns specific to you.",
    icon: "\uD83E\uDD16",
  },
  {
    step: "03",
    title: "Receive Insights",
    description: "Get personalized daily readings, predictions, and guidance across all life areas.",
    icon: "\uD83D\uDCA1",
  },
  {
    step: "04",
    title: "Track & Grow",
    description: "Follow your cosmic journey with daily updates, journal entries, and progress tracking.",
    icon: "\uD83C\uDF1F",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-primary text-sm font-medium mb-4">
            &#128640; How It Works
          </span>
          <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Your Cosmic Journey in{" "}
            <span className="gradient-text">4 Steps</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Getting started with AstroViah is simple. Begin your personalized astrology experience in minutes.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 list-none p-0">
          {steps.map((item, index) => (
            <li key={item.step} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-border" aria-hidden="true" />
              )}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 to-pink-50 flex items-center justify-center mx-auto mb-4 shadow-md" aria-hidden="true">
                <span className="text-4xl">{item.icon}</span>
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Step {item.step}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
