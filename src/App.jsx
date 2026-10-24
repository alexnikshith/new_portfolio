import React from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import SideRails from './components/SideRails';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Extracurriculars from './components/Extracurriculars';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-yellow-300 selection:text-black relative overflow-x-hidden">
      {/* Dynamic Canvas Particles */}
      <BackgroundParticles />

            {/* Interactive Side Rails: Left Telemetry & Right Section HUD */}
      <SideRails />

      {/* Floating White Glass Navbar */}
      <Navbar />

      <main className="relative z-10">
        <Hero />

        {/* High-Impact Infinite Tech Marquee */}
        <TechMarquee />

        <div className="relative">
          {/* Subtle Ambient Yellow Bleeds */}
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-yellow-400/10 blur-[180px] -z-10 rounded-full pointer-events-none" />
          <div className="absolute top-2/3 left-0 w-[600px] h-[600px] bg-amber-300/10 blur-[180px] -z-10 rounded-full pointer-events-none" />

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
