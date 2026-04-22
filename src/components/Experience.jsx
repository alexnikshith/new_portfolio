import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-slate-950/50">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Journey</h2>
        <p className="text-slate-400 max-w-2xl leading-relaxed">
          My experience in the industry is just beginning, focused on learning and delivering quality software solutions.
        </p>
      </div>

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800"></div>
            
            <div className={`md:flex items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Dot */}
              <div className="absolute left-0 md:left-[50%] md:-translate-x-[50%] w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-900 z-10"></div>
              
              <div className="md:w-1/2">
                <div className="glass-card p-8 hover:border-primary-500/30">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-primary-500 font-medium">{exp.company}</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium flex items-center gap-2">
                      <Calendar size={14} /> {exp.period}
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  {exp.certificate && (
                    <a 
                      href={exp.certificate} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary-500 hover:text-primary-400 font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
