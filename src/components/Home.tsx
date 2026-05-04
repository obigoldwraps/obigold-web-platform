import React, { useState } from 'react';

import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Transformations from './Transformations';
import SocialProof from './SocialProof';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

import BookingModal from './BookingModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--dark-bg)]">
      <Header openModal={() => setIsModalOpen(true)} />
      <Hero openModal={() => setIsModalOpen(true)} />
      <Services linkToServices={true} />
      <Transformations />
      <SocialProof />
      <Gallery />
      <Contact openModal={() => setIsModalOpen(true)} />
      <Footer />

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
