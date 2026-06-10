import Layout from '@/components/Layout';
import { MapPin, Users, Home, Leaf } from 'lucide-react';

const FACILITY_FEATURES = [
  {
    icon: Leaf,
    title: 'Over 1 Acre of Open Space',
    desc: 'Spacious outdoor areas for dogs to play, run, and enjoy fresh air in a safe environment.',
  },
  {
    icon: Home,
    title: '30+ Individual Kennels',
    desc: 'Comfortable, clean kennels designed for rest and relaxation, not cramped cages.',
  },
  {
    icon: Users,
    title: '1 Staff per 8 Dogs',
    desc: 'Dedicated care ratio ensuring every dog receives personalized attention and supervision.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    desc: 'Located in Bhondsi, Gurgaon, easily accessible for pet parents.',
  },
];

const FACILITY_SECTIONS = [
  {
    title: 'Outdoor Play Areas',
    desc: 'Our expansive outdoor space is designed for dogs to play, socialize, and exercise safely. With shaded areas for rest and open spaces for running, every dog finds their comfort zone.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/facility-outdoor-N8diFedVJKrUHMRnotXiwu.webp',
  },
  {
    title: 'Comfortable Rest Spaces',
    desc: 'Individual kennels are designed with comfort in mind. Each space is clean, well-ventilated, and equipped with comfortable bedding for restful sleep.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-boarding-DxQg9FC9s2PsjYzb2MugG6.webp',
  },
  {
    title: 'Professional Grooming Area',
    desc: 'Our grooming facilities are equipped with professional tools and maintained to the highest hygiene standards.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-grooming-9mRvDxCzZ6s8YuZE9XACZK.webp',
  },
];

export default function Facility() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Facility</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A premium space designed for comfort, safety, and joyful care
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Facility Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FACILITY_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center">
                  <Icon className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facility Sections */}
      <section className="py-16 bg-secondary-cream">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {FACILITY_SECTIONS.map((section, idx) => (
              <div key={section.title} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <img
                    src={section.image}
                    alt={section.title}
                    className="rounded-lg shadow-lg w-full h-96 object-cover"
                  />
                </div>
                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">{section.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{section.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Standards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Care Standards</h2>
          <div className="space-y-6">
            {[
              { title: 'Hygiene & Cleanliness', desc: 'Daily cleaning and sanitization of all spaces. Regular health checks for every dog.' },
              { title: 'Supervision & Safety', desc: 'Constant supervision during play. Trained staff trained in dog behavior and first aid.' },
              { title: 'Comfort & Amenities', desc: 'Individual attention, comfortable bedding, and access to water and shade at all times.' },
              { title: 'Nutrition & Health', desc: 'Customized meal plans, health monitoring, and veterinary care coordination.' },
              { title: 'Socialization', desc: 'Structured play sessions and socialization programs for all dogs.' },
              { title: 'Emergency Preparedness', desc: 'Emergency protocols and veterinary partnerships for immediate care if needed.' },
            ].map((standard, idx) => (
              <div key={idx} className="bg-secondary-cream p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{standard.title}</h3>
                <p className="text-gray-700">{standard.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Visit */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-8">Visit Us</h2>
          <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            <p className="text-lg mb-2">Bhondsi, Gurgaon, Haryana</p>
            <p className="text-gray-700 mb-6">We welcome visits! Schedule a time to see our facility and meet the team.</p>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20schedule%20a%20visit%20to%20your%20facility."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Schedule a Visit
              </a>
              <a
                href="tel:+919873218040"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Call to Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Give Your Dog a Home Away From Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            Visit our facility and see why pet parents trust Paw Paradise with their beloved dogs.
          </p>
          <a
            href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dog%20care%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
}
