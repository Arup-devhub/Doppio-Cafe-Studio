import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

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

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-xl p-4 md:p-8"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div className="absolute top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 flex items-center justify-between text-ivory z-10 pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span className="text-xs uppercase tracking-widest text-beige font-semibold">
              Doppio Cafe & Studio
            </span>
            <span className="text-ivory/40">•</span>
            <span className="text-xs font-mono text-ivory/70">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory transition-colors pointer-events-auto"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Previous Button */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + items.length) % items.length);
            }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-ivory/10 hover:bg-ivory/25 text-ivory transition-all backdrop-blur-sm z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % items.length);
            }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-ivory/10 hover:bg-ivory/25 text-ivory transition-all backdrop-blur-sm z-10"
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
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-ivory/10 max-h-[72vh] flex items-center justify-center bg-black/40">
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="max-h-[72vh] max-w-full object-contain select-none"
            />
          </div>

          {/* Caption */}
          <div className="mt-4 text-center max-w-2xl px-4">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              {currentItem.category && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-forest-light/60 text-beige border border-beige/20">
                  {currentItem.category}
                </span>
              )}
              <h4 className="text-ivory font-serif text-lg md:text-xl font-medium">
                {currentItem.title}
              </h4>
            </div>
            {currentItem.description && (
              <p className="text-beige/80 text-xs md:text-sm font-light leading-relaxed">
                {currentItem.description}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
