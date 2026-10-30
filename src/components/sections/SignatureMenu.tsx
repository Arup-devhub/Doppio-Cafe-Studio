import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Search, Eye, Utensils, Download, X } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../../data/menuData';

interface SignatureMenuProps {
  onImageClick?: (item: { id: string; src: string; title: string; description?: string }) => void;
  onOpenReservation?: () => void;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({ onImageClick, onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('coffee-espresso');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg' | 'beverage'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFullMenuModal, setShowFullMenuModal] = useState<boolean>(false);

  // Lock background scroll when full menu modal is open
  useEffect(() => {
    if (showFullMenuModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showFullMenuModal]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showFullMenuModal) {
        setShowFullMenuModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showFullMenuModal]);

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesDietary = dietaryFilter === 'all' || item.dietary === dietaryFilter;
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-ivory-100 text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-forest/10 text-forest mb-4">
            <Coffee className="w-3.5 h-3.5 text-coffee" />
            <span>Curated Culinary & Coffee Selections</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest leading-tight">
            The Doppio Menu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
            From our signature Italian double shots and cold blended elixirs to stone-baked thin crust pizzas and hearty continental platters, every dish is prepared fresh.
          </p>
        </div>

        {/* Search & Dietary Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-ivory p-4 rounded-2xl border border-beige/80 shadow-sm">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, coffee, ingredients..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-ivory-100 border border-beige/60 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-forest transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal/40 hover:text-charcoal"
              >
                Clear
              </button>
            )}
          </div>

          {/* Dietary Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <span className="text-xs text-charcoal/60 font-medium mr-1 hidden sm:inline">Dietary:</span>
            {[
              { id: 'all', label: 'All Items' },
              { id: 'veg', label: 'Vegetarian 🟢' },
              { id: 'non-veg', label: 'Non-Veg 🔴' },
              { id: 'beverage', label: 'Beverages ☕' },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setDietaryFilter(d.id as typeof dietaryFilter)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                  dietaryFilter === d.id
                    ? 'bg-forest text-ivory shadow-sm'
                    : 'bg-ivory-200 text-charcoal/80 hover:bg-beige/50'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-forest text-ivory shadow-md scale-105'
                    : 'bg-ivory text-charcoal/70 hover:text-forest hover:bg-beige/40 border border-beige/60'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Active Category Description */}
        <div className="mb-8 text-center sm:text-left">
          <p className="text-xs uppercase tracking-widest text-coffee font-semibold">
            {MENU_CATEGORIES.find((c) => c.id === activeCategory)?.name}
          </p>
          <p className="text-sm text-charcoal/60 font-light mt-0.5">
            {MENU_CATEGORIES.find((c) => c.id === activeCategory)?.description}
          </p>
        </div>

        {/* Menu Items Grid - Balanced layout for 1, 2, or 3+ items */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-ivory rounded-3xl border border-dashed border-beige">
            <Utensils className="w-10 h-10 text-charcoal/30 mx-auto mb-3" />
            <p className="font-serif text-lg text-charcoal/70">No menu items match your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-3 text-xs text-forest font-semibold underline underline-offset-4"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className={`grid gap-5 sm:gap-6 ${
              filteredItems.length === 1
                ? 'grid-cols-1 max-w-md mx-auto sm:mx-0'
                : filteredItems.length === 2
                ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="bg-ivory rounded-2xl p-5 border border-beige/80 hover:border-olive/50 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Item Image if available */}
                  {item.image && (
                    <div
                      onClick={() =>
                        onImageClick?.({
                          id: item.id,
                          src: item.image!,
                          title: item.name,
                          description: item.description,
                        })
                      }
                      className="relative rounded-xl overflow-hidden aspect-[16/10] mb-4 bg-beige/30 cursor-pointer group/img"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={250}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="p-2 rounded-full bg-ivory/90 text-charcoal shadow-md">
                          <Eye className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Badges Header */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {item.dietary === 'veg' && (
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600 ring-2 ring-emerald-200" title="Vegetarian" />
                      )}
                      {item.dietary === 'non-veg' && (
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-600 ring-2 ring-rose-200" title="Non-Vegetarian" />
                      )}
                      {item.dietary === 'beverage' && (
                        <span title="Beverage">
                          <Coffee className="w-3.5 h-3.5 text-coffee" />
                        </span>
                      )}

                      {item.signature && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-gold-accent/15 text-gold-accent border border-gold-accent/25">
                          Signature
                        </span>
                      )}
                      {item.bestseller && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-forest/10 text-forest border border-forest/20">
                          Bestseller
                        </span>
                      )}
                    </div>

                    {/* Price if verified */}
                    {item.price ? (
                      <span className="font-serif font-bold text-base sm:text-lg text-forest">
                        ₹{item.price}
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-charcoal/40 uppercase tracking-wider">
                        At Counter
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-forest transition-colors">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex items-center gap-1.5 flex-wrap mt-4 pt-3 border-t border-beige/40">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider text-charcoal/60 bg-ivory-200 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View Full Menu CTA & Notice */}
        <div className="mt-14 p-8 rounded-3xl bg-forest text-ivory text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-beige/20">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory">
              Looking for our Full Dine-In Menu?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-beige/80 font-light max-w-xl">
              We update our blackboard specials weekly with fresh seafood platters, seasonal fruit frappes, and chef specials.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowFullMenuModal(true)}
              className="px-6 py-3 rounded-full bg-ivory text-forest font-semibold text-xs tracking-wider uppercase hover:bg-beige transition shadow-md flex items-center gap-2"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>View Full Menu Sheet</span>
            </button>

            {onOpenReservation && (
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 rounded-full bg-forest-light text-ivory border border-beige/30 font-semibold text-xs tracking-wider uppercase hover:bg-forest transition"
              >
                Book Table
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Full Menu Modal */}
      <AnimatePresence>
        {showFullMenuModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setShowFullMenuModal(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Full Bistro Menu Overview"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-ivory rounded-2xl sm:rounded-3xl shadow-2xl border border-beige p-5 sm:p-8 md:p-10 my-auto max-h-[88dvh] flex flex-col"
            >
              <div className="flex items-center justify-between pb-4 border-b border-beige flex-shrink-0">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-coffee">
                    Doppio Cafe & Studio
                  </span>
                  <h3 className="font-serif text-xl sm:text-3xl font-bold text-forest">
                    Full Bistro Menu Overview
                  </h3>
                </div>
                <button
                  onClick={() => setShowFullMenuModal(false)}
                  className="min-w-[44px] min-h-[44px] p-2 rounded-full bg-beige/40 hover:bg-beige text-charcoal transition flex items-center justify-center active:scale-95"
                  aria-label="Close full menu modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-5 sm:py-6 space-y-6 sm:space-y-8 overflow-y-auto flex-grow pr-1">
                {MENU_CATEGORIES.map((cat) => {
                  const catItems = MENU_ITEMS.filter((i) => i.category === cat.id);
                  if (catItems.length === 0) return null;
                  return (
                    <div key={cat.id}>
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <span className="w-4 h-0.5 bg-coffee" />
                        <h4 className="font-serif text-base sm:text-lg font-bold text-forest uppercase tracking-wider">
                          {cat.name}
                        </h4>
                      </div>

                      <div className="divide-y divide-beige/40">
                        {catItems.map((item) => (
                          <div key={item.id} className="py-2.5 flex items-start justify-between gap-3 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                                <span className="font-serif font-semibold text-xs sm:text-sm text-charcoal">
                                  {item.name}
                                </span>
                                {item.signature && (
                                  <span className="text-[8px] sm:text-[9px] font-bold text-gold-accent uppercase bg-gold-accent/10 px-1.5 py-0.5 rounded">
                                    Signature
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] sm:text-xs text-charcoal/60 font-light mt-0.5 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <div className="text-right flex-shrink-0 pt-0.5">
                              {item.price ? (
                                <span className="font-mono text-xs sm:text-sm font-bold text-forest">
                                  ₹{item.price}
                                </span>
                              ) : (
                                <span className="text-[10px] sm:text-xs text-charcoal/40">Market</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 sm:pt-4 border-t border-beige flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] sm:text-xs text-charcoal/60 flex-shrink-0">
                <span className="text-center sm:text-left">Prices inclusive of taxes • Prepared fresh to order</span>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-ivory-200 hover:bg-beige text-charcoal font-medium border border-beige flex items-center gap-1.5 active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Print Menu</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
