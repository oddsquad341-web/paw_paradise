import Layout from '@/components/Layout';
import { Link } from 'wouter';
import { ArrowRight, Wind, Sun, Droplets, Shield, TreePine, Home } from 'lucide-react';

const FEATURES = [
  { icon: Home, title: '3 Dedicated Boarding Rooms', desc: 'Private, clean rooms designed for comfort. Each dog has their own space.' },
  { icon: Wind, title: 'AC & Heating Year-Round', desc: 'Fully climate-controlled. Cool summers, warm winters — always comfortable.' },
  { icon: TreePine, title: '1 Acre+ Open Grounds', desc: 'Sprawling outdoor play area with shade, trees, and plenty of room to roam.' },
  { icon: Droplets, title: 'Pool & Water Play', desc: 'Our dogs love the water. A dedicated splash zone for those who want it.' },
  { icon: Sun, title: 'Natural Light & Ventilation', desc: 'Open-air design keeps the environment fresh, bright, and stress-free.' },
  { icon: Shield, title: 'Secure Perimeter', desc: 'Fully fenced compound. Your dog is safe — always.' },
];

const FACILITY_GALLERY = [
  { src: '/assets/photos/facility-1.jpg', label: 'Main Building' },
  { src: '/assets/photos/facility-2.jpg', label: 'Open Grounds & Trees' },
  { src: '/assets/photos/facility-3.jpg', label: 'Outdoor Play Zone' },
  { src: '/assets/photos/hero-wide-4.jpg', label: 'Front Compound' },
  { src: '/assets/photos/dog-6.jpg',       label: 'Dogs on the Lawn' },
  { src: '/assets/photos/team-1.jpg',      label: 'Handler on Grounds' },
];

export default function Facility() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#1a1f3c', minHeight: '55vh' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/assets/photos/hero-wide-4.jpg')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,31,60,0.6), rgba(26,31,60,0.95))' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col justify-center" style={{ minHeight: '55vh' }}>
          <div className="eyebrow animate-fade-up" style={{ color: '#58bd7a', justifyContent: 'center' }}>Bhondsi, Gurgaon</div>
          <h1 className="display-xl text-white animate-fade-up delay-100 mb-4">Our Facility</h1>
          <p className="body-lg animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '36rem', margin: '0 auto' }}>
            Over 1 acre of purpose-built space — designed for dogs to feel truly free.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40L1440 40L1440 10C1200 35 900 0 600 20C300 40 100 0 0 15L0 40Z" fill="#f4f1e5"/>
          </svg>
        </div>
      </section>

      {/* Features grid */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <div className="eyebrow">What's here</div>
          <h2 className="display-lg" style={{ color: '#1a1f3c' }}>Built for dogs. Really.</h2>
          <p className="body-lg mt-3 max-w-xl mx-auto" style={{ color: '#666' }}>
            We didn't repurpose a backyard. We built a proper facility from the ground up — with dogs' needs in mind at every step.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {FEATURES.map((f) => (
            <div key={f.title} className="reveal bg-white rounded-2xl p-7 card-hover shadow-sm border" style={{ borderColor: '#eee' }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: '#eef0f8' }}>
                <f.icon size={22} style={{ color: '#3f51a3' }} />
              </div>
              <h3 className="font-700 mb-2" style={{ fontWeight: 700, color: '#1a1f3c' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo tour */}
      <section className="section" style={{ background: '#1a1f3c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="eyebrow" style={{ color: '#58bd7a' }}>Photo tour</div>
            <h2 className="display-lg text-white">See it yourself</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 stagger">
            {FACILITY_GALLERY.map((img, i) => (
              <div key={i} className={`reveal img-zoom rounded-2xl overflow-hidden relative group shadow-lg ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{ height: i === 0 ? '380px' : '240px' }}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: 'linear-gradient(to top, rgba(26,31,60,0.75), transparent 55%)' }}>
                  <p className="text-white font-600 text-sm" style={{ fontWeight: 600 }}>{img.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link href="/gallery" className="btn-outline-white">Full gallery <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-14 px-6" style={{ background: '#f1d4dd' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center reveal">
          {[
            { n: '1+', label: 'Acre of space' },
            { n: '30+', label: 'Kennels' },
            { n: '3', label: 'Boarding rooms' },
            { n: '24/7', label: 'Staff on duty' },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-5xl font-800 mb-2" style={{ fontWeight: 800, color: '#3f51a3' }}>{s.n}</p>
              <p className="text-sm" style={{ color: '#666' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map + visit */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="eyebrow">Find us</div>
            <h2 className="display-lg mb-4" style={{ color: '#1a1f3c' }}>Come visit us</h2>
            <p className="body-lg mb-6" style={{ color: '#555' }}>
              We're located in Bhondsi, Gurgaon — just a short drive from most of Gurugram. Come take a tour, no appointment necessary.
            </p>
            <div className="rounded-2xl p-5 mb-8" style={{ background: '#f4f1e5', border: '2px solid #ddd8c5' }}>
              <p className="font-700 mb-1" style={{ fontWeight: 700, color: '#1a1f3c' }}>Paw Paradise</p>
              <p className="text-sm" style={{ color: '#666' }}>Bhondsi, Gurugram, Haryana</p>
              <p className="text-sm mt-2" style={{ color: '#666' }}>Open 24 hours, 7 days a week</p>
            </div>
            <a href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20visit%20the%20facility!" target="_blank" rel="noopener noreferrer" className="btn-green">
              Plan a visit <ArrowRight size={16} />
            </a>
          </div>
          <div className="reveal-right rounded-3xl overflow-hidden shadow-2xl" style={{ height: '380px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.3!2d77.03!3d28.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBhondsi%2C+Gurugram!5e0!3m2!1sen!2sin!4v1"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Paw Paradise location" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
