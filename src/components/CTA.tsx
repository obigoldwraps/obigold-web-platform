import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-obigold-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-display font-heading text-obigold-white mb-4">
          READY TO <span className="text-obigold-gold">TURN HEADS?</span>
        </h2>

        <p className="text-lg text-obigold-white/70 mb-12 max-w-2xl mx-auto">
          Transform your vehicle into a head-turning masterpiece. Book your premium wrap consultation today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button className="bg-obigold-gold text-obigold-black px-8 py-4 rounded font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5" />
            Book Now
          </button>

          <button className="border-2 border-obigold-gold text-obigold-gold px-8 py-4 rounded font-semibold text-lg hover:bg-obigold-gold/10 transition-colors flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            (555) 123-4567
          </button>

          <button className="border-2 border-obigold-gold text-obigold-gold px-8 py-4 rounded font-semibold text-lg hover:bg-obigold-gold/10 transition-colors flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </button>
        </div>

        <div className="bg-obigold-black/50 border border-obigold-gold/30 rounded-lg p-6">
          <p className="text-obigold-white/70 text-sm">
            <span className="text-obigold-gold font-semibold">Limited Time Offer:</span> Book within 7 days and receive 15% off your first wrap!
          </p>
        </div>
      </div>
    </section>
  );
}