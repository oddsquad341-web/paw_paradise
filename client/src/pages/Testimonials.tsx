import Layout from '@/components/Layout';
import { Star, ArrowRight } from 'lucide-react';

const TESTIMONIALS = [
  { name: 'Priya Sharma', dog: 'Max — Golden Retriever', text: 'Max absolutely loves his time there. We feel completely at ease knowing he\'s in such caring hands. Paw Paradise is the real deal.', rating: 5 },
  { name: 'Rajesh Kumar', dog: 'Bella — Labrador', text: 'The team treats every dog like their own. Bella comes back happy, well-rested, and always excited to go back.', rating: 5 },
  { name: 'Anjali Patel', dog: 'Simba — German Shepherd', text: 'The care, attention to detail, and genuine love for dogs is evident in everything they do. We trust them completely.', rating: 5 },
  { name: 'Rohan Mehta', dog: 'Bruno — Beagle', text: 'We tried three other kennels before finding Paw Paradise. Night and day difference. Bruno actually gets excited when we turn into their lane.', rating: 5 },
  { name: 'Sneha Agarwal', dog: 'Coco — Indie Mix', text: 'Coco came to us as a rescue and was very anxious around new spaces. Paw Paradise worked with her so patiently. She\'s a different dog now.', rating: 5 },
  { name: 'Karan Singh', dog: 'Tiger — GSD', text: 'The staff ratio is real — I could see Tiger actually being attended to on my visits. Not just left in a kennel. Genuine care.', rating: 5 },
  { name: 'Meera Iyer', dog: 'Luna — Indie', text: 'What struck me most is how calm the place is. No chaotic barking, no stressed dogs. Just happy, settled animals. Huge credit to how they run things.', rating: 5 },
  { name: 'Vikram Nair', dog: 'Rocky — Lab Mix', text: 'Rocky has health issues and needs special meals. Paw Paradise handled it without any drama — they just got it done. Very professional.', rating: 5 },
  { name: 'Divya Joshi', dog: 'Mango — Spitz', text: 'I was nervous leaving Mango for the first time but the team sent me updates and photos without me having to ask. That reassurance means everything.', rating: 5 },
];

const Stars = ({ n }: { n: number }) => (
  <div className="flex gap-0.5">
    {[...Array(n)].map((_, i) => <Star key={i} size={13} fill="#f4a42c" style={{ color: '#f4a42c' }} />)}
  </div>
);

export default function Testimonials() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: '#1a1f3c', minHeight: '42vh' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/assets/photos/hero-wide-1.jpg')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,31,60,0.7), rgba(26,31,60,0.95))' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col justify-center" style={{ minHeight: '42vh' }}>
          <div className="eyebrow animate-fade-up" style={{ color: '#58bd7a', justifyContent: 'center' }}>What pet parents say</div>
          <h1 className="display-xl text-white animate-fade-up delay-100 mb-4">Testimonials</h1>
          <div className="flex items-center justify-center gap-2 animate-fade-up delay-200">
            <Stars n={5} />
            <span className="text-white font-700 text-lg" style={{ fontWeight: 700 }}>5.0</span>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>· {TESTIMONIALS.length} reviews</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40L1440 40L1440 10C1200 35 900 0 600 20C300 40 100 0 0 15L0 40Z" fill="#f4f1e5"/>
          </svg>
        </div>
      </section>

      {/* Testimonials masonry */}
      <section className="section max-w-7xl mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5 stagger">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="reveal testimonial-card card-hover break-inside-avoid" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <Stars n={t.rating} />
              <p className="text-sm leading-relaxed mt-5 mb-6" style={{ color: '#444' }}>"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-700"
                  style={{ background: i % 2 === 0 ? '#3f51a3' : '#58bd7a', fontWeight: 700 }}>{t.name[0]}</div>
                <div>
                  <p className="font-700 text-sm" style={{ fontWeight: 700, color: '#1a1f3c' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: '#888' }}>{t.dog}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: '#3f51a3' }}>
        <h2 className="display-md text-white mb-4">Ready to experience it yourself?</h2>
        <p className="body-lg mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>Join the growing family of pet parents who trust Paw Paradise.</p>
        <a href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20book!" target="_blank" rel="noopener noreferrer" className="btn-green">
          Book via WhatsApp <ArrowRight size={16} />
        </a>
      </section>
    </Layout>
  );
}
