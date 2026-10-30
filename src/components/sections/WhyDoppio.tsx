import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, TreePine, Sparkles, UtensilsCrossed, BookOpen, HeartHandshake, ShieldCheck, Wifi, Award } from 'lucide-react';
import { WHY_DOPPIO_POINTS } from '../../data/experienceData';

export const WhyDoppio: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Coffee: <Coffee className="w-6 h-6 text-coffee" />,
    TreePine: <TreePine className="w-6 h-6 text-forest" />,
    Sparkles: <Sparkles className="w-6 h-6 text-gold-accent" />,
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-terracotta" />,
    BookOpen: <BookOpen className="w-6 h-6 text-olive" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-forest-light" />,
  };

  return (
    <section id="why-doppio" className="relative py-24 sm:py-32 bg-ivory-200 text-charcoal border-y border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-forest/10 text-forest mb-4">
            <Award className="w-3.5 h-3.5 text-forest" />
            <span>The Doppio Difference</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest leading-tight">
            Why Patia Chooses Doppio
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
            More than just another café, Doppio is a thoughtfully curated blend of botanical nature, Italian espresso heritage, and cozy studio culture.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {WHY_DOPPIO_POINTS.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-ivory rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-beige/80 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-ivory-200 border border-beige flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {iconMap[point.icon] || <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-forest" />}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-forest mb-2.5">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-beige/40 flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-charcoal/50">
                <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                <span>Doppio Café Experience</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Amenities Highlight Bar - Clean 2x2 Grid on Mobile, 4-Col on Desktop */}
        <div className="mt-12 sm:mt-16 p-4 sm:p-6 rounded-2xl bg-ivory border border-beige/80 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-forest flex-shrink-0" />
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-forest uppercase tracking-wider">Guest Wi-Fi</p>
              <p className="text-[10px] sm:text-xs text-charcoal/60">Work & Study Friendly</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <TreePine className="w-4 h-4 sm:w-5 sm:h-5 text-olive flex-shrink-0" />
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-forest uppercase tracking-wider">Outdoor Patio</p>
              <p className="text-[10px] sm:text-xs text-charcoal/60">Pet-Friendly Open Air</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-coffee flex-shrink-0" />
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-forest uppercase tracking-wider">All-Day Dining</p>
              <p className="text-[10px] sm:text-xs text-charcoal/60">10:00 AM to 10:00 PM</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 flex-shrink-0" />
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-forest uppercase tracking-wider">Freshly Sourced</p>
              <p className="text-[10px] sm:text-xs text-charcoal/60">Handmade to Order</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
