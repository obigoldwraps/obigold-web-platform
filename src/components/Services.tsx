import React from 'react';
import { Check, Palette, Shield, CarFront } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-32 px-8 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-black mb-6 text-gray-900 tracking-tighter uppercase">PREMIUM SERVICES</h2>
          <div className="w-32 h-1 bg-[var(--primary-gold)] mx-auto mb-12"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every vehicle is unique. Our master installers craft bespoke solutions with precision and artistry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-3xl bg-black min-h-[500px] flex flex-col justify-end p-8 shadow-2xl transition-all duration-500 card-hover">
            <img 
              src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80"
              alt="Color Change Wrap"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

            <div className="relative z-20">
              <div className="w-16 h-16 bg-[var(--primary-gold)] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Palette className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">COLOR CHANGE</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Over 1,000 premium vinyl films from 3M and Avery. Matte, satin, and chrome specialty finishes.
              </p>
              <ul className="space-y-2 text-gray-300 mb-8 text-sm">
                <li className="flex items-center"><Check className="w-4 h-4 text-[var(--primary-gold)] mr-2 flex-shrink-0" />Full vehicle coverage</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-[var(--primary-gold)] mr-2 flex-shrink-0" />Multi-layer designs</li>
              </ul>
              <a href="#" className="inline-block w-full text-center bg-[var(--primary-gold)] text-black py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-black min-h-[500px] flex flex-col justify-end p-8 shadow-2xl transition-all duration-500 card-hover">
            <img 
              src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80"
              alt="Paint Protection Film"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

            <div className="relative z-20">
              <div className="w-16 h-16 bg-[var(--primary-gold)] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">PAINT PROTECTION</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Self-healing PPF that safeguards your OEM paint while remaining completely invisible.
              </p>
              <ul className="space-y-2 text-gray-300 mb-8 text-sm">
                <li className="flex items-center"><Check className="w-4 h-4 text-[var(--primary-gold)] mr-2 flex-shrink-0" />XPEL Ultimate Plus</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-[var(--primary-gold)] mr-2 flex-shrink-0" />Track proven durability</li>
              </ul>
              <a href="#" className="inline-block w-full text-center bg-[var(--primary-gold)] text-black py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-black min-h-[500px] flex flex-col justify-end p-8 shadow-2xl transition-all duration-500 card-hover">
            <img 
              src="https://images.unsplash.com/photo-1599256621730-53517128e28e?auto=format&fit=crop&w=800&q=80"
              alt="Ceramic Coating"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

            <div className="relative z-20">
              <div className="w-16 h-16 bg-[var(--primary-gold)] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <CarFront className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">CERAMIC COATING</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                9H coatings with unmatched hydrophobicity, UV protection, and mirror-like gloss.
              </p>
              <ul className="space-y-2 text-gray-300 mb-8 text-sm">
                <li className="flex items-center"><Check className="w-4 h-4 text-[var(--primary-gold)] mr-2 flex-shrink-0" />5+ Year Warranty</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-[var(--primary-gold)] mr-2 flex-shrink-0" />Mirror-like shine</li>
              </ul>
              <a href="#" className="inline-block w-full text-center bg-[var(--primary-gold)] text-black py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
