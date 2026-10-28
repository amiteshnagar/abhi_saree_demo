import React from 'react';
import { ShoppingBag, Eye, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatINR, generateProductEnquiryUrl } from '../utils/whatsapp';

export default function ProductCard({ product, onViewDetails }) {
  const { addToCart } = useCart();

  return (
    <article className="group bg-brand-card rounded-md border border-brand-border overflow-hidden hover:border-brand-gold/60 hover:shadow-luxury transition-all duration-300 flex flex-col justify-between">
      {/* Product Image & Badges */}
      <div className="relative aspect-[4/5] bg-brand-ivory overflow-hidden cursor-pointer" onClick={() => onViewDetails(product)}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Reference Sample Notice Tag */}
        {product.isSample && (
          <div className="absolute top-3 left-3 bg-brand-maroon/90 backdrop-blur-sm text-brand-ivory text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
            Reference Design
          </div>
        )}

        {/* Quick actions overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="px-3 py-1.5 bg-brand-ivory/95 hover:bg-white text-brand-charcoal text-xs font-medium rounded shadow flex items-center space-x-1"
            aria-label={`View details for ${product.name}`}
          >
            <Eye className="w-3.5 h-3.5 text-brand-maroon" />
            <span>Details</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-wider text-brand-gold">
            {product.category}
          </span>
          <h3 
            onClick={() => onViewDetails(product)}
            className="font-serif text-base font-semibold text-brand-charcoal hover:text-brand-maroon cursor-pointer line-clamp-1 transition-colors mt-0.5"
            title={product.name}
          >
            {product.name}
          </h3>
          <p className="text-xs text-brand-taupe line-clamp-2 mt-1 font-light">
            {product.description}
          </p>
        </div>

        <div className="pt-2 border-t border-brand-border/60">
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <span className="text-xs text-brand-taupe font-normal">Sample Price</span>
              <p className="font-serif text-lg font-bold text-brand-maroon leading-tight">
                {formatINR(product.price)}
              </p>
            </div>
            <span className="text-[11px] text-brand-taupe italic">
              Verify stock on WhatsApp
            </span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => addToCart(product, 1)}
              className="w-full inline-flex items-center justify-center space-x-1.5 py-2 px-3 bg-brand-maroon hover:bg-brand-maroonHover text-brand-ivory text-xs font-semibold uppercase tracking-wider rounded transition-colors focus:ring-2 focus:ring-brand-gold focus:outline-none"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </button>

            <a
              href={generateProductEnquiryUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-1.5 py-2 px-2 bg-transparent hover:bg-brand-border/40 text-brand-charcoal border border-brand-border hover:border-brand-maroon text-xs font-medium rounded transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-brand-maroon" />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}