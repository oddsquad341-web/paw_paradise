import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { X, ChevronLeft, ChevronRight, Grid3X3, Rows3 } from 'lucide-react';

// ── Categorized gallery using our real photo shoot ──
const GALLERY: { src: string; label: string; cat: 'All' | 'Our Dogs' | 'Facility & Grounds' | 'Staff & Care' | 'Rescue & Rehab' }[] = [
  // ── Our Dogs ──
  { src: '/assets/photos/hero-1.jpg',  label: 'German Shepherd',         cat: 'Our Dogs' },
  { src: '/assets/photos/hero-2.jpg',  label: 'Labrador on the Grounds', cat: 'Our Dogs' },
  { src: '/assets/photos/hero-3.jpg',  label: 'Pup at Paw Paradise',     cat: 'Our Dogs' },
  { src: '/assets/photos/dog-1.jpg',   label: 'Alert & Ready',           cat: 'Our Dogs' },
  { src: '/assets/photos/dog-2.jpg',   label: 'Resting in the Sun',      cat: 'Our Dogs' },
  { src: '/assets/photos/dog-3.jpg',   label: 'Happy Face',              cat: 'Our Dogs' },
  { src: '/assets/photos/dog-4.jpg',   label: 'Cream Lab',               cat: 'Our Dogs' },
  { src: '/assets/photos/dog-5.jpg',   label: 'Brindle Senior',          cat: 'Our Dogs' },
  { src: '/assets/photos/dog-6.jpg',   label: 'Afternoon Rest',          cat: 'Our Dogs' },
  { src: '/assets/photos/dog-7.jpg',   label: 'GSD Profile',             cat: 'Our Dogs' },
  { src: '/assets/photos/dog-8.jpg',   label: 'Cream Indie',             cat: 'Our Dogs' },
  { src: '/assets/photos/dog-9.jpg',   label: 'Brindle Smile',           cat: 'Our Dogs' },
  { src: '/assets/photos/dog-10.jpg',  label: 'After the Groom',         cat: 'Our Dogs' },
  { src: '/assets/photos/dog-11.jpg',  label: 'Gentle Eyes',             cat: 'Our Dogs' },
  { src: '/assets/photos/dog-12.jpg',  label: 'Indie in the Yard',       cat: 'Our Dogs' },
  { src: '/assets/photos/dog-13.jpg',  label: 'Golden Hour',             cat: 'Our Dogs' },
  { src: '/assets/photos/dog-14.jpg',  label: 'Curious Pup',             cat: 'Our Dogs' },
  { src: '/assets/photos/dog-15.jpg',  label: 'Brown Indie',             cat: 'Our Dogs' },
  { src: '/assets/photos/dog-16.jpg',  label: 'Playful Energy',          cat: 'Our Dogs' },
  { src: '/assets/photos/dog-17.jpg',  label: 'Watchful',                cat: 'Our Dogs' },
  { src: '/assets/photos/dog-18.jpg',  label: 'Morning Walk',            cat: 'Our Dogs' },
  { src: '/assets/photos/dog-19.jpg',  label: 'Happy Indie',             cat: 'Our Dogs' },
  { src: '/assets/photos/dog-20.jpg',  label: 'Free to Run',             cat: 'Our Dogs' },
  { src: '/assets/photos/dog-21.jpg',  label: 'Sun Bath',                cat: 'Our Dogs' },
  { src: '/assets/photos/dog-22.jpg',  label: 'Gentle Giant',            cat: 'Our Dogs' },
  { src: '/assets/photos/dog-23.jpg',  label: 'Dignified',               cat: 'Our Dogs' },
  { src: '/assets/photos/dog-24.jpg',  label: 'Sniff & Explore',         cat: 'Our Dogs' },
  { src: '/assets/photos/dog-25.jpg',  label: 'Indie Mix',               cat: 'Our Dogs' },
  { src: '/assets/photos/dog-26.jpg',  label: 'Tails Up',                cat: 'Our Dogs' },
  { src: '/assets/photos/dog-27.jpg',  label: 'Fluffy Ears',             cat: 'Our Dogs' },
  { src: '/assets/photos/dog-28.jpg',  label: 'Nose Deep',               cat: 'Our Dogs' },
  { src: '/assets/photos/dog-29.jpg',  label: 'Content',                 cat: 'Our Dogs' },
  { src: '/assets/photos/dog-30.jpg',  label: 'Running Free',            cat: 'Our Dogs' },
  { src: '/assets/photos/dog-31.jpg',  label: 'Indie on Grass',          cat: 'Our Dogs' },
  { src: '/assets/photos/dog-32.jpg',  label: 'At Attention',            cat: 'Our Dogs' },
  { src: '/assets/photos/dog-33.jpg',  label: 'Squad Goals',             cat: 'Our Dogs' },
  { src: '/assets/photos/dog-34.jpg',  label: 'Curious Gaze',            cat: 'Our Dogs' },
  { src: '/assets/photos/dog-35.jpg',  label: 'Watching Over',           cat: 'Our Dogs' },

  // ── Facility & Grounds ──
  { src: '/assets/photos/facility-1.jpg', label: 'The Facility',         cat: 'Facility & Grounds' },
  { src: '/assets/photos/facility-2.jpg', label: 'Open Grounds',         cat: 'Facility & Grounds' },
  { src: '/assets/photos/facility-3.jpg', label: 'Play Area',            cat: 'Facility & Grounds' },
  { src: '/assets/photos/facility-4.jpg', label: 'Night Operations',     cat: 'Facility & Grounds' },
  { src: '/assets/photos/hero-wide-4.jpg',label: 'Front Compound',       cat: 'Facility & Grounds' },

  // ── Staff & Care ──
  { src: '/assets/photos/team-1.jpg',  label: 'Handler with Pup',        cat: 'Staff & Care' },
  { src: '/assets/photos/team-2.jpg',  label: 'Co-Founder Deepshikha',   cat: 'Staff & Care' },
  { src: '/assets/photos/team-3.jpg',  label: 'Founders with the Pack',  cat: 'Staff & Care' },
  { src: '/assets/photos/team-4.jpg',  label: 'Handler & Rescue',        cat: 'Staff & Care' },

  // ── Rescue & Rehab ──
  { src: '/assets/photos/care-1.jpg',  label: 'Massage & Recovery',      cat: 'Rescue & Rehab' },
  { src: '/assets/photos/care-2.jpg',  label: 'Post-Surgery Care',       cat: 'Rescue & Rehab' },
  { src: '/assets/photos/dog-11.jpg',  label: 'Rehab in Progress',       cat: 'Rescue & Rehab' },
];

