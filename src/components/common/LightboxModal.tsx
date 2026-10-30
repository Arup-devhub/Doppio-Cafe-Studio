import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxItem {
  id: string;
  src: string;
  title: string;
  description?: string;
  category?: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: LightboxItem[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      // Swiped left -> Next
      onNavigate((currentIndex + 1) % items.length);
    } else if (diff < -minSwipeDistance) {
      // Swiped right -> Previous
      onNavigate((currentIndex - 1 + items.length) % items.length);
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-xl p-3 sm:p-6 md:p-8 select-none"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox Viewer"
      >
        {/* Top Control Bar */}
        <div className="absolute top-3 left-4 right-4 sm:top-5 sm:left-8 sm:right-8 flex items-center justify-between text-ivory z-20 pointer-events-none">
          <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-ivory/10">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-gold-warm font-semibold">
              Doppio Gallery
            </span>
            <span className="text-ivory/40">•</span>
            <span className="text-[11px] sm:text-xs font-mono text-ivory/80">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 text-ivory flex items-center justify-center border border-ivory/15 transition-colors pointer-events-auto touch-manipulation"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button (Desktop & Tablet) */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + items.length) % items.length);
            }}
            className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-ivory flex items-center justify-center border border-ivory/15 transition-all backdrop-blur-md z-20 touch-manipulation"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button (Desktop & Tablet) */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % items.length);
            }}
            className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-ivory flex items-center justify-center border border-ivory/15 transition-all backdrop-blur-md z-20 touch-manipulation"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Main Image Container */}
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center w-full"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-ivory/10 max-h-[65vh] sm:max-h-[72vh] flex items-center justify-center bg-black/40">
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="max-h-[65vh] sm:max-h-[72vh] max-w-full object-contain select-none pointer-events-none"
              loading="eager"
            />
          </div>

          {/* Caption */}
          <div className="mt-3 sm:mt-4 text-center max-w-2xl px-4">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-1">
              {currentItem.category && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-forest-light/60 text-beige border border-beige/20">
                  {currentItem.category}
                </span>
              )}
              <h4 className="text-ivory font-serif text-base sm:text-lg md:text-xl font-medium">
                {currentItem.title}
              </h4>
            </div>
            {currentItem.description && (
              <p className="text-beige/80 text-xs sm:text-sm font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                {currentItem.description}
              </p>
            )}
            <p className="text-[10px] text-ivory/40 mt-1 block sm:hidden">
              Swipe left or right to browse photos
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
