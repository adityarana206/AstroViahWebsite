import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/horoscope", label: "Horoscope" },
  { href: "/tarot", label: "Tarot" },
  { href: "/matchmaking", label: "Matchmaking" },
  { href: "/ai-astrology", label: "AI Astrology" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header role="banner">
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2" aria-label="AstroViah Home">
              <Image
                src="/logo.png"
                alt="AstroViah Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold gradient-text">AstroViah</span>
            </Link>

            <ul className="hidden lg:flex items-center gap-6" role="menubar">
              {navLinks.map((link) => (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    role="menuitem"
                    className="text-sm font-medium text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden sm:block px-4 py-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/pricing"
                className="gradient-bg text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
