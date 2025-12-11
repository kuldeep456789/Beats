import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen text-white selection:bg-[#00ff88] selection:text-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;