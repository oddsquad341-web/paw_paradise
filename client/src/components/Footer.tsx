import { Link } from 'wouter';

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
];

const SOCIAL_LINKS = [
  { label: 'Instagram', url: '#' },
  { label: 'Facebook', url: '#' },
  { label: 'YouTube', url: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-3">Paw Paradise</h3>
            <p className="text-gray-400 text-sm mb-4">
              A warm, loving, and joyful home away from home for pets and rescues in Gurgaon.
            </p>
            <p className="text-gray-400 text-sm font-medium">where every paw feels at home</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Aashima</p>
                <a href="tel:+919873218040" className="text-white hover:text-green-400 transition-colors font-medium">
                  +91 9873 218 040
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Deepshikha</p>
                <a href="tel:+919319656021" className="text-white hover:text-green-400 transition-colors font-medium">
                  +91 9319 656 021
                </a>
              </div>
              <div className="pt-2">
                <p className="text-gray-400 mb-2">Location</p>
                <p className="text-white">Bhondsi, Gurgaon, Haryana</p>
              </div>
            </div>
          </div>

          {/* WhatsApp & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Connect</h4>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dog%20care%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
              >
                WhatsApp Aashima
              </a>
              <a
                href="https://wa.me/919319656021?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dog%20care%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-center transition-colors"
              >
                WhatsApp Deepshikha
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Paw Paradise. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.label} href={link.url} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
