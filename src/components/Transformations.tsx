import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Images (Ensure these paths are correct in your /src folder)
import gle63satin from '../images/gle63satin.png';
import gleblack from '../images/gleblack.png';
import rx350blue from '../images/rx350blue.png';
import lexgrey from '../images/lexgrey.png';
import camarogreen from '../images/camarogreen.png';
import camaroblack from '../images/camaroblack.png';

const transformations = [
  {
    vehicle: 'Mercedes-AMG GLE53',
    wrap: 'Satin Metallic Orange',
    before: gleblack,
    after: gle63satin,
    featured: true
  },
  {
    vehicle: 'Lexus RX 350',
    wrap: 'Racing Blue Edition',
    before: lexgrey,
    after: rx350blue,
  },
  {
    vehicle: 'Chevrolet Camaro',
    wrap: 'Viper Green',
    before: camaroblack,
    after: camarogreen,
  },
];

export default function Transformations() {
  const [selected, setSelected] = useState<null | typeof transformations[0]>(null);
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    let interval: any; // Using 'any' for the timer ID to avoid environment conflicts
    if (selected) {
      // 1. Initial delay to let 'Before' image settle (Increase this to see 'Before' longer)
      const initialTimeout = setTimeout(() => setShowAfter(true), 1500);

      // 2. Set up the ping-pong loop
      interval = setInterval(() => {
        setShowAfter((prev) => !prev);
      }, 4500);

      return () => {
        clearTimeout(initialTimeout);
        clearInterval(interval);
      };
    } else {
      setShowAfter(false);
    }
  }, [selected]);

  return (
    <section id="transformations" className="relative py-20 px-4 md:px-8 bg-[#0A0A0A] overflow-hidden">

      {/* 1. TOP WAVE: Adjusted for perfect mobile alignment */}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] z-50">
        <svg
          viewBox="0 0 1440 100"
          /* 1. preserveAspectRatio="none" is key for mobile smoothness */
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          /* 2. Added 'scale-110' and 'origin-top' to ensure no gaps are visible on mobile */
          className="relative block w-full h-[60px] md:h-[120px] transform scale-x-[1.05] origin-top"
        >
          <path
            /* 3. This path is slightly modified to 'bleed' into the black for a smoother cut */
            d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V100Z"
            fill="white"
          />
        </svg>
      </div>

      {/* 1. Header Added Back for context */}
      <div className="relative z-20 max-w-7xl mx-auto mb-20 text-center pt-16 md:pt-24">

        {/* 2. Changed text size to 4xl for mobile and 6xl for desktop */}
        <h2 className="text-[32px] md:text-6xl font-black mb-6 gold-chrome-text uppercase tracking-tighter leading-none">
          TRANSFORMATIONS
        </h2>

        <p className="text-sm md:text-xl text-white/50 max-w-2xl mx-auto italic px-4">
          Witness the shift from factory to custom excellence.
        </p>
      </div>

      {/* 2. Grid Layout (1 Big, 2 Small) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[600px] relative z-20">
        {transformations.map((item, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            onClick={() => setSelected(item)}
            initial="rest"
            whileHover="hover"
            animate="rest"
            // 1. Added 'flex' and 'items-stretch' to force children to fill the height
            className={`group relative overflow-hidden rounded-3xl cursor-pointer border border-white/5 flex items-stretch 
    ${index === 0 ? 'lg:col-span-1 lg:row-span-2 h-[450px] lg:h-full' : 'h-[280px]'}`}
          >
            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              // 2. Force the motion wrapper to be 100% height and width
              className="absolute inset-0 w-full h-full"
            >
              <LazyLoadImage
                // 3. This is the "Magic" prop for the library to fill the container
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover"
                effect="blur"
                src={item.after}
                alt={item.vehicle}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent z-20" />

            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
              <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter">{item.vehicle}</h4>
              <p className="text-obigold-gold-vibrant font-bold uppercase text-xs tracking-widest">{item.wrap}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. FULL SCREEN DYNAMIC MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-4 md:p-12 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-8 right-8 z-[110] text-white/40 hover:text-[var(--secondary-gold)] transition-all hover:scale-110"
            >
              <X size={48} strokeWidth={1} />
            </button>

            <div className="relative w-full max-w-7xl aspect-[16/9] md:aspect-video rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,1)] border border-white/5">

              {/* FACTORY IMAGE */}
              <img
                src={selected.before}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Factory Finish"
              />

              {/* CUSTOM WRAP IMAGE (The Wipe) */}
              <motion.img
                src={selected.after}
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{
                  clipPath: showAfter ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)'
                }}
                transition={{
                  duration: 2.2,
                  ease: [0.65, 0, 0.35, 1]
                }}
                className="absolute inset-0 w-full h-full object-cover z-10"
                alt="Custom Wrap"
              />

              {/* THE GOLD BLADE */}
              <motion.div
                initial={{ left: '0%' }}
                animate={{ left: showAfter ? '100%' : '0%' }}
                transition={{
                  duration: 2.2,
                  ease: [0.65, 0, 0.35, 1]
                }}
                className="absolute top-0 bottom-0 w-[3px] bg-[var(--secondary-gold)] z-20 shadow-[0_0_40px_#D4AF37,0_0_10px_#D4AF37]"
                style={{ transform: 'translateX(-50%)' }}
              />

              {/* DYNAMIC LABELS */}
              <div className="absolute top-10 left-10 z-30 flex flex-col gap-4">
                <motion.div
                  animate={{ opacity: showAfter ? 1 : 0.5, scale: showAfter ? 1.05 : 1 }}
                  className={`px-4 py-1 rounded-full border text-[10px] font-black tracking-[0.2em] uppercase transition-colors ${showAfter ? 'bg-[var(--secondary-gold)] text-black border-transparent' : 'text-white border-white/20'}`}
                >
                  {showAfter ? 'Obigold Wrap' : 'Original Paint'}
                </motion.div>

                <h3 className="text-2xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-2xl">
                  {selected.vehicle}
                </h3>
              </div>

              {/* BOTTOM STRIP */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
            </div>
          </motion.div> /* THIS WAS THE MISSING CLOSING TAG */
        )}
      </AnimatePresence>
    </section>
  );
}