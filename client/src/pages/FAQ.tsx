import Layout from '@/components/Layout';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  { q: 'Where is Paw Paradise located?', a: 'We are located in Bhondsi, Gurgaon, Haryana. Contact us on WhatsApp and we\'ll share the exact address and directions.' },
  { q: 'What services do you offer?', a: '24/7 Dog Boarding, Dog Daycare, Grooming & Hygiene Care, Diet & Nutrition Support, Rescue Rehabilitation, Temporary Foster Boarding, and Adoption Assistance.' },
  { q: 'What is the staff-to-dog ratio?', a: 'We maintain 1 staff member per group of 8 dogs at all times — ensuring close, personal supervision and care.' },
  { q: 'How big is the facility?', a: 'Our facility spans over 1 acre of open land. There are 3 dedicated boarding rooms, 30+ individual kennels, dedicated play areas, and a swimming pool.' },
  { q: 'What meals do dogs get?', a: 'Three wholesome meals a day, customized to each dog\'s dietary needs. We take allergies, portion sizes, and health conditions seriously.' },
  { q: 'Is the facility climate controlled?', a: 'Yes. We have air conditioning in summer and heaters in winter so your dog stays comfortable year-round.' },
  { q: 'Can I visit before booking?', a: 'Absolutely. We encourage visits. Reach out on WhatsApp to schedule a tour — we\'re happy to show you around.' },
  { q: 'Do you accept all breeds and sizes?', a: 'Yes. We welcome all breeds and sizes. We do request prior information about your dog\'s temperament and any specific needs.' },
  { q: 'How do I book?', a: 'The easiest way is via WhatsApp. Message Aashima (+91 9873218040) or Deepshikha (+91 9319656021) and we\'ll get back to you promptly.' },
  { q: 'Do you support rescue and adoption?', a: 'Yes. We\'ve helped over 100 stray and injured dogs. We offer rescue rehabilitation and adoption assistance. Reach out to learn how to get involved or adopt.' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm transition-shadow hover:shadow-md cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-6 gap-4">
        <p className="font-600 text-base" style={{ fontWeight: 600, color: '#1a1f3c' }}>{q}</p>
        <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: open ? '#3f51a3' : '#eef0f8' }}>
          {open ? <Minus size={14} color="white" /> : <Plus size={14} style={{ color: '#3f51a3' }} />}
        </div>
      </div>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-sm leading-relaxed" style={{ color: '#555' }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <Layout>
      <section className="section" style={{ background: '#1a1f3c' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="eyebrow animate-fade-up" style={{ color: '#58bd7a' }}>Got questions?</div>
          <h1 className="display-xl text-white animate-fade-up delay-100 mb-6">FAQ</h1>
          <p className="body-lg animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Everything you need to know about Paw Paradise.
          </p>
        </div>
      </section>

      <section className="section max-w-3xl mx-auto px-6">
        <div className="space-y-3 stagger">
          {FAQS.map((faq, i) => (
            <div key={i} className="reveal">
              <FAQItem q={faq.q} a={faq.a} />
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: '#3f51a3' }}>
        <div className="max-w-xl mx-auto px-6 text-center reveal">
          <h2 className="display-md text-white mb-4">Still have questions?</h2>
          <p className="body-lg mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>Just ask. We're available on WhatsApp and happy to help.</p>
          <a
            href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%20have%20a%20question!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green"
          >
            Message us on WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
}
