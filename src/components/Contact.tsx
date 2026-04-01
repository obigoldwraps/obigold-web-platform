import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

interface ContactProps {
  openModal?: () => void;
}

export default function Contact({ openModal }: ContactProps) {
    return (
        <section id="contact" className="relative py-32 px-8 bg-[#E8C547] text-black">
            <div className="absolute top-0 left-0 right-0 leading-[0] -mt-[1px] z-10">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto transform scale-y-[1.05] origin-top">
                    <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V100Z" fill="#0A0A0A" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-20">
                <div className="max-w-7xl mx-auto text-center relative z-20 px-4">
                    <h2 className="text-[42px] leading-[1] md:text-6xl lg:text-7xl font-black mb-8 uppercase tracking-tighter">
                        {/* By using a block span on mobile, we force the break precisely */}
                        <span className="block md:inline">Ready to</span>{" "}
                        <span
                            className="block md:inline uppercase"
                            style={{
                                display: 'inline-block',
                                /* 1. The metallic gradient */
                                background: 'linear-gradient(to bottom, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',

                                /* 2. THE FIX: Clipping must come AFTER the background */
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',

                                /* 3. Make the internal text invisible so the background shows through */
                                WebkitTextFillColor: 'transparent',
                                color: 'transparent',

                                /* 4. The Sharp Stroke */
                                WebkitTextStroke: '1.2px #000000',

                                /* 5. Prevent the 'box' from showing */
                                backgroundColor: 'transparent'
                            }}
                        >
                            Transform?
                        </span>
                    </h2>
                </div>
                <p className="text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
                    Your dream wrap is one consultation away. Schedule today and see your vision come to life.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* 1. CALL NOW - The Gold Shining Effect */}
                    <a
                        href="tel:+2348132244382"
                        className="group relative overflow-hidden bg-obigold-gold-vibrant text-obigold-black px-10 py-8 rounded-2xl font-bold flex flex-col items-center gap-4 hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.6)]"
                    >
                        <Phone className="w-12 h-12 relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
                        <div className="text-center relative z-10">
                            <div className="font-black text-2xl tracking-tight">+234 813 224 4382</div>
                            <div className="opacity-90 text-sm uppercase tracking-widest font-semibold mt-1">Call Now</div>
                        </div>
                        {/* Moving Shine Effect */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                    </a>

                    {/* 2. BOOK NOW - Remains Premium Dark */}
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); openModal?.(); }}
                        className="group bg-[#0A0A0A] text-white px-10 py-8 rounded-2xl font-bold flex flex-col items-center gap-4 hover:scale-105 transition-all duration-300 border border-white/10 shadow-2xl"
                    >
                        <Calendar className="w-12 h-12 text-obigold-gold-vibrant group-hover:-translate-y-1 transition-transform duration-300" />
                        <div className="text-center">
                            <div className="font-black text-2xl tracking-tight">Book Now</div>
                            <div className="text-obigold-gold-vibrant opacity-90 text-sm uppercase tracking-widest font-semibold mt-1">Free Consultation</div>
                        </div>
                    </a>

                    {/* 3. WHATSAPP - Color Inversion Effect */}
                    <a
                        href="https://wa.me/2348132244832"
                        className="group bg-[#0A0A0A] text-white hover:bg-white hover:text-black px-10 py-8 rounded-2xl font-bold flex flex-col items-center gap-4 hover:scale-105 transition-all duration-500 border border-white/10 shadow-2xl"
                    >
                        <MessageCircle className="w-12 h-12 text-obigold-gold-vibrant group-hover:text-green-600 transition-colors duration-500 group-hover:-translate-y-1 transition-transform" />
                        <div className="text-center">
                            <div className="font-black text-2xl tracking-tight">WhatsApp</div>
                            <div className="text-obigold-gold-vibrant group-hover:text-black opacity-90 text-sm uppercase tracking-widest font-semibold mt-1 transition-colors duration-500">Instant Chat</div>
                        </div>
                    </a>
                </div>

                <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 max-w-3xl mx-auto">
                    <p className="text-xl text-black">
                        <span className="font-bold text-2xl">🎁 LIMITED TIME:</span><br />
                        Book within 48hrs and receive complimentary full-detail prep (₦50,000 value)
                    </p>
                </div>
            </div>
        </section>
    );
}

