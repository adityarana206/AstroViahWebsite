export default function CallToAction() {
  return (
    <section aria-labelledby="cta-heading" className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg-subtle">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-5xl mb-6 block" aria-hidden="true">&#9968;&#65039;</span>
        <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Unlock Your{" "}
          <span className="gradient-text">Cosmic Potential</span>?
        </h2>
        <p className="text-muted text-lg mb-8 leading-relaxed">
          Join thousands of users who trust AstroViah for their daily cosmic guidance.
          Start your free astrology journey today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="gradient-bg text-white px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-xl shadow-purple-300/40">
            Start Free Reading &#10024;
          </button>
          <button className="flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
