const transformations = [
  {
    title: 'Porsche 911 Transformation',
    before: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    after: 'https://images.pexels.com/photos/3802520/pexels-photo-3802520.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Matte Black Carbon Fiber Wrap | 5-Day Project',
  },
  {
    title: 'Mercedes-Benz Luxury',
    before: 'https://images.pexels.com/photos/4505258/pexels-photo-4505258.jpeg?auto=compress&cs=tinysrgb&w=1200',
    after: 'https://images.pexels.com/photos/4516692/pexels-photo-4516692.jpeg?auto=compress&cs=tinysrgb&w=1200',
    details: 'Chrome Gold Metallic | 6-Day Project',
  },
];

export default function Transformations() {
  return (
    <section className="py-20 bg-obigold-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-heading">
          <h2 className="section-title">
            SEE THE <span className="section-title-accent">TRANSFORMATION</span>
          </h2>
          <p className="text-obigold-white/70 text-lg max-w-2xl mx-auto">
            Before and after transformations from our premium clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {transformations.map((transformation, index) => (
            <div key={index} className="space-y-6">
              <div>
                <h3 className="text-h3 text-obigold-white mb-2">{transformation.title}</h3>
                <p className="text-obigold-gold text-sm font-semibold">{transformation.details}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-obigold-white/70 text-sm mb-2">Before</p>
                  <img
                    src={transformation.before}
                    alt="Before"
                    className="w-full h-48 object-cover rounded-lg border border-obigold-grey hover:border-obigold-gold transition-colors"
                  />
                </div>
                <div>
                  <p className="text-obigold-white/70 text-sm mb-2">After</p>
                  <img
                    src={transformation.after}
                    alt="After"
                    className="w-full h-48 object-cover rounded-lg border border-obigold-grey hover:border-obigold-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <img src={transformation.after} alt="Detail 1" className="w-full h-24 object-cover rounded-lg border border-obigold-grey hover:border-obigold-gold transition-colors" />
                <img src={transformation.before} alt="Detail 2" className="w-full h-24 object-cover rounded-lg border border-obigold-grey hover:border-obigold-gold transition-colors" />
                <img src={transformation.after} alt="Detail 3" className="w-full h-24 object-cover rounded-lg border border-obigold-grey hover:border-obigold-gold transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}