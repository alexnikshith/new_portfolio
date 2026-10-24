import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';
import { extracurriculars } from '../data';

const Extracurriculars = () => {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-black font-mono text-xs uppercase tracking-widest font-bold mb-3 border border-yellow-500 shadow-sm">
            <Sparkles size={12} className="text-black" />
            Leadership & Community
          </div>
          <h2 className="section-title mb-4">
            Extracurriculars & <span className="yellow-highlight">holistic leadership.</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl text-base sm:text-lg leading-relaxed">
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
              className="luxe-card p-6 flex flex-col justify-between group hover:-translate-y-1 bg-white border border-zinc-200 hover:border-zinc-950"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400 border border-yellow-500 flex items-center justify-center text-black group-hover:scale-110 transition-all shadow-sm">
                    <item.icon size={22} />
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-zinc-950 group-hover:text-yellow-600 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-yellow-700 font-bold mb-3">
                  {item.organization}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {item.certificate && (
                <div className="pt-4 mt-4 border-t border-zinc-100">
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-900 hover:text-yellow-600 transition-colors"
                  >
                    <span>View Leadership Credential</span>
                    <ExternalLink size={12} className="text-yellow-500" />
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
