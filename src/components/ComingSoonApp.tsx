import Image from "next/image";
import NotifyForm from "./NotifyForm";

export default function ComingSoonApp() {
  return (
    <section id="app" aria-labelledby="app-heading" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden gradient-bg p-8 sm:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

          <div className="relative flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                &#128241; Coming Soon
              </span>
              <h2 id="app-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
                AstroViah Mobile App
              </h2>
              <p className="text-purple-100 text-lg leading-relaxed mb-8 max-w-lg">
                Take the cosmos with you everywhere. Our mobile app for Android &amp; iOS is coming soon
                with push notifications for daily readings, offline birth chart access, and exclusive app-only features.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
                {/* App Store Button */}
                <div
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 cursor-pointer hover:bg-white/20 transition-all"
                  role="button"
                  aria-label="Download on the App Store - Coming Soon"
                >
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-white/70 text-[10px] leading-none">Download on the</p>
                    <p className="text-white font-semibold text-sm">App Store</p>
                  </div>
                </div>

                {/* Google Play Button */}
                <div
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 cursor-pointer hover:bg-white/20 transition-all"
                  role="button"
                  aria-label="Get it on Google Play - Coming Soon"
                >
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-2.29 1.32-2.5-2.5 2.5-2.5 2.29 1.3M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-white/70 text-[10px] leading-none">Get it on</p>
                    <p className="text-white font-semibold text-sm">Google Play</p>
                  </div>
                </div>
              </div>

              {/* Email Notify */}
              <NotifyForm />
            </div>

            {/* Phone mockup */}
            <div className="flex-shrink-0" aria-hidden="true">
              <div className="relative w-56 h-[420px] bg-white/10 backdrop-blur-sm rounded-[2.5rem] border-2 border-white/20 p-2">
                <div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-purple-50 to-white overflow-hidden flex flex-col items-center justify-center p-6">
                  <Image
                    src="/logo.png"
                    alt=""
                    width={80}
                    height={80}
                    className="mb-4"
                  />
                  <h3 className="text-lg font-bold text-foreground mb-1">AstroViah</h3>
                  <p className="text-xs text-muted mb-6">Your Cosmic Companion</p>
                  <div className="w-full space-y-2">
                    <div className="h-3 bg-purple-100 rounded-full w-full" />
                    <div className="h-3 bg-purple-50 rounded-full w-3/4" />
                    <div className="h-3 bg-pink-50 rounded-full w-5/6" />
                    <div className="h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl mt-4" />
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
