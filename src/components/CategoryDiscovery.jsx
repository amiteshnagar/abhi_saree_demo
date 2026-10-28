import React from 'react';
import { CATEGORIES } from '../data/products';
import { ArrowUpRight } from 'lucide-react';

const CATEGORY_META = {
  sarees: {
    title: 'Sarees',
    subtitle: 'Banarasi, Kanjivaram & Designer Georgette',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80',
    available: true
  },
  suits: {
    title: 'Suits & Kurtis',
    subtitle: 'Classic salwar suits & unstitched fabrics',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80',
    available: false
  },
  blouses: {
    title: 'Blouses',
    subtitle: 'Readymade & designer blouse pieces',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=700&q=80',
    available: false
  },
  undergarments: {
    title: 'Undergarments',
    subtitle: 'Petticoats, shapewear & everyday essentials',
    image: 'https://images.unsplash.com/photo-1596783074418-97743f01a410?auto=format&fit=crop&w=700&q=80',
    available: false
  },
  other: {
    title: 'Other Collections',
    subtitle: 'Dupattas, stoles & traditional accessories',
    image: 'https://images.unsplash.com/photo-1534126511673-b6899657816a?auto=format&fit=crop&w=700&q=80',
    available: false
  }
};

export default function CategoryDiscovery({ onSelectCategory }) {
  const cards = CATEGORIES.filter(c => c.id !== 'all');

  return (
    <section className="py-16 bg-brand-card border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold">
            Browse By Category
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-maroon font-bold mt-2">
            Curated Ethnic Wardrobe
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4"></div>
          <p className="text-sm text-brand-taupe mt-3">
            Select a category to view reference designs or request current stock directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((cat) => {
            const meta = CATEGORY_META[cat.id];
            return (
              <div
                key={cat.id}
                role="button"
                tabIndex={0}
                onClick={() => onSelectCategory(cat.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCategory(cat.id);
                  }
                }}
                className="group relative cursor-pointer overflow-hidden rounded-md border border-brand-border bg-brand-ivory focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all duration-300 hover:shadow-luxury hover:-translate-y-1"
                aria-label={`View category: ${meta.title}`}
              >
                <div className="aspect-[3/4] overflow-hidden bg-brand-border/30">
                  <img
                    src={meta.image}
                    alt={meta.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 text-brand-ivory">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold tracking-wide">
                      {meta.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  
                  <p className="text-xs text-brand-ivory/80 line-clamp-1 mt-1 font-light">
                    {meta.subtitle}
                  </p>

                  <div className="mt-2.5">
                    {meta.available ? (
                      <span className="inline-block text-[10px] tracking-wider uppercase font-semibold text-brand-gold bg-black/40 px-2 py-0.5 rounded">
                        View Sarees
                      </span>
                    ) : (
                      <span className="inline-block text-[10px] tracking-wider uppercase font-medium text-brand-ivory/80 bg-brand-maroon/60 px-2 py-0.5 rounded">
                        New Styles Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}