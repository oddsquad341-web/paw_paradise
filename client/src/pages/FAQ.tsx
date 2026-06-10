import Layout from '@/components/Layout';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'What services do you offer?',
    answer: 'We offer 24/7 dog boarding, dog daycare, grooming and hygiene care, diet and nutrition support, temporary foster boarding, adoption assistance, and rescue rehabilitation services.',
  },
  {
    question: 'Where is Paw Paradise located?',
    answer: 'We are located in Bhondsi, Gurgaon, Haryana. We welcome visits from pet parents who want to see our facility before booking services.',
  },
  {
    question: 'How do I contact you?',
    answer: 'You can reach us via WhatsApp, phone, or email. Aashima: +91 9873 218 040 | Deepshikha: +91 9319 656 021. WhatsApp is the fastest way to get in touch!',
  },
  {
    question: 'Do you offer 24/7 dog boarding?',
    answer: 'Yes! Our 24/7 boarding service provides round-the-clock care for your dog. Whether it\'s a weekend getaway or an extended stay, we ensure your dog is comfortable and well-cared for.',
  },
  {
    question: 'What does dog daycare include?',
    answer: 'Our daycare includes supervised social playtime, safe interaction with other dogs, structured rest periods, safe handling, and a caring environment. It\'s perfect for dogs needing daytime activity and companionship.',
  },
  {
    question: 'What does grooming include?',
    answer: 'Our grooming services include professional bathing, thorough brushing and coat care, nail trimming, and paw care. We use quality products and ensure a gentle, stress-free experience.',
  },
  {
    question: 'Do you provide diet and nutrition support?',
    answer: 'Yes! We provide customized meal plans based on your dog\'s dietary needs. We pay careful attention to dietary restrictions and health-conscious feeding routines.',
  },
  {
    question: 'Do you help with rescues and foster boarding?',
    answer: 'Absolutely! We\'re committed to rescue work. We provide temporary foster boarding, rescue rehabilitation programs, and adoption assistance. Over 35 rescues are currently in our care.',
  },
  {
    question: 'Can I enquire on WhatsApp directly?',
    answer: 'Yes! WhatsApp is our preferred communication method. You can chat directly with Aashima or Deepshikha without saving their number using our click-to-chat links.',
  },
  {
    question: 'Can I visit before booking?',
    answer: 'Of course! We encourage pet parents to visit our facility before booking. You can see our space, meet the team, and get a feel for how we care for dogs. Just let us know when you\'d like to visit.',
  },
  {
    question: 'How do I send an enquiry?',
    answer: 'You can send an enquiry through WhatsApp, phone call, or by filling out our contact form on the website. We respond quickly to all enquiries.',
  },
  {
    question: 'What is your staff-to-dog ratio?',
    answer: 'We maintain a ratio of 1 staff member per 8 dogs, ensuring every dog receives personalized attention and supervision.',
  },
  {
    question: 'Do you have emergency protocols?',
    answer: 'Yes, we have comprehensive emergency protocols and partnerships with veterinary clinics for immediate care if needed. Your dog\'s safety and health are our top priorities.',
  },
  {
    question: 'Can I get updates while my dog is boarding?',
    answer: 'Yes! We provide regular updates to pet parents during boarding stays. You can stay connected and know exactly how your dog is doing.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Find answers to common questions about Paw Paradise
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary-cream">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-700 flex-shrink-0 transition-transform ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            We are here to help! Feel free to reach out to us directly.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919873218040?text=Hi%20Paw%20Paradise%2C%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919873218040"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Aashima
            </a>
            <a
              href="tel:+919319656021"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Deepshikha
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
