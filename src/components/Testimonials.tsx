const testimonials = [
  {
    name: "Priya Sharma",
    role: "Daily User",
    quote: "AstroViah's AI readings are incredibly accurate. The daily horoscopes feel personally written for me!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Premium Member",
    quote: "The kundli matchmaking feature helped me understand my relationship compatibility on a deeper level.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Tarot Enthusiast",
    quote: "The tarot readings are beautifully designed and the AI interpretations are spot-on every single time.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-primary text-sm font-medium mb-4">
            &#11088; Testimonials
          </span>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Loved By <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            See what our community says about their AstroViah experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="card-hover bg-white rounded-2xl p-6 border border-border/50 shadow-sm"
            >
              <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400" aria-hidden="true">&#9733;</span>
                ))}
              </div>
              <blockquote>
                <p className="text-muted leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm" aria-hidden="true">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <cite className="font-semibold text-sm not-italic">{testimonial.name}</cite>
                  <p className="text-xs text-muted">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
