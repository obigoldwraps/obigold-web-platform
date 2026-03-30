import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import backgroundimg from '../images/backgroundhero.jpg';
import gle63white from '../images/gle63_white.png';
import gle63purple from '../images/gle63_purple.png';

interface HeroProps {
  openModal?: () => void;
}

export default function Hero({ openModal }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide logic: toggles every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen lg:min-h-[140vh] flex flex-col items-center justify-start text-center overflow-hidden pt-20 bg-black"
    >
      {/* 1. BACKGROUND LAYER: Reduced darkness to observe the car */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundimg}
          alt="Premium Car Wrap"
          className="w-full h-full object-cover scale-105"
        />
        {/* Subtle Base Tint */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. DYNAMIC VIGNETTES: Creates the 'Luxury Spotlight' effect */}
      {/* Radial spotlight: Bright center, dark edges */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.8)_100%)]" />
      
      {/* Side gradients for text readability on wide screens */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      
      {/* Bottom fade to blend into the next section */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black" />

      {/* 3. MAIN CONTENT WRAPPER: Highest Z-index */}
      <div className="relative z-30 w-full flex flex-col items-center">
        
        {/* Hero Text: Minimized slightly to create visual space */}
        <div className="mt-10 md:mt-16 max-w-4xl mx-auto px-6 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="leading-none tracking-tighter select-none"
          >
            <span className="block text-xl md:text-3xl font-extralight text-white/80 mb-2 uppercase tracking-[0.4em]">
              Wrap Your
            </span>
            <span
              className="gold-chrome-text block text-[3.2rem] md:text-6xl lg:text-7xl font-black uppercase leading-[0.8] tracking-[-0.03em]"
              style={{ fontFamily: "'Syncopate', sans-serif" }}
            >
              POWER
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-lg text-white/70 mt-6 max-w-lg mx-auto"
          >
            Premium car wraps and custom finishes that turn your vehicle into a head-turning statement of luxury.
          </motion.p>
        </div>

        {/* The Slideshow Container: Before & After Visual */}
        <div className="relative w-full max-w-5xl mx-auto px-4 md:px-6 mt-12">
          <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden ring-1 ring-white/10 bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            {/* Base Image (Before) */}
            <img
              src={gle63white}
              alt="Original White"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* The 'After' Image (The Wipe Effect) */}
            <AnimatePresence>
              {currentImage === 1 && (
                <motion.img
                  key="purple-wrap"
                  src={gle63purple}
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ clipPath: 'inset(0 0% 0 0)' }}
                  exit={{ clipPath: 'inset(0 100% 0 0)' }}
                  transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                  alt="Purple Wrap Transformation"
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
              )}
            </AnimatePresence>

            {/* Gold Blade Line */}
            <AnimatePresence>
              {currentImage === 1 && (
                <motion.div
                  initial={{ left: '0%' }}
                  animate={{ left: '100%' }}
                  exit={{ left: '0%' }}
                  transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute top-0 bottom-0 w-1 bg-[var(--secondary-gold)] z-20 shadow-[0_0_20px_rgba(212,175,55,1)]"
                  style={{ transform: 'translateX(-100%)' }}
                />
              )}
            </AnimatePresence>

            {/* Labels */}
            <div className="absolute top-4 left-6 z-30 pointer-events-none">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full"
              >
                <span className="text-[var(--secondary-gold)] font-black tracking-widest text-[10px] uppercase">
                  {currentImage === 0 ? 'Factory Finish' : 'Obigold Custom Wrap'}
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Action Area: Buttons & Stats */}
        <div className="mt-16 pb-20 flex flex-col items-center gap-12 w-full max-w-5xl px-6">
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
              className="group relative overflow-hidden px-10 py-5 rounded-xl font-black text-lg tracking-widest bg-[var(--secondary-gold)] text-black flex items-center gap-3 shadow-xl"
            >
              <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
              <Calendar size={20} className="relative z-10" />
              <span className="relative z-10">BOOK YOUR WRAP</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-[var(--secondary-gold)]/50 text-[var(--secondary-gold)] px-10 py-5 rounded-xl font-black text-lg hover:bg-[var(--secondary-gold)] border-[var(--secondary-gold)] hover:text-black transition-all duration-300 tracking-widest"
            >
              VIEW GALLERY
            </motion.button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center border-t border-white/10 pt-12 w-full">
            {[
              { num: '100+', label: 'Vehicles Wrapped' },
              { num: '9+', label: 'Years Experience' },
              { num: '5yr', label: 'Warranty' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center group cursor-default"
              >
                <div className="text-4xl lg:text-5xl font-black text-white group-hover:text-[var(--secondary-gold)] transition-colors duration-300">
                  {stat.num}
                </div>
                <div className="text-[10px] text-white/40 font-bold tracking-widest uppercase mt-2 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="w-0 h-[1px] bg-[var(--secondary-gold)] mt-2 transition-all duration-500 group-hover:w-12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none opacity-40 z-30"
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </section>
  );
}