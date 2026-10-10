import React from 'react';
import { ShieldCheck, EyeOff, Package, HeartHandshake, Lock } from 'lucide-react';

export const DiscreetTrustBanner: React.FC = () => {
  const trustPillars = [
    {
      icon: EyeOff,
      title: 'Discreet Plain Packaging',
      description:
        'All intimate apparel and personal care parcels are delivered in neutral, opaque boxes without any brand labels or mention of lingerie on the outside.',
    },
    {
      icon: ShieldCheck,
      title: 'Respectful Customer Care',
      description:
        'Our customer support team assists you with modesty, courtesy, and complete confidentiality via WhatsApp and phone.',
    },
    {
      icon: Lock,
      title: 'Confidential Information',
      description:
        'Your contact numbers, delivery addresses, and order histories are handled strictly for fulfillment and never shared.',
    },
    {
      icon: Package,
      title: 'Safe Cash on Delivery',
      description:
        'Pay conveniently at your doorstep upon receiving your parcel across all major and regional cities in Pakistan.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-[#202028] bg-gradient-to-b from-[#111115] via-[#0d0d10] to-[#111115]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Our Commitment to You</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Your Privacy & Comfort Matter
          </h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            We respect your privacy and understand the importance of discretion when shopping for personal essentials.
            Every order is handled with the highest level of dignity, confidentiality, and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#14141a] border border-[#24242e] hover:border-[#d4af37]/40 transition-all duration-300 space-y-3 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1c1c24] border border-zinc-800 flex items-center justify-center text-[#d4af37] group-hover:scale-105 group-hover:border-[#d4af37]/40 transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-base font-semibold text-zinc-100 group-hover:text-[#d4af37] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
