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
          className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white border-2 border-zinc-900 rounded-2xl shadow-2xl z-10 overflow-hidden my-auto"
        >
          {/* Top Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-yellow-100/90 via-yellow-50 to-white border-b border-zinc-200">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white text-zinc-900 border border-zinc-300">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-extrabold bg-yellow-400 text-black border border-yellow-500 flex items-center gap-1 shadow-sm">
                    <Sparkles size={11} className="text-black" /> Featured
                  </span>
                )}
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white hover:bg-zinc-100 text-zinc-700 hover:text-black transition-colors cursor-pointer border border-zinc-300"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mb-2">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm font-mono text-yellow-700 font-bold">
                {project.subtitle}
              </p>
            )}

            {project.period && (
              <div className="flex items-center gap-2 mt-3 text-xs text-zinc-600 font-mono font-medium">
                <Calendar size={13} className="text-yellow-600" />
                <span>Timeline: {project.period}</span>
              </div>
            )}
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            {/* Description */}
            <div>
              <h4 className="text-xs font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 bg-yellow-400 rounded-sm" />
                System Overview
              </h4>
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Key Highlights / Achievements */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-xs font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Layers size={14} className="text-yellow-500" />
                  Architectural Highlights & Impact
                </h4>
                <div className="space-y-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-yellow-50/70 border border-yellow-200/90 flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-yellow-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-900 leading-relaxed font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics Capsule */}
            {project.metrics && (
              <div className="p-4 rounded-xl bg-zinc-950 text-white border border-zinc-800">
                <span className="text-xs font-mono text-yellow-400 uppercase font-bold block mb-1">
                  Key Production Metrics
                </span>
                <span className="text-sm font-bold text-white font-mono">
                  {project.metrics}
                </span>
              </div>
            )}

            {/* Tech Stack Chips */}
            <div>
              <h4 className="text-xs font-mono text-zinc-950 font-bold uppercase tracking-widest mb-3">
                Technologies & Tools Utilized
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-900 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 bg-zinc-50 border-t border-zinc-200 flex flex-wrap items-center justify-end gap-3">
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-yellow py-2.5 px-5 text-xs font-bold"
              >
                <span>Live Interactive Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 px-5 text-xs gap-2"
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
