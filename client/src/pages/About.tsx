import Layout from '@/components/Layout';
import { Link } from 'wouter';
import { ArrowRight, Heart, Shield, Leaf, Users, Phone } from 'lucide-react';

const TEAM = [
  {
    name: 'Aashima',
    role: 'Co-Founder',
    phone: '+91 9873218040',
    bio: 'Driven by a love for animals and a deep commitment to their wellbeing, Aashima co-founded Paw Paradise to give every dog the care they deserve.',
    image: '/assets/photos/team-3.jpg',
  },
  {
    name: 'Deepshikha',
    role: 'Co-Founder',
    phone: '+91 9319656021',
    bio: 'Deepshikha\'s passion for rescue and rehabilitation has been the backbone of Paw Paradise\'s mission — caring for over 100 dogs and counting.',
    image: '/assets/photos/team-2.jpg',
  },
];

const VALUES = [
  { icon: Heart, label: 'Warm, Not Cutesy', desc: 'We care for your dog with genuine respect and affection — never baby talk, never gimmicks.' },
  { icon: Shield, label: 'Assured, Not Salesy', desc: 'Trained handlers. Safe spaces. Real play. Our work speaks for itself.' },
  { icon: Leaf, label: 'Clear, Not Clinical', desc: 'Plain, honest language about health, care, and routines. From diet to behavior, we support each pet\'s real needs every day.' },
  { icon: Users, label: 'Grounded, Not Dramatic', desc: 'Every rescue takes time, patience, and quiet consistency. That\'s what we offer.' },
];

const MILESTONES = [
  { year: '2018', label: 'Paw Paradise founded', desc: 'Started with a single rescue dog and a 1-acre space in Bhondsi.' },
  { year: '2020', label: '50+ dogs helped', desc: 'Expanded rescue rehabilitation work across Gurgaon.' },
  { year: '2022', label: '30 kennels operational', desc: 'Full boarding, daycare, and grooming services launched.' },
  { year: '2024', label: '100+ lives changed', desc: 'Over 100 stray and injured dogs helped, with 35+ rescues in active care.' },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#1a1f3c', minHeight: '50vh' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/assets/photos/hero-wide-3.jpg')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,31,60,0.95) 40%, rgba(26,31,60,0.5) 100%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col justify-center" style={{ minHeight: '50vh' }}>
          <div className="eyebrow animate-fade-up" style={{ color: '#58bd7a' }}>Our story</div>
          <h1 className="display-xl text-white animate-fade-up delay-100 mb-6">About Paw Paradise</h1>
          <p className="body-lg animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '36rem' }}>
            Where every paw feels at home — in Bhondsi, Gurgaon.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40L1440 40L1440 10C1200 35 900 0 600 20C300 40 100 0 0 15L0 40Z" fill="#f4f1e5"/>
          </svg>
        </div>
      </section>

      {/* Mission */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="eyebrow">Who we are</div>
            <h2 className="display-lg mb-6" style={{ color: '#1a1f3c' }}>Built on love, run with care</h2>
            <p className="body-lg mb-4" style={{ color: '#555' }}>
              Paw Paradise is a warm, loving, and joyful home away from home for pets and rescues in Gurgaon, where every tail wags with happiness.
            </p>
            <p className="body-lg mb-4" style={{ color: '#555' }}>
              We provide love, comfort, and rehabilitation to over 35 rescues and pets in our care, while also offering top-quality services for pet parents.
            </p>
            <p className="body-lg mb-8" style={{ color: '#555' }}>
              For years, we've nurtured and provided medical assistance to over 100 stray and injured dogs beyond our facility. If you'd like to help support our efforts, please get in touch.
            </p>
            <Link href="/contact" className="btn-primary">Get in touch <ArrowRight size={16} /></Link>
          </div>

          <div className="reveal-right">
            <div className="grid grid-cols-2 gap-3">
              <div className="img-zoom rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '3/4' }}>
                <img src="/assets/photos/team-4.jpg" alt="Staff with dog" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="img-zoom rounded-2xl overflow-hidden shadow-xl aspect-square">
                  <img src="/assets/photos/dog-7.jpg" alt="GSD at Paw Paradise" className="w-full h-full object-cover object-top" />
                </div>
                <div className="img-zoom rounded-2xl overflow-hidden shadow-xl aspect-square">
                  <img src="/assets/photos/facility-2.jpg" alt="Open grounds" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: '#f1d4dd' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="eyebrow" style={{ color: '#3f51a3' }}>Our principles</div>
            <h2 className="display-lg" style={{ color: '#1a1f3c' }}>How we work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {VALUES.map((v) => (
              <div key={v.label} className="reveal bg-white rounded-2xl p-6 card-hover">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4" style={{ background: '#eef0f8' }}>
                  <v.icon size={20} style={{ color: '#3f51a3' }} />
                </div>
                <h3 className="font-700 mb-3" style={{ fontWeight: 700, color: '#1a1f3c' }}>{v.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="eyebrow">Our journey</div>
          <h2 className="display-lg" style={{ color: '#1a1f3c' }}>How far we've come</h2>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden sm:block" style={{ background: 'linear-gradient(to bottom, #3f51a3, #58bd7a)' }} />
          <div className="space-y-8 stagger">
            {MILESTONES.map((m, i) => (
              <div key={i} className="reveal flex gap-8 items-start">
                <div className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white text-sm font-800 relative z-10 shadow-lg"
                  style={{ background: i % 2 === 0 ? '#3f51a3' : '#58bd7a', fontWeight: 800, fontSize: '0.75rem' }}>{m.year}</div>
                <div className="bg-white rounded-2xl p-6 card-hover shadow-sm flex-1" style={{ border: '1px solid #eee' }}>
                  <h3 className="font-700 mb-2" style={{ fontWeight: 700, color: '#1a1f3c' }}>{m.label}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: '#1a1f3c' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="eyebrow" style={{ color: '#58bd7a' }}>Meet the founders</div>
            <h2 className="display-lg text-white">The people behind the paws</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto stagger">
            {TEAM.map((m) => (
              <div key={m.name} className="reveal rounded-2xl overflow-hidden card-hover" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="img-zoom h-72">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <h3 className="font-700 text-xl mb-1 text-white" style={{ fontWeight: 700 }}>{m.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#58bd7a', fontWeight: 600 }}>{m.role}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>{m.bio}</p>
                  <a href={`tel:${m.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 text-sm font-600 hover:underline"
                    style={{ color: '#58bd7a', fontWeight: 600 }}>
                    <Phone size={14} /> {m.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden" style={{ background: '#3f51a3' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full opacity-10" style={{ background: '#58bd7a' }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="display-lg text-white mb-4">Come meet the team</h2>
          <p className="body-lg mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
            We'd love to show you around. Visit Bhondsi and see the space for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919873218040" target="_blank" rel="noopener noreferrer" className="btn-green">
              WhatsApp Us <ArrowRight size={16} />
            </a>
            <Link href="/facility" className="btn-outline-white">See the Facility</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
