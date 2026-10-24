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
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-black font-mono text-xs uppercase tracking-widest font-bold mb-3 border border-yellow-500 shadow-sm">
              <Sparkles size={12} className="text-black" />
              Technical Arsenal
            </div>
            <h2 className="section-title mb-4">
              Modern stack & <span className="yellow-highlight">core competencies.</span>
            </h2>
            <p className="text-zinc-600 max-w-2xl text-base sm:text-lg leading-relaxed">
              Curated capabilities spanning high-throughput backend services, machine learning pipelines, cloud containers, and low-level algorithmic foundations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-yellow-400 text-black shadow-sm border border-yellow-500'
                  : 'bg-white text-zinc-700 hover:text-black hover:bg-yellow-50 border border-zinc-200'
              }`}
            >
              All Categories ({skills.length})
            </button>
            {skills.map((s) => (
              <button
                key={s.category}
                onClick={() => setSelectedCategory(s.category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === s.category
                    ? 'bg-yellow-400 text-black shadow-sm border border-yellow-500'
                    : 'bg-white text-zinc-700 hover:text-black hover:bg-yellow-50 border border-zinc-200'
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
                className="luxe-card p-6 group hover:-translate-y-1 flex flex-col justify-between bg-white border border-zinc-200"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 text-yellow-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 shadow-sm border border-zinc-900">
                      <skillGroup.icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-950 group-hover:text-yellow-600 transition-colors">
                        {skillGroup.category}
                      </h3>
                      <p className="text-[11px] text-zinc-500 line-clamp-1">
                        {skillGroup.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-yellow-300 border border-zinc-200 text-zinc-900 text-xs font-mono font-medium hover:border-black transition-all duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Metric */}
                <div className="pt-5 mt-5 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 size={13} className="text-yellow-600" />
                    Verified in Projects
                  </span>
                  <span className="text-zinc-950 font-bold bg-yellow-100 px-2 py-0.5 rounded border border-yellow-300">
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
