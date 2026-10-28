import React from 'react';
import { MessageCircle, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function AssistanceSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "1. Browse & Enquire",
      description: "Explore our sample sarees on this showcase, add desired pieces to your cart, or click 'Enquire' on any item to open WhatsApp."
    },
    {
      icon: CheckCircle2,
      title: "2. Personal Confirmation",
      description: "Shailu checks live inventory at our Pachore store, sends you close-up photos or videos, and confirms color availability."
    },
    {
      icon: Clock,
      title: "3. Direct Coordination",
      description: "Agree upon payment method, dispatch or in-store collection at your convenience without confusing checkout barriers."
    }
  ];

  return (
    <section className="py-16 bg-brand-card border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold">
            Customer Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-maroon font-bold mt-2">
            How Shopping With Us Works
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4 mb-3"></div>
          <p className="text-sm text-brand-taupe">
            Simple, honest communication with no fabricated claims or automated call centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-brand-ivory p-6 rounded-md border border-brand-border space-y-3 relative hover:border-brand-gold/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-brand-maroon/10 text-brand-maroon flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-maroon" />
                </div>
                <h3 className="font-serif text-base font-semibold text-brand-charcoal">
                  {step.title}
                </h3>
                <p className="text-xs text-brand-taupe leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}