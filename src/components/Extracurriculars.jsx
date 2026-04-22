import React from 'react';
import { motion } from 'framer-motion';
import { extracurriculars } from '../data';

const Extracurriculars = () => {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Extracurriculars & Achievements</h2>
        <p className="text-slate-400 max-w-2xl leading-relaxed">
          Beyond academics and code, I am actively involved in community service, technical event management, and competitive sports and arts.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {extracurriculars.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card p-8 hover:bg-slate-900/60 transition-all duration-500 flex flex-col border-white/5"
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-800/50 flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-xl">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors leading-tight">
              {item.title}
            </h3>
            <p className="text-primary-500 text-sm font-medium mb-4">
              {item.organization}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              {item.description}
            </p>
            {item.certificate && (
              <a 
                href={item.certificate} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary-500 hover:text-primary-400 font-medium inline-flex items-center gap-1 transition-colors border-t border-slate-800 pt-4"
              >
                View Certificate →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Extracurriculars;
