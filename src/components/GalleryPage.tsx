import React, { useState, useEffect } from 'react';

import Header from './Header';
import GalleryFull from './GalleryFull';
import Footer from './Footer';
import BookingModal from './BookingModal';
import GalleryModal from './GalleryModal';

export default function GalleryPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ vehicle: string; wrap: string; img: string } | null>(null);

  // 2. THE FIX: Monitor both modals and reset body overflow
  useEffect(() => {
    if (galleryModalOpen || quoteModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function: safety net if the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [galleryModalOpen, quoteModalOpen]);

  const openQuoteModal = () => setQuoteModalOpen(true);
  const openGalleryModal = (item: { vehicle: string; wrap: string; img: string }) => {
    setSelectedItem(item);
    setGalleryModalOpen(true);
  };
  const closeGalleryModal = () => setGalleryModalOpen(false);

  return (
    <div className="min-h-screen bg-[var(--dark-bg)]">
      <Header openModal={openQuoteModal} />
      <GalleryFull openModal={openGalleryModal} />
      <Footer />

      <BookingModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
      {selectedItem && (
        <GalleryModal
          isOpen={galleryModalOpen}
          onClose={closeGalleryModal}
          vehicle={selectedItem.vehicle}
          wrap={selectedItem.wrap}
          img={selectedItem.img}
        />
      )}
    </div>
  );
}

