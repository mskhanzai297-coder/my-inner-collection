/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageView, Product } from './types';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ShippingReturnsPage } from './pages/ShippingReturnsPage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

const MainContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { selectedProductModal, setSelectedProductModal } = useCart();

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductDetail = (product: Product) => {
    setSelectedProductModal(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0e] text-[#f7f5f0]">
      {/* Top Header & Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProductDetail={handleOpenProductDetail}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            initialCategory="all"
            onOpenProductDetail={handleOpenProductDetail}
          />
        )}

        {currentPage === 'ladies-innerwear' && (
          <ShopPage
            initialCategory="ladies-innerwear"
            onOpenProductDetail={handleOpenProductDetail}
          />
        )}

        {currentPage === 'mens-innerwear' && (
          <ShopPage
            initialCategory="mens-innerwear"
            onOpenProductDetail={handleOpenProductDetail}
          />
        )}

        {currentPage === 'lingerie-nightwear' && (
          <ShopPage
            initialCategory="lingerie-nightwear"
            onOpenProductDetail={handleOpenProductDetail}
          />
        )}

        {currentPage === 'clothing' && (
          <ShopPage
            initialCategory="ladies-clothing"
            onOpenProductDetail={handleOpenProductDetail}
          />
        )}

        {currentPage === 'personal-care' && (
          <ShopPage
            initialCategory="personal-care"
            onOpenProductDetail={handleOpenProductDetail}
          />
        )}

        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'faq' && <FAQPage />}

        {currentPage === 'privacy' && <PrivacyPolicyPage />}

        {currentPage === 'shipping' && <ShippingReturnsPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Cart & Checkout Slide-Over Drawer */}
      <CartDrawer />

      {/* Global Product Detail Modal */}
      {selectedProductModal && (
        <ProductDetailModal
          product={selectedProductModal}
          onClose={() => setSelectedProductModal(null)}
          onSelectProduct={(p) => setSelectedProductModal(p)}
        />
      )}

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => {
          setSelectedProductModal(p);
          setIsSearchOpen(false);
        }}
      />

      {/* Bottom Floating WhatsApp Launcher (03101041303) */}
      <WhatsAppFloatingButton />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
}
