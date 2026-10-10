import React, { useState } from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_INT_NUMBER } from '../data/products';
import { MessageCircle, Clock, CheckCircle2, ShieldCheck, Send, PhoneCall, HelpCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'general',
    orderNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = 'Please provide a valid Pakistani contact number (e.g. 03101234567)';
    }
    if (!formData.message.trim()) newErrors.message = 'Please write your message or question';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const forwardToWhatsApp = () => {
    let msg = `*CUSTOMER INQUIRY - MY INNER COLLECTION*\n\n`;
    msg += `👤 *Name:* ${formData.name}\n`;
    msg += `📞 *Contact:* ${formData.phone}\n`;
    msg += `📌 *Type:* ${formData.inquiryType.toUpperCase()}\n`;
    if (formData.orderNumber) msg += `🔖 *Order Ref:* ${formData.orderNumber}\n`;
    msg += `💬 *Message:* ${formData.message}\n`;

    const url = `https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
          <PhoneCall className="w-3.5 h-3.5" />
          <span>Customer Desk</span>
        </div>
        <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
          We Are Here to Assist You
        </h1>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          Have questions about sizing, fabric feel, discreet delivery, or an existing order?
          Connect directly with our customer desk via WhatsApp or send us an inquiry below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Col: Direct WhatsApp Card & Support Info */}
        <div className="lg:col-span-5 space-y-6">
          {/* Prominent WhatsApp Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#182a20] to-[#121c17] border border-[#25D366]/40 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-black shadow-md">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-emerald-400 uppercase tracking-wider font-semibold block">
                  Fastest Response Channel
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-white">
                  WhatsApp Support
                </h3>
              </div>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Our primary customer care runs seamlessly on WhatsApp. You can enquire about measurements, request discreet packaging, or send screenshots of products.
            </p>

            <div className="p-3.5 rounded-xl bg-black/40 border border-[#25D366]/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-zinc-400 block">Official Helpline</span>
                <span className="text-base font-bold text-[#25D366] font-mono tracking-wider">
                  {WHATSAPP_NUMBER}
                </span>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent('Assalam-o-Alaikum My Inner Collection, I have a customer enquiry.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#25D366] text-black text-xs font-bold hover:bg-[#20bd5a] transition-colors"
              >
                Chat Now
              </a>
            </div>
          </div>

          {/* Operating Hours & Respectful Standards */}
          <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800 space-y-4">
            <div className="flex items-center gap-2.5 text-zinc-200">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              <h4 className="font-semibold text-xs uppercase tracking-wider text-white">
                Customer Service Hours
              </h4>
            </div>
            <div className="text-xs text-zinc-300 space-y-1.5 border-l-2 border-[#d4af37]/40 pl-3">
              <div className="flex justify-between">
                <span>Monday &ndash; Saturday:</span>
                <span className="text-white font-medium">10:00 AM &ndash; 10:00 PM PKT</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-zinc-400">Order taking via WhatsApp</span>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-800 flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>All customer dialogues are handled with total discretion & modesty.</span>
            </div>
          </div>
        </div>

        {/* Right Col: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#141419] border border-zinc-800 space-y-6">
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-white">
                Send an Online Inquiry
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Fill in the details below. You can also send the inquiry directly into WhatsApp with one click.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4 bg-[#181822] rounded-xl border border-emerald-500/30 p-6">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-serif-luxury text-lg font-bold text-white">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                  Your inquiry has been recorded. For instant resolution, send it directly to our customer representative on WhatsApp with one click below:
                </p>
                <div className="pt-2">
                  <button
                    onClick={forwardToWhatsApp}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-semibold text-xs hover:bg-[#20bd5a] transition-colors shadow-lg cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Message to WhatsApp ({WHATSAPP_NUMBER})</span>
                  </button>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', inquiryType: 'general', orderNumber: '', message: '' });
                  }}
                  className="text-[11px] text-zinc-400 hover:text-white underline block mx-auto pt-2"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Fatima / Hamza"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-zinc-700 focus:border-[#d4af37]'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Phone / WhatsApp Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0310 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                        errors.phone ? 'border-rose-500' : 'border-zinc-700 focus:border-[#d4af37]'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="general">Product & Fabric Question</option>
                      <option value="size">Sizing & Measurement Guidance</option>
                      <option value="order">Existing Order Status Enquiry</option>
                      <option value="privacy">Discreet Packaging Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Order Reference (If Applicable)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. MIC-4921"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Your Message / Question <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please specify your query regarding products, sizing, or delivery..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                      errors.message ? 'border-rose-500' : 'border-zinc-700 focus:border-[#d4af37]'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <span className="text-[11px] text-zinc-400">
                    Your contact info is kept strictly confidential.
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#d4af37] text-black font-bold text-xs hover:bg-[#e4c55e] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
