import React, { useState, useMemo } from 'react';
import { Search, Filter, RefreshCw, MessageCircle, AlertCircle } from 'lucide-react';
import ProductCard from './ProductCard';
import { CATEGORIES, SAMPLE_PRODUCTS, BUSINESS_INFO } from '../data/products';
import { generateGeneralInquiryUrl } from '../utils/whatsapp';

export default function ProductCatalog({ selectedCategory, onSelectCategory, onOpenProductModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Filtered and Sorted list
  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((product) => {
      // Category filter
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      // Search term filter
      const query = searchTerm.trim().toLowerCase();
      const matchesSearch = !query || 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        (product.attributes?.fabric && product.attributes.fabric.toLowerCase().includes(query)) ||
        (product.attributes?.color && product.attributes.color.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name-az') return a.name.localeCompare(b.name);
      return 0; // 'featured' retains natural catalog order
    });
  }, [selectedCategory, searchTerm, sortBy]);

  const activeCategoryObject = CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0];
  const isSelectedCategoryEmpty = selectedCategory !== 'all' && selectedCategory !== 'sarees';

  return (
    <section id="catalog" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold">
            Boutique Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-maroon font-bold mt-2">
            Curated Ethnic Designs
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mt-4 mb-3"></div>
          <p className="text-sm text-brand-taupe">
            Browse our signature sarees or request direct photos from our Pachore boutique.
          </p>
        </div>

        {/* Collection Level Disclaimer Banner */}
        <div className="mb-8 p-4 bg-brand-card border border-brand-gold/40 rounded-md flex items-start space-x-3 text-xs text-brand-charcoal">
          <AlertCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-semibold text-brand-maroon">Illustrative Showcase Notice: </span>
            The items presented below are curated reference sample designs from Abhi Saree Collection. Real-time availability, exact fabric feel, and new arrival patterns are confirmed directly with Shailu on WhatsApp.
          </div>
        </div>

        {/* Controls: Category Tabs, Search & Sort */}
        <div className="space-y-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center overflow-x-auto pb-2 scrollbar-none gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                  selectedCategory === cat.id
                    ? 'bg-brand-maroon text-brand-ivory'
                    : 'bg-brand-card text-brand-charcoal hover:bg-brand-border/60 border border-brand-border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar + Sort Dropdown */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-brand-card p-4 rounded-md border border-brand-border">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <label htmlFor="catalog-search" className="sr-only">Search sarees and fabrics</label>
              <input
                id="catalog-search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by saree name, fabric, or color..."
                className="w-full pl-9 pr-4 py-2 bg-brand-ivory border border-brand-border rounded text-xs text-brand-charcoal placeholder-brand-taupe focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon"
              />
              <Search className="w-4 h-4 text-brand-taupe absolute left-3 top-2.5" />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-2.5 text-xs text-brand-taupe hover:text-brand-charcoal"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Controls */}
            <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
              <label htmlFor="catalog-sort" className="text-xs text-brand-taupe whitespace-nowrap">
                Sort by:
              </label>
              <select
                id="catalog-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-brand-ivory border border-brand-border rounded px-3 py-2 text-xs text-brand-charcoal focus:outline-none focus:border-brand-maroon"
              >
                <option value="featured">Featured Reference</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-az">Name: A to Z</option>
              </select>
            </div>

          </div>
        </div>

        {/* Empty State for Categories with No Products Yet (Suits, Blouses, etc.) */}
        {isSelectedCategoryEmpty ? (
          <div className="text-center py-16 px-4 bg-brand-card border border-dashed border-brand-border rounded-lg max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-brand-border/40 text-brand-maroon flex items-center justify-center mx-auto">
              <Filter className="w-6 h-6 text-brand-maroon" />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-maroon">
              {activeCategoryObject.label} — New Styles Coming Soon
            </h3>
            <p className="text-xs text-brand-taupe leading-relaxed">
              We are currently preparing real boutique showcase samples for our {activeCategoryObject.label.toLowerCase()} collection. You can ask Shailu directly on WhatsApp for latest in-store designs.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateGeneralInquiryUrl(activeCategoryObject.label)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-brand-maroon hover:bg-brand-maroonHover text-brand-ivory text-xs font-semibold tracking-wider uppercase rounded transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-brand-gold" />
                <span>Ask on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => onSelectCategory('all')}
                className="text-xs text-brand-charcoal hover:text-brand-maroon underline font-medium"
              >
                View all available sarees
              </button>
            </div>
          </div>
        ) : filteredProducts.length === 0 ? (
          /* Empty Search Result State */
          <div className="text-center py-16 px-4 bg-brand-card border border-brand-border rounded-lg max-w-md mx-auto space-y-3">
            <p className="text-base font-semibold text-brand-charcoal">No products matched your search.</p>
            <p className="text-xs text-brand-taupe">Try checking for spelling, clearing search terms, or resetting category filters.</p>
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                onSelectCategory('all');
              }}
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-brand-maroon text-brand-ivory text-xs font-medium rounded hover:bg-brand-maroonHover"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          /* Responsive Product Grid: 4 cols on XL, 3 on LG/MD, 2 on SM, 1 on narrow */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onOpenProductModal}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}