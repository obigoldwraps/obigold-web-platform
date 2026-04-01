import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramHandle = 'obigold_mobilewraps'; //

export default function Footer() {
  return (
    <footer className="py-16 px-8 bg-[var(--dark-bg)] border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold mb-4">
              OBIGOLD <span className="gold-gradient">WRAPS</span>
            </div>
            <p className="text-[var(--gray-text)] mb-6">
              Where automotive artistry meets precision engineering.
              Your vehicle deserves the best.
            </p>
            <div className="flex justify-center md:justify-start gap-6 text-[var(--gray-text)] text-xl">
              <a
                href={`https://www.instagram.com/${InstagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-obigold-gold-vibrant transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                {/* Using the Lucide icon for a cleaner look and better performance */}
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm text-[var(--gray-text)]">
            <div>
              <h5 className="font-bold text-white mb-4 uppercase tracking-wider">Services</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300">Color Change</a></li>
                <li><a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300">Paint Protection Film</a></li>
                <li><a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300">Ceramic Coating</a></li>
                <li><a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300">Chrome Delete</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4 uppercase tracking-wider">Company</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300">Gallery</a></li>
                <li><a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300">Process</a></li>
                <li><a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="font-bold text-2xl mb-6">
              +234 813 224 4382
              obigoldwraps@gmail.com
            </div>
            <p className="text-[var(--gray-text)] mb-6">
              Mon-Fri 9AM-6PM | Sat 10AM-5PM
            </p>
            <div className="space-y-3">
              <p className="text-[var(--gray-text)] text-sm">100% Satisfaction Guaranteed</p>
              <p className="text-[var(--gray-text)] text-sm">Includes Installation Warranty</p>
            </div>
          </div>
        </div>
        <div className="pt-12 mt-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-[var(--gray-text)]">
            <p>&copy; 2026 OBIGOLD Wraps. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

