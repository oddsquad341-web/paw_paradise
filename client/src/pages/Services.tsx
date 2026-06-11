import Layout from '@/components/Layout';
import { Link } from 'wouter';
import { Clock, Users, Scissors, Apple, Heart, Shield, Waves, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

const SERVICES = [
  {
    id: 'boarding',
    icon: Clock,
    title: '24/7 Dog Boarding',
    tagline: 'Comfortable stays with personalized care',
    description: 'Whether your dog needs a weekend getaway or an extended stay, our 24/7 boarding service provides round-the-clock care. 3 dedicated rooms with AC and heaters for year-round comfort.',
    features: ['Personalized attention and care routines','Home-like comfort in dedicated rooms','AC in summer, heaters in winter','Three nutritious meals a day','Regular health and hygiene monitoring','Updates for pet parents on request'],
    image: '/assets/photos/dog-4.jpg',
    color: '#3f51a3', bg: '#eef0f8',
  },
  {
    id: 'daycare',
    icon: Users,
    title: 'Dog Daycare',
    tagline: 'Supervised social play under expert care',
    description: 'Perfect for dogs needing daytime activity and companionship. Structured play, safe socialization, and proper rest cycles — with one staff per 8 dogs at all times.',
    features: ['Supervised social playtime','1:8 staff-to-dog ratio','Safe interactions with other dogs','Structured rest and activity periods','Access to over 1 acre of open space','Flexible scheduling'],
    image: '/assets/photos/dog-6.jpg',
    color: '#58bd7a', bg: '#edf8f2',
  },
  {
    id: 'grooming',
    icon: Scissors,
    title: 'Grooming & Hygiene',
    tagline: 'Bathing, brushing, and nail trimming',
    description: 'Professional grooming that keeps your dog clean, healthy, and comfortable. Our gentle approach ensures a calm, stress-free experience every time.',
    features: ['Professional bathing with quality products','Thorough brushing and coat care','Nail trimming and paw care','Gentle, stress-free handling','Health monitoring during grooming','Customized for breed and coat type'],
    image: '/assets/photos/care-1.jpg',
    color: '#3f51a3', bg: '#eef0f8',
  },
  {
    id: 'nutrition',
    icon: Apple,
    title: 'Diet & Nutrition',
    tagline: 'Three meals a day, tailored to your dog',
    description: 'We believe good nutrition is the foundation of good health. Every dog gets a meal plan based on their specific dietary needs — no guesswork, no shortcuts.',
    features: ['Three wholesome meals daily','Customized plans based on dietary needs','Fresh, quality ingredients','Allergy and health condition awareness','Consistent feeding schedules','Weight and condition monitoring'],
    image: '/assets/photos/dog-2.jpg',
    color: '#58bd7a', bg: '#edf8f2',
  },
];

const ADDITIONAL = [
  { icon: Heart, title: 'Rescue Rehabilitation', desc: 'Structured care and medical support for stray and injured dogs. We\'ve helped over 100 dogs beyond our own facility.', image: '/assets/photos/care-2.jpg' },
  { icon: Waves, title: 'Temporary Foster Boarding', desc: 'Safe, loving short-term care for dogs between homes. Calm, structured, and attentive.', image: '/assets/photos/dog-11.jpg' },
  { icon: Shield, title: 'Adoption Assistance', desc: 'We help match rescued dogs with the right forever families. Real guidance through the adoption process.', image: '/assets/photos/dog-3.jpg' },
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
      <section className="relative overflow-hidden" style={{ background: '#1a1f3c', minHeight: '45vh' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/assets/photos/hero-wide-5.jpg')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,31,60,0.7), rgba(26,31,60,0.95))' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col justify-center" style={{ minHeight: '45vh' }}>
          <div className="eyebrow animate-fade-up" style={{ color: '#58bd7a', justifyContent: 'center' }}>What we offer</div>
          <h1 className="display-xl text-white animate-fade-up delay-100 mb-4">Our Services</h1>
          <p className="body-lg animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '36rem', margin: '0 auto' }}>
            Every service we offer is built around one thing — what's best for your dog.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40L1440 40L1440 10C1200 35 900 0 600 20C300 40 100 0 0 15L0 40Z" fill="#f4f1e5"/>
          </svg>
        </div>
      </section>

      {/* Core services */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-28">
          {SERVICES.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className={i % 2 === 0 ? 'reveal-left' : 'reveal-right'}>
                  <div className="eyebrow" style={{ color: s.color }}>Service</div>
                  <h2 className="display-lg mb-3" style={{ color: '#1a1f3c' }}>{s.title}</h2>
                  <p className="text-lg mb-4" style={{ color: s.color, fontWeight: 600 }}>{s.tagline}</p>
                  <p className="body-lg mb-8" style={{ color: '#555' }}>{s.description}</p>
                  <ul className="space-y-3 mb-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex gap-3 items-start text-sm" style={{ color: '#444' }}>
                        <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: s.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services!" target="_blank" rel="noopener noreferrer"
                    className="btn-primary" style={{ background: s.color }}>
                    Enquire via WhatsApp <ArrowRight size={16} />
                  </a>
                </div>
                <div className={i % 2 === 0 ? 'reveal-right' : 'reveal-left'}>
                  <div className="img-zoom rounded-3xl overflow-hidden shadow-2xl">
                    <img src={s.image} alt={s.title} className="w-full object-cover object-top" style={{ aspectRatio: '4/5' }} />
                  </div>
                </div>
              </div>
              {i < SERVICES.length - 1 && <div className="mt-28 border-t" style={{ borderColor: '#ddd8c5' }} />}
            </section>
          ))}
        </div>
      </div>

      {/* Additional services */}
      <section className="section" style={{ background: '#1a1f3c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <div className="eyebrow" style={{ color: '#58bd7a' }}>Beyond the basics</div>
            <h2 className="display-lg text-white">Additional services</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 stagger">
            {ADDITIONAL.map((a) => (
              <div key={a.title} className="reveal rounded-2xl overflow-hidden card-hover" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="img-zoom h-48">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'rgba(63,81,163,0.3)' }}>
                    <a.icon size={18} style={{ color: '#7b8fd4' }} />
                  </div>
                  <h3 className="font-700 mb-2 text-white" style={{ fontWeight: 700 }}>{a.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: '#f1d4dd' }}>
        <h2 className="display-md mb-4" style={{ color: '#1a1f3c' }}>Not sure which service you need?</h2>
        <p className="body-lg mb-8 max-w-lg mx-auto" style={{ color: '#555' }}>
          Just WhatsApp us. Tell us about your dog and we'll help you figure out the best fit.
        </p>
        <a href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20help%20choosing%20a%20service!" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Get a recommendation <ArrowRight size={16} />
        </a>
      </section>
    </Layout>
  );
}
