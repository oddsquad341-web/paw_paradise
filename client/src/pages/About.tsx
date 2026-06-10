import Layout from '@/components/Layout';
import { Heart, Shield, Leaf, Users } from 'lucide-react';

const VALUES = [
  {
    icon: Heart,
    title: 'Warm, Not Cutesy',
    desc: 'Friendly and caring, but never baby-talk or overly sugary. We treat every dog with genuine respect and affection.',
  },
  {
    icon: Shield,
    title: 'Assured, Not Salesy',
    desc: 'Confident, calm, and trustworthy. We let our work speak for itself without pushy language.',
  },
  {
    icon: Leaf,
    title: 'Clear, Not Clinical',
    desc: 'Plain, honest language about health, care, and routines. No medical jargon or unnecessary fluff.',
  },
  {
    icon: Users,
    title: 'Grounded, Not Dramatic',
    desc: 'Sincere, steady, and real. We reflect consistent care and trust in everything we do.',
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Paw Paradise</h1>
          <p className="text-xl max-w-2xl mx-auto">
            where every paw feels at home
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Paw Paradise is a warm, loving, and joyful home away from home for pets and rescues in Gurgaon, where every tail wags with happiness. We provide love, comfort, and rehabilitation to over 35 rescues and pets in our care, while also offering top-quality services for pet parents.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Founded by Aashima and Deepshikha, Paw Paradise was born from a simple belief: every dog deserves a safe, loving space where they can be themselves. Whether it's a dog needing temporary boarding, a rescue requiring rehabilitation, or a pet parent seeking trusted daycare, we're here to provide exactly that.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our facility spans over 1 acre of open land with 30+ individual kennels, designed with comfort and safety in mind. But what truly sets us apart is our heart—every decision we make is guided by genuine care for the dogs in our charge.
          </p>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-16 bg-secondary-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Approach to Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white p-8 rounded-lg shadow-md">
                  <Icon className="w-12 h-12 text-blue-700 mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why We Do This */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Why We Do This</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Balance Care & Rescue</h3>
              <p className="text-lg text-gray-700">
                We believe in balancing premium pet care services with rescue and rehabilitation work. Every service we offer helps fund our rescue initiatives, creating a sustainable model where compassion meets business.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Home Away From Home</h3>
              <p className="text-lg text-gray-700">
                Pet parents shouldn't have to choose between their careers and their dogs' happiness. We provide a safe, loving alternative where dogs feel at home while their families are away.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Rescue Rehabilitation</h3>
              <p className="text-lg text-gray-700">
                Over 35 rescues and pets in our care benefit from our rehabilitation programs, nutritional support, and socialization. Many have gone on to find loving forever homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-16 bg-secondary-cream">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Meet the Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Aashima</h3>
              <p className="text-gray-600 mb-4">Founder & Lead Caregiver</p>
              <p className="text-gray-700 mb-4">
                With years of experience in pet care and a genuine passion for rescue work, Aashima ensures every dog receives personalized attention and love.
              </p>
              <a href="https://wa.me/919873218040" className="text-blue-700 hover:text-blue-800 font-semibold">
                +91 9873 218 040
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Deepshikha</h3>
              <p className="text-gray-600 mb-4">Founder & Operations Lead</p>
              <p className="text-gray-700 mb-4">
                Deepshikha brings operational excellence and a heart for rescue animals. Her vision ensures Paw Paradise runs smoothly while maintaining our core values.
              </p>
              <a href="https://wa.me/919319656021" className="text-blue-700 hover:text-blue-800 font-semibold">
                +91 9319 656 021
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Paw Paradise Family</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking for premium pet care or want to support our rescue mission, we'd love to connect with you.
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
              href="tel:+919873218040"
              className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
