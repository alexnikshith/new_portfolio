import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
        <p className="text-slate-400 max-w-2xl leading-relaxed">
          I've spent years honing my skills across various domains, from low-level systems programming to modern web architectures and artificial intelligence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 group hover:translate-y-[-4px]"
          >
            <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
              <skill.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span 
                  key={item} 
                  className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700 group-hover:border-primary-500/30 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
