import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sun, Moon, BookOpen, Coffee, CheckCircle, ArrowRight } from 'lucide-react';
import { EXPERIENCE_PILLARS } from '../../data/experienceData';

interface ExperienceProps {
  onImageClick?: (item: { id: string; src: string; title: string; description?: string }) => void;
  onOpenReservation?: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onImageClick, onOpenReservation }) => {
  const [activePillarId, setActivePillarId] = useState(EXPERIENCE_PILLARS[0].id);
  const activePillar = EXPERIENCE_PILLARS.find((p) => p.id === activePillarId) || EXPERIENCE_PILLARS[0];

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-forest text-ivory overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-olive/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-ivory/10 text-gold-warm border border-ivory/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
            <span>The Atmosphere & Spaces</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ivory leading-tight">
            Come for the Coffee. <br />
            <span className="italic font-normal text-gold-warm">Stay for the Atmosphere.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-beige/85 font-light leading-relaxed">
            Doppio is designed as a sanctuary of light, foliage, and texture. From morning sun filtering through leafy patio trees to the romantic amber glow of hanging orbs at night.
          </p>
        </div>

        {/* Interactive Space Selectors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {EXPERIENCE_PILLARS.map((pillar) => {
            const isSelected = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                  isSelected
                    ? 'bg-ivory text-forest border-ivory shadow-lg scale-102'
                    : 'bg-ivory/10 text-ivory hover:bg-ivory/15 border-ivory/15'
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                  isSelected ? 'text-coffee' : 'text-beige/70'
                }`}>
                  {pillar.subtitle}
                </span>
                <span className="font-serif font-bold text-sm sm:text-base leading-snug block">
                  {pillar.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Editorial Showcase of the Active Pillar */}
        <motion.div
          key={activePillar.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-forest-dark/80 p-6 sm:p-10 rounded-3xl border border-beige/20 shadow-2xl"
        >
          {/* Left: Authentic Photography */}
          <div className="lg:col-span-7">
            <div
              onClick={() =>
                onImageClick?.({
                  id: activePillar.id,
                  src: activePillar.image,
                  title: activePillar.title,
                  description: activePillar.description,
                })
              }
              className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/10] bg-black/40 shadow-xl cursor-pointer group border border-ivory/10"
            >
              <img
                src={activePillar.image}
                alt={activePillar.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end justify-between p-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-warm font-semibold">
                    Real Café Ambience
                  </span>
                  <p className="font-serif text-lg sm:text-xl font-bold text-ivory">
                    {activePillar.title}
                  </p>
                </div>
                <span className="text-xs text-beige/80 px-3 py-1 rounded-full bg-ivory/15 backdrop-blur-md border border-ivory/20">
                  Click to Expand
                </span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-gold-accent font-semibold">
                {activePillar.subtitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory mt-1">
                {activePillar.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-beige/90 font-light leading-relaxed">
              {activePillar.description}
            </p>

            <div className="space-y-2.5 pt-2">
              {activePillar.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-ivory">
                  <CheckCircle className="w-4 h-4 text-gold-warm flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {onOpenReservation && (
              <div className="pt-4">
                <button
                  onClick={onOpenReservation}
                  className="px-6 py-3 rounded-full bg-gold-warm text-charcoal font-semibold text-xs tracking-wider uppercase hover:bg-gold transition shadow-md flex items-center gap-2"
                >
                  <span>Experience This Space</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Asymmetric Ambience Collage Gallery */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            onClick={() =>
              onImageClick?.({
                id: 'exp-1',
                src: '/images/doppio/courtyard-orbs-night.jpg',
                title: 'Suspended Evening Orbs',
                description: 'Night lights nestled inside living tree branches',
              })
            }
            className="rounded-2xl overflow-hidden aspect-[4/5] bg-black/20 relative group cursor-pointer border border-ivory/10"
          >
            <img
              src="/images/doppio/courtyard-orbs-night.jpg"
              alt="Hanging twilight orbs"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors flex items-end p-4">
              <span className="text-xs font-serif font-bold text-ivory">Evening Orbs</span>
            </div>
          </div>

          <div
            onClick={() =>
              onImageClick?.({
                id: 'exp-2',
                src: '/images/doppio/patio-mural-seating.jpg',
                title: 'Botanical Arch Murals',
                description: 'Artistic courtyard details and white wicker furniture',
              })
            }
            className="rounded-2xl overflow-hidden aspect-[4/5] bg-black/20 relative group cursor-pointer border border-ivory/10"
          >
            <img
              src="/images/doppio/patio-mural-seating.jpg"
              alt="Botanical arch murals"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors flex items-end p-4">
              <span className="text-xs font-serif font-bold text-ivory">Botanical Murals</span>
            </div>
          </div>

          <div
            onClick={() =>
              onImageClick?.({
                id: 'exp-3',
                src: '/images/doppio/interior-checkered-bistro.jpg',
                title: 'Checkered Tile Floors',
                description: 'Classic European bistro character with warm wood honeycomb ceiling',
              })
            }
            className="rounded-2xl overflow-hidden aspect-[4/5] bg-black/20 relative group cursor-pointer border border-ivory/10"
          >
            <img
              src="/images/doppio/interior-checkered-bistro.jpg"
              alt="Checkered bistro floor"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors flex items-end p-4">
              <span className="text-xs font-serif font-bold text-ivory">European Interior</span>
            </div>
          </div>

          <div
            onClick={() =>
              onImageClick?.({
                id: 'exp-4',
                src: '/images/doppio/decor-rattan-pendant.jpg',
                title: 'Artisan Rattan Pendants',
                description: 'Handcrafted woven lighting that adds organic warmth',
              })
            }
            className="rounded-2xl overflow-hidden aspect-[4/5] bg-black/20 relative group cursor-pointer border border-ivory/10"
          >
            <img
              src="/images/doppio/decor-rattan-pendant.jpg"
              alt="Rattan pendant lighting"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors flex items-end p-4">
              <span className="text-xs font-serif font-bold text-ivory">Rattan Craft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
