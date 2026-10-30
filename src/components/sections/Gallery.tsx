import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Eye, Sparkles } from 'lucide-react';
import { GALLERY_IMAGES } from '../../data/galleryData';
import { GalleryImage } from '../../types';

interface GalleryProps {
  onImageClick: (item: { id: string; src: string; title: string; description?: string }) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'courtyard', label: 'Botanical Courtyard' },
    { id: 'interior', label: 'Lounge & Studio' },
    { id: 'coffee', label: 'Artisan Coffee' },
    { id: 'food', label: 'Bistro Plates' },
    { id: 'evening', label: 'Twilight Glow' },
  ];

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-coffee/10 text-coffee mb-4">
            <Camera className="w-3.5 h-3.5 text-coffee" />
            <span>Captured at Doppio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest leading-tight">
            Glimpses of Everyday Escapes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
            Real snapshots of our spaces, handcrafted roasts, and bistro gatherings. Explore the photogenic soul of Doppio Cafe & Studio.
          </p>
        </div>

        {/* Filter Pills with Horizontal Scroll on Mobile */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 px-2 sm:px-0 scrollbar-none snap-x">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 flex-shrink-0 snap-start active:scale-95 ${
                  isActive
                    ? 'bg-forest text-ivory shadow-md scale-105'
                    : 'bg-ivory-100 text-charcoal/70 hover:text-forest hover:bg-beige/40 border border-beige/60'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid: 1 col on <360px, 2 cols on mobile/tablet, 3 cols on desktop */}
        <motion.div
          layout
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() =>
                  onImageClick({
                    id: img.id,
                    src: img.src,
                    title: img.title,
                    description: img.description,
                  })
                }
                className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-ivory-200 border border-beige/80 shadow-sm hover:shadow-luxury-lg cursor-pointer group active:scale-[0.98] transition-transform"
              >
                <div className="w-full h-56 xs:h-52 sm:h-64 md:h-72 overflow-hidden bg-beige/30">
                  <img
                    src={img.src}
                    alt={img.title}
                    width={500}
                    height={375}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Info Overlay on Hover & Touch */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 sm:p-5 text-ivory">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gold-warm bg-forest-dark/80 px-2 py-0.5 rounded-full inline-block mb-1 border border-beige/20">
                      {img.category}
                    </span>
                    <h4 className="font-serif text-sm sm:text-lg font-bold text-ivory line-clamp-1">
                      {img.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-beige/80 line-clamp-2 mt-0.5 font-light">
                      {img.description}
                    </p>
                  </div>

                  <div className="absolute top-3 right-3 p-1.5 sm:p-2 rounded-full bg-ivory/20 backdrop-blur-md text-ivory">
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
