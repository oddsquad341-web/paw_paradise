import Layout from '@/components/Layout';
import { Link } from 'wouter';
import { Clock, Users, Scissors, Apple, Heart } from 'lucide-react';

const SERVICE_DETAILS = [
  {
    id: 'boarding',
    icon: Clock,
    title: '24/7 Dog Boarding',
    tagline: 'Comfortable stays with personalized care',
    description: 'Whether your dog needs a weekend getaway or an extended stay, our 24/7 boarding service provides round-the-clock care in a comfortable, home-like environment.',
    features: [
      'Personalized attention and care routines',
      'Home-like comfort and familiar spaces',
      'Supervised rest and play',
      'Hygiene and health monitoring',
      'Regular updates for pet parents',
      'Suitable for short and extended stays',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-boarding-DxQg9FC9s2PsjYzb2MugG6.webp',
  },
  {
    id: 'daycare',
    icon: Users,
    title: 'Dog Daycare',
    tagline: 'Socialized playtime under expert supervision',
    description: 'Perfect for dogs needing daytime activity, companionship, and monitored social interaction. Our daycare provides a structured, safe environment where dogs play, rest, and thrive.',
    features: [
      'Supervised social playtime',
      'Safe interaction with other dogs',
      'Structured rest periods',
      'Safe handling and care',
      'Caring, attentive environment',
      'Flexible scheduling',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-daycare-oRvLUTzHLranWdu3EMfFbK.webp',
  },
  {
    id: 'grooming',
    icon: Scissors,
    title: 'Grooming & Hygiene Care',
    tagline: 'Bathing, brushing, and nail trimming',
    description: 'Professional grooming services that keep your dog clean, healthy, and comfortable. Our gentle approach ensures a stress-free grooming experience.',
    features: [
      'Professional bathing with quality products',
      'Thorough brushing and coat care',
      'Nail trimming and paw care',
      'Gentle, stress-free handling',
      'Health monitoring during grooming',
      'Customized grooming plans',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-grooming-9mRvDxCzZ6s8YuZE9XACZK.webp',
  },
  {
    id: 'nutrition',
    icon: Apple,
    title: 'Diet & Nutrition Support',
    tagline: 'Customized meal plans based on dietary needs',
    description: 'We understand that every dog has unique nutritional needs. Our nutrition support includes customized meal planning and careful attention to dietary requirements.',
    features: [
      'Customized meal plans',
      'Attention to dietary restrictions',
      'Balanced nutrition monitoring',
      'Health-conscious feeding routines',
      'Special diet support',
      'Nutritional guidance for pet parents',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-nutrition-TebHTCNJZTvvMhGF4cP5ZS.webp',
  },
  {
    id: 'rescue',
    icon: Heart,
    title: 'Rescue & Additional Services',
    tagline: 'Rehabilitation, foster boarding, and adoption support',
    description: 'We\'re committed to rescue and rehabilitation work. We provide temporary foster boarding, adoption assistance, and rehabilitation support for rescue animals.',
    features: [
      'Temporary foster boarding for rescues',
      'Rescue rehabilitation programs',
      'Adoption assistance and support',
      'Health monitoring and care',
      'Socialization and behavioral support',
      'Long-term care for special needs rescues',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/facility-outdoor-N8diFedVJKrUHMRnotXiwu.webp',
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive pet care solutions tailored to every dog's unique needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-secondary-cream">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {SERVICE_DETAILS.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-lg w-full h-96 object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-10 h-10 text-blue-700" />
                      <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-green-700 font-semibold mb-4">{service.tagline}</p>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">{service.description}</p>

                    <h3 className="text-xl font-bold mb-4 text-gray-900">What's Included:</h3>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex gap-3 text-gray-700">
                          <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col md:flex-row gap-4">
                      <a
                        href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dog%20care%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                      >
                        Chat on WhatsApp
                      </a>
                      <a
                        href="#contact"
                        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Trust Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Expert Care', desc: 'Over 35 rescues and pets in our care, with years of experience' },
              { title: 'Spacious Facility', desc: 'Over 1 acre of open land with 30+ individual kennels' },
              { title: 'Personalized Attention', desc: '1 staff member per 8 dogs for individual care' },
              { title: 'Health Monitoring', desc: 'Careful attention to each dog\'s health and wellbeing' },
              { title: 'Home-Like Environment', desc: 'Comfortable spaces designed for relaxation and play' },
              { title: 'Rescue Support', desc: 'Dedicated to rehabilitation and adoption assistance' },
            ].map((factor, idx) => (
              <div key={idx} className="bg-secondary-cream p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{factor.title}</h3>
                <p className="text-gray-700">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Give Your Dog the Best Care?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss which service is right for your dog.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dog%20care%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
