import React from 'react';
import CompareImage from 'react-compare-image';
import { ChevronDown, Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface BeforeAfterHeroProps {
  openModal?: () => void;
}

export default function BeforeAfterHero({ openModal }: BeforeAfterHeroProps) {
  // Stock images (same angle luxury cars for demo)
  const beforeImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80';
  const afterImage = 'https://images.unsplash.com/photo-1558618048-d480603e8684?auto=format&fit=crop&w=1920&q=80';

  return (
    <section 
      id="home" 
      className="relative min-h-[120vh] flex items-center justify-center text-center overflow-hidden pt-20"
    >
      {/* Vignette Overlay (dark edges, center bright) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-black/40 
                      bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10" />

      {/* Before/After Slider */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 h-[70vh] md:h-[80vh] max-h-[600px]">
        <CompareImage 
          leftImage={beforeImage}
          leftLabel="Before"
          rightImage={afterImage}
          rightLabel="Obigold Wrapped"
          containerStyles={{
            width: '100%',
            height: '100%',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
          }}
          sliderLineStyles={{
            width: '4px',
            backgroundColor: '#FFD700',
            borderRadius: '2px',
            boxShadow: '0 0 10px rgba(255,215,0,0.8)'
          }}
          sliderHandleStyles={{
            width: '48px',
            height: '48px',
            backgroundColor: '#FFD700',
            opacity: '0.9',
            borderRadius: '50%',
            cursor: 'ew-resize',
            boxShadow: '0 8px 25px rgba(255,215,0,0.6)',
            border: '3px solid white'
          }}
        />
      </div>

      {/* Hero Text Overlay - Scaled down 20%, top-center, high z */}
      <div className="absolute z-30 top-24 left-1/2 -translate-x-1/2 md:top-32 max-w-4xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="leading-none tracking-tighter select-none"
        >
          <span className="block text-3xl lg:text-4xl xl:text-5xl font-extralight text-white/80 mb-2 uppercase tracking-[0.3em]">
            Wrap Your
          </span>
          <span 
            className="gold-chrome-text block text-[4rem] lg:text-6xl xl:text-7xl font-bold uppercase leading-[0.8] tracking-[-0.03em]"
            style={{ fontFamily: "'Syncopate', sans-serif" }}
          >
            POWER
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg lg:text-xl text-white/90 mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the Obigold difference - premium wraps that transform ordinary vehicles into extraordinary statements.
        </motion.p>
      </div>

      {/* CTAs */}
      <div className="absolute z-30 bottom-20 left-1/2 -translate-x-1/2 flex flex-col lg:flex-row gap-6">
        <motion.button 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          type="button"
          onClick={openModal}
          className="group relative overflow-hidden px-12 py-6 rounded-xl font-bold text-xl tracking-wider bg-[var(--secondary-gold)] text-black transition-all duration-500 flex items-center gap-3 justify-center"
        >
          <span className="relative z-10">Book Your Wrap</span>
          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" d="m17 8-3 3-3-3" />
          </svg>
          <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-25 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
        </motion.button>

        <motion.button 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="border-2 border-[var(--secondary-gold)] text-[var(--secondary-gold)] px-12 py-6 rounded-xl font-bold text-xl hover:bg-[var(--secondary-gold)] hover:text-black backdrop-blur-sm hover:shadow-2xl transition-all duration-500 card-hover"
        >
          VIEW GALLERY
        </motion.button>
      </div>

      {/* Stats Grid - Bottom */}
      <div className="absolute z-30 bottom-28 lg:bottom-32 left-1/2 -translate-x-1/2 grid grid-cols-3 gap-8 text-center border-t border-[var(--primary-gold)]/20 pt-8 px-6 max-w-4xl w-full">
        {[
          { num: '100+', label: 'Vehicles Wrapped' },
          { num: '12+', label: 'Years Experience' },
          { num: '5yr', label: 'Warranty' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
            className="group"
          >
            <div className="text-4xl lg:text-5xl font-black gold-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.num}
            </div>
            <div className="text-base text-white/70 font-medium tracking-wide uppercase text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-all duration-300 cursor-pointer" size={32} strokeWidth={2} />
      </motion.div>
    </section>
  );
}

