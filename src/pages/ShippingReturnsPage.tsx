import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_INT_NUMBER } from '../data/products';
import { Truck, RotateCcw, ShieldAlert, CheckCircle, Package, MessageCircle } from 'lucide-react';

export const ShippingReturnsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="border-b border-zinc-800 pb-6 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
          <Truck className="w-3.5 h-3.5" />
          <span>Pakistan Logistics & Hygiene Standards</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
          Shipping & Returns Policy
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400">
          Clear, transparent guidelines for delivery and hygiene across Pakistan.
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-zinc-300 leading-relaxed">
        {/* Shipping Schedule & Charges */}
        <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800 space-y-4">
          <div className="flex items-center gap-2 text-white font-serif-luxury text-lg font-bold">
            <Truck className="w-5 h-5 text-[#d4af37]" />
            <h2>1. Shipping Rates & Delivery Timeframes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
              <span className="text-[11px] text-[#d4af37] uppercase font-bold block">
                Major Urban Hubs
              </span>
              <p className="text-white font-semibold">2 &ndash; 4 Business Days</p>
              <p className="text-[11px] text-zinc-400">Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Sialkot, Gujranwala.</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
              <span className="text-[11px] text-[#d4af37] uppercase font-bold block">
                Regional & Outlying Cities
              </span>
              <p className="text-white font-semibold">3 &ndash; 5 Business Days</p>
              <p className="text-[11px] text-zinc-400">All other towns and tehsils across Punjab, Sindh, KPK, Balochistan & AJK.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#181822] border border-[#d4af37]/20 flex items-center justify-between">
            <div>
              <span className="text-white font-semibold text-xs block">Standard Shipping: Rs. 200</span>
              <span className="text-[11px] text-zinc-400">Free delivery automatically applied on all orders of Rs. 3,000 or above.</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
              Cash on Delivery (COD) Available
            </span>
          </div>
        </div>

        {/* Discreet Packing standard */}
        <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-white font-serif-luxury text-lg font-bold">
            <Package className="w-5 h-5 text-[#d4af37]" />
            <h2>2. Discreet Courier Packaging</h2>
          </div>
          <p>
            Every order is dispatched in opaque, unmarked packaging. Courier personnel and delivery riders see only your name and delivery address &mdash; no item titles or lingerie references are ever visible on the exterior box.
          </p>
        </div>

        {/* Hygiene and Returns Policy */}
        <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800 space-y-4">
          <div className="flex items-center gap-2 text-white font-serif-luxury text-lg font-bold">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h2>3. Hygiene Regulations for Intimate Apparel</h2>
          </div>
          <p>
            To guarantee absolute sanitation for all customers, strict sanitary standards apply:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
            <li><strong>Intimate Underwear & Panties:</strong> Non-returnable and non-exchangeable once opened or tried on, in compliance with public health and hygiene standards.</li>
            <li><strong>Bras & Sleepwear:</strong> Eligible for size exchange within 3 days of delivery provided the item is unworn, unwashed, in its original pristine packaging with tags intact.</li>
            <li><strong>Personal Care & Creams:</strong> Unopened and sealed products may be returned if unsealed tamper strips remain intact.</li>
          </ul>
        </div>

        {/* Damaged or Incorrect Item */}
        <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-white font-serif-luxury text-lg font-bold">
            <RotateCcw className="w-5 h-5 text-[#d4af37]" />
            <h2>4. Defective, Damaged, or Incorrect Parcels</h2>
          </div>
          <p>
            In the rare circumstance that you receive an incorrect product, incorrect size, or a manufacturer defect:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-zinc-400">
            <li>Take a clear photo of the delivered item and shipping air waybill label.</li>
            <li>Contact our WhatsApp support team at <strong>{WHATSAPP_NUMBER}</strong> within 48 hours of delivery.</li>
            <li>We will swiftly dispatch the correct replacement at zero additional delivery cost to you.</li>
          </ol>
        </div>
      </div>

      {/* WhatsApp Help CTA */}
      <div className="text-center p-6 rounded-2xl bg-[#15151e] border border-zinc-800 space-y-3">
        <h3 className="font-serif-luxury text-base font-bold text-white">
          Need Assistance with an Order in Transit?
        </h3>
        <p className="text-xs text-zinc-400">
          Our dispatch team can track your courier consignment or provide status updates directly on WhatsApp.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent('Assalam-o-Alaikum, I would like to track my order dispatch.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-semibold text-xs hover:bg-[#20bd5a] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Track via WhatsApp ({WHATSAPP_NUMBER})</span>
        </a>
      </div>
    </div>
  );
};
