import React from 'react';
import { Sparkles, Terminal, Activity, Zap } from 'lucide-react';

const marqueeItems = [
  { text: 'TalentScope AI Live', badge: 'Flagship SaaS', highlight: true },
  { text: 'FinSage Wealth Intelligence', badge: 'Fintech Engine', highlight: false },
  { text: '10,000+ Records Analyzed', badge: 'Bluestock SDE', highlight: false },
  { text: '90%+ ML Model Accuracy', badge: 'Predictive AI', highlight: true },
  { text: 'FastAPI & Next.js 14', badge: 'Full-Stack', highlight: false },
  { text: 'Docker Multi-Service (99.6% Pass)', badge: 'DevOps', highlight: false },
  { text: 'UC Irvine IoT Certified', badge: 'Coursera', highlight: true },
  { text: 'Open to Software Engineering & AI Roles', badge: 'Hyderabad / Relocate', highlight: true },
];

const TechMarquee = () => {
  return (
    <div className="w-full relative py-6 overflow-hidden bg-zinc-950 border-y-2 border-yellow-400 select-none shadow-xl my-4">
      {/* Subtle Glow backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
        {/* Render 2 sets for infinite loop */}
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 mx-6 group cursor-default transition-transform"
          >
            <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-sm shadow-yellow-400 group-hover:scale-150 transition-transform" />
            
            <span className={`font-mono text-sm sm:text-base font-extrabold uppercase tracking-wider ${
              item.highlight ? 'text-yellow-400' : 'text-white'
            }`}>
              {item.text}
            </span>

            {item.badge && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-yellow-400/15 text-yellow-300 border border-yellow-400/30">
                {item.badge}
              </span>
            )}

            <Zap size={14} className="text-zinc-600 ml-2 shrink-0 group-hover:text-yellow-400 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
