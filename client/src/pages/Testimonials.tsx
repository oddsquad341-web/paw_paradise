import Layout from '@/components/Layout';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    dog: 'Max (Golden Retriever)',
    text: 'Paw Paradise has been a game-changer for us. Max absolutely loves his time there, and we feel completely at ease knowing he\'s in such caring hands. The team goes above and beyond.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    dog: 'Bella (Labrador)',
    text: 'The team at Paw Paradise treats every dog like their own. Bella comes back happy, well-rested, and always excited to go back. We couldn\'t ask for better care.',
    rating: 5,
  },
  {
    name: 'Anjali Patel',
    dog: 'Simba (German Shepherd)',
    text: 'We trust Paw Paradise completely. The care, attention to detail, and genuine love for dogs is evident in everything they do. Simba is thriving here.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    dog: 'Charlie (Beagle)',
    text: 'Charlie\'s behavior has improved so much since he started daycare at Paw Paradise. The socialization and structured care have made a real difference.',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    dog: 'Luna (Cocker Spaniel)',
    text: 'The grooming service is exceptional. Luna always comes back looking and feeling her best. The team is gentle and professional.',
    rating: 5,
  },
  {
    name: 'Arjun Reddy',
    dog: 'Rocky (German Shepherd Mix)',
    text: 'We rescued Rocky, and Paw Paradise\'s rehabilitation program has been instrumental in his recovery. They truly care about rescue animals.',
    rating: 5,
  },
  {
    name: 'Divya Nair',
    dog: 'Milo (Pug)',
    text: 'The nutrition support has been great for Milo\'s health. The team understands his dietary needs and provides customized care. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Sanjay Malhotra',
    dog: 'Duke (Boxer)',
    text: 'Paw Paradise is the only place we trust with Duke. The facility is clean, spacious, and the staff is incredibly caring. Worth every penny.',
    rating: 5,
  },
  {
    name: 'Meera Kapoor',
    dog: 'Daisy (Mixed Breed)',
    text: 'We\'ve used Paw Paradise for boarding, daycare, and grooming. Every service is top-notch. Daisy is always happy and healthy.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Testimonials</h1>
          <p className="text-xl max-w-2xl mx-auto">
            What pet parents say about their experience at Paw Paradise
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-secondary-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.dog}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold text-blue-700 mb-2">{TESTIMONIALS.length}+</h3>
              <p className="text-gray-700 text-lg">Happy Pet Parents</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-green-500 mb-2">35+</h3>
              <p className="text-gray-700 text-lg">Rescues in Care</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-pink-500 mb-2">5.0</h3>
              <p className="text-gray-700 text-lg">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Family?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the Paw Paradise difference. Your dog deserves the best care.
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
              Book a Visit
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
