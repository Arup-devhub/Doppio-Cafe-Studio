import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, MapPin, Coffee, ArrowUpRight, Compass } from 'lucide-react';
import { LiveStatusBadge } from '../common/LiveStatusBadge';
import { BUSINESS_INFO } from '../../data/menuData';

interface HeroProps {
  onOpenReservation: () => void;
}

const HERO_SLIDES = [
  {
    image: '/images/doppio/hero-patio-twilight.jpg',
    tag: 'Twilight Botanical Courtyard',
    subtitle: 'Under Fairy Lights & Bougainvillea',
  },
  {
    image: '/images/doppio/exterior-facade-dusk.jpg',
    tag: 'The Iconic Facade',
    subtitle: 'Infocity Avenue, Patia',
  },
  {
    image: '/images/doppio/interior-lounge-honeycomb.jpg',
    tag: 'The Honeycomb Lounge',
    subtitle: 'Italian Aesthetics & Comfort',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStory = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[680px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Slides with Crossfade */}
      {HERO_SLIDES.map((slide, index) => (
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.05,
          }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt="Doppio Cafe and Studio Patia Bhubaneswar"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      ))}

      {/* Cinematic Overlays: Top Vignette + Deep Bottom Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-charcoal-dark via-charcoal/65 to-charcoal/50" />
      <div className="absolute inset-0 z-10 bg-forest/20 mix-blend-multiply" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-ivory flex flex-col items-center justify-center pt-16 sm:pt-20">
        {/* Top Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory/15 backdrop-blur-md border border-ivory/20 text-beige text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-gold-accent" />
            <span>Patia, Bhubaneswar</span>
          </div>

          <LiveStatusBadge />

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ivory/15 backdrop-blur-md border border-ivory/20 text-beige text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-gold-accent" />
            <span>Celebrating 6+ Years</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ivory leading-[1.1] max-w-4xl"
        >
          Your Everyday Escape, <br className="hidden sm:inline" />
          <span className="italic font-normal text-gold-warm">Perfectlys Brewed.</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-beige/90 max-w-2xl font-light leading-relaxed"
        >
          Good coffee, beautiful spaces, and memorable moments. Welcome to{' '}
          <strong className="font-semibold text-ivory">Doppio Cafe & Studio</strong>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-forest-light text-ivory font-semibold text-sm tracking-wider uppercase hover:bg-forest transition-all duration-300 shadow-xl border border-beige/30 flex items-center justify-center gap-2 group"
          >
            <Coffee className="w-4 h-4 text-gold-accent group-hover:rotate-12 transition-transform" />
            <span>Explore Our Menu</span>
          </a>

          <a
            href="#story"
            onClick={scrollToStory}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-ivory/15 hover:bg-ivory hover:text-forest text-ivory font-semibold text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-md border border-ivory/30 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Discover Doppio</span>
          </a>
        </motion.div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 mt-8">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.image}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentSlide ? 'w-8 bg-gold-warm' : 'w-2 bg-ivory/40 hover:bg-ivory/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-ivory/70 hover:text-ivory transition-colors pointer-events-auto cursor-pointer"
        onClick={scrollToStory}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-mono">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-gold-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
