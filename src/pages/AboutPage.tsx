import React from 'react';
import { PageView } from '../types';
import { WHATSAPP_INT_NUMBER, WHATSAPP_NUMBER } from '../data/products';
import { ShieldCheck, HeartHandshake, EyeOff, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_luxury_banner_1791596069367.jpg';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header Intro */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider uppercase">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Our Brand Philosophy</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Crafted for Comfort, <br />
          <span className="gold-gradient-text">Delivered with Discretion.</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
          My Inner Collection is an online store offering ladies' and men's innerwear, comfortable nightwear, clothing, and personal-care essentials. Our goal is to make shopping simple, comfortable, and respectful, with a focus on product choice, customer convenience, and privacy.
        </p>
      </div>

      {/* Boutique Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#141419] p-6 sm:p-10 rounded-3xl border border-zinc-800">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            Our Purpose
          </span>
          <h2 className="font-serif-luxury text-2xl font-bold text-white">
            Redefining Personal Shopping in Pakistan
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Shopping for intimate apparel and personal care products can often feel rushed or uncomfortable in conventional physical markets. We created My Inner Collection so you can explore high-grade innerwear, soft loungewear, and premium personal care products in complete tranquility from the comfort of your home.
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Every fabric in our collection is handpicked for Pakistan’s climate &mdash; prioritizing breathable cotton, moisture-absorbing modal, and soft seamless weaves that provide support without pinching or discomfort.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-zinc-700/80">
          <img
            src={heroImg}
            alt="My Inner Collection boutique aesthetic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Core Brand Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 text-[#d4af37] flex items-center justify-center">
            <EyeOff className="w-5 h-5" />
          </div>
          <h3 className="font-serif-luxury text-base font-bold text-white">
            100% Discreet Packaging
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Every parcel is shipped in plain, opaque boxes with zero exterior product labels or intimates descriptions, protecting your complete privacy.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 text-[#d4af37] flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-serif-luxury text-base font-bold text-white">
            Premium Yet Affordable
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Direct online curation allows us to offer boutique quality fabrics, pure combed cottons, and refined satin at transparent, accessible pricing.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <h3 className="font-serif-luxury text-base font-bold text-white">
            Friendly WhatsApp Care
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Reach out directly at 03101041303 for prompt sizing consultations, parcel tracking, or courteous order placement.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center p-8 rounded-3xl bg-gradient-to-r from-[#171720] via-[#1c1c27] to-[#171720] border border-[#d4af37]/30 space-y-5">
        <h3 className="font-serif-luxury text-2xl font-bold text-white">
          Experience the Difference Today
        </h3>
        <p className="text-xs text-zinc-300 max-w-md mx-auto">
          Explore our collection of ladies' and men's innerwear, sleepwear, and skin care designed for everyday elegance.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('shop')}
            className="px-6 py-3 rounded-xl bg-[#d4af37] text-black font-bold text-xs hover:bg-[#e4c55e] transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={`https://wa.me/${WHATSAPP_INT_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs hover:bg-[#20bd5a] transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp: {WHATSAPP_NUMBER}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
