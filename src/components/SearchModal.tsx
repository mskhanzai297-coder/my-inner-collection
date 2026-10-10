import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { Search, X, ShoppingBag, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.fabricOrMaterial.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-[#141419] border border-[#2b2b36] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-zinc-800 flex items-center gap-3 bg-[#171720]">
          <Search className="w-5 h-5 text-[#d4af37] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search ladies' bras, boxer briefs, nightwear, robes, personal care..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 rounded-md text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Search Results / Suggestions */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {!query.trim() ? (
            <div className="py-8 text-center text-xs text-zinc-400 space-y-3">
              <p>Type keywords to search across all products</p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Seamless Bra', 'Boxer Briefs', 'Satin Robe', 'Hair Removal', 'Lounge Set', 'Cotton Panties'].map((sug) => (
                  <button
                    key={sug}
                    onClick={() => setQuery(sug)}
                    className="px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-300 hover:text-[#d4af37] border border-zinc-700/60 transition-colors text-xs cursor-pointer"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-12 text-center text-xs text-zinc-400 space-y-2">
              <ShoppingBag className="w-8 h-8 mx-auto text-zinc-600 mb-2" />
              <p>No products found matching &ldquo;{query}&rdquo;.</p>
              <p className="text-[11px] text-zinc-500">
                Try searching for bra, cotton, satin, boxers, or cream.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider mb-2">
                Found {filteredProducts.length} items
              </div>
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    onSelectProduct(prod);
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-[#181820] border border-zinc-800/80 hover:border-[#d4af37]/50 flex items-center gap-3 cursor-pointer group transition-all"
                >
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-900 shrink-0">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-zinc-200 group-hover:text-[#d4af37] transition-colors truncate">
                      {prod.name}
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-0.5">
                      {prod.categoryLabel} &middot; <span className="text-emerald-400">In Stock</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs font-bold text-white tabular-nums">
                      Rs. {prod.price.toLocaleString('en-PK')}
                    </div>
                    <div className="text-[10px] text-[#d4af37] flex items-center justify-end gap-1 mt-0.5">
                      <span>View</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
