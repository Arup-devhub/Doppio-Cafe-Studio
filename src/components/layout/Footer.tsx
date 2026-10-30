import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';
import { Logo } from '../common/Logo';
import { BUSINESS_INFO } from '../../data/menuData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-forest-dark text-ivory pt-20 pb-12 border-t border-forest-light/40 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-gold-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-ivory/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="light" size="lg" />

            <p className="font-serif italic text-base sm:text-lg text-beige/90 leading-relaxed max-w-sm pt-2">
              “{BUSINESS_INFO.tagline}”
            </p>

            <p className="text-xs sm:text-sm text-beige/70 font-light leading-relaxed max-w-md">
              A botanical European café and studio bistro in Patia, Bhubaneswar. Serving specialty double-shot espresso, Italian classics, and handcrafted moments under lush greenery.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center text-ivory transition-colors"
                title="Follow on Instagram"
              >
                <InstagramIcon className="w-5 h-5 text-gold-warm" />
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center text-ivory transition-colors"
                title="View on Google Maps"
              >
                <MapPin className="w-5 h-5 text-gold-warm" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-10 h-10 rounded-full bg-ivory/10 hover:bg-ivory/20 flex items-center justify-center text-ivory transition-colors"
                title="Call Doppio"
              >
                <Phone className="w-5 h-5 text-gold-warm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-gold-warm">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-beige/80">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => scrollToSection(e, '#hero')}
                  className="hover:text-ivory transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  onClick={(e) => scrollToSection(e, '#story')}
                  className="hover:text-ivory transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => scrollToSection(e, '#menu')}
                  className="hover:text-ivory transition-colors"
                >
                  Bistro Menu
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => scrollToSection(e, '#experience')}
                  className="hover:text-ivory transition-colors"
                >
                  The Experience
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => scrollToSection(e, '#gallery')}
                  className="hover:text-ivory transition-colors"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="#why-doppio"
                  onClick={(e) => scrollToSection(e, '#why-doppio')}
                  className="hover:text-ivory transition-colors"
                >
                  Why Doppio
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => scrollToSection(e, '#location')}
                  className="hover:text-ivory transition-colors"
                >
                  Find Us
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Ambiance */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-gold-warm">
              Timings
            </h4>
            <div className="text-xs sm:text-sm text-beige/80 space-y-2 font-light">
              <div>
                <p className="font-medium text-ivory">Monday – Sunday</p>
                <p className="text-xs text-beige/60">10:00 AM – 10:00 PM</p>
              </div>
              <div className="pt-2">
                <p className="font-medium text-ivory">Kitchen & Coffee</p>
                <p className="text-xs text-beige/60">All-Day Dining</p>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenReservation}
                  className="text-xs font-semibold text-gold-warm hover:underline underline-offset-4 flex items-center gap-1"
                >
                  <span>Enquire Table</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact & Location Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-gold-warm">
              Visit Us
            </h4>
            <div className="text-xs sm:text-sm text-beige/80 space-y-3 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-accent flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-accent flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-ivory transition-colors font-medium"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-gold-accent flex-shrink-0" />
                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ivory transition-colors"
                >
                  {BUSINESS_INFO.instagramHandle}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ivory/10 hover:bg-ivory/20 text-xs font-medium text-ivory border border-ivory/20 transition-colors"
                >
                  <span>Open Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-beige/60">
          <p>
            © {new Date().getFullYear()} Doppio Cafe & Studio, Bhubaneswar. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Specialty Coffee & Botanical Sanctuary</span>
            <span>•</span>
            <span>Patia, Odisha</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
