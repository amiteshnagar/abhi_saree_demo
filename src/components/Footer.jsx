import React from 'react';
import { BUSINESS_INFO } from '../data/products';
import { MessageCircle, Instagram, MapPin } from 'lucide-react';

export default function Footer({ onSelectCategory }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-maroon text-brand-ivory border-t border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-ivory">
              Abhi Saree Collection
            </span>
            <p className="text-xs text-brand-gold uppercase tracking-widest font-semibold">
              Ethnic Luxury • Pachore
            </p>
            <p className="text-xs text-brand-ivory/80 leading-relaxed font-light">
              A boutique dedicated to authentic Indian ethnic fashion. Sarees, suits, blouses, and undergarments curated by Shailu.
            </p>
          </div>

          {/* Collections Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-brand-gold">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-brand-ivory/80">
              <li>
                <a href="#catalog" onClick={() => onSelectCategory('sarees')} className="hover:text-brand-gold transition-colors">
                  Traditional Sarees
                </a>
              </li>
              <li>
                <a href="#catalog" onClick={() => onSelectCategory('suits')} className="hover:text-brand-gold transition-colors">
                  Suits & Kurtis (Coming Soon)
                </a>
              </li>
              <li>
                <a href="#catalog" onClick={() => onSelectCategory('blouses')} className="hover:text-brand-gold transition-colors">
                  Designer Blouses
                </a>
              </li>
              <li>
                <a href="#catalog" onClick={() => onSelectCategory('undergarments')} className="hover:text-brand-gold transition-colors">
                  Undergarments & Essentials
                </a>
              </li>
            </ul>
          </div>

          {/* Boutique Visit & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-brand-gold">
              Visit Boutique
            </h4>
            <p className="text-xs text-brand-ivory/80 leading-relaxed font-light">
              Near Railway Crossing, Abhi Computer, New Colony, Pachore, Dist. Rajgarh, M.P. 465683
            </p>
            <p className="text-xs text-brand-ivory/80">
              Hours: <span className="text-brand-gold font-medium">{BUSINESS_INFO.hours}</span>
            </p>
            <div className="pt-1">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-brand-gold hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {BUSINESS_INFO.whatsappNumber}</span>
              </a>
            </div>
          </div>

          {/* Social & Policy Note */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-brand-gold">
              Connect With Us
            </h4>
            <p className="text-xs text-brand-ivory/80 leading-relaxed font-light">
              Follow our Instagram page for recent arrivals, in-store videos, and festival highlights.
            </p>
            <div className="flex space-x-3 pt-1">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-maroonHover hover:bg-brand-gold hover:text-brand-maroon rounded-full transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappDigits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-brand-maroonHover hover:bg-brand-gold hover:text-brand-maroon rounded-full transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="mt-12 pt-6 border-t border-brand-maroonHover flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-ivory/60 gap-4">
          <p>© {currentYear} Abhi Saree Collection. All rights reserved.</p>
          <p className="italic">
            Pachore, District Rajgarh, Madhya Pradesh • Managed by Shailu
          </p>
        </div>
      </div>
    </footer>
  );
}