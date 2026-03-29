import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import gle63white from '../images/gle63_white.png';
import gle63purple from '../images/gle63_purple.png';

interface HeroProps {
  openModal?: () => void;
}

export default function Hero({ openModal }: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [gle63white, gle63purple];

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
      className="relative min-h-screen lg:min-h-[120vh] flex flex-col items-center justify-start text-center overflow-hidden pt-20 bg-black"
    >
      {/* 1. Background Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-10 pointer-events-none" />

      {/* 2. Hero Text Overlay */}
      <div className="relative z-30 mt-10 md:mt-16 max-w-4xl mx-auto px-6 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="leading-none tracking-tighter select-none"
        >
          <span className="block text-2xl md:text-4xl font-extralight text-white/80 mb-2 uppercase tracking-[0.3em]">
            Wrap Your
          </span>
          <span
            className="gold-chrome-text block text-[3.5rem] md:text-7xl lg:text-8xl font-bold uppercase leading-[0.8] tracking-[-0.03em]"
            style={{ fontFamily: "'Syncopate', sans-serif" }}
          >
            POWER
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-xl text-white/90 mt-6 max-w-xl mx-auto leading-relaxed"
        >
          Premium car wraps, detailing, and custom finishes that turn your vehicle into a head-turning statement of luxury.
        </motion.p>
      </div>

      {/* 3. The Slideshow Container */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-6 mt-10 shadow-2xl">
        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden ring-1 ring-white/10 bg-neutral-900">

          {/* Base Image (The 'Before' always sits underneath) */}
          <img
            src={gle63white}
            alt="Original White"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* The 'After' Image (The 'Wrap' that wipes over the top) */}
          <AnimatePresence>
            {currentImage === 1 && (
              <motion.img
                key="purple-wrap"
                src={gle63purple}
                initial={{ clipPath: 'inset(0 100% 0 0)' }} // Fully hidden to the right
                animate={{ clipPath: 'inset(0 0% 0 0)' }}   // Wipes to cover fully
                exit={{ clipPath: 'inset(0 100% 0 0)' }}    // Wipes back to hide
                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                alt="Purple Wrap Transformation"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            )}
          </AnimatePresence>

          {/* Optional: A gold 'leading edge' line to make it look like a blade is cutting the wrap */}
          <AnimatePresence>
            {currentImage === 1 && (
              <motion.div
                initial={{ left: '0%' }}
                animate={{ left: '100%' }}
                exit={{ left: '0%' }}
                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                className="absolute top-0 bottom-0 w-1 bg-[var(--secondary-gold)] z-20 shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                style={{ transform: 'translateX(-100%)' }}
              />
            )}
          </AnimatePresence>

          {/* Labels */}
          <div className="absolute top-6 left-8 z-30 pointer-events-none">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg"
            >
              <span className="text-[var(--secondary-gold)] font-bold tracking-widest text-xs uppercase">
                {currentImage === 0 ? 'Factory Finish' : 'Obigold Custom Wrap'}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4. Action Area (Buttons & Stats) */}
      <div className="relative z-30 mt-16 pb-20 flex flex-col items-center gap-12 w-full max-w-5xl px-6">

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(212, 175, 55, 0.4)" // Soft outer glow on hover
            }}
            whileTap={{ scale: 0.98 }}
            onClick={openModal}
            className="group relative overflow-hidden px-10 py-5 rounded-xl font-bold text-lg tracking-wider bg-[var(--secondary-gold)] text-black transition-all flex items-center gap-3 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          >
            {/* 1. Internal "Shine" Overlay (The sweep effect) */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-25 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />

            {/* 2. Pulsing Ambience Layer (Behind the text) */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"
            />

            {/* 3. Button Content */}
            <Calendar size={20} className="relative z-10" />
            <span className="relative z-10 uppercase">BOOK YOUR WRAP</span>

            {/* 4. Bottom Border Highlight (Metallic Edge) */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-obigold-gold-vibrant/30" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border-2 border-[var(--secondary-gold)]/50 text-[var(--secondary-gold)] px-10 py-5 rounded-xl font-bold text-lg hover:bg-[var(--secondary-gold)] border-[var(--secondary-gold)] hover:text-black transition-all duration-300"
          >
            VIEW GALLERY
          </motion.button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center border-t border-white/10 pt-12 w-full">
          {[
            { num: '100+', label: 'Vehicles Wrapped' },
            { num: '12+', label: 'Years Experience' },
            { num: '5yr', label: 'Warranty' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              // Hover Animation
              whileHover={{ y: -10 }} // Lifts the whole stat up
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex flex-col items-center group cursor-default"
            >
              {/* The Number - Adds a glow effect on hover */}
              <motion.div
                className="text-4xl lg:text-5xl font-black gold-gradient transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"
              >
                {stat.num}
              </motion.div>

              {/* The Label - Changes color/opacity on hover */}
              <motion.div
                className="text-xs text-white/50 font-bold tracking-widest uppercase mt-2 transition-colors duration-300 group-hover:text-white"
              >
                {stat.label}
              </motion.div>

              {/* Decorative underline that expands on hover */}
              <div className="w-0 h-[1px] bg-[var(--secondary-gold)] mt-2 transition-all duration-500 group-hover:w-12" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none opacity-40"
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </section>
  );
}