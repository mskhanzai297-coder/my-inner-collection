export interface Product {
  id: string;
  name: string;
  category: 'ladies-innerwear' | 'mens-innerwear' | 'lingerie-nightwear' | 'ladies-clothing' | 'children-clothing' | 'personal-care';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  additionalImages?: string[];
  description: string;
  fabricOrMaterial: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  stockCount: number;
  badge?: string;
  careInstructions?: string;
  features?: string[];
}

export interface CartItem {
  id: string; // product id + size + color
  productId: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface CustomerOrderDetails {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  postalCode?: string;
  notes?: string;
  discreetPackagingRequested: boolean;
  paymentMethod: 'cod' | 'bank_transfer';
}

export type PageView = 
  | 'home' 
  | 'shop' 
  | 'ladies-innerwear' 
  | 'mens-innerwear' 
  | 'lingerie-nightwear' 
  | 'clothing' 
  | 'personal-care' 
  | 'about' 
  | 'contact' 
  | 'faq' 
  | 'privacy' 
  | 'shipping';
