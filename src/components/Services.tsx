import React from 'react';
import { Check, Palette, Shield, CarFront } from 'lucide-react';
import paintpro from '../images/paint_pro.png';
import colourchange from '../images/colour_change.png';
import ceramic from '../images/ceramic.png';

const serviceData = [
  {
    title: "COLOR CHANGE",
    desc: "Over 1,000 premium vinyl films from 3M and Avery. Matte, satin, and chrome specialty finishes.",
    features: ["Full vehicle coverage", "Multi-layer designs"],
    icon: Palette,
    img: colourchange,
  },
  {
    title: "PAINT PROTECTION",
    desc: "Self-healing PPF that safeguards your OEM paint while remaining completely invisible.",
    features: ["XPEL Ultimate Plus", "Track proven durability"],
    icon: Shield,
    img: paintpro,
  },
  {
    title: "CERAMIC COATING",
    desc: "9H coatings with unmatched hydrophobicity, UV protection, and mirror-like gloss.",
    features: ["5+ Year Warranty", "Mirror-like shine"],
    icon: CarFront,
    img: ceramic,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-8 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADING WITH MINIMAL MOTION EFFECT */}
        <div className="text-center mb-16 md:mb-24 group cursor-default px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 tracking-tighter uppercase transition-all duration-700 group-hover:tracking-normal md:group-hover:tracking-[0.05em] group-hover:-translate-y-0.5 break-words">
            PREMIUM SERVICES
          </h2>
          <div className="w-32 h-1 bg-[var(--secondary-gold)] mx-auto mb-12 transition-all duration-700 group-hover:w-48 group-hover:bg-yellow-500"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-80">
            Every vehicle is unique. Our master installers craft bespoke solutions with precision and artistry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl bg-black min-h-[550px] flex flex-col justify-end p-8 shadow-2xl transition-all duration-500">

              {/* Background Image */}
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000 z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>

              <div className="relative z-20">
                {/* ICON CONTAINER WITH SHINE EFFECT */}
                <div className="relative w-20 h-20 bg-[var(--secondary-gold)] rounded-2xl flex items-center justify-center mb-8 overflow-hidden transition-shadow duration-500 group-hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]">
                  <service.icon className="w-10 h-10 text-black relative z-10" />

                  {/* The Shine Streak for the Icon */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
                </div>

                <h3 className="text-3xl font-black mb-4 text-white italic tracking-tighter">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  {service.desc}
                </p>

                <ul className="space-y-3 text-gray-300 mb-10 text-sm">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-[var(--primary-gold)] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button stays consistent with secondary-gold */}
                <a href="#" className="inline-block w-full text-center bg-[var(--secondary-gold)] text-black py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-yellow-400 hover:scale-[1.02] transition-all duration-300 shadow-xl">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}