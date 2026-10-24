import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink, Sparkles, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { education, certifications } from '../data';

const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles size={12} />
            Academics & Credentials
          </div>
          <h2 className="section-title mb-4">
            Education & <span className="cyber-gradient-text">recognized certifications.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
            Rigorous foundations in Computer Science accompanied by industry-recognized credentials in Machine Learning, Data Analytics, and Hackathon innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-800">
              <GraduationCap size={22} className="text-primary-400" />
              <h3 className="text-2xl font-bold text-white">Academic Journey</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-primary-500 before:via-cyan-500/50 before:to-transparent">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-10"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute left-[9px] top-1.5 w-3 h-3 rounded-full bg-primary-500 border-2 border-cyber-950 shadow-sm shadow-primary-400" />

                  <div className="cyber-card p-6 group hover:border-primary-500/40">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 px-2.5 py-0.5 rounded-full">
                        {edu.period}
                      </span>
                      {edu.score && (
                        <span className="text-xs font-mono font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                          {edu.score}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-slate-300 font-medium mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-800">
              <Award size={22} className="text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
            </div>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="cyber-card p-5 group hover:border-cyan-500/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-cyber-950 border border-primary-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-primary-600/20 group-hover:border-primary-400 transition-all shrink-0">
                        <cert.icon size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono text-cyan-400 font-medium">
                            {cert.issuer}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="text-[11px] font-mono text-slate-400">
                            {cert.date}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                          {cert.title}
                        </h4>
                        {cert.description && (
                          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                            {cert.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-cyber-950/80 border border-slate-700/60 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors shrink-0"
                        title="View Verified Credential"
                        aria-label={`View ${cert.title} certificate`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
