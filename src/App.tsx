import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { BrandStory } from './components/sections/BrandStory';
import { SignatureMenu } from './components/sections/SignatureMenu';
import { Experience } from './components/sections/Experience';
import { Gallery } from './components/sections/Gallery';
import { WhyDoppio } from './components/sections/WhyDoppio';
import { LocationContact } from './components/sections/LocationContact';
import { Footer } from './components/layout/Footer';
import { LightboxModal, LightboxItem } from './components/common/LightboxModal';
import { ReservationModal } from './components/common/ReservationModal';
import { ScrollToTop } from './components/common/ScrollToTop';
import { GALLERY_IMAGES } from './data/galleryData';

export function App() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeLightboxItems, setActiveLightboxItems] = useState<LightboxItem[]>(GALLERY_IMAGES);

  const handleOpenGalleryImage = (item: { id: string; src: string; title: string; description?: string }) => {
    // Check if the item exists in GALLERY_IMAGES
    const existingIndex = GALLERY_IMAGES.findIndex((g) => g.id === item.id || g.src === item.src);
    if (existingIndex !== -1) {
      setActiveLightboxItems(GALLERY_IMAGES);
      setLightboxIndex(existingIndex);
    } else {
      setActiveLightboxItems([
        {
          id: item.id,
          src: item.src,
          title: item.title,
          description: item.description,
          category: 'Doppio Feature',
        },
      ]);
      setLightboxIndex(0);
    }
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans antialiased selection:bg-forest selection:text-ivory">
      {/* Sticky Top Navigation */}
      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* A. Hero Section */}
        <Hero onOpenReservation={() => setReservationOpen(true)} />

        {/* B. Brand Story / Philosophy */}
        <BrandStory />

        {/* C. Signature Menu */}
        <SignatureMenu
          onImageClick={handleOpenGalleryImage}
          onOpenReservation={() => setReservationOpen(true)}
        />

        {/* D. The Doppio Experience */}
        <Experience
          onImageClick={handleOpenGalleryImage}
          onOpenReservation={() => setReservationOpen(true)}
        />

        {/* E. Visual Photography Gallery */}
        <Gallery onImageClick={handleOpenGalleryImage} />

        {/* F. Why Doppio? */}
        <WhyDoppio />

        {/* G. Location & Interactive Contact */}
        <LocationContact onOpenReservation={() => setReservationOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setReservationOpen(true)} />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={activeLightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />

      {/* Table Reservation / Enquiry Drawer */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Floating Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}

export default App;
