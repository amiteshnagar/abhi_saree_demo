import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryDiscovery from './components/CategoryDiscovery';
import ProductCatalog from './components/ProductCatalog';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import AboutSection from './components/AboutSection';
import AssistanceSection from './components/AssistanceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Check } from 'lucide-react';

function MainApp() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const { notification } = useCart();

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory text-brand-charcoal">
      {/* Toast Notification */}
      {notification && (
        <div 
          role="status" 
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-brand-maroon text-brand-ivory text-xs px-4 py-3 rounded-md shadow-2xl flex items-center space-x-2 border border-brand-gold animate-bounce"
        >
          <Check className="w-4 h-4 text-brand-gold" />
          <span>{notification}</span>
        </div>
      )}

      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Header */}
      <Header
        onSelectCategory={handleSelectCategory}
      />

      <main className="flex-1">
        {/* Luxury Hero */}
        <Hero
          onExploreClick={() => handleSelectCategory('all')}
        />

        {/* Category Discovery */}
        <CategoryDiscovery
          onSelectCategory={handleSelectCategory}
        />

        {/* Product Catalog with Search, Filter & Sort */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenProductModal={(product) => setActiveModalProduct(product)}
        />

        {/* Customer Guidance & Trust */}
        <AssistanceSection />

        {/* About the Boutique & Owner */}
        <AboutSection />

        {/* Contact & Map Information */}
        <ContactSection />
      </main>

      {/* Product Details Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer />

      {/* Footer */}
      <Footer
        onSelectCategory={handleSelectCategory}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}