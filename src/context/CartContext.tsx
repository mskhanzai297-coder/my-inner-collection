import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, CustomerOrderDetails } from '../types';
import { SHIPPING_FEE, FREE_SHIPPING_THRESHOLD, WHATSAPP_INT_NUMBER } from '../data/products';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size?: string, color?: string, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  subtotal: number;
  deliveryFee: number;
  total: number;
  itemCount: number;
  selectedProductModal: Product | null;
  setSelectedProductModal: (product: Product | null) => void;
  generateWhatsAppOrderUrl: (product?: Product, customDetails?: { size?: string; color?: string; quantity?: number; customer?: Partial<CustomerOrderDetails> }) => string;
  generateCartWhatsAppOrderUrl: (customerDetails?: CustomerOrderDetails) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('mic_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('mic_cart', JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart]);

  const addToCart = (product: Product, size?: string, color?: string, quantity = 1) => {
    const chosenSize = size || product.sizes[0] || 'Standard';
    const chosenColor = color || (product.colors[0] ? product.colors[0].name : 'Default');
    const itemId = `${product.id}-${chosenSize}-${chosenColor}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          id: itemId,
          productId: product.id,
          product,
          size: chosenSize,
          color: chosenColor,
          quantity,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const deliveryFee = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FEE;
  const total = subtotal + deliveryFee;
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Generate single product WhatsApp link
  const generateWhatsAppOrderUrl = (
    product?: Product,
    customDetails?: { size?: string; color?: string; quantity?: number; customer?: Partial<CustomerOrderDetails> }
  ): string => {
    if (!product) return `https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent('Assalam-o-Alaikum, I would like to enquire about products from My Inner Collection.')}`;

    const chosenSize = customDetails?.size || product.sizes[0] || 'Standard';
    const chosenColor = customDetails?.color || (product.colors[0]?.name) || 'Standard';
    const qty = customDetails?.quantity || 1;
    const itemTotal = product.price * qty;

    let message = `*NEW ORDER / INQUIRY - MY INNER COLLECTION*\n\n`;
    message += `Assalam-o-Alaikum, I would like to order the following item:\n\n`;
    message += `🛍️ *Product:* ${product.name}\n`;
    message += `🏷️ *Category:* ${product.categoryLabel}\n`;
    message += `📏 *Size:* ${chosenSize}\n`;
    message += `🎨 *Color:* ${chosenColor}\n`;
    message += `🔢 *Quantity:* ${qty}\n`;
    message += `💰 *Item Price:* Rs. ${product.price.toLocaleString('en-PK')}\n`;
    message += `💵 *Subtotal:* Rs. ${itemTotal.toLocaleString('en-PK')}\n`;

    if (customDetails?.customer?.fullName) {
      message += `\n*Delivery Information:*\n`;
      message += `👤 *Name:* ${customDetails.customer.fullName}\n`;
      if (customDetails.customer.phone) message += `📞 *Phone:* ${customDetails.customer.phone}\n`;
      if (customDetails.customer.city) message += `📍 *City:* ${customDetails.customer.city}\n`;
      if (customDetails.customer.address) message += `🏠 *Address:* ${customDetails.customer.address}\n`;
      if (customDetails.customer.discreetPackagingRequested) {
        message += `🔒 *Discreet Packaging:* YES (Please ensure plain unbranded box)\n`;
      }
    } else {
      message += `\n🔒 *Packaging Note:* Please ensure discreet unbranded parcel packaging.\n`;
    }

    message += `\nPlease confirm product availability and delivery dispatch. Thank you!`;

    return `https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  // Generate full cart WhatsApp checkout link
  const generateCartWhatsAppOrderUrl = (customerDetails?: CustomerOrderDetails): string => {
    if (cart.length === 0) {
      return `https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent('Hello My Inner Collection, I would like to ask about your products.')}`;
    }

    const orderNumber = `MIC-${Math.floor(1000 + Math.random() * 9000)}`;

    let message = `*MY INNER COLLECTION - OFFICIAL ORDER REQUEST*\n`;
    message += `*Order Ref:* #${orderNumber}\n\n`;
    message += `Assalam-o-Alaikum, I would like to place an order for the following items:\n\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      message += `   Size: ${item.size} | Color: ${item.color}\n`;
      message += `   Qty: ${item.quantity} x Rs. ${item.product.price.toLocaleString('en-PK')} = Rs. ${(item.quantity * item.product.price).toLocaleString('en-PK')}\n\n`;
    });

    message += `----------------------------\n`;
    message += `*Subtotal:* Rs. ${subtotal.toLocaleString('en-PK')}\n`;
    message += `*Delivery Fee:* ${deliveryFee === 0 ? 'FREE (Orders over Rs. 3,000)' : `Rs. ${deliveryFee.toLocaleString('en-PK')}`}\n`;
    message += `*Total Amount:* Rs. ${total.toLocaleString('en-PK')}\n`;
    message += `----------------------------\n\n`;

    if (customerDetails && customerDetails.fullName) {
      message += `*Customer Delivery Details:*\n`;
      message += `👤 *Name:* ${customerDetails.fullName}\n`;
      message += `📞 *Contact/WhatsApp:* ${customerDetails.phone}\n`;
      message += `📍 *City:* ${customerDetails.city}\n`;
      message += `🏠 *Address:* ${customerDetails.address}\n`;
      message += `💳 *Payment Method:* ${customerDetails.paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'Bank Transfer / JazzCash'}\n`;
      if (customerDetails.notes) {
        message += `📝 *Notes:* ${customerDetails.notes}\n`;
      }
      message += `🔒 *Discreet Packaging:* ${customerDetails.discreetPackagingRequested ? 'YES (Confidential Plain Packaging)' : 'Standard'}\n\n`;
    } else {
      message += `🔒 *Packaging:* Please arrange 100% discreet, plain brown box packaging.\n\n`;
    }

    message += `Please confirm my order and share estimated dispatch timing. Thank you!`;

    return `https://wa.me/${WHATSAPP_INT_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        subtotal,
        deliveryFee,
        total,
        itemCount,
        selectedProductModal,
        setSelectedProductModal,
        generateWhatsAppOrderUrl,
        generateCartWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
