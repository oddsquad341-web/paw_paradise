import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Facility', href: '/facility' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass shadow-md' : 'bg-transparent'
      }`}
      style={{ background: scrolled ? undefined : 'rgba(244,241,229,0.97)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/assets/logos/logo-green.png"
            alt="Paw Paradise"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-1.5 rounded-full text-sm font-500 transition-all duration-200 ${
                location === item.href
                  ? 'bg-[#3f51a3] text-white'
                  : 'text-[#1a1f3c] hover:bg-[#f1d4dd] hover:text-[#3f51a3]'
              }`}
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontWeight: 500 }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="tel:+919873218040"
            className="btn-outline text-sm !py-2 !px-4"
          >
            <Phone size={14} />
            Call Us
          </a>
          <a
            href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green text-sm !py-2 !px-4"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-full hover:bg-[#f1d4dd] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#f4f1e5] border-t border-[#ddd8c5] py-4 px-4 animate-fade-up">
          <nav className="space-y-1 mb-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2.5 rounded-xl font-500 transition-all ${
                  location === item.href
                    ? 'bg-[#3f51a3] text-white'
                    : 'text-[#1a1f3c] hover:bg-[#f1d4dd]'
                }`}
                style={{ fontWeight: 500 }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2 pt-3 border-t border-[#ddd8c5]">
            <a
              href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green flex-1 text-center text-sm !py-2"
            >
              WhatsApp
            </a>
            <a href="tel:+919873218040" className="btn-outline flex-1 text-center text-sm !py-2">
              Call Us
            </a>

          </div>
        </div>
      )}
    </header>
  );
}
