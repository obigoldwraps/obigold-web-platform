import { Check } from 'lucide-react';

const services = [
  {
    title: 'Full Car Wraps',
    description: 'Complete vehicle transformation with premium vinyl coverage.',
    image: 'https://images.pexels.com/photos/4516692/pexels-photo-4516692.jpeg?auto=compress&cs=tinysrgb&w=800',
    popular: true,
  },
  {
    title: 'Chrome & Metallic',
    description: 'Eye-catching chrome and metallic finishes for maximum impact.',
    image: 'https://images.pexels.com/photos/4516683/pexels-photo-4516683.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Matte Finishes',
    description: 'Sophisticated matte wraps for modern, sleek aesthetics.',
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Carbon Fiber',
    description: 'Realistic carbon fiber texture for a premium, technical look.',
    image: 'https://images.pexels.com/photos/3802520/pexels-photo-3802520.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Partial Wraps',
    description: 'Strategic wrapping of key panels for accent and branding.',
    image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Fleet Wrapping',
    description: 'Professional branding solutions for business vehicle fleets.',
    image: 'https://images.pexels.com/photos/4505258/pexels-photo-4505258.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-obigold-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-heading">
          <h2 className="section-title">
            PREMIUM WRAP <span className="section-title-accent">SERVICES</span>
          </h2>
          <p className="text-obigold-white/70 text-lg max-w-2xl mx-auto">
            From full transformations to strategic accents, we have the perfect wrap solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="premium-card group relative overflow-hidden h-96">
              {service.popular && (
                <div className="absolute top-4 right-4 bg-obigold-gold text-obigold-black px-3 py-1 rounded text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}

              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-obigold-black via-transparent to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-h3 mb-2 text-obigold-white">{service.title}</h3>
                <p className="text-obigold-white/80 text-sm mb-4">{service.description}</p>
                <button className="flex items-center gap-2 text-obigold-gold hover:text-obigold-white transition-colors text-sm font-semibold">
                  <Check className="w-4 h-4" />
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}