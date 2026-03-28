import { ChevronDown, Star } from 'lucide-react';

interface HeroProps {
  openModal?: () => void;
}

export default function Hero({ openModal }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center overflow-hidden pt-20"
style={{
        backgroundImage: "linear-gradient(rgba(10,10,10,0.4), rgba(10,10,10,0.8)), url('https://assets.ls-assets.com/provider/istock/2183603214.jpg?w=1920')",
      }}

    >
      <div className="max-w-6xl mx-auto px-6 text-center z-10 relative">


        {/* Main Headline */}
        <h1 className="mb-8 leading-none tracking-tighter">
          <span className="block text-6xl lg:text-7xl font-light text-white mb-2 uppercase tracking-widest">
            Wrap Your
          </span>
          <span className="gold-gradient block text-8xl lg:text-[11rem] font-black uppercase leading-[0.8] tracking-tighter">
            POWER
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Premium car wraps, detailing, and custom finishes that turn your vehicle into a head-turning statement of luxury
          and identity
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center mb-20">
          <button onClick={openModal}
            className="bg-obigold-gold-vibrant hover:bg-yellow-400 text-obigold-black px-12 py-6 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 group flex items-center gap-3">
            <span>Book Your Wrap</span>
<svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" d="m17 8-3 3-3-3" /></svg>
          </button>
          
className="border-2 border-[var(--primary-gold)] text-[var(--primary-gold)] px-12 py-6 rounded-xl font-bold text-xl hover:bg-[var(--primary-gold)] hover:text-black backdrop-blur-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 card-hover"
            VIEW GALLERY
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-12 text-center border-t border-obigold-gold/20 pt-16">
          <div className="group">
            <div className="text-5xl md:text-6xl font-black gold-gradient mb-2 group-hover:scale-110 transition-transform">
              100+
            </div>
            <div className="text-lg text-white/70 font-medium tracking-wide uppercase">
              Vehicles Wrapped
            </div>
          </div>
          
          <div className="group">
            <div className="text-5xl md:text-6xl font-black gold-gradient mb-2 group-hover:scale-110 transition-transform">
              12+
            </div>
            <div className="text-lg text-white/70 font-medium tracking-wide uppercase">
              Years Experience
            </div>
          </div>
          
          <div className="group">
            <div className="text-5xl md:text-6xl font-black gold-gradient mb-2 group-hover:scale-110 transition-transform">
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
