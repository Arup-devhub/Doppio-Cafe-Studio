import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, Phone, MessageSquare, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/menuData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    guests: '2',
    area: 'Botanical Courtyard Patio',
    specialRequest: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Doppio Cafe & Studio! 👋\n\nI would like to enquire about table availability:\n\n• Name: ${formData.name || 'Guest'}\n• Contact: ${formData.phone || 'Not provided'}\n• Date: ${formData.date}\n• Time: ${formData.time}\n• Guests: ${formData.guests} persons\n• Preferred Area: ${formData.area}\n${formData.specialRequest ? `• Note: ${formData.specialRequest}\n` : ''}\nCould you please let me know if a table can be accommodated? Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917440024446?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg bg-ivory rounded-3xl shadow-2xl border border-beige overflow-hidden my-8"
        >
          {/* Header Banner */}
          <div className="bg-forest text-ivory p-6 sm:p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-gold-accent/20 text-gold-warm border border-gold-accent/30 mb-3">
              <Sparkles className="w-3 h-3" /> Table Enquiry
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory">
              Reserve Your Moment
            </h3>
            <p className="text-beige text-xs sm:text-sm mt-1 font-light leading-relaxed">
              Connect directly with our team to arrange comfortable seating in our courtyard garden or indoor lounge.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleWhatsAppSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ananya Mohapatra"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-ivory-100 border border-beige/80 text-charcoal text-sm focus:outline-none focus:border-forest transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-ivory-100 border border-beige/80 text-charcoal text-sm focus:outline-none focus:border-forest transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                  Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-ivory-100 border border-beige/80 text-charcoal text-sm focus:outline-none focus:border-forest transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                  Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl bg-ivory-100 border border-beige/80 text-charcoal text-sm focus:outline-none focus:border-forest transition"
                >
                  <option value="11:00">11:00 AM</option>
                  <option value="12:30">12:30 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:30">05:30 PM</option>
                  <option value="18:30">06:30 PM</option>
                  <option value="19:30">07:30 PM</option>
                  <option value="20:30">08:30 PM</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                  Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl bg-ivory-100 border border-beige/80 text-charcoal text-sm focus:outline-none focus:border-forest transition"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="5">5 Persons</option>
                  <option value="6+">6+ (Group)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                Preferred Seating Area
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  'Botanical Courtyard Patio',
                  'Air-Conditioned Honeycomb Lounge',
                ].map((area) => (
                  <button
                    type="button"
                    key={area}
                    onClick={() => setFormData((prev) => ({ ...prev, area }))}
                    className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-left transition ${
                      formData.area === area
                        ? 'bg-forest text-ivory border-forest shadow-sm'
                        : 'bg-ivory-100 text-charcoal border-beige/80 hover:border-forest/50'
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                Special Occasion / Note (Optional)
              </label>
              <textarea
                name="specialRequest"
                rows={2}
                value={formData.specialRequest}
                onChange={handleChange}
                placeholder="e.g. Birthday celebration, cozy quiet table, or high chair"
                className="w-full px-3.5 py-2 rounded-xl bg-ivory-100 border border-beige/80 text-charcoal text-sm focus:outline-none focus:border-forest transition"
              />
            </div>

            {/* Transparency Note */}
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-forest/5 border border-forest/10 text-forest text-xs leading-relaxed">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-forest" />
              <span>
                Doppio operates on direct guest communication. Your request is forwarded via WhatsApp to ensure staff confirmation. No advance payment or card required.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-forest text-ivory font-medium text-sm hover:bg-forest-light transition shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Send WhatsApp Enquiry</span>
              </button>
              
              <a
                href="tel:+917440024446"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-ivory-200 border border-beige text-charcoal font-medium text-sm hover:bg-beige/40 transition"
              >
                <Phone className="w-4 h-4 text-coffee" />
                <span>Call Directly</span>
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
