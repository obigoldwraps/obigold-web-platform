import React, { useEffect } from 'react'; // Added useEffect
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Import Link
import GalleryModal from './GalleryModal';

import dodge from '../images/dodge.png';
import c45tint from '../images/c450tint1.png';
import gle63satin from '../images/gle63satin.png';
import rx350blue from '../images/rx350blue.png';
import camarogreen from '../images/camarogreen.png';
import brabus from '../images/brabus.png';
// Extra 6
import gle63purple from '../images/gle63_purple.png';
import gle63white from '../images/gle63_white.png';
import camaroBlack from '../images/camaroblack.png';
import lexGrey from '../images/lexgrey.png';
import gleBlack from '../images/gleblack.png';
import ceramic from '../images/ceramic.png';

const transformations = [
  {
    vehicle: 'Mercedes-AMG GLE53',
    wrap: 'Satin Metallic Orange',
    img: gle63satin,
    featured: true
  },
  {
    vehicle: 'Lexus RX 350',
    wrap: 'Racing Blue Edition',
    img: rx350blue,
  },
  {
    vehicle: 'Chevrolet Camaro',
    wrap: 'Viper Green',
    img: camarogreen,
  },
  {
    vehicle: 'Mercedes G63 Brabus',
    wrap: 'Ceramic Tint Edition',
    img: brabus
  },
  {
    vehicle: 'Mercedes C450 AMG',
    wrap: 'Headlight Tint',
    img: c45tint,
  },
  {
    vehicle: 'Dodge Challenger',
    wrap: 'PPF + Ceramic',
    img: dodge,
  },
  // Extra 6
  {
    vehicle: 'Mercedes GLE63',
    wrap: 'Purple Satin',
    img: gle63purple,
  },
  {
    vehicle: 'Mercedes GLE63',
    wrap: 'Pearl White',
    img: gle63white,
  },
  {
    vehicle: 'Chevrolet Camaro',
    wrap: 'Matte Black',
    img: camaroBlack,
  },
  {
    vehicle: 'Lexus RX',
    wrap: 'Storm Grey',
    img: lexGrey,
  },
  {
    vehicle: 'Mercedes GLE',
    wrap: 'Gloss Black',
    img: gleBlack,
  },
  {
    vehicle: 'Universal',
    wrap: 'Ceramic Coating',
    img: ceramic,
  },
];

interface GalleryFullProps {
  openModal: (item: { vehicle: string; wrap: string; img: string }) => void;
}

export default function GalleryFull({ openModal }: GalleryFullProps) {
  return (
    <>
      <section className="min-h-screen py-32 px-4 md:px-8 bg-[#0A0A0A] overflow-hidden relative">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 right-0 leading-[0] -mt-[2px] z-10">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto transform scale-y-[1.1] origin-top">
            <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V100Z" fill="#0A0A0A" />
          </svg>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 newgold-gradient uppercase tracking-tighter">
              FULL GALLERY
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Our complete portfolio. Click any transformation for fullscreen view.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformations.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer border border-white/5 hover:border-obigold-gold/50 hover:shadow-[0_20px_40px_rgba(255,215,0,0.2)]"
                style={{ height: '350px' }}
                onClick={() => openModal(item)}
              >
                <div className="absolute inset-0 group-hover:bg-[radial-gradient(circle,rgba(255,215,0,0.1)_0%,transparent_70%)] transition-all duration-500" />
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-100 group-hover:brightness-110"
                  src={item.img}
                  alt={item.vehicle}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-20" />
                <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 md:p-8">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                    <h4 className="text-xl md:text-2xl lg:text-3xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-lg">
                      {item.vehicle}
                    </h4>
                    <p className="text-obigold-gold-vibrant font-bold uppercase text-sm md:text-base tracking-widest drop-shadow-md">
                      {item.wrap}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Home */}
          <div className="flex justify-center mt-24">
            <a
              href="/"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white px-16 py-8 rounded-3xl font-black text-xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <span className="uppercase tracking-tighter">Back to Home</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

