import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Coffee, Leaf, Clock, ArrowRight } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-ivory text-charcoal overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-px bg-coffee" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">
            Our Story & Philosophy
          </span>
        </div>

        {/* Editorial Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest leading-[1.15]">
              More Than Just Coffee.
            </h2>

            <p className="text-base sm:text-lg text-charcoal/80 font-light leading-relaxed">
              In Italian coffee culture, a <strong className="font-semibold text-coffee">“Doppio”</strong> is a double shot of espresso — double the intensity, double the warmth, and double the richness of flavour.
            </p>

            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-light">
              Nestled along Infocity Avenue in Patia, Bhubaneswar, <strong>Doppio Cafe & Studio</strong> was conceived as an everyday escape. We set out to blend the romantic street-side charm of a European courtyard with the warmth of a studio salon where people can read, converse, create, and recharge.
            </p>

            <div className="p-6 rounded-2xl bg-ivory-100 border border-beige/80 space-y-3 relative overflow-hidden shadow-sm">
              <div className="flex items-center gap-2 text-forest font-serif font-semibold text-lg">
                <Leaf className="w-4 h-4 text-olive" />
                <span>Greenery Overhead & Cozy Conversations</span>
              </div>
              <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                Whether you seek a quiet morning corner to read with a hot cappuccino, a breezy evening under hanging fairy lights and bougainvillea, or a feast of handcrafted pastas with friends — Doppio welcomes you with open arms.
              </p>
            </div>

            {/* Core Brand Pillars Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="border-l-2 border-forest pl-3">
                <span className="block font-serif text-2xl font-bold text-forest">6+</span>
                <span className="text-xs text-charcoal/60 uppercase tracking-wider">Years in Patia</span>
              </div>
              <div className="border-l-2 border-coffee pl-3">
                <span className="block font-serif text-2xl font-bold text-coffee">100%</span>
                <span className="text-xs text-charcoal/60 uppercase tracking-wider">Pure Arabica</span>
              </div>
              <div className="border-l-2 border-olive pl-3">
                <span className="block font-serif text-2xl font-bold text-olive">Dual</span>
                <span className="text-xs text-charcoal/60 uppercase tracking-wider">Patio & Lounge</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Collage with Authentic Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {/* Main Image 1: Barista Counter & LED Ticker */}
              <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-xl border-4 border-ivory aspect-[16/10] group">
                <img
                  src="/images/doppio/interior-bar-led-ticker.jpg"
                  alt="Doppio Cafe & Studio Barista Counter and Foliage"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-xs font-mono text-beige tracking-wider uppercase">
                    “Good Food, Great Coffee, Greenery Overhead”
                  </span>
                </div>
              </div>

              {/* Inset Image 2: The Studio Book Nook */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-ivory aspect-[4/5] group">
                <img
                  src="/images/doppio/interior-studio-booknook.jpg"
                  alt="Doppio Studio Book Nook and literature shelf"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-medium text-ivory">The Book Nook</span>
                </div>
              </div>

              {/* Inset Image 3: Espresso Doppio & Biscuit */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-ivory aspect-[4/5] group">
                <img
                  src="/images/doppio/coffee-espresso-doppio.jpg"
                  alt="Doppio double shot espresso extraction with golden crema"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-medium text-ivory">The Signature Doppio</span>
                </div>
              </div>
            </div>

            {/* Decorative Floating Seal */}
            <div className="absolute -bottom-6 -right-4 z-20 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-forest text-ivory shadow-2xl border border-beige/20">
              <div className="w-10 h-10 rounded-full bg-gold-accent/20 flex items-center justify-center text-gold-warm">
                <Coffee className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wider text-beige font-semibold">Crafted In</p>
                <p className="text-xs font-serif font-bold text-ivory">Bhubaneswar, Odisha</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
