import React, { useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Transformations from './components/Transformations';
import CTA from './components/CTA';
import Footer from './components/Footer';

import BookingModal from './components/BookingModal';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obigold-black">
      <Header openModal={() => setIsModalOpen(true)} />
      <Hero openModal={() => setIsModalOpen(true)} />
      <Features />
      <Services />
      <Gallery />
      <Transformations />
      <Process />
      <CTA />
      <Footer />

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}

export default App;
