import React from 'react';
import { HeartHandshake, Sparkles, UserCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-md overflow-hidden shadow-luxury border border-brand-border bg-brand-card">
                <img
                  src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80"
                  alt="Fine Indian fabric weave and border detailing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Inset owner/boutique badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-brand-card p-4 rounded-md border border-brand-gold shadow-lg max-w-xs">
                <p className="text-[10px] uppercase tracking-wider text-brand-gold font-semibold">Boutique Owner</p>
                <p className="font-serif text-base font-bold text-brand-maroon">Shailu</p>
                <p className="text-xs text-brand-taupe mt-0.5">Personal styling & saree selection assistance</p>
              </div>
            </div>
          </div>

          {/* Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-brand-maroon font-bold leading-tight">
              A Warm, Personal Boutique for Every Celebration
            </h2>

            <div className="w-16 h-0.5 bg-brand-gold"></div>

            <div className="space-y-4 text-sm text-brand-charcoal/80 leading-relaxed font-light">
              <p>
                Welcome to <strong className="font-semibold text-brand-charcoal">Abhi Saree Collection</strong>, a local ethnic-wear boutique located near the Railway Crossing in Pachore, District Rajgarh, Madhya Pradesh.
              </p>
              <p>
                Founded and managed by Shailu, our boutique is dedicated to helping families discover sarees and traditional attire that make every festival, puja, wedding, and special occasion truly memorable. We believe shopping for ethnic wear should feel warm, personal, and reassuring—never rushed.
              </p>
              <p>
                Whether you need a rich Banarasi weave for a family celebration, a comfortable everyday suit fabric, or matching blouse and undergarment accessories, we are always ready to guide you directly over WhatsApp or welcome you in person at our Pachore store.
              </p>
            </div>

            {/* Truthful Brand Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-border">
              <div className="flex items-start space-x-3">
                <UserCheck className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs font-semibold text-brand-charcoal uppercase tracking-wider">Direct Owner Assistance</h3>
                  <p className="text-xs text-brand-taupe mt-0.5">Shailu personally shares real videos, fabric details, and styling advice.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <HeartHandshake className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs font-semibold text-brand-charcoal uppercase tracking-wider">Honest Availability</h3>
                  <p className="text-xs text-brand-taupe mt-0.5">We check boutique stock before confirming any order so there are no surprises.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}