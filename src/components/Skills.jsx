import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { skills } from '../data';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="section-padding relative">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Sparkles size={12} />
              Technical Arsenal
            </div>
            <h2 className="section-title mb-4">
              Modern stack & <span className="cyber-gradient-text">core competencies.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
              Curated capabilities spanning high-throughput backend services, machine learning pipelines, cloud containers, and low-level algorithmic foundations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-500/20 border border-primary-400'
                  : 'bg-cyber-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Categories ({skills.length})
            </button>
            {skills.map((s) => (
              <button
                key={s.category}
                onClick={() => setSelectedCategory(s.category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === s.category
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-500/20 border border-primary-400'
                    : 'bg-cyber-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {s.category.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skillGroup, index) => (
              <motion.div
                layout
                key={skillGroup.category}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="cyber-card p-6 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary-600/20 to-cyan-500/20 border border-primary-500/30 flex items-center justify-center text-primary-300 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 shadow-lg shadow-black/40">
                      <skillGroup.icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors">
                        {skillGroup.category}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {skillGroup.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg bg-cyber-950/70 border border-slate-700/60 text-slate-300 text-xs font-mono font-medium hover:border-primary-500/50 hover:text-white hover:bg-primary-600/10 transition-all duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Metric */}
                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    Verified in Production / Projects
                  </span>
                  <span className="text-primary-400 font-bold">
                    {skillGroup.items.length} Techs
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
