import React from 'react';
import { PageView } from '../types';
import { WHATSAPP_NUMBER, WHATSAPP_INT_NUMBER } from '../data/products';
import { MessageCircle, ShieldCheck, Truck, Lock, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] text-zinc-400 border-t border-[#1e1e24] text-xs">
      {/* Upper reassurance strip */}
      <div className="border-b border-zinc-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#d4af37]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-xs">Nationwide Cash on Delivery</h4>
              <p className="text-[11px] text-zinc-400 mt-0.5">Reliable courier delivery across all Pakistan cities</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#d4af37]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-xs">Guaranteed Discreet Packaging</h4>
              <p className="text-[11px] text-zinc-400 mt-0.5">Plain, unmarked parcels ensuring complete customer privacy</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#25D366]">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-xs">Dedicated WhatsApp Support</h4>
              <p className="text-[11px] text-zinc-400 mt-0.5">Assistance with sizing, orders & queries at {WHATSAPP_NUMBER}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left group cursor-pointer"
            >
              <span className="font-serif-luxury text-xl font-bold tracking-wider text-white group-hover:text-[#d4af37] transition-colors">
                MY INNER COLLECTION
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-[#d4af37] uppercase font-medium mt-0.5">
                Luxury Essentials &middot; Pakistan
              </span>
            </button>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              My Inner Collection is an online store offering ladies' and men's innerwear, comfortable nightwear, clothing, and personal-care essentials. Our goal is to make shopping simple, comfortable, and respectful, with a focus on product choice, customer convenience, and privacy.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_INT_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp: {WHATSAPP_NUMBER}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Collections
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('ladies-innerwear')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Ladies' Underwear
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('mens-innerwear')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Men's Underwear
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('lingerie-nightwear')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Lingerie & Nightwear
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('clothing')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Ladies' & Children's Clothing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('personal-care')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Hair Removal & Personal Care
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Customer Care & Policies */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Customer Care
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('privacy')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Privacy & Discreet Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shipping')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Shipping & Returns
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
                >
                  About My Inner Collection
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Pakistan Delivery & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Delivery Coverage
            </h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Serving Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, and all cities across Pakistan.
            </p>
            <div className="pt-1 text-[11px] text-zinc-400 space-y-1">
              <div>WhatsApp Hours: <span className="text-zinc-200">10:00 AM - 10:00 PM (PKT)</span></div>
              <div>Dispatch: <span className="text-zinc-200">Monday - Saturday</span></div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 mt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} My Inner Collection. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Discreet Parcel Delivery</span>
            <span>&middot;</span>
            <span>Cash on Delivery</span>
            <span>&middot;</span>
            <span>Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
