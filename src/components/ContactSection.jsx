import React from 'react';
import { MapPin, Phone, Instagram, Clock, ExternalLink, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function ContactSection() {
  const encodedAddressQuery = encodeURIComponent(BUSINESS_INFO.addressQuery);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddressQuery}`;

  return (
    <section id="contact" className="py-20 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-maroon font-bold mt-2">
            Visit Our Boutique or Connect Online
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4 mb-3"></div>
          <p className="text-sm text-brand-taupe">
            We are here to assist with fabric questions, availability, and custom enquiries every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Boutique Location */}
          <div className="bg-brand-card p-6 sm:p-8 rounded-md border border-brand-border flex flex-col justify-between space-y-4 shadow-luxury">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center">
                <MapPin className="w-5 h-5 text-brand-maroon" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-charcoal">
                Store Location
              </h3>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
              <p className="text-[11px] text-brand-taupe italic">
                District Rajgarh, Madhya Pradesh — PIN 465683
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-maroon hover:text-brand-maroonHover underline pt-2"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: WhatsApp & Phone */}
          <div className="bg-brand-card p-6 sm:p-8 rounded-md border border-brand-border flex flex-col justify-between space-y-4 shadow-luxury">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-brand-maroon" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-brand-charcoal">
                WhatsApp & Direct Contact
              </h3>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                Reach Shailu directly on WhatsApp for real-time saree previews, color charts, and queries.
              </p>
              <p className="font-mono text-sm font-semibold text-brand-maroon">
                {BUSINESS_INFO.whatsappNumber}
              </p>
            </div>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappDigits}?text=${encodeURIComponent("Namaste Shailu, I am contacting you from the Abhi Saree Collection website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-brand-maroon hover:bg-brand-maroonHover text-brand-ivory text-xs font-semibold uppercase tracking-wider rounded transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-brand-gold" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Card 3: Business Hours & Instagram */}
          <div className="bg-brand-card p-6 sm:p-8 rounded-md border border-brand-border flex flex-col justify-between space-y-4 shadow-luxury">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-maroon" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-brand-charcoal">Opening Hours</h3>
                  <p className="text-xs text-brand-taupe">{BUSINESS_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-3 border-t border-brand-border">
                <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-brand-maroon" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-brand-charcoal">Instagram</h3>
                  <p className="text-xs text-brand-taupe">{BUSINESS_INFO.instagramHandle}</p>
                </div>
              </div>
            </div>

            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-brand-maroon hover:text-brand-maroonHover underline pt-2"
            >
              <span>Follow @abhi_saree_collection</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}