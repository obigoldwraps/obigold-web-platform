import React, { useEffect, useRef } from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import obigoldinsta from '../images/obigoldinsta.jpg';

const InstagramHandle = 'obigold_mobilewraps';

export default function SocialProof() {
  const taggboxRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.taggbox.com/embed.min.js';
    script.async = true;
    script.type = 'text/javascript';
    taggboxRef.current?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    /* 1. BACKGROUND UPDATE: Changed gradient from #818180 (Grey) to #000000 (Black) */
    <section
      id="social"
      className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-[#818180] from-5% to-[#000000] overflow-hidden"
    >

      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0 leading-[0] -mt-[1px] z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto transform scale-y-[1.05] origin-top">
          <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V100Z" fill="#0A0A0A" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-6 text-obigold-gold-vibrant uppercase tracking-tighter"
          >
            SOCIAL PROOF
          </motion.h2>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Join 100+ satisfied customers who've experienced the Obigold transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* 2. TAGGBOX MOBILE FIT: Updated aspect ratio and padding */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:order-2 w-full"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-2 md:p-6 shadow-2xl">
              <div
                ref={taggboxRef}
                /* Added min-h-[500px] for mobile and adjusted aspect ratio */
                className="taggbox w-full min-h-[500px] lg:h-[600px] rounded-2xl overflow-hidden"
                data-widget-id="321276"
                data-website="1"
              />
            </div>
          </motion.div>

          {/* Instagram Pic + About Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:order-1"
          >
            <div className="group">
              <img
                className="w-full rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500 mb-8 aspect-video object-cover"
                src={obigoldinsta}
                alt="Obigold Instagram"
              />

              <div className="text-left">
                <h3 className="text-3xl font-black mb-6 gold-gradient uppercase tracking-tight">
                  Follow the Journey
                </h3>
                <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
                  Obigold Wraps is Nigeria's premier vehicle transformation specialists.
                  From matte stealth to chrome deletes, our certified installers deliver flawless results.
                  <br /><br />
                  Join our community for daily transformations, tips, and exclusive offers.
                </p>

                <a href={`https://www.instagram.com/${InstagramHandle}`} target="_blank" rel="noopener noreferrer"
                  className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 bg-obigold-gold-vibrant text-obigold-black px-8 py-4 rounded-2xl font-black text-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)]"
                >
                  <span className="relative z-10 uppercase tracking-tighter flex items-center gap-2">
                    <Instagram className="w-6 h-6" />
                    Follow @{InstagramHandle}
                  </span>
                  <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}