const CATS = ['All', 'Our Dogs', 'Facility & Grounds', 'Staff & Care', 'Rescue & Rehab'] as const;
type Cat = typeof CATS[number];

function Lightbox({ images, index, onClose, onPrev, onNext }: {
  images: typeof GALLERY; index: number; onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handler);
    return () => { window.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button onClick={onClose} className="absolute top-5 right-5 text-white/70 hover:text-white z-10 p-2 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
        <X size={24} />
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-3 rounded-full transition-all hover:bg-white/10"
        style={{ background: 'rgba(255,255,255,0.08)' }}><ChevronLeft size={28} /></button>
      <div className="flex flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <img src={images[index].src} alt={images[index].label} className="lightbox-img" />
        <div className="text-center">
          <p className="text-white font-600 text-sm" style={{ fontWeight: 600 }}>{images[index].label}</p>
          <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(88,189,122,0.2)', color: '#58bd7a' }}>{images[index].cat}</span>
        </div>
      </div>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-3 rounded-full transition-all hover:bg-white/10"
        style={{ background: 'rgba(255,255,255,0.08)' }}><ChevronRight size={28} /></button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeCat, setActiveCat] = useState<Cat>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [view, setView] = useState<'masonry' | 'grid'>('masonry');
  const [visible, setVisible] = useState(18);

  const filtered = activeCat === 'All' ? GALLERY : GALLERY.filter(img => img.cat === activeCat);

  useEffect(() => {
    setVisible(18);
  }, [activeCat]);

  return (
    <Layout>
      {lightbox !== null && (
        <Lightbox
          images={filtered}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() => setLightbox((lightbox - 1 + filtered.length) % filtered.length)}
          onNext={() => setLightbox((lightbox + 1) % filtered.length)}
        />
      )}

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#1a1f3c', minHeight: '40vh' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/assets/photos/hero-wide-2.jpg')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,31,60,0.7), rgba(26,31,60,0.95))' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col justify-center" style={{ minHeight: '40vh' }}>
          <div className="eyebrow animate-fade-up" style={{ color: '#58bd7a', justifyContent: 'center' }}>Life at Paw Paradise</div>
          <h1 className="display-xl text-white animate-fade-up delay-100 mb-4">Gallery</h1>
          <p className="body-lg animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Real dogs. Real moments. Real care — every day at Bhondsi, Gurgaon.
          </p>
          <p className="animate-fade-up delay-300 mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{GALLERY.length} photos</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40L1440 40L1440 10C1200 35 900 0 600 20C300 40 100 0 0 15L0 40Z" fill="#f4f1e5"/>
          </svg>
        </div>
      </section>

      {/* Filters + view toggle */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {CATS.map((cat) => (
              <button key={cat} onClick={() => setActiveCat(cat)}
                className="px-4 py-2 rounded-full text-sm font-600 transition-all duration-200"
                style={{
                  fontWeight: 600,
                  background: activeCat === cat ? '#3f51a3' : 'white',
                  color: activeCat === cat ? 'white' : '#3f51a3',
                  border: '2px solid',
                  borderColor: activeCat === cat ? '#3f51a3' : '#e8e3d0',
                  boxShadow: activeCat === cat ? '0 4px 16px rgba(63,81,163,0.25)' : 'none',
                  transform: activeCat === cat ? 'translateY(-1px)' : 'none',
                }}>
                {cat}
                <span className="ml-1.5 text-xs opacity-60">
                  {cat === 'All' ? GALLERY.length : GALLERY.filter(g => g.cat === cat).length}
                </span>
              </button>
            ))}
          </div>
          {/* View toggle */}
          <div className="flex items-center gap-1 rounded-xl p-1" style={{ background: 'white', border: '2px solid #e8e3d0' }}>
            <button onClick={() => setView('masonry')} className="p-2 rounded-lg transition-all"
              style={{ background: view === 'masonry' ? '#3f51a3' : 'transparent', color: view === 'masonry' ? 'white' : '#666' }}>
              <Rows3 size={16} />
            </button>
            <button onClick={() => setView('grid')} className="p-2 rounded-lg transition-all"
              style={{ background: view === 'grid' ? '#3f51a3' : 'transparent', color: view === 'grid' ? 'white' : '#666' }}>
              <Grid3X3 size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {view === 'masonry' ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.slice(0, visible).map((img, i) => (
              <button key={`${img.src}-${i}`}
                onClick={() => setLightbox(i)}
                className="break-inside-avoid img-zoom rounded-2xl overflow-hidden relative group cursor-pointer w-full block shadow-md reveal"
                style={{ transitionDelay: `${(i % 6) * 60}ms` }}>
                <img src={img.src} alt={img.label} className="w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4"
                  style={{ background: 'linear-gradient(to top, rgba(26,31,60,0.82) 0%, transparent 55%)' }}>
                  <div className="w-full">
                    <p className="text-white font-600 text-sm mb-1" style={{ fontWeight: 600 }}>{img.label}</p>
                    <span className="text-xs px-2.5 py-0.5 rounded-full" style={{ background: 'rgba(88,189,122,0.25)', color: '#58bd7a', border: '1px solid rgba(88,189,122,0.3)' }}>{img.cat}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.slice(0, visible).map((img, i) => (
              <button key={`${img.src}-${i}`}
                onClick={() => setLightbox(i)}
                className="img-zoom rounded-xl overflow-hidden relative group cursor-pointer block reveal aspect-square shadow-md"
                style={{ transitionDelay: `${(i % 8) * 50}ms` }}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover object-top" loading="lazy" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-3"
                  style={{ background: 'linear-gradient(to top, rgba(26,31,60,0.8) 0%, transparent 55%)' }}>
                  <p className="text-white text-xs font-600" style={{ fontWeight: 600 }}>{img.label}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Load more */}
        {visible < filtered.length && (
          <div className="text-center mt-12">
            <button onClick={() => setVisible(v => Math.min(v + 12, filtered.length))}
              className="btn-outline">
              Load more · {filtered.length - visible} remaining
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: '#aaa' }}>
            No photos in this category yet.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: '#f1d4dd' }}>
        <h2 className="display-md mb-4" style={{ color: '#1a1f3c' }}>Want to see it in person?</h2>
        <p className="body-lg mb-8 max-w-lg mx-auto" style={{ color: '#555' }}>Come visit our facility in Bhondsi, Gurgaon. No commitment — just a tour, some dogs, and a cup of chai.</p>
        <a href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20visit%20the%20facility!" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Plan a Visit
        </a>
      </section>
    </Layout>
  );
}
