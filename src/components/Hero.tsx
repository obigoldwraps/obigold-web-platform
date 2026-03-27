import { ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(28, 28, 28, 0.6) 100%), url('https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-4xl mx-auto text-center px-6 py-20 animate-fade-in">
        <div className="flex justify-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-obigold-gold fill-obigold-gold" />
          ))}
        </div>

        <h1 className="text-display font-heading text-obigold-white mb-6 leading-tight">
          WRAP YOUR <span className="text-obigold-gold">POWER</span>
        </h1>

        <p className="text-lg text-obigold-white/80 mb-4 max-w-2xl mx-auto">
          Not just a wrap. A transformation. Premium vehicle wrapping that turns heads and protects your investment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-obigold-gold text-obigold-black px-8 py-3 rounded font-semibold text-lg hover:bg-yellow-400 transition-colors">
            Book Your Wrap
          </button>
          <button className="border-2 border-obigold-gold text-obigold-gold px-8 py-3 rounded font-semibold text-lg hover:bg-obigold-gold/10 transition-colors">
            View Gallery
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 text-center mt-16 py-8 border-t border-obigold-gold/30">
          <div>
            <div className="text-3xl font-bold text-obigold-gold mb-2">500+</div>
            <div className="text-sm text-obigold-white/70">Transformations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-obigold-gold mb-2">10+</div>
            <div className="text-sm text-obigold-white/70">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-obigold-gold mb-2">4.9★</div>
            <div className="text-sm text-obigold-white/70">Customer Rating</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-obigold-gold" />
      </div>
    </section>
  );
}