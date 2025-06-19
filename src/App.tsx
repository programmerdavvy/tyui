import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Games from './components/Games';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <About />
      <Games />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;