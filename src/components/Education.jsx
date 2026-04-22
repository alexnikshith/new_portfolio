import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { education, certifications } from '../data';

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Education Column */}
        <div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Education</h2>
            <div className="w-20 h-1 bg-primary-600 rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l border-slate-800"
              >
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary-500"></div>
                <div className="mb-2">
                  <span className="text-sm font-medium text-primary-500">{edu.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-slate-300 font-medium mb-3">{edu.institution}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-primary-600 rounded-full"></div>
          </div>
          
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group hover:bg-slate-900/80"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary-500 group-hover:scale-110 transition-transform">
                      <cert.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white group-hover:text-primary-400 transition-colors uppercase tracking-tight">{cert.title}</h3>
                      <p className="text-sm text-slate-400">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:text-primary-400 transition-colors"
                      title="View Certificate"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
