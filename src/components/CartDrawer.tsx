import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CustomerOrderDetails } from '../types';
import { FREE_SHIPPING_THRESHOLD, WHATSAPP_NUMBER, WHATSAPP_INT_NUMBER } from '../data/products';
import { X, Trash2, ShoppingBag, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Truck, Lock } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    deliveryFee,
    total,
    itemCount,
    generateCartWhatsAppOrderUrl,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'details' | 'success'>('cart');
  const [confirmedOrderRef, setConfirmedOrderRef] = useState('');

  const [customerDetails, setCustomerDetails] = useState<CustomerOrderDetails>({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    notes: '',
    discreetPackagingRequested: true,
    paymentMethod: 'cod',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  if (!isCartOpen) return null;

  const handleInputChange = (field: keyof CustomerOrderDetails, value: any) => {
    setCustomerDetails((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!customerDetails.fullName.trim()) {
      errors.fullName = 'Please enter your full name';
    }
    if (!customerDetails.phone.trim() || customerDetails.phone.length < 10) {
      errors.phone = 'Please enter a valid Pakistani contact number (e.g. 0310...)';
    }
    if (!customerDetails.city.trim()) {
      errors.city = 'Please enter your city';
    }
    if (!customerDetails.address.trim()) {
      errors.address = 'Please enter your street address';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleWhatsAppCheckout = () => {
    // If details are filled, pass them; otherwise prompt or generate url directly
    const url = generateCartWhatsAppOrderUrl(customerDetails.fullName ? customerDetails : undefined);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleConfirmCashOnDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const ref = `MIC-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedOrderRef(ref);

    // Save recent order to localStorage for customer reference
    try {
      const orders = JSON.parse(localStorage.getItem('mic_orders') || '[]');
      orders.unshift({
        orderRef: ref,
        items: cart,
        subtotal,
        deliveryFee,
        total,
        customerDetails,
        date: new Date().toISOString(),
      });
      localStorage.setItem('mic_orders', JSON.stringify(orders));
    } catch {
      // storage unavailable
    }

    setCheckoutStep('success');
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#111115] border-l border-[#24242e] h-full flex flex-col shadow-2xl overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-[#141419]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#d4af37]" />
            <h2 className="font-serif-luxury text-lg font-bold text-white">
              {checkoutStep === 'success'
                ? 'Order Placed'
                : checkoutStep === 'details'
                ? 'Delivery & Checkout'
                : `Your Shopping Cart (${itemCount})`}
            </h2>
          </div>
          <button
            onClick={() => {
              setIsCartOpen(false);
              if (checkoutStep === 'success') setCheckoutStep('cart');
            }}
            aria-label="Close cart"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        {checkoutStep !== 'success' && cart.length > 0 && (
          <div className="px-5 py-2.5 bg-[#171720] border-b border-zinc-800/80 text-xs text-zinc-300">
            {subtotal >= FREE_SHIPPING_THRESHOLD ? (
              <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                Congratulations! You qualified for Free Shipping anywhere in Pakistan.
              </span>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px]">
                  <span>
                    Add <strong className="text-[#d4af37]">Rs. {(FREE_SHIPPING_THRESHOLD - subtotal).toLocaleString('en-PK')}</strong> more for <strong>FREE Delivery</strong>
                  </span>
                  <span className="text-zinc-400 font-medium">{Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%</span>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#d4af37] h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          
          {/* STEP 1: CART ITEMS VIEW */}
          {checkoutStep === 'cart' && (
            <>
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1b1b24] border border-zinc-800 flex items-center justify-center text-zinc-500">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-serif-luxury text-lg font-bold text-zinc-200">
                      Your Cart is Empty
                    </h3>
                    <p className="text-xs text-zinc-400 max-w-xs mt-1">
                      Browse our luxury innerwear, lingerie, clothing and personal care collections.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-5 py-2.5 rounded-lg bg-[#d4af37] text-black text-xs font-semibold hover:bg-[#e2c159] transition-colors cursor-pointer"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-[#16161c] border border-zinc-800/80 flex gap-3 relative group"
                    >
                      {/* Product Thumbnail */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-zinc-900 shrink-0 border border-zinc-800">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs font-semibold text-zinc-100 line-clamp-1">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              aria-label="Remove item"
                              className="text-zinc-500 hover:text-rose-400 p-0.5 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          
                          <div className="text-[11px] text-zinc-400 mt-0.5 flex items-center gap-2">
                            <span>Size: <strong className="text-zinc-200">{item.size}</strong></span>
                            <span>&middot;</span>
                            <span>Color: <strong className="text-zinc-200">{item.color}</strong></span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-1">
                          {/* Quantity Stepper */}
                          <div className="flex items-center border border-zinc-700 rounded-md overflow-hidden bg-zinc-800/60">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2 py-0.5 text-xs text-zinc-400 hover:bg-zinc-700 transition-colors"
                            >
                              -
                            </button>
                            <span className="px-2.5 py-0.5 text-[11px] font-bold text-white tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2 py-0.5 text-xs text-zinc-400 hover:bg-zinc-700 transition-colors"
                            >
                              +
                            </button>
                          </div>

                          {/* Price */}
                          <span className="text-xs font-bold text-[#f7f0dc] tabular-nums">
                            Rs. {(item.product.price * item.quantity).toLocaleString('en-PK')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* STEP 2: CHECKOUT DETAILS FORM */}
          {checkoutStep === 'details' && (
            <form onSubmit={handleConfirmCashOnDelivery} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#181822] border border-[#d4af37]/30 flex items-start gap-2.5 text-xs text-zinc-300">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#f7f0dc] block">Discreet Packaging Standard:</strong>
                  Your items will be dispatched in a neutral, opaque brown packaging without any exterior brand markings of lingerie or intimate undergarments.
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ayesha Khan / Mohammad Ali"
                  value={customerDetails.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                    formErrors.fullName ? 'border-rose-500' : 'border-zinc-700 focus:border-[#d4af37]'
                  }`}
                />
                {formErrors.fullName && (
                  <p className="text-[11px] text-rose-400 mt-1">{formErrors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  WhatsApp / Phone Number <span className="text-rose-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 0310 1234567"
                  value={customerDetails.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                    formErrors.phone ? 'border-rose-500' : 'border-zinc-700 focus:border-[#d4af37]'
                  }`}
                />
                {formErrors.phone && (
                  <p className="text-[11px] text-rose-400 mt-1">{formErrors.phone}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    City <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Karachi / Lahore / Islamabad"
                    value={customerDetails.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                      formErrors.city ? 'border-rose-500' : 'border-zinc-700 focus:border-[#d4af37]'
                    }`}
                  />
                  {formErrors.city && (
                    <p className="text-[11px] text-rose-400 mt-1">{formErrors.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">
                    Payment Method
                  </label>
                  <select
                    value={customerDetails.paymentMethod}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="cod">Cash on Delivery (COD)</option>
                    <option value="bank_transfer">Direct Bank / JazzCash</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Complete Delivery Address <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="House #, Street #, Sector / Area, Landmark"
                  value={customerDetails.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                    formErrors.address ? 'border-rose-500' : 'border-zinc-700 focus:border-[#d4af37]'
                  }`}
                />
                {formErrors.address && (
                  <p className="text-[11px] text-rose-400 mt-1">{formErrors.address}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                  Special Instructions / Delivery Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Call before delivery, leave with guard"
                  value={customerDetails.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <label className="text-xs text-zinc-300 flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={customerDetails.discreetPackagingRequested}
                    onChange={(e) => handleInputChange('discreetPackagingRequested', e.target.checked)}
                    className="rounded border-zinc-700 text-[#d4af37] focus:ring-0"
                  />
                  <span>Double Discreet Confidential Packaging</span>
                </label>
                <Lock className="w-3.5 h-3.5 text-[#d4af37]" />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="w-1/3 py-2.5 rounded-lg border border-zinc-700 text-xs text-zinc-300 hover:bg-zinc-800 transition-colors"
                >
                  Back to Cart
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-2.5 rounded-lg bg-[#d4af37] text-black text-xs font-bold hover:bg-[#e2c159] transition-colors shadow-md"
                >
                  Confirm COD Order
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: ORDER CONFIRMED SUCCESS VIEW */}
          {checkoutStep === 'success' && (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs text-[#d4af37] uppercase tracking-wider font-semibold">
                  Order Successfully Submitted
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-white mt-1">
                  Thank You, {customerDetails.fullName || 'Valued Customer'}!
                </h3>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto mt-1">
                  Your order reference is <strong className="text-white font-mono">{confirmedOrderRef}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#181822] border border-zinc-800 text-left text-xs space-y-2">
                <div className="flex justify-between text-zinc-400">
                  <span>Contact Number:</span>
                  <span className="text-zinc-200 font-medium">{customerDetails.phone}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Destination:</span>
                  <span className="text-zinc-200 font-medium">{customerDetails.city}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Payment Mode:</span>
                  <span className="text-emerald-400 font-medium">Cash on Delivery</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Packaging:</span>
                  <span className="text-[#d4af37] font-medium">100% Discreet Unmarked</span>
                </div>
                <div className="pt-2 border-t border-zinc-800 flex justify-between font-bold text-white">
                  <span>Order Total:</span>
                  <span>Rs. {total.toLocaleString('en-PK')}</span>
                </div>
              </div>

              {/* Direct WhatsApp Expedite Button */}
              <div className="space-y-2">
                <a
                  href={`https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent(`Assalam-o-Alaikum, I just placed order #${confirmedOrderRef} on My Inner Collection for Rs. ${total.toLocaleString('en-PK')}. Name: ${customerDetails.fullName}, City: ${customerDetails.city}. Please confirm dispatch.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366] text-black font-semibold text-xs hover:bg-[#20bd5a] transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Order #{confirmedOrderRef} to WhatsApp</span>
                </a>
                <p className="text-[11px] text-zinc-500">
                  You can also contact our customer desk directly at {WHATSAPP_NUMBER}
                </p>
              </div>

              <button
                onClick={() => {
                  setCheckoutStep('cart');
                  setIsCartOpen(false);
                }}
                className="text-xs text-zinc-400 hover:text-white transition-colors underline pt-2"
              >
                Continue Browsing Store
              </button>
            </div>
          )}

        </div>

        {/* Drawer Footer with Price Summary & Actions */}
        {checkoutStep === 'cart' && cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-zinc-800 bg-[#141419] space-y-3">
            <div className="space-y-1.5 text-xs text-zinc-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-white tabular-nums">
                  Rs. {subtotal.toLocaleString('en-PK')}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery (Pakistan)</span>
                <span className="font-semibold tabular-nums text-zinc-200">
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-400 font-bold">FREE</span>
                  ) : (
                    `Rs. ${deliveryFee.toLocaleString('en-PK')}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#f7f0dc] pt-2 border-t border-zinc-800">
                <span>Total Amount</span>
                <span className="tabular-nums">Rs. {total.toLocaleString('en-PK')}</span>
              </div>
            </div>

            {/* Two Primary Order Actions */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <button
                onClick={handleWhatsAppCheckout}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs transition-colors shadow-md text-center cursor-pointer"
                title="Send your cart directly to WhatsApp 03101041303"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="truncate">WhatsApp Order</span>
              </button>

              <button
                onClick={() => setCheckoutStep('details')}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#d4af37] hover:bg-[#e2c159] text-black font-semibold text-xs transition-colors shadow-md text-center cursor-pointer"
              >
                <span>Checkout (COD)</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 pt-1">
              <ShieldCheck className="w-3 h-3 text-[#d4af37]" />
              <span>Safe & Confidential Delivery &middot; Cash on Delivery Across Pakistan</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
