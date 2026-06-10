import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700">Paw Paradise</h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dog%20care%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
          >
            Chat on WhatsApp
          </a>
          <a
            href="#contact"
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
          >
            Enquire
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-700 hover:text-blue-700 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-200 space-y-2">
            <a
              href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dog%20care%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href="#contact"
              className="block w-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
            >
              Enquire
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
