const features = [
  {
    icon: "\u2728",
    title: "AI Astrology",
    description:
      "Get hyper-personalized astrology readings powered by advanced AI. Understand your birth chart, planetary transits, and cosmic influences like never before.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: "\uD83C\uDCCF",
    title: "Tarot Reading",
    description:
      "Draw virtual tarot cards and receive AI-interpreted insights. Daily, weekly, and in-depth spreads for love, career, and spiritual guidance.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "\u2764\uFE0F",
    title: "Kundli Matchmaking",
    description:
      "Find your perfect cosmic match with AI-powered kundli compatibility analysis. Gun milan, dosha checks, and detailed relationship insights.",
    gradient: "from-pink-500 to-rose-400",
  },
  {
    icon: "\uD83C\uDF1E",
    title: "Daily Horoscope",
    description:
      "Start your day with personalized horoscope updates. Get predictions for love, career, health, and finances tailored to your zodiac sign.",
    gradient: "from-amber-400 to-orange-400",
  },
  {
    icon: "\uD83D\uDDFA\uFE0F",
    title: "Birth Chart Analysis",
    description:
      "Generate a detailed natal chart with AI interpretation. Discover your ascendant, moon sign, planetary positions, and house placements.",
    gradient: "from-blue-400 to-violet-500",
  },
  {
    icon: "\uD83D\uDD22",
    title: "Numerology",
    description:
      "Unlock the hidden meaning of numbers in your life. Life path number, destiny number, and personalized numerological forecasts.",
    gradient: "from-teal-400 to-cyan-400",
  },
];

export default function Features() {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-primary text-sm font-medium mb-4">
            &#10024; Our Features
          </span>
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need From The{" "}
            <span className="gradient-text">Stars</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            AstroViah combines ancient Vedic wisdom with modern AI to bring you the most accurate
            and personalized astrology experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="card-hover bg-white rounded-2xl p-6 border border-border/50 shadow-sm"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-4 shadow-lg`}
                aria-hidden="true"
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed text-sm">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
