import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_CONTACTS = [
  { name: 'Aashima', phone: '919873218040', url: 'https://wa.me/919873218040' },
  { name: 'Deepshikha', phone: '919319656021', url: 'https://wa.me/919319656021' },
];

const MESSAGE_TEXT = 'Hi Paw Paradise, I\'d like to know more about your dog care services.';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = (contact: typeof WHATSAPP_CONTACTS[0]) => {
    const url = `${contact.url}?text=${encodeURIComponent(MESSAGE_TEXT)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Widget */}
      <div className="hidden md:fixed md:bottom-6 md:right-6 md:z-40 md:flex md:flex-col md:gap-3">
        {isOpen && (
          <div className="bg-white rounded-lg shadow-lg p-4 min-w-[250px] animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-800">Chat with us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </button>
            </div>
            <div className="space-y-2">
              {WHATSAPP_CONTACTS.map((contact) => (
                <button
                  key={contact.phone}
                  onClick={() => handleWhatsAppClick(contact)}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors text-sm"
                >
                  Chat with {contact.name}
                </button>
              ))}
            </div>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110 flex items-center justify-center"
          aria-label="WhatsApp chat"
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 px-4 py-3 flex gap-2">
        <a
          href={`https://wa.me/919873218040?text=${encodeURIComponent(MESSAGE_TEXT)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <a
          href="tel:+919873218040"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors"
        >
          ☎️ Call
        </a>
        <a
          href="#contact"
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-colors"
        >
          Enquire
        </a>
      </div>
    </>
  );
}
