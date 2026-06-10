import Layout from '@/components/Layout';
import { Link } from 'wouter';
import { ArrowRight, Thermometer, Droplets, Users, LayoutGrid, TreePine, Home } from 'lucide-react';

const FEATURES = [
  { icon: TreePine, title: 'Over 1 Acre', desc: 'Open land for dogs to explore, run, and play freely in a safe, supervised environment.' },
  { icon: Home, title: '3 Dedicated Rooms', desc: 'Cozy, climate-controlled boarding rooms with round-the-clock care from our staff.' },
  { icon: LayoutGrid, title: '30+ Individual Kennels', desc: 'Spacious, clean, and comfortable private kennels for a secure stay.' },
  { icon: Droplets, title: 'Swimming Pool', desc: 'A dedicated splash zone for fun, exercise, and relaxation — beloved by water-loving dogs.' },
  { icon: Users, title: 'Dedicated Play Areas', desc: 'Each room has its own private playground, with access to the communal play zone.' },
  { icon: Thermometer, title: 'Year-Round Comfort', desc: 'Air conditioning in summer and heaters in winter — every season stays comfortable.' },
];

const GALLERY = [
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/facility-outdoor-N8diFedVJKrUHMRnotXiwu.webp', label: 'Outdoor Play Grounds' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-daycare-oRvLUTzHLranWdu3EMfFbK.webp', label: 'Supervised Socialisation' },
  { src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/bBWz5BiAB238xMLxsQg67b/service-boarding-DxQg9FC9s2PsjYzb2MugG6.webp', label: 'Boarding Rooms' },
];

export default function Facility() {
  return (
    <Layout>
      <section className="section" style={{ background: '#1a1f3c' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="eyebrow animate-fade-up" style={{ color: '#58bd7a' }}>Our grounds</div>
          <h1 className="display-xl text-white animate-fade-up delay-100 mb-6">The facility</h1>
          <p className="body-lg animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Over 1 acre of open space, 30+ kennels, a swimming pool, and rooms designed for real comfort.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {FEATURES.map((f) => (
            <div key={f.title} className="reveal bg-white rounded-2xl p-7 card-hover shadow-md">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: '#eef0f8' }}>
                <f.icon size={22} style={{ color: '#3f51a3' }} />
              </div>
              <h3 className="font-700 text-lg mb-2" style={{ fontWeight: 700, color: '#1a1f3c' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="section" style={{ background: '#f1d4dd' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <div className="eyebrow" style={{ color: '#3f51a3' }}>Photos</div>
            <h2 className="display-lg" style={{ color: '#1a1f3c' }}>See it for yourself</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 stagger">
            {GALLERY.map((g) => (
              <div key={g.label} className="reveal img-zoom rounded-2xl overflow-hidden relative shadow-xl" style={{ height: '280px' }}>
                <img src={g.src} alt={g.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,31,60,0.55) 0%, transparent 50%)' }} />
                <span className="absolute bottom-4 left-4 text-white font-600 text-sm" style={{ fontWeight: 600 }}>{g.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link href="/gallery" className="btn-primary">
              View full gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Rescue mention */}
      <section className="section" style={{ background: '#3f51a3' }}>
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <h2 className="display-lg text-white mb-4">Support our rescue mission</h2>
          <p className="body-lg mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
            For years, we've nurtured and provided medical assistance to over 100 stray and injured dogs beyond our facility. If you'd like to help support our efforts, please get in touch.
          </p>
          <a href="https://wa.me/919873218040?text=Hi%2C%20I%27d%20like%20to%20support%20your%20rescue%20work!" target="_blank" rel="noopener noreferrer" className="btn-green">
            Get in touch <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </Layout>
  );
}
