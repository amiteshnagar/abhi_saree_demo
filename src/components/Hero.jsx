import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function Hero({ onExploreClick }) {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Editorial Text Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-brand-border/40 border border-brand-border px-3.5 py-1.5 rounded-full text-xs font-medium text-brand-maroon">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              <span>Authentic Ethnic Boutique in Pachore</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-maroon font-bold tracking-tight leading-[1.15]">
              Timeless Elegance. <br />
              <span className="italic font-normal text-brand-charcoal">Beautifully Yours.</span>
            </h1>

            <p className="text-base sm:text-lg text-brand-charcoal/80 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Explore handpicked sarees, suits, blouses, and traditional ethnic wear crafted for weddings, festive occasions, and cherished family moments. Curated with care by Shailu at Abhi Saree Collection.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#catalog"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-brand-maroon hover:bg-brand-maroonHover text-brand-ivory text-sm uppercase tracking-widest font-semibold rounded-sm shadow-luxury transition-all duration-300 group"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappDigits}?text=${encodeURIComponent("Namaste Abhi Saree Collection, I would like to see your latest sarees and ethnic-wear collection.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-transparent hover:bg-brand-gold/10 text-brand-charcoal hover:text-brand-maroon border border-brand-gold text-sm uppercase tracking-widest font-semibold rounded-sm transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-brand-maroon" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges: Truthful & Genuine */}
            <div className="pt-6 border-t border-brand-border grid grid-cols-2 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold text-brand-charcoal uppercase tracking-wider">Personal Touch</h2>
                  <p className="text-xs text-brand-taupe">Direct WhatsApp assistance from the owner.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-semibold text-brand-charcoal uppercase tracking-wider">Boutique Visit</h2>
                  <p className="text-xs text-brand-taupe">Near Railway Crossing, Pachore (M.P.).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Editorial Photography Right Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Gold Frame */}
              <div className="absolute -inset-3 border border-brand-gold/40 rounded-lg transform rotate-1 hidden sm:block pointer-events-none"></div>
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-md shadow-2xl bg-brand-card aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85"
                  alt="Traditional Indian bride wearing a rich maroon and gold Banarasi silk saree"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  width="800"
                  height="1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-brand-ivory">
                  <p className="text-xs uppercase tracking-widest text-brand-gold font-medium">Boutique Showcase</p>
                  <p className="font-serif text-xl font-semibold">Handpicked Bridal & Festive Weaves</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}