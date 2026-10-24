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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-black font-mono text-xs uppercase tracking-widest font-bold mb-3 border border-yellow-500 shadow-sm">
            <Sparkles size={12} className="text-black" />
            Industry Experience
          </div>
          <h2 className="section-title mb-4">
            Professional track & <span className="yellow-highlight">hands-on impact.</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl text-base sm:text-lg leading-relaxed">
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
              className="luxe-card p-7 sm:p-9 border border-zinc-200 relative overflow-hidden group hover:border-zinc-950 bg-white"
            >
              {/* Top Meta Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400 border border-yellow-500 flex items-center justify-center text-black group-hover:scale-105 transition-transform shrink-0 shadow-sm">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-yellow-700 uppercase tracking-widest block mb-1">
                      {exp.type || "Internship"}
                    </span>
                    <h3 className="text-2xl font-bold text-zinc-950 group-hover:text-yellow-600 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-zinc-700 font-semibold text-base">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-zinc-600">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 font-semibold text-zinc-900">
                    <Calendar size={13} className="text-yellow-600" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1 text-[11px] text-zinc-500">
                      <MapPin size={11} className="text-rose-500" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Achievements Bullet Points */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-yellow-400 rounded-sm" />
                  Key Responsibilities & Achievements
                </h4>
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-yellow-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Utilized */}
              {exp.technologies && (
                <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-zinc-500 mr-1">Stack:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-900 font-medium"
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
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-black bg-yellow-400 hover:bg-yellow-300 border border-yellow-500 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer shadow-sm"
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
