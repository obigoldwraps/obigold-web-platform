import React, { useState } from 'react';

import Header from './Header';
import Services from './Services';
import Footer from './Footer';
import BookingModal from './BookingModal';

export default function ServicesPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setQuoteModalOpen(true);

  return (
    <div className="min-h-screen bg-[var(--dark-bg)]">
      <Header openModal={openQuoteModal} />
      <Services allServices={true} simpleDesign={true} />
      <Footer />

      <BookingModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </div>
  );
}
