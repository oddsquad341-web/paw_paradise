import Layout from '@/components/Layout';
import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    petName: '',
    petBreed: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Paw Paradise, I'd like to enquire about your services. Name: ${formData.name}, Phone: ${formData.phone}, Email: ${formData.email}, Pet Name: ${formData.petName}, Pet Breed: ${formData.petBreed}, Service: ${formData.service}, Message: ${formData.message}`;
    window.open(`https://wa.me/919873218040?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We are here to answer all your questions about Paw Paradise
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-secondary-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900">WhatsApp</h3>
              <p className="text-gray-700 mb-4">Fastest way to reach us</p>
              <div className="space-y-2">
                <a
                  href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dog%20care%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-600 hover:text-green-700 font-semibold"
                >
                  Chat with Aashima
                </a>
                <a
                  href="https://wa.me/919319656021?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dog%20care%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-600 hover:text-green-700 font-semibold"
                >
                  Chat with Deepshikha
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Phone className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Phone</h3>
              <p className="text-gray-700 mb-4">Call us directly</p>
              <div className="space-y-2">
                <a
                  href="tel:+919873218040"
                  className="block text-blue-700 hover:text-blue-800 font-semibold"
                >
                  +91 9873 218 040 (Aashima)
                </a>
                <a
                  href="tel:+919319656021"
                  className="block text-blue-700 hover:text-blue-800 font-semibold"
                >
                  +91 9319 656 021 (Deepshikha)
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Location</h3>
              <p className="text-gray-700 mb-4">Visit us anytime</p>
              <p className="text-gray-900 font-semibold">Bhondsi, Gurgaon, Haryana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Send an Enquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Service Interested In *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                >
                  <option value="">Select a service</option>
                  <option value="24/7 Boarding">24/7 Dog Boarding</option>
                  <option value="Daycare">Dog Daycare</option>
                  <option value="Grooming">Grooming & Hygiene Care</option>
                  <option value="Nutrition">Diet & Nutrition Support</option>
                  <option value="Rescue">Rescue & Additional Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Dog Name</label>
                <input
                  type="text"
                  name="petName"
                  value={formData.petName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Your dog's name"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Dog Breed</label>
                <input
                  type="text"
                  name="petBreed"
                  value={formData.petBreed}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Your dog's breed"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="Tell us more about your enquiry..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Send Enquiry via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Prefer to Chat Directly?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            No problem! Click the WhatsApp button below to start a conversation immediately.
          </p>
          <a
            href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dog%20care%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Chat on WhatsApp Now
          </a>
        </div>
      </section>
    </Layout>
  );
}
