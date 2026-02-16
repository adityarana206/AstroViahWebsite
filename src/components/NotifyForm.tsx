"use client";

export default function NotifyForm() {
  return (
    <form
      className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto lg:mx-0"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Early access notification signup"
    >
      <label htmlFor="notify-email" className="sr-only">Email address for early access</label>
      <input
        id="notify-email"
        type="email"
        placeholder="Enter your email for early access"
        required
        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/50 backdrop-blur-sm"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-purple-50 transition-colors text-sm whitespace-nowrap"
      >
        Notify Me
      </button>
    </form>
  );
}
