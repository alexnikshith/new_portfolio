import React, { useState, useEffect } from 'react';
import { ArrowUp, Activity } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education & Certs' },
  { id: 'achievements', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

const SideRails = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Calculate overall scroll percentage
          const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
          if (totalScroll > 0) {
            setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
          }

          // If near bottom, highlight contact
          if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) {
            setActiveSection('contact');
            ticking = false;
            return;
          }

          let current = 'hero';
          for (const section of sections) {
            const el = document.getElementById(section.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 240 && rect.bottom >= 140) {
                current = section.id;
                break;
              }
            }
          }

          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 95;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementTop - navOffset),
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <>
      {/* LEFT MARGIN: Technical Telemetry & Architectural Markers */}
      <aside
        aria-label="Telemetry HUD"
        className="fixed left-3 2xl:left-7 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center pointer-events-none select-none transition-opacity duration-300"
      >
        {/* Top Active Radar Beacon */}
        <div className="relative flex items-center justify-center mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="absolute w-5 h-5 rounded-full bg-yellow-400/40 animate-ping" />
        </div>

        {/* Vertical Fine Connector */}
        <div className="w-px h-16 bg-gradient-to-b from-yellow-400 via-zinc-300 to-transparent" />

        {/* Rotated Coordinate Telemetry */}
        <div className="my-6 py-2 [writing-mode:vertical-rl] rotate-180 flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-semibold">
          <span className="text-zinc-950 font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
            NIKSHITH GURRAM
          </span>
          <span className="text-zinc-300">/</span>
          <span>17.3850° N, 78.4867° E</span>
          <span className="text-zinc-300">/</span>
          <span className="text-yellow-600 font-bold">HYDERABAD, IN</span>
        </div>

        {/* Vertical Fine Connector */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-zinc-300 to-zinc-400" />

        {/* Telemetry Capsule */}
        <div className="mt-3 px-2 py-1 rounded bg-zinc-950 text-white font-mono text-[9px] tracking-widest uppercase border border-zinc-800 shadow-md flex items-center gap-1.5">
          <Activity size={10} className="text-yellow-400 animate-pulse" />
          <span>SYS.OK</span>
        </div>
      </aside>

      {/* RIGHT MARGIN: Interactive Section Jump HUD & Scroll Navigator */}
      <aside
        aria-label="Section Navigation HUD"
        className="fixed right-3 2xl:right-7 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-3 transition-opacity duration-300"
      >
        {/* Navigation Dots Capsule */}
        <div className="p-2 rounded-full bg-white/95 backdrop-blur-xl border border-zinc-200/90 shadow-xl shadow-black/5 flex flex-col items-center gap-2.5">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
                aria-label={`Jump to ${section.label}`}
              >
                {/* Dot */}
                <div
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-3 h-5 bg-yellow-400 ring-2 ring-zinc-950 ring-offset-2 ring-offset-white shadow-sm'
                      : 'w-2 h-2 bg-zinc-300 group-hover:bg-zinc-950 group-hover:scale-125'
                  }`}
                />

                {/* Sliding Tooltip on Hover */}
                <div className="absolute right-7 pointer-events-none opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap">
                  <div className="px-2.5 py-1 rounded-lg bg-zinc-950 text-white text-[11px] font-mono font-semibold shadow-xl border border-zinc-800 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span>{section.label}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Scroll To Top Action Button */}
        <button
          onClick={scrollToTop}
          title="Scroll to top"
          aria-label="Scroll to top"
          className="relative group w-9 h-9 rounded-full bg-zinc-950 text-white hover:bg-yellow-400 hover:text-black border border-zinc-800 flex items-center justify-center shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />

          {/* Progress Ring Indicator */}
          <svg className="absolute -inset-1 w-11 h-11 -rotate-90 pointer-events-none" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="#e4e4e7"
              strokeWidth="1.5"
            />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="#facc15"
              strokeWidth="2"
              strokeDasharray="94.2"
              strokeDashoffset={94.2 - (94.2 * scrollProgress) / 100}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>
        </button>
      </aside>
    </>
  );
};

export default SideRails;
