import { ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3) 0%, rgba(255, 119, 198, 0.3) 50%, rgba(0, 0, 0, 0.8) 100%), 
                          linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(28, 28, 28, 0.8) 100%), 
                          url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
      }}
    >
      <div className="container mx-auto px-6 text-center z-10 relative animate-fade-in">
        {/* 5 Star Rating */}
        <div className="flex justify-center gap-1 mb-12">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-7 h-7 text-yellow-400 fill-current" viewBox="0 0 24 24">
              <path d="M12 .587l3.668 7.428 8.332 1.151-6 5.958a.75.75 0 01-1.116.858L12 13.987l-6.884 3.952a.75.75 0 01-1.116-.858l-6-5.958L8.332 8.165z"/>
            </svg>
          ))}
        </div>

        {/* Main Headline */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tight">
          LANDING
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">SITE.AI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Build and edit websites by chatting with AI. 
          No coding required — just tell it what you want, 
          and watch your site update instantly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
          <button className="group bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3">
            <span>GET STARTED</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <button className="border-2 border-white/30 text-white/90 px-12 py-6 rounded-2xl font-bold text-xl backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105">
            WATCH DEMO
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-white/20 pt-16">
          <div className="group">
            <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text mb-2 group-hover:scale-110 transition-transform">
              10K
            </div>
            <div className="text-lg text-white/70 font-medium tracking-wide uppercase">
              Websites Live
            </div>
          </div>
          
          <div className="group">
            <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text mb-2 group-hover:scale-110 transition-transform">
              99.9%
            </div>
            <div className="text-lg text-white/70 font-medium tracking-wide uppercase">
              Uptime
            </div>
          </div>
          
          <div className="group">
            <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text mb-2 group-hover:scale-110 transition-transform">
              4.9⭐
            </div>
            <div className="text-lg text-white/70 font-medium tracking-wide uppercase">
              Rating
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-10 h-10 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <div className="opacity-0 translate-y-8 animate-[fade-in_1s_ease-out_forwards]" 
        style={{
          animation: 'fade-in 1s ease-out forwards'
        }}
      /> 
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
