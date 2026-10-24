import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { GitHub as Github } from './Icons';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-cyber-950/85 backdrop-blur-xl cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-cyber-900 border border-primary-500/30 rounded-2xl shadow-2xl shadow-black/80 z-10 overflow-hidden my-auto"
        >
          {/* Top Banner / Cyber Accents */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-primary-950 via-cyber-900 to-indigo-950 border-b border-slate-800">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary-500/20 text-primary-300 border border-primary-500/30">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <Sparkles size={11} /> Featured
                  </span>
                )}
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-cyber-950/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-700/60"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm font-mono text-cyan-300">
                {project.subtitle}
              </p>
            )}

            {project.period && (
              <div className="flex items-center gap-2 mt-3 text-xs text-slate-400 font-mono">
                <Calendar size={13} className="text-primary-400" />
                <span>Timeline: {project.period}</span>
              </div>
            )}
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            {/* Description */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                // SYSTEM OVERVIEW
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Highlights / Achievements */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-xs font-mono text-primary-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Layers size={14} />
                  Architectural Highlights & Impact
                </h4>
                <div className="space-y-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-cyber-950/70 border border-slate-800/80 flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics Capsule */}
            {project.metrics && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-primary-950/80 to-cyber-900 border border-primary-500/25">
                <span className="text-xs font-mono text-primary-300 uppercase block mb-1">
                  Key Production Metrics
                </span>
                <span className="text-sm font-bold text-white">
                  {project.metrics}
                </span>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                Technologies & Tools Utilized
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-cyber-950 border border-slate-700 text-xs font-mono text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 bg-cyber-950 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2.5 px-5 text-xs"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-2.5 px-5 text-xs gap-2"
            >
              <Github size={15} />
              <span>Inspect Source Repository</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
