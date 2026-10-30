import { MapPin, Phone, Clock, Navigation, ExternalLink, Calendar } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';
import { LiveStatusBadge } from '../common/LiveStatusBadge';
import { BUSINESS_INFO } from '../../data/menuData';

interface LocationContactProps {
  onOpenReservation: () => void;
}

export const LocationContact: React.FC<LocationContactProps> = ({ onOpenReservation }) => {
  return (
    <section id="location" className="relative py-16 sm:py-24 lg:py-32 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-forest/10 text-forest mb-4">
            <MapPin className="w-3.5 h-3.5 text-forest" />
            <span>Infocity Avenue, Patia</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest leading-tight">
            Find Your Way to Doppio.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
            Conveniently situated right in the heart of Bhubaneswar's tech and educational corridor, with street-side parking and garden patio access.
          </p>
        </div>

        {/* Content Grid: Contact Details & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Card Details */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-ivory-100 p-5 sm:p-8 lg:p-10 rounded-3xl border border-beige shadow-sm space-y-6 sm:space-y-8">
            <div className="space-y-5 sm:space-y-6">
              {/* Live Status Pill */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-coffee">
                  Current Status
                </span>
                <LiveStatusBadge />
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center flex-shrink-0 text-forest mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-forest">Address</h4>
                  <p className="text-sm text-charcoal/80 font-light leading-relaxed mt-1">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-charcoal/50 mt-1 font-mono">
                    Landmark: {BUSINESS_INFO.landmark}
                  </p>
                  <p className="text-xs text-charcoal/40 font-mono mt-0.5">
                    Coordinates: {BUSINESS_INFO.coordinates.lat}, {BUSINESS_INFO.coordinates.lng}
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-coffee/10 flex items-center justify-center flex-shrink-0 text-coffee mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-forest">Opening Hours</h4>
                  <p className="text-sm font-semibold text-charcoal/90 mt-1">
                    {BUSINESS_INFO.openingHours.display}
                  </p>
                  <p className="text-xs text-charcoal/60 mt-0.5 font-light">
                    {BUSINESS_INFO.openingHours.days}
                  </p>
                </div>
              </div>

              {/* Phone & Direct Call */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest-light/10 flex items-center justify-center flex-shrink-0 text-forest-light mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-forest">Phone & Inquiries</h4>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-base font-bold text-forest hover:text-coffee transition-colors inline-block mt-1 min-h-[36px] flex items-center"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-charcoal/60 mt-0.5">
                    Available for table inquiries, takeaways, and directions.
                  </p>
                </div>
              </div>

              {/* Social Media Link */}
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0 text-rose-700 mt-0.5">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-forest">Official Instagram</h4>
                  <a
                    href={BUSINESS_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-forest hover:text-rose-700 transition-colors inline-flex items-center gap-1.5 mt-1 min-h-[36px]"
                  >
                    <span>{BUSINESS_INFO.instagramHandle}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                  </a>
                  <p className="text-xs text-charcoal/60 mt-0.5">
                    Daily stories, blackboard specials, and event announcements.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-beige flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-xl bg-forest text-ivory font-semibold text-xs tracking-wider uppercase hover:bg-forest-light transition shadow-md touch-manipulation active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-gold-accent" />
                <span>Get Directions</span>
              </a>

              <button
                type="button"
                onClick={onOpenReservation}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-xl bg-ivory-200 border border-beige text-charcoal font-semibold text-xs tracking-wider uppercase hover:bg-beige transition touch-manipulation active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-coffee" />
                <span>Table Enquiry</span>
              </button>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-full min-h-[320px] rounded-3xl overflow-hidden shadow-luxury border border-beige bg-ivory-200">
              <iframe
                title="Doppio Cafe & Studio Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.9653636290853!2d85.80712747596859!3d20.343049511019685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909ea639fe209%3A0xaa162841f60bca2d!2sDoppio%20Cafe%20%26%20Studio!5e0!3m2!1sen!2sin!4v1730248000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 max-w-xs p-3.5 rounded-2xl bg-ivory/95 backdrop-blur-md border border-beige shadow-lg hidden sm:block">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-serif font-bold text-xs text-forest">Doppio Cafe & Studio</span>
                </div>
                <p className="text-[11px] text-charcoal/70 line-clamp-2">
                  Plot 3, Infocity Avenue, Patia, Bhubaneswar
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-[10px] font-bold text-forest uppercase tracking-wider flex items-center gap-1 hover:text-coffee"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
