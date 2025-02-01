// src/App.js

import React from 'react';
import Header from './components/Header';
import ParticlesBackground from './components/ParticlesBackground';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Experiences from './components/Experiences'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Optional components
// import Testimonials from './components/Testimonials';
// import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <ParticlesBackground />
      <Header />
      {/* <Sidebar /> */}
      <About />
      <Skills/>
      <Experiences/>
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
