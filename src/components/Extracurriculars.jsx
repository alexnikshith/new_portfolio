import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { extracurriculars } from '../data';

const Extracurriculars = () => {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles size={12} />
            Leadership & Community
          </div>
          <h2 className="section-title mb-4">
            Extracurriculars & <span className="cyber-gradient-text">holistic leadership.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            Leading high-impact community welfare drives, organizing technical symposiums, and competing in cultural & athletic arenas.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {extracurriculars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cyber-card p-6 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary-600/20 to-cyan-500/20 border border-primary-500/30 flex items-center justify-center text-primary-300 group-hover:scale-110 group-hover:text-cyan-300 transition-all shadow-lg shadow-black/40">
                    <item.icon size={22} />
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyber-950 border border-slate-700 text-slate-300">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-primary-400 mb-3">
                  {item.organization}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.certificate && (
                <div className="pt-4 mt-4 border-t border-slate-800">
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Leadership Credential</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
