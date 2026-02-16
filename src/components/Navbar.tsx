import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#horoscope", label: "Horoscope" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#app", label: "App" },
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

            <ul className="hidden md:flex items-center gap-8" role="menubar">
              {navLinks.map((link) => (
                <li key={link.href} role="none">
                  <a
                    href={link.href}
                    role="menuitem"
                    className="text-sm font-medium text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <button className="hidden sm:block px-4 py-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                Sign In
              </button>
              <button className="gradient-bg text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-purple-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
