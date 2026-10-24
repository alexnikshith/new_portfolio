import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, ExternalLink, Award } from 'lucide-react';
import { experience } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles size={12} />
            Industry Experience
          </div>
          <h2 className="section-title mb-4">
            Professional track & <span className="cyber-gradient-text">hands-on impact.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            Shipping reliable software tools, optimizing algorithmic data pipelines, and engineering high-accuracy machine learning models.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cyber-card p-7 sm:p-9 border-primary-500/25 relative overflow-hidden group hover:border-primary-500/50"
            >
              {/* Top Meta Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary-600/20 to-emerald-500/20 border border-primary-500/30 flex items-center justify-center text-primary-300 group-hover:scale-105 transition-transform shrink-0 shadow-lg shadow-black/40">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-emerald-400 uppercase tracking-widest block mb-1">
                      {exp.type || "Internship"}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-primary-400 font-medium text-base">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-950/80 border border-slate-800">
                    <Calendar size={13} className="text-primary-400" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1 text-[11px] text-slate-500">
                      <MapPin size={11} className="text-rose-400" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Achievements Bullet Points */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                  // KEY RESPONSIBILITIES & ACHIEVEMENTS
                </h4>
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Utilized */}
              {exp.technologies && (
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 mr-1">Stack:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-cyber-950 border border-slate-800 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <Award size={14} />
                      <span>View Verified Certificate</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
