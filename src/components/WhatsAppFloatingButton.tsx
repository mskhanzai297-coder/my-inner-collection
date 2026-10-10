import React, { useState } from 'react';
import { WHATSAPP_INT_NUMBER, WHATSAPP_NUMBER } from '../data/products';
import { MessageCircle, X, ShieldCheck } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { label: '📦 Ask about product sizing', text: 'Assalam-o-Alaikum, I would like guidance on choosing the right size.' },
    { label: '🚚 Inquire about delivery time', text: 'Assalam-o-Alaikum, what is the estimated delivery time for my city?' },
    { label: '🔒 Discreet packaging question', text: 'Assalam-o-Alaikum, can you confirm how the parcel is packed for privacy?' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 bg-[#141419] border border-[#2a2a35] rounded-2xl shadow-2xl p-4 text-xs space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-black font-bold">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white">My Inner Collection</h4>
                <span className="text-[10px] text-emerald-400">Online &middot; {WHATSAPP_NUMBER}</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-zinc-300 text-xs">
            Assalam-o-Alaikum! How can we assist you with your order or sizing today?
          </p>

          <div className="space-y-1.5">
            {quickMessages.map((item, idx) => (
              <a
                key={idx}
                href={`https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent(item.text)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-lg bg-zinc-800/60 hover:bg-[#25D366]/20 border border-zinc-700/60 hover:border-[#25D366]/50 text-zinc-200 hover:text-emerald-300 text-[11px] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#d4af37]" />
              Confidential Support
            </span>
            <a
              href={`https://wa.me/${WHATSAPP_INT_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] font-semibold hover:underline"
            >
              Open Direct Chat &rarr;
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp 03101041303"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-black font-bold text-xs shadow-2xl hover:bg-[#22bf5c] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
      >
        <MessageCircle className="w-5 h-5 fill-black/20" />
        <span className="hidden sm:inline font-semibold">WhatsApp 03101041303</span>
      </button>
    </div>
  );
};
