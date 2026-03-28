import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-8 bg-[#D4AF37] text-black">
      <div className="absolute top-0 left-0 right-0 leading-[0] -mt-[1px] z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto transform scale-y-[1.05] origin-top">
          <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V100Z" fill="#0A0A0A" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-20">
        <h2 className="text-6xl font-black mb-8 uppercase tracking-tighter">READY TO <br className="md:hidden" /> TRANSFORM?</h2>
        <p className="text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
          Your dream wrap is one consultation away. Schedule today and see your vision come to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <a href="tel:+15551234567" className="group bg-[#0A0A0A] text-white hover:bg-black px-10 py-8 rounded-2xl font-bold flex flex-col items-center gap-4 hover:scale-105 transition-all duration-300 border border-white/10 shadow-2xl card-hover">
            <Phone className="w-12 h-12 text-[var(--primary-gold)] group-hover:-translate-y-1 transition-transform duration-300" />
            <div className="text-center">
              <div className="font-black text-2xl tracking-tight">(555) 123-4567</div>
              <div className="text-[var(--primary-gold)] opacity-90 text-sm uppercase tracking-widest font-semibold mt-1">Call Now</div>
            </div>
          </a>

          <a href="#" className="group bg-[#0A0A0A] text-white hover:bg-black px-10 py-8 rounded-2xl font-bold flex flex-col items-center gap-4 hover:scale-105 transition-all duration-300 border border-white/10 shadow-2xl card-hover">
            <Calendar className="w-12 h-12 text-[var(--primary-gold)] group-hover:-translate-y-1 transition-transform duration-300" />
            <div className="text-center">
              <div className="font-black text-2xl tracking-tight">Book Now</div>
              <div className="text-[var(--primary-gold)] opacity-90 text-sm uppercase tracking-widest font-semibold mt-1">Free Consultation</div>
            </div>
          </a>

          <a href="#" className="group bg-[#0A0A0A] text-white hover:bg-black px-10 py-8 rounded-2xl font-bold flex flex-col items-center gap-4 hover:scale-105 transition-all duration-300 border border-white/10 shadow-2xl card-hover">
            <MessageCircle className="w-12 h-12 text-[var(--primary-gold)] group-hover:-translate-y-1 transition-transform duration-300" />
            <div className="text-center">
              <div className="font-black text-2xl tracking-tight">WhatsApp</div>
              <div className="text-[var(--primary-gold)] opacity-90 text-sm uppercase tracking-widest font-semibold mt-1">Instant Chat</div>
            </div>
          </a>
        </div>

        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-xl text-black">
            <span className="font-bold text-2xl">🎁 LIMITED TIME:</span><br />
            Book within 48hrs and receive complimentary full-detail prep ($750 value)
          </p>
        </div>
      </div>
    </section>
  );
}

