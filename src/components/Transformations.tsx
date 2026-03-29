import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Images
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
    let interval: number;
    if (selected) {
      // 1. Initial delay to let 'Before' image settle
      const initialTimeout = setTimeout(() => setShowAfter(true), 800);

      // 2. Set up the ping-pong loop every 4 seconds
      interval = setInterval(() => {
        setShowAfter((prev) => !prev);
      }, 4000);

      return () => {
        clearTimeout(initialTimeout);
        clearInterval(interval);
      };
    } else {
      setShowAfter(false);
    }
  }, [selected]);

  return (
    <section id="transformations" className="relative py-32 px-4 md:px-8 bg-[#0A0A0A] overflow-hidden">

      {/* 2. Grid Layout (1 Big, 2 Small) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[600px]">
        {transformations.map((item, index) => (
          <motion.div
            key={index}
            layoutId={`card-${index}`}
            onClick={() => setSelected(item)}
            className={`group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer border border-white/5 hover:border-[var(--secondary-gold)]/30 
                ${index === 0 ? 'lg:col-span-1 lg:row-span-2 h-[450px] lg:h-full' : 'h-[280px]'}`}
          >
            <LazyLoadImage
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              effect="blur"
              src={item.after}
              alt={item.vehicle}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent z-20" />

            <div className="absolute inset-0 z-30 flex flex-col justify-end p-8">
              <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter">{item.vehicle}</h4>
              <p className="text-[var(--secondary-gold)] font-bold uppercase text-xs tracking-widest">{item.wrap}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULL SCREEN DYNAMIC MODAL */}
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

          {/* 1. FACTORY IMAGE (Always loaded first) */}
          <img
            src={selected.before}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Factory Finish"
          />

          {/* 2. CUSTOM WRAP IMAGE (The Wipe) */}
          <motion.img
            src={selected.after}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{
              clipPath: showAfter ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)'
            }}
            transition={{
              duration: 2.2,
              ease: [0.65, 0, 0.35, 1] // Custom cubic-bezier for a "heavy" luxury slide
            }}
            className="absolute inset-0 w-full h-full object-cover z-10"
            alt="Custom Wrap"
          />

          {/* 3. THE GOLD BLADE (Leading Edge) */}
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

          {/* 4. DYNAMIC LABELS */}
          <div className="absolute top-10 left-10 z-30 flex flex-col gap-4">
            <motion.div
              animate={{ opacity: showAfter ? 1 : 0.5, scale: showAfter ? 1.05 : 1 }}
              className={`px-4 py-1 rounded-full border text-[10px] font-black tracking-[0.2em] uppercase transition-colors ${showAfter ? 'bg-[var(--secondary-gold)] text-black border-transparent' : 'text-white border-white/20'}`}
            >
              {showAfter ? 'Obigold Wrap' : 'Original Paint'}
            </motion.div>

            <h3 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-2xl">
              {selected.vehicle}
            </h3>
          </div>

          {/* BOTTOM STRIP */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
