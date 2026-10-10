import React from 'react';
import { WHATSAPP_NUMBER } from '../data/products';
import { ShieldCheck, EyeOff, Lock, FileText, CheckCircle } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="border-b border-zinc-800 pb-6 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Customer Discretion & Data Protection</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
          Privacy & Discreet Shipping Policy
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400">
          Last Updated: October 2026 &middot; My Inner Collection, Pakistan
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-8">
        {/* Section 1 */}
        <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-white font-serif-luxury text-lg font-bold">
            <EyeOff className="w-5 h-5 text-[#d4af37]" />
            <h2>1. Our Discreet Packaging Guarantee</h2>
          </div>
          <p>
            We recognize that shopping for undergarments, lingerie, and personal care products requires utmost privacy. We guarantee:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
            <li>Parcels are wrapped in neutral, opaque external packaging (solid brown box or matte courier mailer).</li>
            <li>No mention of terms such as &ldquo;bra&rdquo;, &ldquo;lingerie&rdquo;, &ldquo;underwear&rdquo;, or &ldquo;hair removal&rdquo; appears on the courier air waybill or exterior label.</li>
            <li>The parcel exterior will only feature standard logistics information: your delivery address, recipient phone number, and courier tracking code.</li>
            <li>Double-layer confidential wrap is provided upon request at checkout without extra charges.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-white font-serif-luxury text-lg font-bold">
            <Lock className="w-5 h-5 text-[#d4af37]" />
            <h2>2. Handling of Personal Information</h2>
          </div>
          <p>
            When you place an order online or via WhatsApp (03101041303), we collect solely the information necessary to fulfill delivery:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
            <li><strong>Recipient Name:</strong> For courier identification at your doorstep.</li>
            <li><strong>Delivery Address & City:</strong> To dispatch your order through trusted courier partners.</li>
            <li><strong>Phone / WhatsApp Number:</strong> To coordinate dispatch confirmation, tracking updates, and delivery rider calls.</li>
          </ul>
          <p>
            We do not sell, rent, or trade your personal contact details to third-party marketing brokers or advertisers under any circumstances.
          </p>
        </div>

        {/* Section 3 */}
        <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-white font-serif-luxury text-lg font-bold">
            <FileText className="w-5 h-5 text-[#d4af37]" />
            <h2>3. WhatsApp Order Communications</h2>
          </div>
          <p>
            Communications through WhatsApp are encrypted end-to-end between your device and our official business account ({WHATSAPP_NUMBER}).
            Order histories in WhatsApp are kept confidential and accessed exclusively by authorized customer fulfillment personnel.
          </p>
        </div>

        {/* Section 4 */}
        <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-white font-serif-luxury text-lg font-bold">
            <CheckCircle className="w-5 h-5 text-[#d4af37]" />
            <h2>4. Questions or Privacy Inquiries</h2>
          </div>
          <p>
            If you have questions regarding our confidentiality practices or wish to have your contact details purged from our dispatch logs following delivery completion, please message our support desk at WhatsApp <strong>{WHATSAPP_NUMBER}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
