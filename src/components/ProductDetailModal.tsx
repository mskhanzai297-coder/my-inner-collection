import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { PRODUCTS, WHATSAPP_INT_NUMBER } from '../data/products';
import { X, ShoppingBag, MessageCircle, ShieldCheck, Check, Truck, Sparkles, RefreshCw, Star } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectProduct,
}) => {
  const { addToCart, generateWhatsAppOrderUrl } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [activeImage, setActiveImage] = useState(product.image);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1600);
  };

  const whatsAppUrl = generateWhatsAppOrderUrl(product, {
    size: selectedSize,
    color: selectedColor,
    quantity,
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#121216] border border-[#2a2a34] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#1e1e26]/80 text-zinc-300 hover:text-white hover:bg-[#2a2a34] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-4 sm:p-8 space-y-8">
          {/* Main Grid: Gallery & Contiguous Purchase Module */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Left Column: Image Gallery */}
            <div className="space-y-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#181820] border border-zinc-800">
                <img
                  src={activeImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded bg-[#0c0c0e]/90 border border-[#d4af37]/40 text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Discreet Guarantee Note under Gallery */}
              <div className="p-3.5 rounded-xl bg-[#181822] border border-zinc-800/80 flex items-center gap-3 text-xs text-zinc-300">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0" />
                <span>
                  <strong>100% Confidential Shipping:</strong> Delivered in plain, unmarked parcel packaging with zero external item names.
                </span>
              </div>
            </div>

            {/* Right Column: Contiguous Purchase Module */}
            <div className="flex flex-col justify-between space-y-5">
              <div>
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                  <span className="uppercase tracking-widest text-[#d4af37] font-medium text-[11px]">
                    {product.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-semibold text-zinc-200">{product.rating}</span>
                    <span className="text-zinc-500">({product.reviewsCount} reviews)</span>
                  </div>
                </div>

                {/* Product Name */}
                <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-3">
                  {product.name}
                </h1>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#f7f0dc] tabular-nums">
                    Rs. {product.price.toLocaleString('en-PK')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-zinc-500 line-through tabular-nums">
                      Rs. {product.originalPrice.toLocaleString('en-PK')}
                    </span>
                  )}
                  <span className="ml-auto text-xs text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    In Stock ({product.stockCount} units available)
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Material & Fabric Details */}
                <div className="text-xs text-zinc-400 p-3 rounded-lg bg-[#181820] border border-zinc-800/60 mb-5">
                  <span className="font-semibold text-zinc-300">Material & Composition: </span>
                  {product.fabricOrMaterial}
                </div>

                {/* Size Selection */}
                {product.sizes.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                        Select Size:
                      </label>
                      <span className="text-xs text-[#d4af37]">Standard Pakistan Fit</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                            selectedSize === sz
                              ? 'border-[#d4af37] bg-[#d4af37] text-black shadow-md'
                              : 'border-zinc-700 bg-zinc-800/40 text-zinc-300 hover:border-zinc-500'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selection */}
                {product.colors.length > 0 && (
                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      Select Color: <span className="text-[#d4af37] capitalize">{selectedColor}</span>
                    </label>
                    <div className="flex items-center gap-2.5">
                      {product.colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setSelectedColor(c.name)}
                          title={c.name}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs cursor-pointer transition-all ${
                            selectedColor === c.name
                              ? 'border-[#d4af37] bg-[#d4af37]/15 text-[#f7f0dc]'
                              : 'border-zinc-700 bg-zinc-800/40 text-zinc-400 hover:border-zinc-500'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/40"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span>{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity Stepper */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Quantity:
                  </span>
                  <div className="flex items-center border border-zinc-700 rounded-lg overflow-hidden bg-zinc-800/40">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-zinc-300 hover:bg-zinc-700/60 transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-4 py-1.5 text-xs font-bold text-white tabular-nums">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-zinc-300 hover:bg-zinc-700/60 transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-zinc-400 tabular-nums">
                    Total: Rs. {(product.price * quantity).toLocaleString('en-PK')}
                  </span>
                </div>
              </div>

              {/* Purchase Action Buttons */}
              <div className="space-y-3 pt-2 border-t border-zinc-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleAddToCart}
                    className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-lg ${
                      addedAnimation
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#d4af37] text-black hover:bg-[#e4c45b]'
                    }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>

                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#25D366] text-black hover:bg-[#20bd5a] transition-all shadow-lg text-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order via WhatsApp</span>
                  </a>
                </div>

                <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-400 pt-1">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#d4af37]" />
                    Cash on Delivery (COD) All Pakistan
                  </span>
                  <span>&middot;</span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                    Respectful Customer Support
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Product Features & Care Instructions */}
          {product.features && product.features.length > 0 && (
            <div className="pt-6 border-t border-zinc-800">
              <h3 className="font-serif-luxury text-lg font-semibold text-zinc-100 mb-3">
                Key Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#181820] border border-zinc-800/60">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="pt-6 border-t border-zinc-800">
              <h3 className="font-serif-luxury text-lg font-semibold text-zinc-100 mb-4">
                You May Also Like
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedProducts.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectProduct(rel);
                      setSelectedSize(rel.sizes[0] || 'Standard');
                      setSelectedColor(rel.colors[0]?.name || 'Standard');
                      setQuantity(1);
                      setActiveImage(rel.image);
                    }}
                    className="p-3 rounded-xl bg-[#16161c] border border-zinc-800 hover:border-[#d4af37]/40 cursor-pointer transition-all group"
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-zinc-900 mb-2.5">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-xs font-medium text-zinc-200 line-clamp-1 group-hover:text-[#d4af37] transition-colors">
                      {rel.name}
                    </div>
                    <div className="text-xs font-bold text-white tabular-nums mt-1">
                      Rs. {rel.price.toLocaleString('en-PK')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
