import React from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Extracurriculars from './components/Extracurriculars';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 font-sans selection:bg-primary-500/30 selection:text-primary-200">
      <BackgroundParticles />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <div className="relative">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/5 blur-[100px] -z-10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/5 blur-[100px] -z-10 rounded-full"></div>
          
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Extracurriculars />
        </div>
        <Contact />
      </main>
    </div>
  );
}

export default App;
