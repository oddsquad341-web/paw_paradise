import { Link } from 'wouter';
import { useState, useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import { ArrowRight, Star, Heart, Users, Leaf, Clock, Wind, Waves, Shield, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

/* ─── ANIMATED COUNTER ─── */
function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = to / (1600 / 16);
      const t = setInterval(() => {
        start += step;
        if (start >= to) { setVal(to); clearInterval(t); }
        else setVal(Math.floor(start));
      }, 16);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── LIGHTBOX ─── */
function Lightbox({ images, index, onClose, onPrev, onNext }: {
  images: string[]; index: number; onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button onClick={onClose} className="absolute top-5 right-5 text-white/70 hover:text-white z-10">
        <X size={28} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2 rounded-full"
        style={{ background: 'rgba(255,255,255,0.1)' }}>
        <ChevronLeft size={28} />
      </button>
      <img
        src={images[index]}
        alt=""
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
      <button onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2 rounded-full"
        style={{ background: 'rgba(255,255,255,0.1)' }}>
        <ChevronRight size={28} />
      </button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full transition-all"
            style={{ background: i === index ? 'white' : 'rgba(255,255,255,0.35)' }} />
        ))}
      </div>
    </div>
  );
}

const STATS = [
  { number: 35, suffix: '+', label: 'Rescues in care' },
  { number: 100, suffix: '+', label: 'Dogs helped' },
  { number: 1, suffix: ' acre+', label: 'Open space' },
  { number: 30, suffix: '+', label: 'Individual kennels' },
];

