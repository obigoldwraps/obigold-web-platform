import React, { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Transformations from './components/Transformations';
import SocialProof from './components/SocialProof';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

import BookingModal from './components/BookingModal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--dark-bg)]">
      <Header openModal={() => setIsModalOpen(true)} />
      <Hero openModal={() => setIsModalOpen(true)} />
      <Services />
      <Transformations />
      <SocialProof />
      <Gallery />
      <Contact />
      <Footer />

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}

export default App;
