import React from 'react';

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
              <a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689.046 4.946.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.69.073 4.949.046 4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689-.046-4.948-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.949-.046zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-3.403-6.162-3.403z"/><circle cx="12" cy="12" r="3"/></svg>
              </a>
              <a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300" aria-label="YouTube">
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C.833 8.775 0 10.383 0 12.001c0 1.618.833 3.226.877 5.815a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136c.044-2.589.877-5.815.877-5.815s-.833-3.226-.877-4.815zM9.552 15.774c-.161.099-.323.198-.485.298-.162.100-.323.199-.485.298-.162.100-.323.199-.485.298-.162.100-.323.199-.485.298v-2.085h4.348a4.744 4.744 0 0 1 1.196 2.39 4.389 4.389 0 0 1 1.847-1.94v-.23c0-.65-.085-1.17-.252-1.555-.167-.384-.475-.679-.921-.89-.446-.21-1.04-.314-1.757-.314-.77 0-1.4.2-1.888.6-.488.4-.73.99-.73 1.776h-2.945a7.707 7.707 0 0 0 .233-1.665C7.322 8.851 9.085 7.269 11.034 7.269c1.88 0 3.31.713 4.32 2.132.995 1.419 1.492 3.187 1.492 5.306 0 .619-.053 1.218-.16 1.796z"/></svg>
              </a>
              <a href="#" className="hover:text-[var(--primary-gold)] transition-all duration-300" aria-label="TikTok">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.868 3.922h-2.595c-.43 2.392-2.562 4.258-5.13 4.863v2.97c.628-.077 1.276-.2 1.94-.376v2.424h-2.6v-7.687h3.12l.463-2.68h-3.583c-.92 0-1.72.178-2.404.533V4.25H7.5v11.089h2.567v-2.987c.787.43 1.71.681 2.727.681 2.108 0 3.914-1.13 4.928-2.84 1.015-1.71 1.522-3.778 1.522-6.18.002-1.563-.407-3.035-1.116-4.367zm-3.476 9.8c-.526.782-1.444 1.327-2.486 1.641v-3.093c1.152-.556 1.876-1.589 2.043-2.876h2.897c-.148.931-.568 1.783-1.267 2.517-.699 0.734-1.586 1.309-2.669 1.727l-.018 .084z"/></svg>
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
              (555) 123-4567
            </div>
            <p className="text-[var(--gray-text)] mb-6">
              Mon-Fri 9AM-7PM | Sat 10AM-5PM
            </p>
            <div className="space-y-3">
              <p className="text-[var(--gray-text)] text-sm">100% Satisfaction Guaranteed</p>
              <p className="text-[var(--gray-text)] text-sm">Lifetime Installation Warranty</p>
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

