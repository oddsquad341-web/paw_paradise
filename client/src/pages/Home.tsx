import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { Star, Heart, Users, Leaf } from 'lucide-react';

const TRUST_POINTS = [
  { icon: Heart, label: 'Personalized Care', desc: 'Individual attention for every dog' },
  { icon: Users, label: 'Expert Supervision', desc: '1 staff per 8 dogs' },
  { icon: Leaf, label: 'Open Space', desc: 'Over 1 acre of land' },
  { icon: Star, label: 'Rescue Support', desc: '35+ rescues in care' },
];

const SERVICES = [
  {
    title: '24/7 Dog Boarding',
    desc: 'Comfortable stays with personalized care',
    href: '/services/boarding',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-boarding-DxQg9FC9s2PsjYzb2MugG6.webp',
  },
  {
    title: 'Dog Daycare',
    desc: 'Socialized playtime under expert supervision',
    href: '/services/daycare',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-daycare-oRvLUTzHLranWdu3EMfFbK.webp',
  },
  {
    title: 'Grooming & Hygiene',
    desc: 'Bathing, brushing, and nail trimming',
    href: '/services/grooming',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-grooming-9mRvDxCzZ6s8YuZE9XACZK.webp',
  },
  {
    title: 'Diet & Nutrition',
    desc: 'Customized meal plans for every dog',
    href: '/services/nutrition',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-nutrition-TebHTCNJZTvvMhGF4cP5ZS.webp',
  },
];

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    dog: 'Max (Golden Retriever)',
    text: 'Paw Paradise has been a game-changer for us. Max absolutely loves his time there, and we feel completely at ease knowing he\'s in such caring hands.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    dog: 'Bella (Labrador)',
    text: 'The team at Paw Paradise treats every dog like their own. Bella comes back happy, well-rested, and always excited to go back.',
    rating: 5,
  },
  {
    name: 'Anjali Patel',
    dog: 'Simba (German Shepherd)',
    text: 'We trust Paw Paradise completely. The care, attention to detail, and genuine love for dogs is evident in everything they do.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/hero-dogs-RoJWRPAYDCEMGXCqHtPXG9.webp)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            A Warm, Trusted Home Away From Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Care, comfort, and joyful companionship for every dog in Gurgaon
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dog%20care%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href="#services"
              className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Services
            </a>
          </div>
          <p className="mt-8 text-lg italic font-light">where every paw feels at home</p>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {TRUST_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.label} className="text-center">
                  <Icon className="w-12 h-12 text-blue-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">{point.label}</h3>
                  <p className="text-gray-600 text-sm">{point.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-secondary-cream">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">About Paw Paradise</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Paw Paradise is a warm, loving, and joyful home away from home for pets and rescues in Gurgaon, where every tail wags with happiness. We provide love, comfort, and rehabilitation to over 35 rescues and pets in our care, while also offering top-quality services for pet parents.
          </p>
          <Link href="/about" className="text-blue-700 hover:text-blue-800 font-semibold text-lg">
            Learn More About Us →
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Link key={service.href} href={service.href}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-secondary-cream">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Paw Paradise</h2>
          <div className="space-y-6">
            {[
              'Personalized care tailored to each dog\'s unique needs',
              'Supervised social play in a calm, safe environment',
              'Rescue-first compassion balanced with premium pet care',
              'Over 1 acre of open space for play and relaxation',
              'Thoughtful nutrition support and care routines',
              'Caring, experienced founders and team members',
            ].map((reason, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <p className="text-gray-700 text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Pet Parents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.dog}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/testimonials" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
              Read More Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Facility Preview */}
      <section className="py-16 bg-secondary-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Our Facility</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/facility-outdoor-N8diFedVJKrUHMRnotXiwu.webp"
                alt="Paw Paradise Facility"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Over 1 Acre of Open Space</h3>
              <p className="text-gray-700 mb-4 text-lg">
                Our facility is designed with comfort and safety in mind. With over 1 acre of open land, 30+ individual kennels, and dedicated care areas, every dog has the space they need to play, rest, and thrive.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Spacious outdoor play areas',
                  'Comfortable indoor rest spaces',
                  'Supervised play with trained staff',
                  'Clean, hygienic environment',
                  'Home-like atmosphere',
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/facility" className="text-blue-700 hover:text-blue-800 font-semibold text-lg">
                Explore Our Facility →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Give Your Dog a Home Away From Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with us today. We're here to answer all your questions and help your dog find their perfect stay.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dog%20care%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Send Enquiry
            </a>
            <a
              href="tel:+919873218040"
              className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
