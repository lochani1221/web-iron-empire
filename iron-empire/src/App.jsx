import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Trainers from './components/Trainers';
import Plans from './components/Plans';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Trainers />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;