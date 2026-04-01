import React, { useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  openModal?: () => void;
}

export default function Header({ openModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  // 3. Determine if we are on the services page
  const isServicesPage = location.pathname === '/services';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 border-b 
        ${isServicesPage
          ? 'bg-black border-white/10' // Solid black for Services
          : 'bg-[var(--dark-bg)]/95 backdrop-blur-md border-gray-800' // Glass look for Home/Gallery
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img
            src="https://assets.ls-assets.com/uploads/ca14b38a-d873-4737-a552-9a5d51f3e276/c156d686-498a-4c0e-8dea-3a3d75278a28.webp?w=768"
            alt="OBIGOLD Wraps"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-12">
          <Link to="/services" className="text-sm uppercase tracking-wider font-medium hover:text-[var(--primary-gold)] transition-all duration-300">Services</Link>
          <Link to="/gallery" className="text-sm uppercase tracking-wider font-medium hover:text-[var(--primary-gold)] transition-all duration-300">Gallery</Link>
          <Link to="/#about" className="text-sm uppercase tracking-wider font-medium hover:text-[var(--primary-gold)] transition-all duration-300">About</Link>
          <Link to="/#contact" className="text-sm uppercase tracking-wider font-medium hover:text-[var(--primary-gold)] transition-all duration-300">Contact</Link>
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

        {isOpen && (
          <div className={`lg:hidden absolute top-full left-0 w-full border-t py-6 px-6 shadow-2xl transition-colors
            ${isServicesPage ? 'bg-black border-white/10' : 'bg-[var(--dark-bg)] backdrop-blur-md border-gray-800'}`}>
            <Link to="/services" className="block py-3 text-sm uppercase tracking-wider font-medium hover:text-[var(--primary-gold)] transition-all duration-300">Services</Link>
            <Link to="/gallery" className="block py-3 text-sm uppercase tracking-wider font-medium hover:text-[var(--primary-gold)] transition-all duration-300">Gallery</Link>
            <Link to="/#about" className="block py-3 text-sm uppercase tracking-wider font-medium hover:text-[var(--primary-gold)] transition-all duration-300">About</Link>
            <Link to="/#contact" className="block py-3 text-sm uppercase tracking-wider font-medium hover:text-[var(--primary-gold)] transition-all duration-300">Contact</Link>
            <div className="border-t border-gray-700 mt-4 pt-4 flex items-center gap-3">
              <button onClick={() => { openModal?.(); setIsOpen(false); }} className="flex-1 bg-[var(--secondary-gold)] text-black px-4 py-2 rounded font-semibold hover:bg-yellow-400 transition-all text-sm">Free Quote</button>
              <a href="tel:+2348132244382" className="text-sm font-medium hover:text-[var(--primary-gold)] transition-all flex items-center gap-2 p-2">
                <Phone className="w-4 h-4" />
                Call
              </a>
            </div>
          </div>
        )}
    </div>
    </nav >
  );
}
