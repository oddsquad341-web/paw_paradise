import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { ArrowRight, Star, Heart, Users, Leaf, Clock, Wind, Waves, Shield } from 'lucide-react';

const STATS = [
  { number: '35+', label: 'Rescues in care' },
  { number: '100+', label: 'Dogs helped' },
  { number: '1 acre+', label: 'Open space' },
  { number: '30+', label: 'Individual kennels' },
];

const SERVICES = [
  {
    icon: Clock,
    title: '24/7 Dog Boarding',
    desc: 'Comfortable stays with personalized care. Home-like environment with round-the-clock supervision.',
    color: '#3f51a3',
    bg: '#eef0f8',
    href: '/services#boarding',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-boarding-DxQg9FC9s2PsjYzb2MugG6.webp',
  },
  {
    icon: Users,
    title: 'Dog Daycare',
    desc: 'Supervised social play in a safe, engaging environment. Structured activity and rest cycles.',
    color: '#58bd7a',
    bg: '#edf8f2',
    href: '/services#daycare',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-daycare-oRvLUTzHLranWdu3EMfFbK.webp',
  },
  {
    icon: Wind,
    title: 'Grooming & Hygiene',
    desc: 'Professional bathing, brushing, and nail trimming. Gentle, stress-free grooming for every dog.',
    color: '#a83f8a',
    bg: '#f8eef5',
    href: '/services#grooming',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-grooming-9mRvDxCzZ6s8YuZE9XACZK.webp',
  },
  {
    icon: Leaf,
    title: 'Diet & Nutrition',
    desc: 'Three wholesome meals a day tailored to your dog\'s dietary needs. No guesswork, just care.',
    color: '#e07a2f',
    bg: '#fdf3ec',
    href: '/services#nutrition',
  },
];

const ADDITIONAL = [
  { icon: Heart, label: 'Rescue Rehabilitation', desc: 'Over 100 stray and injured dogs helped beyond our facility.' },
  { icon: Shield, label: 'Temporary Foster Boarding', desc: 'Short-term care for dogs in transition — safe and loving.' },
  { icon: Waves, label: 'Adoption Assistance', desc: 'We help connect rescued dogs with their forever homes.' },
];

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    dog: 'Max — Golden Retriever',
    text: 'Max absolutely loves his time there. We feel completely at ease knowing he\'s in such caring hands. Paw Paradise is the real deal.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    dog: 'Bella — Labrador',
    text: 'The team treats every dog like their own. Bella comes back happy, well-rested, and always excited to go back.',
    rating: 5,
  },
  {
    name: 'Anjali Patel',
    dog: 'Simba — German Shepherd',
    text: 'The care, attention to detail, and genuine love for dogs is evident in everything they do. We trust them completely.',
    rating: 5,
  },
];

const MARQUEE_WORDS = [
  'Dog Boarding', '·', 'Dog Daycare', '·', 'Grooming', '·', 'Nutrition', '·',
  'Rescue Rehab', '·', 'Adoption Help', '·', 'Bhondsi Gurgaon', '·',
  'Dog Boarding', '·', 'Dog Daycare', '·', 'Grooming', '·', 'Nutrition', '·',
  'Rescue Rehab', '·', 'Adoption Help', '·', 'Bhondsi Gurgaon', '·',
];

