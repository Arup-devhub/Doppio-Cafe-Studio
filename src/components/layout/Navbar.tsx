import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, Calendar, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';
import { Logo } from '../common/Logo';
import { LiveStatusBadge } from '../common/LiveStatusBadge';
import { AmbientSound } from '../common/AmbientSound';
import { BUSINESS_INFO } from '../../data/menuData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Doppio', href: '#why-doppio' },
    { label: 'Location', href: '#location' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory/90 backdrop-blur-md shadow-sm border-b border-beige/60 py-3.5 text-charcoal'
            : 'bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-transparent py-5 text-ivory'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center group focus:outline-none"
            >
              <Logo
                variant={isScrolled ? 'dark' : 'light'}
                size="md"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm tracking-wide font-medium transition-colors relative py-1 hover:text-gold-accent ${
                    isScrolled ? 'text-charcoal/85' : 'text-ivory/90'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center space-x-3.5">
              <AmbientSound />

              <button
                onClick={onOpenReservation}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                  isScrolled
                    ? 'bg-forest text-ivory hover:bg-forest-light border-forest shadow-sm'
                    : 'bg-ivory/15 text-ivory hover:bg-ivory hover:text-forest border-ivory/30 backdrop-blur-md'
                }`}
              >
                Table Enquiry
              </button>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-forest hover:bg-forest/10'
                    : 'text-ivory hover:bg-ivory/20'
                }`}
                title="Get Directions on Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Hamburger & Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <AmbientSound />

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`min-w-[44px] min-h-[44px] p-2.5 rounded-xl transition-colors flex items-center justify-center ${
                  isScrolled ? 'text-charcoal bg-beige/30 hover:bg-beige/50' : 'text-ivory bg-ivory/15 hover:bg-ivory/25'
                }`}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-drawer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-forest text-ivory flex flex-col justify-between p-6 md:hidden overflow-y-auto"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-ivory/10">
                <Logo variant="light" size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-w-[44px] min-h-[44px] p-2 rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20 flex items-center justify-center transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Status Badge in mobile */}
              <div className="mt-5 mb-3">
                <LiveStatusBadge />
              </div>

              {/* Navigation Links with 48px touch targets */}
              <nav className="flex flex-col space-y-1 my-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="min-h-[48px] text-lg font-serif text-ivory/90 hover:text-gold-accent active:text-gold-warm transition-colors py-2.5 px-2 rounded-lg hover:bg-ivory/5 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-5 border-t border-ivory/10 space-y-3.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full min-h-[48px] py-3.5 rounded-xl bg-ivory text-forest font-semibold text-xs tracking-wider uppercase hover:bg-beige transition shadow-lg flex items-center justify-center gap-2 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-forest" />
                <span>Reserve a Table</span>
              </button>

              <div className="flex items-center justify-between gap-3 text-xs text-beige/80 pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="min-h-[44px] flex items-center gap-1.5 hover:text-ivory active:text-gold-warm"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-accent" />
                  <span>{BUSINESS_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center gap-1.5 hover:text-ivory active:text-gold-warm"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-gold-accent" />
                  <span>{BUSINESS_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
