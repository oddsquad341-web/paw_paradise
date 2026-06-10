import Layout from '@/components/Layout';
import { Link } from 'wouter';
import { ArrowRight, Heart, Shield, Leaf, Users } from 'lucide-react';

const TEAM = [
  {
    name: 'Aashima',
    role: 'Co-Founder',
    phone: '+91 9873218040',
    bio: 'Driven by a love for animals and a deep commitment to their wellbeing, Aashima co-founded Paw Paradise to give every dog the care they deserve.',
  },
  {
    name: 'Deepshikha',
    role: 'Co-Founder',
    phone: '+91 9319656021',
    bio: 'Deepshikha\'s passion for rescue and rehabilitation has been the backbone of Paw Paradise\'s mission — caring for over 100 dogs and counting.',
  },
];

const VALUES = [
  { icon: Heart, label: 'Warm, Not Cutesy', desc: 'We care for your dog with genuine respect and affection — never baby talk, never gimmicks.' },
  { icon: Shield, label: 'Assured, Not Salesy', desc: 'Trained handlers. Safe spaces. Real play. Our work speaks for itself.' },
  { icon: Leaf, label: 'Clear, Not Clinical', desc: 'Plain, honest language about health, care, and routines. From diet to behavior, we support each pet\'s real needs every day.' },
  { icon: Users, label: 'Grounded, Not Dramatic', desc: 'Every rescue takes time, patience, and quiet consistency. That\'s what we offer.' },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section" style={{ background: '#1a1f3c' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="eyebrow animate-fade-up" style={{ color: '#58bd7a' }}>Our story</div>
          <h1 className="display-xl text-white animate-fade-up delay-100 mb-6">About Paw Paradise</h1>
          <p className="body-lg animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.65)' }}>
            where every paw feels at home
          </p>
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
            <Link href="/contact" className="btn-primary">
              Get in touch
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="reveal-right">
            <div className="rounded-3xl overflow-hidden shadow-2xl img-zoom">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/facility-outdoor-N8diFedVJKrUHMRnotXiwu.webp"
                alt="Paw Paradise"
                className="w-full aspect-[4/3] object-cover"
              />
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

      {/* Team */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="eyebrow">Meet the founders</div>
          <h2 className="display-lg" style={{ color: '#1a1f3c' }}>The people behind the paws</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto stagger">
          {TEAM.map((m) => (
            <div key={m.name} className="reveal bg-white rounded-2xl p-8 card-hover text-center shadow-lg">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-800 mx-auto mb-4" style={{ background: '#3f51a3', fontWeight: 800 }}>
                {m.name[0]}
              </div>
              <h3 className="font-700 text-xl mb-1" style={{ fontWeight: 700, color: '#1a1f3c' }}>{m.name}</h3>
              <p className="text-sm mb-4" style={{ color: '#58bd7a', fontWeight: 600 }}>{m.role}</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#666' }}>{m.bio}</p>
              <a href={`tel:${m.phone.replace(/\s/g, '')}`} className="text-sm font-600 hover:underline" style={{ color: '#3f51a3', fontWeight: 600 }}>
                {m.phone}
              </a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
