import { Zap, Award, Truck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Precision Application',
    description: 'Expert installation with laser-precise alignment and bubble-free finish for flawless results.',
  },
  {
    icon: Award,
    title: 'Premium Materials',
    description: 'Industry-leading wrap films with 10-year durability and UV protection for lasting brilliance.',
  },
  {
    icon: Truck,
    title: 'Mobile Service',
    description: 'We come to you. Professional installation at your location with minimal downtime.',
  },
  {
    icon: Sparkles,
    title: 'Luxury Finishes',
    description: 'Matte, gloss, chrome, carbon fiber, and custom finishes tailored to your vision.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-obigold-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-heading">
          <h2 className="section-title">
            NOT ALL WRAPS <span className="section-title-accent">ARE EQUAL</span>
          </h2>
          <p className="text-obigold-white/70 text-lg max-w-2xl mx-auto">
            We deliver excellence in every detail, setting us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="premium-card group hover:shadow-lg">
                <div className="mb-4 p-3 bg-obigold-gold/10 rounded-lg w-fit group-hover:bg-obigold-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-obigold-gold" />
                </div>
                <h3 className="text-h3 mb-3 text-obigold-white">{feature.title}</h3>
                <p className="text-obigold-white/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}