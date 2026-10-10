import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingBag, MessageCircle, Check, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetail?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetail }) => {
  const { addToCart, generateWhatsAppOrderUrl, setSelectedProductModal } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedSize, selectedColor, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1600);
  };

  const handleCardClick = () => {
    if (onOpenDetail) {
      onOpenDetail(product);
    } else {
      setSelectedProductModal(product);
    }
  };

  const whatsAppUrl = generateWhatsAppOrderUrl(product, {
    size: selectedSize,
    color: selectedColor,
    quantity: 1,
  });

  return (
    <div
      onClick={handleCardClick}
      className="group relative flex flex-col bg-[#141418] rounded-xl border border-[#26262e] hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 overflow-hidden cursor-pointer"
    >
      {/* Badge / Tag if present */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-[#0c0c0e]/85 backdrop-blur-sm border border-[#d4af37]/40 text-[#e5c158] text-[11px] font-semibold tracking-wider uppercase">
          {product.badge}
        </div>
      )}

      {/* Image Container with 4:3 luxury ratio */}
      <div className="relative aspect-[4/3] w-full bg-[#18181f] overflow-hidden">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#1c1c24] to-[#121217] text-[#d4af37]">
            <ShoppingBag className="w-8 h-8 opacity-60 mb-2" />
            <span className="text-xs text-zinc-400 text-center">{product.name}</span>
          </div>
        )}

        {/* Quick View Overlay Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0c0c0e]/90 text-zinc-100 text-xs font-medium border border-[#d4af37]/40 shadow-lg">
            <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>View Details</span>
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        {/* Category & Stock Unboxed Metadata */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
          <span className="tracking-wide uppercase text-[11px] font-medium text-zinc-400">
            {product.categoryLabel}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>In Stock</span>
          </span>
        </div>

        {/* Product Title */}
        <h3 className="font-serif-luxury text-base sm:text-lg font-semibold text-zinc-100 group-hover:text-[#d4af37] transition-colors line-clamp-1 mb-1.5">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-zinc-400 line-clamp-2 mb-3 leading-relaxed">
          {product.description}
        </p>

        {/* Price Section */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-white tabular-nums tracking-tight">
            Rs. {product.price.toLocaleString('en-PK')}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-zinc-500 line-through tabular-nums">
              Rs. {product.originalPrice.toLocaleString('en-PK')}
            </span>
          )}
        </div>

        {/* Variant Selectors: Sizes & Colors preview */}
        <div className="pt-2 border-t border-zinc-800/80 mb-4 space-y-2.5">
          {product.sizes.length > 1 && (
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400 text-[11px]">Size:</span>
              <div
                className="flex flex-wrap gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                {product.sizes.slice(0, 4).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium border transition-colors cursor-pointer ${
                      selectedSize === sz
                        ? 'border-[#d4af37] bg-[#d4af37]/20 text-[#f7f0dc]'
                        : 'border-zinc-700/80 text-zinc-400 hover:border-zinc-500'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
                {product.sizes.length > 4 && (
                  <span className="text-[10px] text-zinc-500 self-center">
                    +{product.sizes.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}

          {product.colors.length > 0 && (
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400 text-[11px]">Color:</span>
              <div
                className="flex items-center gap-1.5"
                onClick={(e) => e.stopPropagation()}
              >
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    title={c.name}
                    style={{ backgroundColor: c.hex }}
                    className={`w-3.5 h-3.5 rounded-full border cursor-pointer transition-transform ${
                      selectedColor === c.name
                        ? 'scale-125 border-[#d4af37] ring-1 ring-[#d4af37]'
                        : 'border-zinc-600 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons: Add to Cart & WhatsApp Order */}
        <div className="mt-auto grid grid-cols-2 gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={handleAddToCart}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              addedAnimation
                ? 'bg-emerald-600 text-white'
                : 'bg-[#d4af37] text-black hover:bg-[#e2c159] shadow-sm'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-lg text-xs font-semibold border border-[#25D366]/40 text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all text-center"
            title="Order instantly on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
