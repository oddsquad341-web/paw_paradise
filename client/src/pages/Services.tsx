import Layout from '@/components/Layout';
import { Link } from 'wouter';
import { Clock, Users, Scissors, Apple, Heart, Shield, Waves, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const SERVICES = [
  {
    id: 'boarding',
    icon: Clock,
    title: '24/7 Dog Boarding',
    tagline: 'Comfortable stays with personalized care',
    description: 'Whether your dog needs a weekend getaway or an extended stay, our 24/7 boarding service provides round-the-clock care. 3 dedicated rooms with AC and heaters for year-round comfort.',
    features: [
      'Personalized attention and care routines',
      'Home-like comfort in dedicated rooms',
      'AC in summer, heaters in winter',
      'Three nutritious meals a day',
      'Regular health and hygiene monitoring',
      'Updates for pet parents on request',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-boarding-DxQg9FC9s2PsjYzb2MugG6.webp',
    color: '#3f51a3',
    bg: '#eef0f8',
  },
  {
    id: 'daycare',
    icon: Users,
    title: 'Dog Daycare',
    tagline: 'Supervised social play under expert care',
    description: 'Perfect for dogs needing daytime activity and companionship. Structured play, safe socialization, and proper rest cycles — with one staff per 8 dogs at all times.',
    features: [
      'Supervised social playtime',
      '1:8 staff-to-dog ratio',
      'Safe interactions with other dogs',
      'Structured rest and activity periods',
      'Access to over 1 acre of open space',
      'Flexible scheduling',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-daycare-oRvLUTzHLranWdu3EMfFbK.webp',
    color: '#58bd7a',
    bg: '#edf8f2',
  },
  {
    id: 'grooming',
    icon: Scissors,
    title: 'Grooming & Hygiene',
    tagline: 'Bathing, brushing, and nail trimming',
    description: 'Professional grooming that keeps your dog clean, healthy, and comfortable. Our gentle approach ensures a calm, stress-free experience every time.',
    features: [
      'Professional bathing with quality products',
      'Thorough brushing and coat care',
      'Nail trimming and paw care',
      'Gentle, stress-free handling',
      'Health monitoring during grooming',
      'Customized for breed and coat type',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-grooming-9mRvDxCzZ6s8YuZE9XACZK.webp',
    color: '#3f51a3',
    bg: '#eef0f8',
  },
  {
    id: 'nutrition',
    icon: Apple,
    title: 'Diet & Nutrition',
    tagline: 'Three meals a day, tailored to your dog',
    description: 'We believe good nutrition is the foundation of good health. Every dog gets a meal plan based on their specific dietary needs — no guesswork, no shortcuts.',
    features: [
      'Three wholesome meals daily',
      'Customized plans based on dietary needs',
      'Fresh, quality ingredients',
      'Allergy and health condition awareness',
      'Consistent feeding schedules',
      'Weight and condition monitoring',
    ],
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-nutrition-TebHTCNJZTvvMhGF4cP5ZS.webp',
    color: '#58bd7a',
    bg: '#edf8f2',
  },
];

const ADDITIONAL = [
  { icon: Heart, title: 'Rescue Rehabilitation', desc: 'Structured care and medical support for stray and injured dogs. We\'ve helped over 100 dogs beyond our own facility.' },
  { icon: Waves, title: 'Temporary Foster Boarding', desc: 'Safe, loving short-term care for dogs between homes. Calm, structured, and attentive.' },
  { icon: Shield, title: 'Adoption Assistance', desc: 'We help match rescued dogs with the right forever families. Real guidance through the adoption process.' },
];

export default function Services() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);
  return (
    <Layout>
      {/* Hero */}
      <section className="section" style={{ background: '#1a1f3c' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="eyebrow animate-fade-up" style={{ color: '#58bd7a' }}>What we offer</div>
          <h1 className="display-xl text-white animate-fade-up delay-100 mb-6">Our services</h1>
          <p className="body-lg animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Trained handlers. Safe spaces. Real play. Just what your dog needs.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="space-y-24">
          {SERVICES.map((s, i) => (
            <div key={s.id} id={s.id} className={`grid lg:grid-cols-2 gap-16 items-center scroll-mt-24 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'reveal-right lg:order-2' : 'reveal-left'}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: s.bg }}>
                  <s.icon size={22} style={{ color: s.color }} />
                </div>
                <div className="eyebrow" style={{ color: s.color }}>{s.tagline}</div>
                <h2 className="display-md mb-4" style={{ color: '#1a1f3c' }}>{s.title}</h2>
                <p className="body-lg mb-6" style={{ color: '#555' }}>{s.description}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: '#444' }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs shrink-0" style={{ background: s.color }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20enquire%20about%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green"
                >
                  Enquire on WhatsApp
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className={i % 2 === 1 ? 'reveal-left lg:order-1' : 'reveal-right'}>
                <div className="rounded-3xl overflow-hidden shadow-2xl img-zoom">
                  <img src={s.image} alt={s.title} className="w-full aspect-[4/3] object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional */}
      <section className="section" style={{ background: '#f1d4dd' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="eyebrow" style={{ color: '#3f51a3' }}>Beyond the basics</div>
            <h2 className="display-lg" style={{ color: '#1a1f3c' }}>Additional services</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 stagger">
            {ADDITIONAL.map((a) => (
              <div key={a.title} className="reveal bg-white rounded-2xl p-8 card-hover">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: '#eef0f8' }}>
                  <a.icon size={22} style={{ color: '#3f51a3' }} />
                </div>
                <h3 className="font-700 mb-3 text-lg" style={{ fontWeight: 700, color: '#1a1f3c' }}>{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#3f51a3' }}>
        <div className="max-w-2xl mx-auto px-6 text-center reveal">
          <h2 className="display-lg text-white mb-4">Ready to get started?</h2>
          <p className="body-lg mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>Chat with us on WhatsApp — we'll answer your questions and help you pick the right plan for your dog.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919873218040" target="_blank" rel="noopener noreferrer" className="btn-green">
              Chat on WhatsApp <ArrowRight size={16} />
            </a>
            <Link href="/contact" className="btn-outline-white">Send an enquiry</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
