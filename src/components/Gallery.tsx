import React from 'react';
import { Phone, Calendar, MessageCircle, ArrowRight } from 'lucide-react';

const transformations = [
  { 
    vehicle: 'Porsche Panamera', 
    wrap: 'Matte Stealth Edition', 
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  { 
    vehicle: 'Mercedes GLS', 
    wrap: 'Matte Stealth Edition', 
    img: 'https://images.unsplash.com/photo-1558618048-d480603e8684?auto=format&fit=crop&w=1000&q=80' 
  },
  { 
    vehicle: 'AMG GT-C', 
    wrap: 'Frozen Dark Grey', 
    img: 'https://images.unsplash.com/photo-1571896349840-e26b311f6f5d?auto=format&fit=crop&w=1000&q=80' 
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-32 px-4 md:px-8 bg-[#0A0A0A] overflow-hidden">
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 right-0 leading-[0] -mt-[2px] z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto transform scale-y-[1.1] origin-top">
          <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V100Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gold-gradient uppercase tracking-tighter">
            Recent Transformations
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Don't take our word for it. See what we're capable of.
          </p>
        </div>

        {/* The Grid Setup: 1 col on mobile, 2 cols on Laptop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[700px]">
          
          {transformations.map((item, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer border border-white/5 hover:border-obigold-gold/30 
                ${index === 0 ? 'lg:row-span-2 h-[500px] lg:h-full' : 'h-[300px] lg:h-full'}`}
            >
              {/* Image Layer */}
              <img 
                src={item.img}
                alt={item.vehicle}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />

              {/* SLIGHT GOLD GLOW LAYER (Radial) */}
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 
                bg-[radial-gradient(circle_at_bottom_left,rgba(255,215,0,0.2)_0%,transparent_60%)]" 
              />

              {/* Gradient Darkener */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />

              {/* Content Layer */}
              <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 lg:p-12">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {index === 0 && (
                    <span className="inline-block bg-obigold-gold-vibrant text-black text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4 tracking-tighter">
                      Featured
                    </span>
                  )}
                  <h4 className={`${index === 0 ? 'text-4xl' : 'text-2xl'} font-black text-white uppercase italic tracking-tighter mb-1`}>
                    {item.vehicle}
                  </h4>
                  <p className="text-obigold-gold-vibrant font-bold uppercase text-sm tracking-widest">
                    {item.wrap}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <a href="#" className="group relative inline-flex items-center gap-3 bg-obigold-gold-vibrant text-obigold-black px-12 py-6 rounded-2xl font-black text-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)]">
            <span className="relative z-10 uppercase tracking-tighter">See Full Gallery</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            
            {/* The Shine Animation for the Button */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
          </a>
        </div>
      </div>
    </section>
  );
}