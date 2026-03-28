import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

interface HeaderProps {
  openModal?: () => void;
}

export default function Header({ openModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full bg-obigold-black/95 backdrop-blur-md border-b border-obigold-grey z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-obigold-gold" />
          <span className="text-2xl font-heading text-obigold-white">OBIGOLD</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-obigold-white hover:text-obigold-gold transition-colors">Home</a>
          <a href="#services" className="text-obigold-white hover:text-obigold-gold transition-colors">Services</a>
          <a href="#gallery" className="text-obigold-white hover:text-obigold-gold transition-colors">Portfolio</a>
          <a href="#process" className="text-obigold-white hover:text-obigold-gold transition-colors">Process</a>
          <a href="#contact" className="text-obigold-white hover:text-obigold-gold transition-colors">Contact</a>
        </nav>

        <button onClick={openModal} className="hidden md:block bg-obigold-gold text-obigold-black px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition-colors">
          Book Your Wrap
        </button>

        <button onClick={toggleMenu} className="md:hidden text-obigold-gold">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-obigold-dark border-t border-obigold-grey">
          <nav className="flex flex-col gap-4 p-6">
            <a href="#home" className="text-obigold-white hover:text-obigold-gold transition-colors">Home</a>
            <a href="#services" className="text-obigold-white hover:text-obigold-gold transition-colors">Services</a>
            <a href="#gallery" className="text-obigold-white hover:text-obigold-gold transition-colors">Portfolio</a>
            <a href="#process" className="text-obigold-white hover:text-obigold-gold transition-colors">Process</a>
            <a href="#contact" className="text-obigold-white hover:text-obigold-gold transition-colors">Contact</a>
            <button onClick={openModal} className="bg-obigold-gold text-obigold-black px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition-colors w-full">
              Book Your Wrap
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}