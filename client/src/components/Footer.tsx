import { Link } from 'wouter';
import { Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Facility', href: '/facility' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const SERVICES = [
  '24/7 Dog Boarding',
  'Dog Daycare',
  'Grooming & Hygiene',
  'Diet & Nutrition',
  'Rescue Rehabilitation',
  'Adoption Assistance',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#1a1f3c' }} className="text-white">
      {/* Top CTA Strip */}
      <div style={{ background: '#3f51a3' }} className="py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow" style={{ color: '#58bd7a' }}>Ready to book?</p>
          <h2 className="display-md text-white mb-6">Give your dog a real home away from home</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20book%20a%20service!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green"
            >
              Chat on WhatsApp
            </a>

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/assets/logos/logo-white.png"
              alt="Paw Paradise"
              className="h-14 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              A warm, loving, and joyful home away from home for pets and rescues in Gurgaon.
            </p>
            <p className="text-sm italic" style={{ color: '#58bd7a' }}>"where every paw feels at home"</p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/pawparadisegurgaon/', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-700 mb-5 text-sm tracking-widest uppercase" style={{ color: '#58bd7a', fontWeight: 700 }}>Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-700 mb-5 text-sm tracking-widest uppercase" style={{ color: '#58bd7a', fontWeight: 700 }}>Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-700 mb-5 text-sm tracking-widest uppercase" style={{ color: '#58bd7a', fontWeight: 700 }}>Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>AASHIMA</p>
                <a href="tel:+919873218040" className="flex items-center gap-2 text-sm font-600 text-white hover:text-[#58bd7a] transition-colors" style={{ fontWeight: 600 }}>
                  <Phone size={13} />
                  +91 98732 18040
                </a>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>DEEPSHIKHA</p>
                <a href="tel:+919319656021" className="flex items-center gap-2 text-sm font-600 text-white hover:text-[#58bd7a] transition-colors" style={{ fontWeight: 600 }}>
                  <Phone size={13} />
                  +91 93196 56021
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: '#58bd7a' }} />
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Bhondsi, Gurgaon, Haryana</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {year} Paw Paradise. All rights reserved. Bhondsi, Gurgaon.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Trained handlers. Safe spaces. Real play.
          </p>
        </div>
      </div>
    </footer>
  );
}
