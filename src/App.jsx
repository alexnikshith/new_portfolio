import React from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Extracurriculars from './components/Extracurriculars';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cyber-950 text-slate-100 font-sans selection:bg-primary-500/30 selection:text-primary-200 relative overflow-x-hidden">
      {/* Dynamic Canvas Cyber Constellation */}
      <BackgroundParticles />

      {/* Spring-Damped Dual-Tone Spotlight */}
      <CursorGlow />

      {/* Floating Cyber Glass Navbar */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <div className="relative">
          {/* Subtle Cyber Glow Bleeds */}
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-600/5 blur-[160px] -z-10 rounded-full pointer-events-none" />
          <div className="absolute top-2/3 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] -z-10 rounded-full pointer-events-none" />

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
