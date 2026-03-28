import { ChevronDown } from 'lucide-react';

interface HeroProps {
  openModal?: () => void;
}

export default function Hero({ openModal }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-[120vh] flex items-center justify-center text-center overflow-hidden pt-20"
      style={{
        backgroundImage: "linear-gradient(rgba(10,10,10,0.4), rgba(10,10,10,0.8)), url('https://assets.ls-assets.com/provider/istock/2183603214.jpg?w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-cover bg-center"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <br />
        <br />

        {/* Main Headline */}
        <h1 className="mb-8 leading-none tracking-tighter select-none">
          {/* The thin, elegant intro text */}
          <span className="block text-4xl lg:text-5xl font-extralight text-white/70 mb-2 uppercase tracking-[0.4em] animate-fade-in">
            Wrap Your
          </span>
          
          {/* The heavy, chrome centerpiece */}
          <span 
            className="gold-chrome-text block text-7xl lg:text-[8.5rem] font-bold uppercase leading-[0.8] tracking-[-0.05em] animate-slide-up"
            style={{ fontFamily: "'Syncopate', sans-serif" }}
          >
            POWER
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Premium car wraps, detailing, and custom finishes that turn your vehicle into a head-turning statement of luxury and identity
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center mb-20">
          <button 
            type="button"
            onClick={openModal}
            className="group relative overflow-hidden px-12 py-6 rounded-xl font-bold text-xl tracking-wider bg-[var(--secondary-gold)] text-black transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.6),0_0_60px_rgba(212,175,55,0.3)] hover:-translate-y-2 flex items-center gap-3"
          >
            <span className="relative z-10">Book Your Wrap</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" d="m17 8-3 3-3-3" />
            </svg>

            <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-25 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
          </button>

          <button className="border-2 border-[var(--primary-gold)] text-[var(--primary-gold)] px-12 py-6 rounded-xl font-bold text-xl hover:bg-[var(--primary-gold)] hover:text-black backdrop-blur-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 card-hover">
            VIEW GALLERY
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-12 text-center border-t border-[var(--primary-gold)]/20 pt-16">
          <div className="group">
            <div className="text-5xl md:text-6xl font-black gold-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
              100+
            </div>
            <div className="text-lg text-white/70 font-medium tracking-wide uppercase">
              Vehicles Wrapped
            </div>
          </div>
          
          <div className="group">
            <div className="text-5xl md:text-6xl font-black gold-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
              12+
            </div>
            <div className="text-lg text-white/70 font-medium tracking-wide uppercase">
              Years Experience
            </div>
          </div>
          
          <div className="group">
            <div className="text-5xl md:text-6xl font-black gold-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
              5yr
            </div>
            <div className="text-lg text-white/70 font-medium tracking-wide uppercase">
              Warranty
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white/60 hover:text-white transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

