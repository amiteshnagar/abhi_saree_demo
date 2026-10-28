import React, { useEffect } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, AlertCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatINR, generateCartOrderUrl } from '../utils/whatsapp';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    grandTotal,
    totalCount
  } = useCart();

  // Escape key support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  const whatsappUrl = generateCartOrderUrl(cartItems, grandTotal);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart Drawer"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="w-full max-w-md h-full bg-brand-ivory border-l border-brand-border shadow-2xl flex flex-col justify-between transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cart Header */}
        <div className="p-4 sm:p-6 border-b border-brand-border flex items-center justify-between bg-brand-card">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-brand-maroon" />
            <h2 className="font-serif text-lg font-bold text-brand-charcoal">
              Your Enquiry Cart ({totalCount})
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart drawer"
            className="p-1.5 text-brand-charcoal hover:text-brand-maroon rounded-full hover:bg-brand-border/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full bg-brand-border/40 flex items-center justify-center text-brand-taupe">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-charcoal">
                Your cart is currently empty
              </h3>
              <p className="text-xs text-brand-taupe max-w-xs leading-relaxed">
                Add sarees from our collection to generate an itemized WhatsApp order inquiry.
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 bg-brand-maroon hover:bg-brand-maroonHover text-brand-ivory text-xs uppercase tracking-wider font-semibold rounded"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center pb-2 border-b border-brand-border text-xs text-brand-taupe">
                <span>Selected Items</span>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-brand-maroon hover:underline font-medium"
                >
                  Clear all
                </button>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex space-x-3 p-3 bg-brand-card rounded-md border border-brand-border"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-brand-ivory rounded overflow-hidden shrink-0 border border-brand-border/50">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info & Quantity */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm font-semibold text-brand-charcoal line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="text-brand-taupe hover:text-brand-error p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-brand-maroon font-semibold mt-0.5">
                        {formatINR(item.price)}
                      </p>
                    </div>

                    {/* Quantity Selector + Line Subtotal */}
                    <div className="flex items-center justify-between pt-2 border-t border-brand-border/50">
                      <div className="flex items-center border border-brand-border rounded bg-brand-ivory">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-brand-border/40"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3 text-brand-charcoal" />
                        </button>
                        <span className="px-2 text-xs font-semibold min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-brand-border/40"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 text-brand-charcoal" />
                        </button>
                      </div>
                      <span className="text-xs font-medium text-brand-charcoal">
                        Subtotal: {formatINR(item.price * item.quantity)}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-6 bg-brand-card border-t border-brand-border space-y-4">
            
            {/* Totals Summary */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-brand-taupe">
                <span>Total Items</span>
                <span>{totalCount} pieces</span>
              </div>
              <div className="flex justify-between text-base font-bold text-brand-charcoal pt-1 border-t border-brand-border">
                <span>Estimated Total</span>
                <span className="text-brand-maroon font-serif text-lg">
                  {formatINR(grandTotal)}
                </span>
              </div>
            </div>

            {/* Truthful ordering disclaimer */}
            <div className="p-3 bg-brand-ivory rounded border border-brand-border text-[11px] text-brand-taupe flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span>
                Final stock availability, color confirmation, and delivery or in-store pickup details are confirmed directly with Shailu on WhatsApp.
              </span>
            </div>

            {/* Direct WhatsApp Ordering Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-4 bg-brand-maroon hover:bg-brand-maroonHover text-brand-ivory text-xs font-semibold uppercase tracking-wider rounded shadow transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-brand-gold" />
              <span>Continue on WhatsApp</span>
            </a>

            <p className="text-[10px] text-center text-brand-taupe">
              No online card payment required • Enquire directly with boutique
            </p>
          </div>
        )}

      </div>
    </div>
  );
}