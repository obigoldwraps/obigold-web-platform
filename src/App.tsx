import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Transformations from './components/Transformations';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-obigold-black">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Gallery />
      <Transformations />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
