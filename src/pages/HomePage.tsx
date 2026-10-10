import React from 'react';
import { PageView, Product } from '../types';
import { CATEGORY_METADATA, PRODUCTS, WHATSAPP_INT_NUMBER } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { DiscreetTrustBanner } from '../components/DiscreetTrustBanner';
import heroImg from '../assets/images/hero_luxury_banner_1791596069367.jpg';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Star, Truck } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onOpenProductDetail: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenProductDetail }) => {
  // Best sellers and featured products
  const featuredProducts = PRODUCTS.slice(0, 6);

  const handleCategoryClick = (catId: string) => {
    if (catId === 'ladies-innerwear') onNavigate('ladies-innerwear');
    else if (catId === 'mens-innerwear') onNavigate('mens-innerwear');
    else if (catId === 'lingerie-nightwear') onNavigate('lingerie-nightwear');
    else if (catId === 'ladies-clothing' || catId === 'children-clothing') onNavigate('clothing');
    else if (catId === 'personal-care') onNavigate('personal-care');
    else onNavigate('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#131318] to-[#0c0c0e] border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premium Boutique Collection &middot; Pakistan</span>
              </div>

              <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.18]">
                Your Comfort. <br />
                <span className="gold-gradient-text">Your Confidence.</span> <br />
                Your Collection.
              </h1>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Discover ladies' and men's innerwear, comfortable nightwear, clothing, and personal-care essentials &mdash; carefully selected for your everyday needs with guaranteed discreet parcel delivery.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate('shop')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#d4af37] text-black font-bold text-sm hover:bg-[#e4c55e] transition-all shadow-lg hover:shadow-[#d4af37]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent('Assalam-o-Alaikum My Inner Collection, I would like to order or enquire about your catalogue.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-sm hover:bg-[#20bd5a] transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              {/* Quick Trust Highlights below CTA */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                  <span>100% Discreet Packaging</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#d4af37]" />
                  <span>Cash on Delivery (Pakistan)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified Fabrics</span>
                </span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl shadow-black/80 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] group">
                <img
                  src={heroImg}
                  alt="My Inner Collection Luxury Boutique Display"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block">
                      Curated For Elegance
                    </span>
                    <span className="text-white font-medium">Underwear &middot; Nightwear &middot; Care</span>
                  </div>
                  <span className="px-3 py-1 rounded bg-[#d4af37] text-black font-bold text-[11px]">
                    New Season
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
              Explore Our Range
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              Shop by Category
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-xs font-semibold text-[#d4af37] hover:text-[#f3e5ab] flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORY_METADATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group relative rounded-2xl overflow-hidden bg-[#15151c] border border-zinc-800 hover:border-[#d4af37]/60 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-black/60 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                <img
                  src={cat.image}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <span className="text-zinc-500">{cat.itemCount} Curated Designs</span>
                  <span className="text-[#d4af37] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Shop Collection</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
              Customer Favorites
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              Featured Collection
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-xs font-semibold text-[#d4af37] hover:text-[#f3e5ab] flex items-center gap-1.5 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>See Entire Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={onOpenProductDetail}
            />
          ))}
        </div>
      </section>

      {/* 4. PRIVACY & DISCREET SHOPPING SECTION */}
      <DiscreetTrustBanner />

      {/* 5. HOW WHATSAPP ORDERING WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141419] border border-[#282834] relative overflow-hidden">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-1">
              Effortless & Confidential
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-2">
              How Ordering Works with My Inner Collection
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300">
              No complex registrations needed. Order directly through WhatsApp or use our online checkout in three smooth steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#191922] border border-zinc-800 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] font-bold flex items-center justify-center text-sm font-mono">
                1
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-white">
                Pick Your Items & Sizes
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Browse our innerwear, sleepwear, or hair care. Select your preferred size and color with complete ease.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#191922] border border-zinc-800 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold flex items-center justify-center text-sm font-mono">
                2
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-white">
                One-Click WhatsApp Order
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Click “Order on WhatsApp”. An automated message with your chosen product details is prepared for WhatsApp 03101041303.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#191922] border border-zinc-800 space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] font-bold flex items-center justify-center text-sm font-mono">
                3
              </div>
              <h3 className="font-serif-luxury text-base font-bold text-white">
                Discreet Delivery & COD
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We pack your order in plain, unbranded packaging and dispatch via courier. Pay safely at your door upon delivery.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-400">
              Need assistance selecting a size or placing a custom order?
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent('Assalam-o-Alaikum, I need help selecting the right size.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-black font-semibold text-xs hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp: 03101041303</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. RESPECTFUL CUSTOMER FEEDBACK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
            Real Customer Satisfaction
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-2">
            Trusted by Pakistani Shoppers
          </h2>
          <p className="text-xs text-zinc-400">
            Read what our clients appreciate about our fabric feel, discrete packaging, and prompt WhatsApp service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800/80 space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              &ldquo;The seamless bra is incredibly soft and does not show lines under thin lawn kurtas. The package arrived in a totally plain brown carton with zero labels of innerwear. Highly respectful service.&rdquo;
            </p>
            <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400">
              <span className="font-semibold text-zinc-200">Fatima S.</span> &middot; Lahore
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800/80 space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              &ldquo;Ordered the modal boxer briefs pack on WhatsApp. The person on the other end was very polite and confirmed my size immediately. Arrived in Karachi within 2 days with Cash on Delivery.&rdquo;
            </p>
            <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400">
              <span className="font-semibold text-zinc-200">Zubair A.</span> &middot; Karachi
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#141419] border border-zinc-800/80 space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              &ldquo;The satin nightwear robe is top boutique luxury. Fabric has a rich silky fall. Also tried the sensitive hair removal cream &mdash; zero burning and very mild scent. Will order again!&rdquo;
            </p>
            <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400">
              <span className="font-semibold text-zinc-200">Mahnoor K.</span> &middot; Islamabad
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
