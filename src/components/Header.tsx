import React, { useState } from 'react';
import { PageView } from '../types';
import { useCart } from '../context/CartContext';
import { WHATSAPP_INT_NUMBER } from '../data/products';
import { ShoppingBag, Search, Menu, X, MessageCircle, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenSearch }) => {
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: "Ladies' Innerwear", page: 'ladies-innerwear' },
    { label: "Men's Innerwear", page: 'mens-innerwear' },
    { label: 'Nightwear', page: 'lingerie-nightwear' },
    { label: 'Clothing', page: 'clothing' },
    { label: 'Personal Care', page: 'personal-care' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0c0c0e]/95 backdrop-blur-md border-b border-[#232328] transition-all">
      {/* Top Announcement Bar - Privacy & Fast Dispatch */}
      <div className="bg-[#141418] text-[#c5a059] text-xs py-1.5 px-4 border-b border-[#1e1e24] text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 font-medium tracking-wide">
          <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>100% Discreet Packaging Guaranteed Across Pakistan</span>
          <span className="hidden sm:inline text-zinc-500">|</span>
          <span className="hidden sm:inline text-zinc-300">Free delivery on orders over Rs. 3,000</span>
          <span className="hidden md:inline text-zinc-500">|</span>
          <span className="hidden md:inline text-zinc-300">WhatsApp: 03101041303</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#d4af37] transition-colors whitespace-nowrap">
                MY INNER COLLECTION
              </span>
              <span className="block text-[10px] tracking-[0.22em] text-[#d4af37] uppercase font-medium">
                Luxury Essentials &middot; Pakistan
              </span>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-sm font-medium transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
                    isActive
                      ? 'text-[#d4af37]'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#d4af37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search catalog"
              className="p-2 text-zinc-300 hover:text-[#d4af37] transition-colors cursor-pointer rounded-lg hover:bg-zinc-800/50"
              title="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Prominent WhatsApp Order Button */}
            <a
              href={`https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent('Assalam-o-Alaikum My Inner Collection, I would like to enquire about ordering.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366]/25 border border-[#25D366]/30 text-xs font-semibold tracking-wide transition-all"
              title="Order directly on WhatsApp (03101041303)"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366]/20" />
              <span>WhatsApp Order</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Cart"
              className="relative p-2 text-zinc-200 hover:text-[#d4af37] transition-colors cursor-pointer rounded-lg hover:bg-zinc-800/50"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#d4af37] text-black text-[11px] font-bold h-5 min-w-5 px-1 rounded-full flex items-center justify-center tabular-nums shadow-md">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 text-zinc-300 hover:text-white cursor-pointer rounded-lg hover:bg-zinc-800/50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121216] border-b border-[#232328] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#d4af37]/15 text-[#d4af37] font-semibold'
                      : 'text-zinc-300 hover:bg-zinc-800/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-2 border-t border-zinc-800">
              <a
                href={`https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent('Assalam-o-Alaikum, I want to order from My Inner Collection.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#25D366] text-black font-semibold text-sm hover:bg-[#20ba59] transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Quick WhatsApp Order (03101041303)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
