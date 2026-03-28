import React from 'react';

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-32 px-8 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 leading-[0] -mt-[2px] z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto transform scale-y-[1.1] origin-top">
          <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V100Z" fill="white" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[var(--dark-bg)] to-[var(--dark-card)] opacity-50"></div>

      <div className="relative z-20">
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black mb-6 gold-gradient uppercase tracking-tighter">Recent Transformations</h2>
            <p className="text-xl text-[var(--gray-text)] max-w-2xl mx-auto">
              Don't take our word for it. See what we're capable of.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Tesla Model S"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-white">Tesla Model S</h4>
                  <p className="text-[var(--primary-gold)] font-semibold">Satin Black + Gold Accents</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1558618048-d480603e8684?auto=format&fit=crop&w=1000&q=80"
                alt="BMW M4" 
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-white">BMW M4</h4>
                  <p className="text-[var(--primary-gold)] font-semibold">Full Matte Wrap + PPF</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1571896349840-e26b311f6f5d?auto=format&fit=crop&w=1000&q=80"
                alt="Lamborghini"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-white">Lamborghini Huracán</h4>
                  <p className="text-[var(--primary-gold)] font-semibold">Satin Gunmetal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <a href="#" className="inline-block bg-[var(--primary-gold)] hover:bg-yellow-400 text-black px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 card-hover">
              SEE FULL GALLERY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

