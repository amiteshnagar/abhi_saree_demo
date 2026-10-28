import React, { useState } from 'react';
import { ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/products';

export default function Header({ onSelectCategory, onSearchClick }) {
  const { totalCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#catalog', onClick: () => onSelectCategory('all') },
    { name: 'Sarees', href: '#catalog', onClick: () => onSelectCategory('sarees') },
    { name: 'Suits', href: '#catalog', onClick: () => onSelectCategory('suits') },
    { name: 'About Us', href: '#about' },
    { name: 'Visit Boutique', href: '#contact' },
  ];

  const handleLinkClick = (item) => {
    if (item.onClick) item.onClick();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-brand-ivory/95 backdrop-blur-md border-b border-brand-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-charcoal hover:text-brand-maroon focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-md"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Editorial Wordmark Logo */}
          <div className="flex-1 lg:flex-none text-center lg:text-left">
            <a href="#home" className="inline-block group focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-sm">
              <span className="block font-serif text-2xl sm:text-3xl font-bold tracking-tight text-brand-maroon group-hover:text-brand-maroonHover transition-colors">
                Abhi Saree Collection
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-brand-gold font-medium -mt-1">
                Pachore • Ethnic Luxury
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link)}
                className="text-sm font-medium text-brand-charcoal hover:text-brand-maroon tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-brand-maroon hover:text-brand-maroonHover font-semibold border border-brand-maroon/20 hover:border-brand-maroon rounded-full px-3.5 py-1.5 transition-all"
              title="Chat with Shailu on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-brand-maroon" />
              <span>WhatsApp</span>
            </a>

            {/* Shopping Cart Trigger */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Open shopping cart with ${totalCount} items`}
              className="relative p-2.5 text-brand-charcoal hover:text-brand-maroon hover:bg-brand-border/40 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCount > 0 && (
                <span className="absolute top-1 right-1 inline-flex items-center justify-center min-w-[20px] h-5 px-1 text-[11px] font-bold text-white bg-brand-maroon rounded-full border-2 border-brand-ivory animate-scale">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-50 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="w-4/5 max-w-sm h-full bg-brand-ivory border-r border-brand-border p-6 shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="border-b border-brand-border pb-4">
                <p className="font-serif text-lg font-semibold text-brand-maroon">Abhi Saree Collection</p>
                <p className="text-xs text-brand-taupe">Pachore, District Rajgarh (M.P.)</p>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link)}
                    className="text-base font-medium text-brand-charcoal hover:text-brand-maroon transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-brand-border space-y-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-3 bg-brand-maroon text-brand-ivory rounded-md text-sm font-medium hover:bg-brand-maroonHover transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-brand-gold" />
                <span>Chat on WhatsApp</span>
              </a>
              <p className="text-center text-xs text-brand-taupe">Mon–Sun: 8:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}