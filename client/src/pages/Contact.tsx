import Layout from '@/components/Layout';
import { useState } from 'react';
import { Phone, MapPin, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', dog: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Paw Paradise!\n\nName: ${form.name}\nPhone: ${form.phone}\nDog: ${form.dog}\n\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919873218040?text=${msg}`, '_blank');
    setSent(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm border transition-all outline-none focus:border-[#3f51a3] focus:ring-2 focus:ring-[#3f51a3]/10";
  const inputStyle = { borderColor: '#ddd8c5', background: 'white', color: '#111', fontFamily: 'inherit' };

  return (
    <Layout>
      <section className="section" style={{ background: '#1a1f3c' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="eyebrow animate-fade-up" style={{ color: '#58bd7a' }}>Reach out</div>
          <h1 className="display-xl text-white animate-fade-up delay-100 mb-6">Contact us</h1>
          <p className="body-lg animate-fade-up delay-200" style={{ color: 'rgba(255,255,255,0.65)' }}>
            We're available on WhatsApp and by phone. We'll get back to you promptly.
          </p>
        </div>
      </section>

      <section className="section max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="reveal-left">
            <div className="eyebrow">Get in touch</div>
            <h2 className="display-md mb-8" style={{ color: '#1a1f3c' }}>We'd love to meet your dog</h2>

            <div className="space-y-6 mb-10">
              {[
                { Icon: Phone, label: 'Aashima', value: '+91 9873218040', href: 'tel:+919873218040' },
                { Icon: Phone, label: 'Deepshikha', value: '+91 9319656021', href: 'tel:+919319656021' },
                { Icon: MapPin, label: 'Location', value: 'Bhondsi, Gurgaon, Haryana', href: 'https://maps.google.com/?q=Bhondsi+Gurgaon' },
              ].map(({ Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ background: '#eef0f8' }}>
                    <Icon size={18} style={{ color: '#3f51a3' }} />
                  </div>
                  <div>
                    <p className="text-xs font-700 mb-0.5 uppercase tracking-widest" style={{ fontWeight: 700, color: '#888' }}>{label}</p>
                    <p className="font-600 group-hover:text-[#3f51a3] transition-colors" style={{ fontWeight: 600, color: '#1a1f3c' }}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
              >
                <MessageCircle size={16} />
                WhatsApp Aashima
              </a>
              <a
                href="https://wa.me/919319656021?text=Hi%20Paw%20Paradise%2C%20I%27d%20like%20to%20know%20more!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle size={16} />
                WhatsApp Deepshikha
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            {sent ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-xl">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#edf8f2' }}>
                  <span className="text-3xl">🐾</span>
                </div>
                <h3 className="font-700 text-xl mb-2" style={{ fontWeight: 700, color: '#1a1f3c' }}>Message sent!</h3>
                <p className="text-sm" style={{ color: '#666' }}>We've opened WhatsApp with your message. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-white rounded-3xl p-8 shadow-xl space-y-4">
                <h3 className="font-700 text-xl mb-2" style={{ fontWeight: 700, color: '#1a1f3c' }}>Send an enquiry</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-700 mb-1.5 uppercase tracking-wide" style={{ fontWeight: 700, color: '#888' }}>Your name</label>
                    <input name="name" value={form.name} onChange={handle} required placeholder="e.g. Priya Sharma" className={inputClass} style={inputStyle} />
                  </div>
                  <div>
                    <label className="block text-xs font-700 mb-1.5 uppercase tracking-wide" style={{ fontWeight: 700, color: '#888' }}>Phone number</label>
                    <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 00000" className={inputClass} style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-700 mb-1.5 uppercase tracking-wide" style={{ fontWeight: 700, color: '#888' }}>Dog's name & breed</label>
                  <input name="dog" value={form.dog} onChange={handle} placeholder="e.g. Max, Golden Retriever" className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className="block text-xs font-700 mb-1.5 uppercase tracking-wide" style={{ fontWeight: 700, color: '#888' }}>Email (optional)</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@example.com" className={inputClass} style={inputStyle} />
                </div>
                <div>
                  <label className="block text-xs font-700 mb-1.5 uppercase tracking-wide" style={{ fontWeight: 700, color: '#888' }}>Your message</label>
                  <textarea name="message" value={form.message} onChange={handle} required rows={4} placeholder="Tell us what you need..." className={inputClass} style={{ ...inputStyle, resize: 'none' }} />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} />
                  Send via WhatsApp
                </button>
                <p className="text-xs text-center" style={{ color: '#aaa' }}>This will open WhatsApp with your message pre-filled.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
