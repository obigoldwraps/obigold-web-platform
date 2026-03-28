import React from 'react';
import LazyLoad from 'react-lazy-load-image-component';
import { ArrowRight, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const InstagramHandle = 'obigold_mobilewraps';

export default function SocialProof() {
  const instagramUrl = `https://www.instagram.com/${InstagramHandle}/embed`;

  return (
    <section id="social" className="relative py-32 px-8 bg-gradient-to-b from-[#0A0A0A] to-[#1C1C1C] overflow-hidden">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0 leading-[0] -mt-[1px] z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto transform scale-y-[1.05] origin-top">
          <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V100Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-6 gold-gradient uppercase tracking-tighter"
          >
            SOCIAL PROOF
          </motion.h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Join 100+ satisfied customers who've experienced the Obigold transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Instagram Feed Embed */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:order-2"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 lg:p-8 shadow-2xl">
              <iframe 
                className="w-full aspect-video rounded-2xl shadow-xl"
                src={`https://www.instagram.com/p/C_recent_post/embed`} // Replace with latest post or use widget
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                title="Instagram Feed"
              />
              {/* Fallback Embed Script - User can replace */}
              <div className="mt-4 text-center">
                <Instagram className="w-12 h-12 text-[var(--secondary-gold)] mx-auto mb-4" />
                <p className="text-sm text-white/70">@obigold_mobilewraps</p>
              </div>
            </div>
          </motion.div>

          {/* Instagram Pic + About Us */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:order-1"
          >
            <div className="group">
              {/* Lazy Instagram Profile Pic Placeholder */}
              <LazyLoad 
                className="w-full rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500 mb-8"
                effect="blur"
                width="100%"
                height="400"
                src="https://images.unsplash.com/photo-1616486022459-8cdca0991254?auto=format&fit=crop&w=800&q=80" // Stock luxury car gallery
                alt="Obigold Instagram"
                placeholderSrc="https://images.unsplash.com/photo-1616486022459-8cdca0991254?auto=format&fit=crop&w=800&q=10"
              />
              <div className="text-left">
                <h3 className="text-3xl font-black mb-6 gold-gradient uppercase tracking-tight">
                  Follow the Journey
                </h3>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  Obigold Wraps is Dubai's premier vehicle transformation specialists. 
                  From matte stealth to chrome deletes, our certified installers deliver flawless results.
                  <br /><br />
                  Join our 20k+ community for daily transformations, tips, and exclusive offers.
                </p>
                <a href={`https://www.instagram.com/${InstagramHandle}`} target="_blank" rel="noopener noreferrer" 
                   className="group relative inline-flex items-center gap-3 bg-obigold-gold-vibrant text-obigold-black px-8 py-4 rounded-2xl font-black text-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)]"
                >
                  <span className="relative z-10 uppercase tracking-tighter flex items-center gap-2">
                    <Instagram className="w-6 h-6" />
                    Follow @obigold_mobilewraps
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

