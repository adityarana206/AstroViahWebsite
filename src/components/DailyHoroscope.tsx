const zodiacSigns = [
  { sign: "Aries", symbol: "\u2648", date: "Mar 21 - Apr 19", element: "Fire" },
  { sign: "Taurus", symbol: "\u2649", date: "Apr 20 - May 20", element: "Earth" },
  { sign: "Gemini", symbol: "\u264A", date: "May 21 - Jun 20", element: "Air" },
  { sign: "Cancer", symbol: "\u264B", date: "Jun 21 - Jul 22", element: "Water" },
  { sign: "Leo", symbol: "\u264C", date: "Jul 23 - Aug 22", element: "Fire" },
  { sign: "Virgo", symbol: "\u264D", date: "Aug 23 - Sep 22", element: "Earth" },
  { sign: "Libra", symbol: "\u264E", date: "Sep 23 - Oct 22", element: "Air" },
  { sign: "Scorpio", symbol: "\u264F", date: "Oct 23 - Nov 21", element: "Water" },
  { sign: "Sagittarius", symbol: "\u2650", date: "Nov 22 - Dec 21", element: "Fire" },
  { sign: "Capricorn", symbol: "\u2651", date: "Dec 22 - Jan 19", element: "Earth" },
  { sign: "Aquarius", symbol: "\u2652", date: "Jan 20 - Feb 18", element: "Air" },
  { sign: "Pisces", symbol: "\u2653", date: "Feb 19 - Mar 20", element: "Water" },
];

function StarRating({ filled, total = 5 }: { filled: number; total?: number }) {
  return (
    <div className="flex justify-center gap-0.5" role="img" aria-label={`${filled} out of ${total} stars`}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < filled ? "text-amber-400" : "text-gray-300"}`}
          aria-hidden="true"
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function DailyHoroscope() {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section id="horoscope" aria-labelledby="horoscope-heading" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-primary text-sm font-medium mb-4">
            &#9728;&#65039; Daily Horoscope
          </span>
          <h2 id="horoscope-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Your <span className="gradient-text">Zodiac</span> Awaits
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Select your zodiac sign and get AI-powered daily predictions for love, career, health, and more.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3" role="list" aria-label="Zodiac signs">
          {zodiacSigns.map((zodiac) => (
            <div
              key={zodiac.sign}
              role="listitem"
              className="card-hover bg-white rounded-2xl p-3 border border-border/50 shadow-sm text-center cursor-pointer group"
              aria-label={`${zodiac.sign} - ${zodiac.date} - ${zodiac.element} sign`}
            >
              <div className="text-3xl mb-1 group-hover:scale-110 transition-transform" aria-hidden="true">
                {zodiac.symbol}
              </div>
              <p className="text-xs font-semibold text-foreground">{zodiac.sign}</p>
              <p className="text-[10px] text-muted mt-0.5">{zodiac.element}</p>
            </div>
          ))}
        </div>

        {/* Sample Daily Reading Card */}
        <article
          className="mt-12 max-w-2xl mx-auto bg-white rounded-3xl p-8 border border-border/50 shadow-lg relative overflow-hidden"
          aria-label="Today's Aries horoscope reading"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100 to-transparent rounded-bl-full" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl" aria-hidden="true">&#9800;</span>
              <div>
                <h3 className="text-lg font-bold">Today&apos;s Aries Horoscope</h3>
                <time className="text-sm text-muted" dateTime={new Date().toISOString().split("T")[0]}>
                  {today}
                </time>
              </div>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              The stars align in your favor today, Aries. With Mars energizing your fifth house,
              creativity and romance are highlighted. Trust your instincts in career decisions —
              a new opportunity may present itself by evening. Financial matters look stable.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 bg-purple-50 rounded-xl p-3 text-center">
                <p className="text-xs text-muted mb-1">Love</p>
                <StarRating filled={4} />
              </div>
              <div className="flex-1 bg-purple-50 rounded-xl p-3 text-center">
                <p className="text-xs text-muted mb-1">Career</p>
                <StarRating filled={5} />
              </div>
              <div className="flex-1 bg-purple-50 rounded-xl p-3 text-center">
                <p className="text-xs text-muted mb-1">Health</p>
                <StarRating filled={3} />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
