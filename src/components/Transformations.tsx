import React from 'react';
import { ArrowRight } from 'lucide-react';
import LazyLoad from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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

export default function Transformations() {
  return (
    <section id="transformations" className="relative py-32 px-4 md:px-8 bg-[#0A0A0A] overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 leading-[0] -mt-[2px] z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto transform scale-y-[1.1] origin-top">
          <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V100Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gold-gradient uppercase tracking-tighter">
            TRANSFORMATIONS
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            High-speed images of real Obigold transformations.
          </p>
        </div>

        {/* Optimized Grid: 1 Big, 2 Small */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[600px]">
          {transformations.map((item, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer border border-white/5 hover:border-obigold-gold/30 
                ${index === 0 ? 'lg:col-span-1 lg:row-span-2 h-[450px] lg:h-full' : 'h-[280px]'}`}
            >
              {/* Lazy Load Image with Blur Effect */}
              <LazyLoad
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                effect="blur"
                width={item.img.split('w=')[1]?.split('&')[0] || '100%'}
                height="100%"
                src={item.img}
                alt={`${item.vehicle} - ${item.wrap}`}
                placeholderSrc={item.img + '&q=10'} // Low quality placeholder
              />

              {/* Gold Glow Layer */}
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 
                bg-[radial-gradient(circle_at_bottom_left,rgba(255,215,0,0.25)_0%,transparent_50%)]" 
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20" />

              {/* Content */}
              <div className="absolute inset-0 z-30 flex flex-col justify-end p-8 lg:p-12">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  {index === 0 && (
                    <span className="inline-block bg-obigold-gold-vibrant text-black text-[10px] font-black uppercase px-3 py-1 rounded-full mb-4 tracking-tighter">
                      Featured
                    </span>
                  )}
                  <h4 className={`${index === 0 ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'} font-black text-white uppercase italic tracking-tighter mb-1`}>
                    {item.vehicle}
                  </h4>
                  <p className="text-obigold-gold-vibrant font-bold uppercase text-sm lg:text-base tracking-widest">
                    {item.wrap}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

