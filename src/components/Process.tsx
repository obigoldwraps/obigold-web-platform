import { MessageSquare, Palette, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Discuss your vision, design options, and perfect finish selection.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Our expert team creates a custom design tailored to your vehicle.',
  },
  {
    icon: Wrench,
    title: 'Application',
    description: 'Precision installation by certified professionals using premium materials.',
  },
  {
    icon: CheckCircle,
    title: 'Final Reveal',
    description: 'Your transformed vehicle is inspected and delivered to perfection.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-obigold-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-heading">
          <h2 className="section-title">
            FROM VISION TO <span className="section-title-accent">REALITY</span>
          </h2>
          <p className="text-obigold-white/70 text-lg max-w-2xl mx-auto">
            A seamless 4-step process from concept to your stunning new look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="premium-card h-full">
                  <div className="absolute -top-8 left-6 flex items-center justify-center">
                    <div className="bg-obigold-gold text-obigold-black rounded-full w-16 h-16 flex items-center justify-center font-heading text-2xl font-bold">
                      {index + 1}
                    </div>
                  </div>

                  <div className="pt-12 text-center">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-8 h-8 text-obigold-gold" />
                    </div>
                    <h3 className="text-h3 mb-3 text-obigold-white">{step.title}</h3>
                    <p className="text-obigold-white/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-8 w-16 h-0.5 bg-gradient-to-r from-obigold-gold to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}