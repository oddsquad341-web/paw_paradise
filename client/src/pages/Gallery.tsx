import Layout from '@/components/Layout';
import { useState } from 'react';

const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'play', label: 'Dogs at Play' },
  { id: 'rest', label: 'Dogs Resting' },
  { id: 'daycare', label: 'Daycare Moments' },
  { id: 'boarding', label: 'Boarding Moments' },
  { id: 'grooming', label: 'Grooming' },
  { id: 'rescue', label: 'Rescue Care' },
  { id: 'facility', label: 'Facility' },
];

const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'play',
    title: 'Playtime Fun',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/hero-dogs-RoJWRPAYDCEMGXCqHtPXG9.webp',
    type: 'image',
  },
  {
    id: 2,
    category: 'daycare',
    title: 'Supervised Daycare',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-daycare-oRvLUTzHLranWdu3EMfFbK.webp',
    type: 'image',
  },
  {
    id: 3,
    category: 'rest',
    title: 'Comfortable Rest',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-boarding-DxQg9FC9s2PsjYzb2MugG6.webp',
    type: 'image',
  },
  {
    id: 4,
    category: 'grooming',
    title: 'Professional Grooming',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-grooming-9mRvDxCzZ6s8YuZE9XACZK.webp',
    type: 'image',
  },
  {
    id: 5,
    category: 'facility',
    title: 'Our Outdoor Space',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/facility-outdoor-N8diFedVJKrUHMRnotXiwu.webp',
    type: 'image',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Moments of joy, care, and companionship at Paw Paradise
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-secondary-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Want to See More?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Follow us on social media for daily updates and new moments from Paw Paradise.
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
