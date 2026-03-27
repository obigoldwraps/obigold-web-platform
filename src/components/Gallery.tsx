import { ArrowRight } from 'lucide-react';

const galleryItems = [
  {
    title: 'Full Car Wraps',
    description: 'Complete transformation with custom design',
    image: 'https://images.pexels.com/photos/3802520/pexels-photo-3802520.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Chrome & Metallic',
    description: 'Stunning metallic finishes',
    image: 'https://images.pexels.com/photos/4516692/pexels-photo-4516692.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Matte Finishes',
    description: 'Sophisticated matte aesthetic',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-obigold-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-heading">
          <h2 className="section-title">
            TRANSFORM YOUR <span className="section-title-accent">RIDE</span>
          </h2>
          <p className="text-obigold-white/70 text-lg max-w-2xl mx-auto">
            See the incredible transformations we've created for our premium clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg h-80 cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obigold-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-h3 text-obigold-white mb-2">{item.title}</h3>
                <p className="text-obigold-white/70 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-obigold-gold text-obigold-black px-8 py-4 rounded font-semibold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
          View Full Portfolio
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}