import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, MessageCircle, Check, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatINR, generateProductEnquiryUrl } from '../utils/whatsapp';

export default function ProductModal({ product, onClose }) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (!product) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-brand-card w-full max-w-4xl rounded-lg shadow-2xl border border-brand-border overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details modal"
          className="absolute top-4 right-4 z-10 p-2 text-brand-charcoal hover:text-brand-maroon bg-brand-ivory/80 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Images Gallery Left */}
          <div className="p-6 bg-brand-ivory flex flex-col justify-between">
            <div className="aspect-[4/5] rounded overflow-hidden border border-brand-border bg-white mb-3">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(idx)}
                    className={`w-16 h-20 rounded overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-brand-maroon' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details Right */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-block text-[11px] font-semibold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded mb-2">
                {product.category}
              </div>

              <h2 id="modal-product-title" className="font-serif text-2xl sm:text-3xl font-bold text-brand-maroon">
                {product.name}
              </h2>

              <p className="text-xs text-brand-taupe mt-1">
                Reference ID: <span className="font-mono text-brand-charcoal">{product.id}</span>
              </p>

              {/* Price */}
              <div className="mt-4 pt-3 border-t border-brand-border">
                <span className="text-xs text-brand-taupe">Reference Catalog Price</span>
                <p className="font-serif text-2xl font-bold text-brand-maroon">
                  {formatINR(product.price)}
                </p>
              </div>

              <p className="text-sm text-brand-charcoal/80 mt-4 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Genuine Specifications (only genuine, non-fabricated data) */}
              {product.attributes && (
                <div className="mt-6 border-t border-brand-border pt-4 space-y-2">
                  <h3 className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">
                    Product Details
                  </h3>
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                    {product.attributes.fabric && (
                      <div>
                        <dt className="text-brand-taupe">Fabric</dt>
                        <dd className="font-medium text-brand-charcoal">{product.attributes.fabric}</dd>
                      </div>
                    )}
                    {product.attributes.color && (
                      <div>
                        <dt className="text-brand-taupe">Color</dt>
                        <dd className="font-medium text-brand-charcoal">{product.attributes.color}</dd>
                      </div>
                    )}
                    {product.attributes.work && (
                      <div>
                        <dt className="text-brand-taupe">Embroidery / Work</dt>
                        <dd className="font-medium text-brand-charcoal">{product.attributes.work}</dd>
                      </div>
                    )}
                    {product.attributes.occasion && (
                      <div>
                        <dt className="text-brand-taupe">Recommended For</dt>
                        <dd className="font-medium text-brand-charcoal">{product.attributes.occasion}</dd>
                      </div>
                    )}
                    {product.attributes.blousePiece && (
                      <div>
                        <dt className="text-brand-taupe">Blouse Piece</dt>
                        <dd className="font-medium text-brand-charcoal">{product.attributes.blousePiece}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}

              {/* Availability Notice */}
              <div className="mt-6 p-3 bg-brand-ivory rounded border border-brand-border text-xs text-brand-taupe flex items-start space-x-2">
                <Info className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <p>
                  Because pieces at our Pachore boutique sell quickly, Shailu will verify current stock and dispatch options directly over WhatsApp before you place an order.
                </p>
              </div>
            </div>

            {/* Ordering & Add to Cart Controls */}
            <div className="space-y-4 pt-4 border-t border-brand-border">
              
              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <label htmlFor="modal-qty" className="text-xs font-semibold text-brand-charcoal">
                  Quantity:
                </label>
                <div className="flex items-center border border-brand-border rounded bg-brand-ivory">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-sm font-semibold hover:bg-brand-border/60"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span id="modal-qty" className="px-3 py-1 text-xs font-medium min-w-[2.5rem] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-sm font-semibold hover:bg-brand-border/60"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 bg-brand-maroon hover:bg-brand-maroonHover text-brand-ivory text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4 text-brand-gold" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                <a
                  href={generateProductEnquiryUrl(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 bg-transparent hover:bg-brand-border/40 text-brand-charcoal border border-brand-gold text-xs font-semibold uppercase tracking-wider rounded transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-brand-maroon" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}