const SERVICES = [
  { icon: Clock, title: '24/7 Dog Boarding', desc: 'Comfortable stays with personalized care. Round-the-clock supervision.', color: '#3f51a3', bg: '#eef0f8', href: '/services#boarding', image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=600&q=80' },
  { icon: Users, title: 'Dog Daycare', desc: 'Supervised social play. Structured activity and rest cycles daily.', color: '#58bd7a', bg: '#edf8f2', href: '/services#daycare', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80' },
  { icon: Wind, title: 'Grooming & Hygiene', desc: 'Professional bathing, brushing, nail trimming. Stress-free always.', color: '#3f51a3', bg: '#eef0f8', href: '/services#grooming', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80' },
  { icon: Leaf, title: 'Diet & Nutrition', desc: 'Three meals a day, tailored to your dog\'s exact dietary needs.', color: '#58bd7a', bg: '#edf8f2', href: '/services#nutrition', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&q=80' },
];

const HOW_IT_WORKS = [
  { step: '01', title: 'Reach out', desc: 'WhatsApp or call us. Tell us about your dog — breed, age, any special needs. We\'ll answer every question.', color: '#3f51a3' },
  { step: '02', title: 'Visit the facility', desc: 'Come see the space, meet the team, let your dog get comfortable. No pressure, just a friendly tour.', color: '#58bd7a' },
  { step: '03', title: 'Drop off with confidence', desc: 'We handle the rest. Daily care, meals, play, and rest — all tailored to your dog.', color: '#3f51a3' },
  { step: '04', title: 'Pick up a happy dog', desc: 'Your dog comes back well-rested, fed, socialised, and genuinely happy. Every time.', color: '#58bd7a' },
];

const WHY_US = [
  { title: 'Expert Staff-to-Pet Ratio', desc: '1 staff per 8 dogs — every dog gets real attention, not just a glance.' },
  { title: 'Over 1 Acre of Open Space', desc: 'Sprawling grounds with dedicated play zones, a pool, and room to roam.' },
  { title: 'Year-Round Climate Control', desc: 'AC in summer, heaters in winter. Every season stays comfortable.' },
  { title: 'Rescue-First Philosophy', desc: 'We\'ve helped 100+ stray and injured dogs. That compassion shapes everything.' },
  { title: 'Three Nutritious Meals Daily', desc: 'Tailored to each dog\'s needs — real food, real care, every day.' },
];

const ADDITIONAL = [
  { icon: Heart, label: 'Rescue Rehabilitation', desc: 'Over 100 stray and injured dogs helped beyond our facility.' },
  { icon: Shield, label: 'Temporary Foster Boarding', desc: 'Short-term care for dogs in transition — safe and loving.' },
  { icon: Waves, label: 'Adoption Assistance', desc: 'We help connect rescued dogs with their forever homes.' },
];

const TESTIMONIALS = [
  { name: 'Priya Sharma', dog: 'Max — Golden Retriever', text: 'Max absolutely loves his time there. We feel completely at ease knowing he\'s in such caring hands. Paw Paradise is the real deal.', rating: 5 },
  { name: 'Rajesh Kumar', dog: 'Bella — Labrador', text: 'The team treats every dog like their own. Bella comes back happy, well-rested, and always excited to go back.', rating: 5 },
  { name: 'Anjali Patel', dog: 'Simba — German Shepherd', text: 'The care, attention to detail, and genuine love for dogs is evident in everything they do. We trust them completely.', rating: 5 },
];

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=800&q=80',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80',
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
  'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=800&q=80',
  'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=800&q=80',
  'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&q=80',
];

const MARQUEE_WORDS = [
  'Dog Boarding', '·', 'Dog Daycare', '·', 'Grooming', '·', 'Nutrition', '·',
  'Rescue Rehab', '·', 'Adoption Help', '·', 'Bhondsi Gurgaon', '·',
  'Dog Boarding', '·', 'Dog Daycare', '·', 'Grooming', '·', 'Nutrition', '·',
  'Rescue Rehab', '·', 'Adoption Help', '·', 'Bhondsi Gurgaon', '·',
];

export default function Home() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <Layout>
      {lightbox !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)}
          onNext={() => setLightbox((lightbox + 1) % GALLERY_IMAGES.length)}
        />
      )}

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden" style={{ minHeight: '95vh', background: '#1a1f3c' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=1600&q=85)',
        }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(26,31,60,0.92) 0%, rgba(26,31,60,0.65) 55%, rgba(63,81,163,0.25) 100%)' }} />
        </div>

        {/* Floating paw icons */}
        <div className="absolute top-12 right-12 opacity-15 animate-float pointer-events-none">
          <img src="/assets/icons/cream-paw.png" alt="" className="w-28 h-28" />
        </div>
        <div className="absolute bottom-32 right-1/4 opacity-10 animate-float pointer-events-none" style={{ animationDelay: '1.2s' }}>
          <img src="/assets/icons/green-paw.png" alt="" className="w-16 h-16" />
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-[95vh] max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            {/* Live badge */}
            <div className="badge-live animate-fade-up mb-5">
              Bhondsi, Gurgaon · Open Now
            </div>

            <h1 className="display-xl text-white animate-fade-up delay-100 mb-6">
              Where every<br />
              <em style={{ color: '#58bd7a', fontStyle: 'normal' }}>paw</em> feels<br />
              at home.
            </h1>

            <p className="body-lg animate-fade-up delay-200 mb-3" style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '38rem' }}>
              Trained handlers. Safe spaces. Real play.
            </p>
            <p className="animate-fade-up delay-200 mb-10 text-base" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '36rem' }}>
              We care for your dog like our own — with experience, love, and over 1 acre of space to prove it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300 mb-14">
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

            {/* Stats with animated counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up delay-400">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="text-2xl text-white" style={{ fontWeight: 800 }}>
                    <CountUp to={s.number} suffix={s.suffix} />
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-5 h-8 rounded-full border-2 border-white flex items-start justify-center pt-1.5">
            <div className="w-1 h-1.5 rounded-full bg-white" />
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 20C1200 70 900 0 600 40C300 80 100 0 0 30L0 80Z" fill="#f4f1e5"/>
          </svg>
        </div>
      </section>

      {/* ═══ MARQUEE STRIP ═══ */}
      <div className="py-3.5 overflow-hidden border-y" style={{ borderColor: '#ddd8c5', background: '#f4f1e5' }}>
        <div className="marquee-track">
          {MARQUEE_WORDS.map((w, i) => (
            <span key={i} className="px-4 whitespace-nowrap" style={{
              fontWeight: 600, fontSize: w === '·' ? '1.1rem' : '0.8rem',
              color: w === '·' ? '#58bd7a' : '#3f51a3',
              letterSpacing: w === '·' ? undefined : '0.08em',
              textTransform: 'uppercase',
            }}>{w}</span>
          ))}
        </div>
      </div>

      {/* ═══ ABOUT ═══ */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="eyebrow">About Paw Paradise</div>
            <h2 className="display-lg mb-6" style={{ color: '#1a1f3c' }}>A real home for dogs in Gurgaon</h2>
            <p className="body-lg mb-4" style={{ color: '#555' }}>
              Paw Paradise is a warm, loving, and joyful home away from home for pets and rescues in Gurgaon, where every tail wags with happiness.
            </p>
            <p className="body-lg mb-8" style={{ color: '#555' }}>
              We provide love, comfort, and rehabilitation to over 35 rescues and pets in our care, while also offering top-quality services for pet parents who demand the best.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {['Personalized care', 'Expert supervision', '1 acre+ space', 'AC & heated rooms', '3 meals/day'].map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
            <Link href="/about" className="btn-primary">Our story <ArrowRight size={16} /></Link>
          </div>

          <div className="reveal-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '3/4' }}>
                <img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&q=80" alt="Paw Paradise facility" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="img-zoom rounded-2xl overflow-hidden shadow-xl aspect-square">
                  <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80" alt="Dogs playing" className="w-full h-full object-cover" />
                </div>
                {/* Stat card */}
                <div className="rounded-2xl p-5 flex flex-col justify-center relative overflow-hidden" style={{ background: '#3f51a3' }}>
                  <div className="absolute -right-4 -bottom-4 opacity-10">
                    <img src="/assets/icons/cream-paw.png" alt="" className="w-20 h-20" />
                  </div>
                  <p className="text-4xl text-white relative z-10" style={{ fontWeight: 800 }}><CountUp to={35} suffix="+" /></p>
                  <p className="text-sm relative z-10 mt-1" style={{ color: 'rgba(255,255,255,0.65)' }}>Rescues currently in care</p>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
            {SERVICES.map((s) => (
              <a key={s.title} href={s.href}
                className="reveal group block rounded-2xl overflow-hidden card-hover"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="img-zoom h-44 relative">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)' }} />
                </div>
                <div className="p-5">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: s.bg }}>
                    <s.icon size={18} style={{ color: s.color }} />
                  </div>
                  <h3 className="text-white mb-2" style={{ fontWeight: 700, fontSize: '1.05rem' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-600 transition-all group-hover:gap-2.5" style={{ color: s.color === '#3f51a3' ? '#7b8fd4' : '#4aaa6b', fontWeight: 600 }}>
                    Learn more <ArrowRight size={12} />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/services" className="btn-outline-white">View all services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <div className="eyebrow">Simple process</div>
          <h2 className="display-lg" style={{ color: '#1a1f3c' }}>How it works</h2>
          <p className="body-lg mt-3 max-w-xl mx-auto" style={{ color: '#666' }}>
            Getting started is easy. Here's what booking with Paw Paradise looks like.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {HOW_IT_WORKS.map((h, i) => (
            <div key={i} className="reveal bg-white rounded-2xl p-7 card-hover shadow-sm relative overflow-hidden group">
              {/* Background step number */}
              <div className="absolute -right-2 -top-4 text-8xl font-800 select-none pointer-events-none transition-all duration-300 group-hover:scale-110"
                style={{ color: h.color, opacity: 0.06, fontWeight: 800, lineHeight: 1 }}>
                {h.step}
              </div>
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4 text-sm font-800"
                style={{ background: h.color, color: 'white', fontWeight: 800 }}>
                {h.step}
              </div>
              <h3 className="font-700 text-lg mb-2" style={{ fontWeight: 700, color: '#1a1f3c' }}>{h.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{h.desc}</p>
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-10 z-10">
                  <ArrowRight size={20} style={{ color: '#ddd8c5' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20get%20started!" target="_blank" rel="noopener noreferrer" className="btn-green">
            Get started today <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="section" style={{ background: '#f1d4dd' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="eyebrow" style={{ color: '#3f51a3' }}>Why Paw Paradise</div>
              <h2 className="display-lg mb-8" style={{ color: '#1a1f3c' }}>Not just a kennel.<br />A second home.</h2>
              <div className="space-y-5">
                {WHY_US.map((item, i) => (
                  <div key={i} className="reveal flex gap-4" style={{ transitionDelay: `${i * 80}ms` }}>
                    <CheckCircle2 size={22} className="shrink-0 mt-0.5" style={{ color: '#58bd7a' }} />
                    <div>
                      <p className="font-700 mb-1" style={{ fontWeight: 700, color: '#1a1f3c' }}>{item.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl img-zoom relative">
                <img
                  src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&q=80"
                  alt="Paw Paradise facility"
                  className="w-full object-cover"
                  style={{ aspectRatio: '4/5' }}
                />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl p-4" style={{ background: 'rgba(26,31,60,0.85)', backdropFilter: 'blur(12px)' }}>
                  <div className="flex items-center gap-3">
                    <img src="/assets/icons/green-paw.png" alt="" className="w-8 h-8" />
                    <div>
                      <p className="text-white font-700 text-sm" style={{ fontWeight: 700 }}>Bhondsi, Gurgaon</p>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>1 acre+ · 30+ kennels · Open 24/7</p>
                    </div>
                    <div className="ml-auto">
                      <div className="badge-live text-xs">Open</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ADDITIONAL SERVICES ═══ */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 reveal">
          <div className="eyebrow">Beyond the basics</div>
          <h2 className="display-md" style={{ color: '#1a1f3c' }}>Additional services</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 stagger">
          {ADDITIONAL.map((a) => (
            <div key={a.label} className="reveal bg-white rounded-2xl p-7 card-hover shadow-sm border" style={{ borderColor: '#eee' }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: '#eef0f8' }}>
                <a.icon size={22} style={{ color: '#3f51a3' }} />
              </div>
              <h3 className="font-700 mb-2" style={{ fontWeight: 700, color: '#1a1f3c' }}>{a.label}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ GALLERY PREVIEW ═══ */}
      <section className="section" style={{ background: '#1a1f3c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10 reveal">
            <div>
              <div className="eyebrow" style={{ color: '#58bd7a' }}>Our facility</div>
              <h2 className="display-lg text-white">Space to play. Space to rest.</h2>
            </div>
            <Link href="/gallery" className="hidden sm:flex btn-outline-white text-sm !py-2">
              Full gallery <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6 stagger">
            {GALLERY_IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`reveal img-zoom rounded-2xl overflow-hidden relative group cursor-pointer ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                style={{ height: i === 0 ? '420px' : '200px', display: 'block', width: '100%' }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: 'rgba(63,81,163,0.45)' }}>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <ChevronRight size={18} color="white" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center sm:hidden reveal">
            <Link href="/gallery" className="btn-outline-white">Full gallery <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section" style={{ background: '#f4f1e5', borderTop: '1px solid #ddd8c5' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header with rating summary */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 reveal gap-6">
            <div>
              <div className="eyebrow">Testimonials</div>
              <h2 className="display-lg" style={{ color: '#1a1f3c' }}>What pet parents say</h2>
            </div>
            <div className="rounded-2xl p-5 flex items-center gap-4 shrink-0" style={{ background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}>
              <div className="text-center">
                <p className="text-4xl font-800" style={{ fontWeight: 800, color: '#1a1f3c' }}>5.0</p>
                <div className="flex gap-0.5 mt-1 justify-center">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#f4a42c" style={{ color: '#f4a42c' }} />)}
                </div>
                <p className="text-xs mt-1" style={{ color: '#999' }}>Average rating</p>
              </div>
              <div className="w-px self-stretch" style={{ background: '#eee' }} />
              <div>
                {[5, 4].map((r) => (
                  <div key={r} className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs w-2" style={{ color: '#888' }}>{r}</span>
                    <div className="w-20 h-1.5 rounded-full overflow-hidden" style={{ background: '#eee' }}>
                      <div className="h-full rounded-full" style={{ width: r === 5 ? '100%' : '0%', background: '#f4a42c' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-10 stagger">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="reveal testimonial-card card-hover">
                <div className="flex gap-1 mb-6 mt-6">
                  {[...Array(t.rating)].map((_, s) => <Star key={s} size={13} fill="#f4a42c" style={{ color: '#f4a42c' }} />)}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#444' }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-700" style={{ background: '#3f51a3', fontWeight: 700 }}>
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
            <Link href="/testimonials" className="btn-outline">Read more testimonials</Link>
          </div>
        </div>
      </section>

      {/* ═══ BOOK CTA ═══ */}
      <section className="section relative overflow-hidden" style={{ background: '#3f51a3' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full opacity-10" style={{ background: '#58bd7a' }} />
          <div className="absolute -right-10 -bottom-20 w-96 h-96 rounded-full opacity-10" style={{ background: '#f1d4dd' }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center reveal">
          <img src="/assets/icons/cream-paw.png" alt="" className="w-14 mx-auto mb-6 opacity-30" />
          <h2 className="display-lg text-white mb-4">Ready to book a stay?</h2>
          <p className="body-lg mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Every rescue takes time, patience, and quiet consistency. That's what we offer — for yours too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20book!" target="_blank" rel="noopener noreferrer" className="btn-green">
              Book via WhatsApp <ArrowRight size={16} />
            </a>
            <Link href="/contact" className="btn-outline-white">Send an enquiry</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