export default function Home() {
  return (
    <Layout>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: '92vh', background: '#1a1f3c' }}>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center hero-bg"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/hero-dogs-RoJWRPAYDCEMGXCqHtPXG9.webp)',
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,31,60,0.85) 0%, rgba(26,31,60,0.5) 60%, rgba(63,81,163,0.3) 100%)' }} />
        </div>

        {/* Floating brand icon */}
        <div className="absolute top-8 right-8 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <img src="/assets/icons/cream-paw.png" alt="" className="w-24 h-24" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-[92vh] max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="eyebrow animate-fade-up" style={{ color: '#58bd7a' }}>
              Bhondsi, Gurgaon · Since Day One
            </div>

            <h1 className="display-xl text-white animate-fade-up delay-100 mb-6">
              Where every<br />
              <span style={{ color: '#58bd7a' }}>paw</span> feels<br />
              at home.
            </h1>

            <p className="body-lg text-white/75 animate-fade-up delay-200 max-w-xl mb-10">
              Trained handlers. Safe spaces. Real play. We care for your dog like our own — with experience and love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300 mb-16">
              <a
                href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20book%20a%20service!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
              >
                Book via WhatsApp
                <ArrowRight size={16} />
              </a>
              <Link href="/gallery" className="btn-outline-white">
                See Our Gallery
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up delay-400">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
                  <p className="text-2xl font-800 text-white" style={{ fontWeight: 800 }}>{s.number}</p>
                  <p className="text-xs text-white/60 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 20C1200 70 900 0 600 40C300 80 100 0 0 30L0 80Z" fill="#f4f1e5"/>
          </svg>
        </div>
      </section>

      {/* ═══ MARQUEE STRIP ═══ */}
      <div className="py-4 overflow-hidden border-y" style={{ borderColor: '#ddd8c5' }}>
        <div className="marquee-track">
          {MARQUEE_WORDS.map((w, i) => (
            <span
              key={i}
              className="px-4 text-sm font-600 whitespace-nowrap"
              style={{
                fontWeight: 600,
                color: w === '·' ? '#58bd7a' : '#3f51a3',
                fontSize: w === '·' ? '1.2rem' : '0.85rem',
                letterSpacing: w === '·' ? undefined : '0.05em',
              }}
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ ABOUT SECTION ═══ */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="eyebrow">About Paw Paradise</div>
            <h2 className="display-lg mb-6" style={{ color: '#1a1f3c' }}>
              A real home for dogs in Gurgaon
            </h2>
            <p className="body-lg mb-4" style={{ color: '#555' }}>
              Paw Paradise is a warm, loving, and joyful home away from home for pets and rescues in Gurgaon, where every tail wags with happiness.
            </p>
            <p className="body-lg mb-8" style={{ color: '#555' }}>
              We provide love, comfort, and rehabilitation to over 35 rescues and pets in our care, while also offering top-quality services for pet parents who demand the best.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Personalized care', 'Expert supervision', '1 acre+ space', 'AC & heated rooms', '3 meals/day'].map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
            <Link href="/about" className="btn-primary">
              Our story
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="reveal-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/facility-outdoor-N8diFedVJKrUHMRnotXiwu.webp"
                  alt="Paw Paradise facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="img-zoom rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-daycare-oRvLUTzHLranWdu3EMfFbK.webp"
                    alt="Dogs playing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl p-5 flex flex-col justify-center" style={{ background: '#3f51a3' }}>
                  <p className="text-4xl font-800 text-white" style={{ fontWeight: 800 }}>35+</p>
                  <p className="text-sm text-white/70 mt-1">Rescues currently in care at our facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section" style={{ background: '#1a1f3c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <div className="eyebrow" style={{ color: '#58bd7a' }}>What we offer</div>
            <h2 className="display-lg text-white">Services built around your dog</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {SERVICES.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="reveal group block rounded-2xl overflow-hidden card-hover"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="img-zoom h-44">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: s.bg }}>
                    <s.icon size={18} style={{ color: s.color }} />
                  </div>
                  <h3 className="font-700 text-white mb-2" style={{ fontWeight: 700, fontSize: '1.05rem' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/services" className="btn-outline-white">
              View all services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="eyebrow">Why Paw Paradise</div>
            <h2 className="display-lg mb-8" style={{ color: '#1a1f3c' }}>
              Not just a kennel.<br />A second home.
            </h2>
            <div className="space-y-5">
              {[
                { title: 'Expert Staff-to-Pet Ratio', desc: '1 staff member per 8 dogs — every dog gets real attention, not just a glance.' },
                { title: 'Over 1 Acre of Open Space', desc: 'Sprawling grounds with dedicated play zones, a swimming pool, and room to truly roam.' },
                { title: 'Year-Round Climate Control', desc: 'Air conditioning in summer, heaters in winter. Every season stays comfortable.' },
                { title: 'Rescue-First Philosophy', desc: 'We\'ve helped over 100 stray and injured dogs. That compassion shapes everything we do.' },
                { title: 'Three Nutritious Meals Daily', desc: 'Tailored to each dog\'s dietary needs — no generic kibble, real food and real care.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#58bd7a' }}>
                    <span className="text-white text-xs font-700" style={{ fontWeight: 700 }}>✓</span>
                  </div>
                  <div>
                    <p className="font-700 mb-1" style={{ fontWeight: 700, color: '#1a1f3c' }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right">
            <div className="rounded-3xl overflow-hidden shadow-2xl img-zoom">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/facility-outdoor-N8diFedVJKrUHMRnotXiwu.webp"
                alt="Paw Paradise facility space"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ADDITIONAL SERVICES STRIP ═══ */}
      <section className="section-sm" style={{ background: '#f1d4dd' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8 reveal">
            <div className="eyebrow" style={{ color: '#3f51a3' }}>Beyond the basics</div>
            <h2 className="display-md" style={{ color: '#1a1f3c' }}>Additional services</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 stagger">
            {ADDITIONAL.map((a) => (
              <div key={a.label} className="reveal bg-white rounded-2xl p-6 card-hover text-center">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: '#eef0f8' }}>
                  <a.icon size={22} style={{ color: '#3f51a3' }} />
                </div>
                <h3 className="font-700 mb-2" style={{ fontWeight: 700, color: '#1a1f3c' }}>{a.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FACILITY PREVIEW ═══ */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="eyebrow">Our facility</div>
          <h2 className="display-lg" style={{ color: '#1a1f3c' }}>Space to play. Space to rest.</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8 stagger">
          {[
            { img: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/facility-outdoor-N8diFedVJKrUHMRnotXiwu.webp', label: 'Play Fields', span: 'lg:col-span-2 row-span-2' },
            { img: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-daycare-oRvLUTzHLranWdu3EMfFbK.webp', label: 'Daycare' },
            { img: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-boarding-DxQg9FC9s2PsjYzb2MugG6.webp', label: 'Boarding Rooms' },
          ].map((item) => (
            <div key={item.label} className={`reveal img-zoom rounded-2xl overflow-hidden relative ${item.span || ''}`} style={{ height: item.span ? '420px' : '200px' }}>
              <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,31,60,0.5) 0%, transparent 50%)' }} />
              <span className="absolute bottom-3 left-4 text-white font-600 text-sm" style={{ fontWeight: 600 }}>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="text-center reveal">
          <Link href="/facility" className="btn-primary">
            Explore the full facility
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section" style={{ background: '#f4f1e5', borderTop: '1px solid #ddd8c5' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="eyebrow">Testimonials</div>
            <h2 className="display-lg" style={{ color: '#1a1f3c' }}>What pet parents say</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10 stagger">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="reveal testimonial-card card-hover">
                <div className="flex gap-1 mb-6 mt-6">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={14} fill="#f4a42c" style={{ color: '#f4a42c' }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#444' }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-700 text-sm" style={{ background: '#3f51a3', fontWeight: 700 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-700 text-sm" style={{ fontWeight: 700, color: '#1a1f3c' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: '#888' }}>{t.dog}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <Link href="/testimonials" className="btn-outline">
              Read more testimonials
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
