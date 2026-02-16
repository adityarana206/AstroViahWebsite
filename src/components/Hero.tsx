import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-primary text-sm font-medium mb-6">
              <span className="animate-twinkle" aria-hidden="true">&#10024;</span>
              AI-Powered Astrology Platform
            </div>
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover Your{" "}
              <span className="gradient-text">Cosmic Destiny</span>{" "}
              With AI
            </h1>
            <p className="text-lg text-muted max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Unlock the secrets of the stars with AstroViah. Get personalized astrology readings,
              tarot insights, kundli matchmaking, and daily horoscopes — all powered by cutting-edge AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="gradient-bg text-white px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-xl shadow-purple-300/40 animate-pulse-glow">
                Explore Your Stars &#10024;
              </button>
              <button className="flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all">
                <span aria-hidden="true">&#9654;</span> Watch Demo
              </button>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="flex-1 flex justify-center relative" aria-hidden="true">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-200 via-pink-100 to-amber-100 animate-spin-slow opacity-50" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-violet-100 to-purple-50 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt=""
                  width={220}
                  height={220}
                  className="animate-float drop-shadow-2xl"
                  priority
                />
              </div>
              <span className="absolute top-0 left-1/2 text-2xl animate-float" style={{ animationDelay: "0s" }}>&#9800;</span>
              <span className="absolute top-1/4 right-0 text-2xl animate-float" style={{ animationDelay: "0.5s" }}>&#9802;</span>
              <span className="absolute bottom-1/4 right-0 text-2xl animate-float" style={{ animationDelay: "1s" }}>&#9804;</span>
              <span className="absolute bottom-0 left-1/2 text-2xl animate-float" style={{ animationDelay: "1.5s" }}>&#9806;</span>
              <span className="absolute bottom-1/4 left-0 text-2xl animate-float" style={{ animationDelay: "2s" }}>&#9808;</span>
              <span className="absolute top-1/4 left-0 text-2xl animate-float" style={{ animationDelay: "2.5s" }}>&#9810;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
