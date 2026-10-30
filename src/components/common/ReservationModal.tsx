import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, Phone, MessageSquare, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/menuData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: today,
    time: '18:00',
    guests: '2',
    area: 'Botanical Courtyard Patio',
    specialRequest: '',
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  // Lock body scroll and handle Escape key when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: { name?: string; phone?: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your name (at least 2 characters).';
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^\+?[0-9]{10,14}$/;
    if (!phoneClean || !phoneRegex.test(phoneClean)) {
      newErrors.phone = 'Please provide a valid 10-digit phone number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const message = `Hello Doppio Cafe & Studio! 👋\n\nI would like to enquire about table availability:\n\n• Name: ${formData.name.trim()}\n• Contact: ${formData.phone.trim()}\n• Date: ${formData.date}\n• Time: ${formData.time}\n• Guests: ${formData.guests} persons\n• Preferred Area: ${formData.area}\n${formData.specialRequest.trim() ? `• Note: ${formData.specialRequest.trim()}\n` : ''}\nCould you please let me know if a table can be accommodated? Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917440024446?text=${encoded}`;

    // Fallback: If wa.me is blocked or fails on desktop browser
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = `https://api.whatsapp.com/send?phone=917440024446&text=${encoded}`;
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-charcoal/80 backdrop-blur-md overflow-y-auto p-0 sm:p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reservation-modal-title"
      >
        {/* Backdrop click dismiss */}
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-ivory rounded-t-3xl sm:rounded-3xl shadow-2xl border border-beige overflow-hidden z-10 max-h-[92dvh] flex flex-col my-0 sm:my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Banner */}
          <div className="bg-forest text-ivory p-6 sm:p-8 relative flex-shrink-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory flex items-center justify-center transition-colors touch-manipulation"
              aria-label="Close table enquiry dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-gold-accent/20 text-gold-warm border border-gold-accent/30 mb-3">
              <Sparkles className="w-3 h-3 text-gold-warm" /> Table Enquiry
            </div>
            <h3 id="reservation-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-ivory">
              Reserve Your Moment
            </h3>
            <p className="text-beige text-xs sm:text-sm mt-1 font-light leading-relaxed">
              Connect directly with our team to arrange comfortable seating in our courtyard garden or indoor lounge.
            </p>
          </div>

          {/* Form Scroll Container */}
          <div className="overflow-y-auto p-5 sm:p-8">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
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
                    className={`w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-ivory-100 border text-charcoal text-sm focus:outline-none transition ${
                      errors.name ? 'border-rose-500 bg-rose-50/30' : 'border-beige/80 focus:border-forest'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.name}</p>
                  )}
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
                    className={`w-full px-3.5 py-2.5 min-h-[44px] rounded-xl bg-ivory-100 border text-charcoal text-sm focus:outline-none transition ${
                      errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-beige/80 focus:border-forest'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    min={today}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 min-h-[44px] rounded-xl bg-ivory-100 border border-beige/80 text-charcoal text-sm focus:outline-none focus:border-forest transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                    Time (10 AM - 10 PM)
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 min-h-[44px] rounded-xl bg-ivory-100 border border-beige/80 text-charcoal text-sm focus:outline-none focus:border-forest transition"
                  >
                    <option value="10:00">10:00 AM (Opening)</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="13:00">01:00 PM (Lunch)</option>
                    <option value="14:30">02:30 PM</option>
                    <option value="16:00">04:00 PM (Afternoon Tea)</option>
                    <option value="17:30">05:30 PM</option>
                    <option value="18:30">06:30 PM (Evening)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:30">08:30 PM</option>
                    <option value="21:15">09:15 PM (Last Seating)</option>
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
                    className="w-full px-3 py-2.5 min-h-[44px] rounded-xl bg-ivory-100 border border-beige/80 text-charcoal text-sm focus:outline-none focus:border-forest transition"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5">5 Persons</option>
                    <option value="6+">6+ (Group / Celebration)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                  Preferred Seating Area
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Botanical Courtyard Patio',
                    'Air-Conditioned Honeycomb Lounge',
                  ].map((area) => (
                    <button
                      type="button"
                      key={area}
                      onClick={() => setFormData((prev) => ({ ...prev, area }))}
                      className={`px-3.5 py-3 min-h-[44px] rounded-xl text-xs font-medium border text-left transition touch-manipulation ${
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
                  className="w-full px-3.5 py-2.5 rounded-xl bg-ivory-100 border border-beige/80 text-charcoal text-sm focus:outline-none focus:border-forest transition"
                />
              </div>

              {/* Explicit Required Transparency Disclaimer */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-forest/5 border border-forest/15 text-forest text-xs leading-relaxed">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-forest" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-forest">Reservation Confirmation Policy</p>
                  <p className="text-charcoal/80">
                    Your enquiry will be forwarded to our team. Your reservation is subject to confirmation.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-xl bg-forest text-ivory font-medium text-sm hover:bg-forest-light transition shadow-md touch-manipulation active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-300" />
                  <span>Send WhatsApp Enquiry</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-xl bg-ivory-200 border border-beige text-charcoal font-medium text-sm hover:bg-beige/40 transition touch-manipulation"
                >
                  <Phone className="w-4 h-4 text-coffee" />
                  <span>Call Directly</span>
                </a>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
