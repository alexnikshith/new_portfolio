import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink, Sparkles, GraduationCap } from 'lucide-react';
import { education, certifications } from '../data';

const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-black font-mono text-xs uppercase tracking-widest font-bold mb-3 border border-yellow-500 shadow-sm">
            <Sparkles size={12} className="text-black" />
            Academics & Credentials
          </div>
          <h2 className="section-title mb-4">
            Education & <span className="yellow-highlight">recognized certifications.</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl text-base sm:text-lg leading-relaxed">
            Rigorous foundations in Computer Science accompanied by industry-recognized credentials in Machine Learning, Data Analytics, and Hackathon innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-zinc-200">
              <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-black">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-950">Academic Journey</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-yellow-400">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-10"
                >
                  {/* Yellow Node Dot */}
                  <div className="absolute left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-yellow-400 border-2 border-black shadow-sm" />

                  <div className="luxe-card p-6 group hover:border-zinc-950 bg-white border border-zinc-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-zinc-950 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded-full">
                        {edu.period}
                      </span>
                      {edu.score && (
                        <span className="text-xs font-mono font-bold text-black bg-yellow-400 border border-yellow-500 px-2.5 py-0.5 rounded-full shadow-sm">
                          {edu.score}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-zinc-950 group-hover:text-yellow-600 transition-colors mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-zinc-700 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-zinc-200">
              <div className="w-8 h-8 rounded-lg bg-black text-yellow-400 flex items-center justify-center">
                <Award size={18} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-950">Professional Certifications</h3>
            </div>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="luxe-card p-5 group hover:border-zinc-950 bg-white border border-zinc-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-yellow-400 border border-yellow-500 flex items-center justify-center text-black group-hover:scale-110 transition-all shrink-0 shadow-sm font-bold">
                        <cert.icon size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono text-yellow-700 font-bold">
                            {cert.issuer}
                          </span>
                          <span className="text-zinc-400">•</span>
                          <span className="text-[11px] font-mono text-zinc-500 font-medium">
                            {cert.date}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-zinc-950 group-hover:text-yellow-600 transition-colors leading-snug">
                          {cert.title}
                        </h4>
                        {cert.description && (
                          <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed font-normal">
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
                        className="p-2 rounded-lg bg-white border border-zinc-300 text-zinc-700 hover:text-black hover:border-black hover:bg-yellow-50 transition-colors shrink-0 shadow-sm"
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
