import { Shield, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-obigold-black border-t border-obigold-grey">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-obigold-gold" />
              <span className="text-lg font-heading text-obigold-white">OBIGOLD</span>
            </div>
            <p className="text-obigold-white/70 text-sm">Premium vehicle wrapping and detailing for luxury automobiles.</p>
          </div>

          <div>
            <h4 className="text-obigold-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">Portfolio</a></li>
              <li><a href="#process" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-obigold-gold font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">Full Car Wraps</a></li>
              <li><a href="#services" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">Matte Finishes</a></li>
              <li><a href="#services" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">Chrome & Metallic</a></li>
              <li><a href="#services" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">Fleet Wrapping</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-obigold-gold font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-obigold-white/70">
                <span className="text-obigold-gold">Phone:</span> (555) 123-4567
              </p>
              <p className="text-obigold-white/70">
                <span className="text-obigold-gold">Email:</span> info@obigold.com
              </p>
              <p className="text-obigold-white/70">
                <span className="text-obigold-gold">Hours:</span> Mon-Sat 9AM-6PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-obigold-grey pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-obigold-white/70 text-sm">
              &copy; 2024 OBIGOLD Wraps. All rights reserved.
            </p>

            <div className="flex gap-4">
              <a href="#" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <div className="flex gap-4 text-sm">
              <a href="#" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">Privacy Policy</a>
              <a href="#" className="text-obigold-white/70 hover:text-obigold-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}