import Layout from '@/components/Layout';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  { name: 'Priya Sharma', dog: 'Max — Golden Retriever', rating: 5, text: 'Paw Paradise has been a game-changer for us. Max absolutely loves his time there, and we feel completely at ease knowing he\'s in such caring hands.' },
  { name: 'Rajesh Kumar', dog: 'Bella — Labrador', rating: 5, text: 'The team at Paw Paradise treats every dog like their own. Bella comes back happy, well-rested, and always excited to go back.' },
  { name: 'Anjali Patel', dog: 'Simba — German Shepherd', rating: 5, text: 'We trust Paw Paradise completely. The care, attention to detail, and genuine love for dogs is evident in everything they do.' },
  { name: 'Kiran Singh', dog: 'Bruno — Beagle', rating: 5, text: 'Bruno used to be anxious about going anywhere new. After a few visits to Paw Paradise, he practically drags me to the car when it\'s time to go. That\'s the best endorsement I can give.' },
  { name: 'Meera Nair', dog: 'Luna — Dachshund', rating: 5, text: 'The facility is clean, spacious, and the staff genuinely care. Luna gets the same routine she has at home. I can\'t ask for more.' },
  { name: 'Vikram Arora', dog: 'Charlie — Labrador Mix', rating: 5, text: 'I was nervous about boarding Charlie for the first time. The founders personally showed me around and answered every question patiently. Booked immediately.' },
];

export default function Testimonials() {
  return (
    <Layout>
      <section className="section" style={{ background: '#1a1f3c' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="eyebrow animate-fade-up" style={{ color: '#58bd7a' }}>From pet parents</div>
          <h1 className="display-xl text-white animate-fade-up delay-100 mb-6">Testimonials</h1>
          <p className="body-lg animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Real words from real dog owners in Gurgaon.
          </p>
        </div>
      </section>

      <section className="section max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="reveal testimonial-card card-hover">
              <div className="flex gap-1 mb-6 mt-6">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} fill="#f4a42c" style={{ color: '#f4a42c' }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#444' }}>"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-700 text-sm" style={{ background: '#3f51a3', fontWeight: 700 }}>
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
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#f1d4dd' }}>
        <div className="max-w-xl mx-auto px-6 text-center reveal">
          <h2 className="display-md mb-4" style={{ color: '#1a1f3c' }}>Your dog could be next</h2>
          <p className="body-lg mb-8" style={{ color: '#555' }}>We'd love to welcome your pet to Paw Paradise.</p>
          <a
            href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20book%20a%20visit!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a visit
          </a>
        </div>
      </section>
    </Layout>
  );
}
