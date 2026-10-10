import React, { useState } from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_INT_NUMBER } from '../data/products';
import { HelpCircle, ChevronDown, ShieldCheck, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      category: 'privacy',
      question: 'How is the package delivered? Will anyone know what is inside?',
      answer:
        'All parcels are 100% discreet. We deliver orders in completely opaque, plain cardboard cartons or neutral security mailers. There are zero descriptions or external product names mentioning intimate apparel, lingerie, or undergarments. Only your shipping address and the courier tracking number appear on the exterior flyer.',
    },
    {
      category: 'privacy',
      question: 'Can I request extra confidential packaging?',
      answer:
        'Yes. When checking out or ordering via WhatsApp, you can tick "Double Discreet Packaging" or mention it to our representative. We will add an extra internal opaque layer and ensure absolute confidentiality.',
    },
    {
      category: 'orders',
      question: 'How do I place an order via WhatsApp?',
      answer:
        'Simply click "Order on WhatsApp" on any product card or in your cart. A formatted order summary with item name, quantity, size, color, and price will automatically populate. Send it to 03101041303, confirm your shipping address, and we will process the dispatch.',
    },
    {
      category: 'shipping',
      question: 'What are the delivery charges and delivery times in Pakistan?',
      answer:
        'Standard delivery across major cities (Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad) takes 2 to 4 business days. Regional and distant towns take approximately 3 to 5 business days. Delivery fee is a flat Rs. 200, and delivery is completely FREE on all orders of Rs. 3,000 or above.',
    },
    {
      category: 'payments',
      question: 'Do you offer Cash on Delivery (COD)?',
      answer:
        'Yes, Cash on Delivery (COD) is available across all serviceable postal locations in Pakistan. You pay the courier rider in cash once your parcel arrives at your doorstep. We also accommodate direct bank transfers or JazzCash upon request.',
    },
    {
      category: 'sizing',
      question: 'How do I choose the correct size for bras and underwear?',
      answer:
        'All our undergarments adhere to standard Pakistani sizing. You can refer to the size options listed on each product detail page (e.g., 34B, 36C or S/M/L/XL). If you are uncertain about measurements, send a private message to our WhatsApp support at 03101041303 for discreet sizing assistance.',
    },
    {
      category: 'returns',
      question: 'What is your return and exchange policy?',
      answer:
        'For health, hygiene, and sanitary regulations, intimate undergarments and depilatory creams cannot be returned once the protective seal or hygiene sticker has been removed or worn. If you receive a damaged or incorrect item, please notify us on WhatsApp within 48 hours with unboxing photos for an immediate replacement.',
    },
    {
      category: 'personal-care',
      question: 'How should I use the Hair Removal Cream safely?',
      answer:
        'Always conduct a small patch test on a small patch of skin 24 hours prior to full application. Follow the included instructions, leaving the cream on for 4 to 6 minutes, and rinse thoroughly with clean water. Do not apply on irritated or broken skin.',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'privacy', label: 'Privacy & Discreet Packaging' },
    { id: 'orders', label: 'WhatsApp & Ordering' },
    { id: 'shipping', label: 'Shipping & Delivery' },
    { id: 'sizing', label: 'Sizing & Hygiene' },
  ];

  const filteredFaqs = selectedCategory === 'all'
    ? faqs
    : faqs.filter((f) => f.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Help & FAQs</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          Clear answers regarding confidential parcel packaging, delivery times, payment methods, and hygiene standards.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#d4af37] text-black shadow-md'
                : 'bg-[#141419] text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl bg-[#141419] border border-zinc-800 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-800/40 transition-colors"
              >
                <span className="font-serif-luxury text-base font-semibold text-zinc-100">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#d4af37] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct Contact reassurance box */}
      <div className="p-6 rounded-2xl bg-[#16161f] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-white">Have a specific question?</h4>
            <p className="text-zinc-400">Our customer team answers promptly on WhatsApp ({WHATSAPP_NUMBER}).</p>
          </div>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_INT_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-semibold text-xs hover:bg-[#20bd5a] transition-colors whitespace-nowrap"
        >
          Message on WhatsApp
        </a>
      </div>
    </div>
  );
};
