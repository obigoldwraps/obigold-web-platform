import React, { useState } from 'react';
import { Menu, Phone } from 'lucide-react';

interface HeaderProps {
  openModal?: () => void;
}

export default function Header({ openModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-[var(--dark-bg)]/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center group">
          <img
            src="https://assets.ls-assets.com/uploads/ca14b38a-d873-4737-a552-9a5d51f3e276/c156d686-498a-4c0e-8dea-3a3d75278a28.webp?w=768"
            alt="OBIGOLD Wraps"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <div className="hidden lg:flex items-center gap-12">
          <a href="#services" className="text-sm uppercase tracking-wider font-medium hover:text-[var(--primary-gold)] transition-all duration-300">Services</a>
          <a href="#gallery" className="text-sm uppercase tracking-wider font-medium hover:text-[var(--primary-gold)] transition-all duration-300">Gallery</a>
          <a href="#about" className="text-sm uppercase tracking-wider font-medium hover:text-[var(--primary-gold)] transition-all duration-300">About</a>
          <a href="#contact" className="text-sm uppercase tracking-wider font-medium hover:text-[var(--primary-gold)] transition-all duration-300">Contact</a>
          <div className="flex items-center gap-3">
            <button onClick={openModal} className="bg-[var(--secondary-gold)] text-black px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition-all duration-300 text-sm">
              Free Quote
            </button>
            <div className="w-px h-6 bg-gray-600"></div>
            <a href="tel:+15551234567" className="text-sm font-medium hover:text-[var(--primary-gold)] transition-all duration-300 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
        <button onClick={toggleMenu} className="lg:hidden">
          <Menu className="w-6 h-6 text-[var(--primary-gold)]" />
        </button>
      </div>
    </nav>
  );
}
