import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Search, Layers, ArrowUpRight, Code2 } from 'lucide-react';
import { GitHub as Github } from './Icons';
import { projects } from '../data';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ['All', 'AI/ML & Data', 'Web & Systems', 'Cloud & IoT', 'Cybersecurity'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Sparkles size={12} />
              Featured Engineering Projects
            </div>
            <h2 className="section-title mb-4">
              Scalable software & <span className="cyber-gradient-text">intelligent systems.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
              Real-world systems spanning automated AI analytics, federated decentralized protocols, cloud-fog latency optimization, and cryptographic security portals.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6);
              }}
              placeholder="Search by tech or keyword..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cyber-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-primary-500 transition-all"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary-600 to-indigo-600 text-white shadow-lg shadow-primary-500/25 border border-primary-400/40'
                  : 'bg-cyber-900/70 text-slate-400 hover:text-white hover:bg-cyber-850 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id || project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cyber-card flex flex-col justify-between hover:border-primary-500/50"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="p-6 sm:p-7 border-b border-slate-800/80 bg-gradient-to-b from-primary-950/40 via-cyber-900/80 to-cyber-900/20">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyber-950/80 text-primary-300 border border-primary-500/20">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                            ★ Featured
                          </span>
                        )}
                      </div>

                      {project.period && (
                        <span className="text-[11px] font-mono text-slate-500">
                          {project.period}
                        </span>
                      )}
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary-300 transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight size={18} className="text-slate-500 group-hover:text-primary-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                    </h3>

                    {project.subtitle && (
                      <p className="text-xs font-mono text-cyan-400 mt-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Metric Capsule */}
                    {project.metrics && (
                      <div className="p-2.5 rounded-lg bg-cyber-950/80 border border-primary-500/15 flex items-center gap-2 text-xs font-mono text-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="truncate">{project.metrics}</span>
                      </div>
                    )}

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-cyber-950/80 border border-slate-800 text-[11px] font-mono text-slate-300 group-hover:border-primary-500/25 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-7 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono font-medium text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <Layers size={13} />
                    <span>Architecture & Details</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-cyber-950/90 border border-slate-700/60 text-slate-400 hover:text-white hover:border-primary-500/40 transition-colors"
                      title="Inspect Source Code"
                      aria-label="Inspect Source Code"
                    >
                      <Github size={16} />
                    </a>

                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-600/20 hover:bg-primary-600/40 text-primary-300 border border-primary-500/30 text-xs font-mono transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink size={13} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center cyber-card my-8">
            <p className="text-slate-400 font-mono text-sm mb-4">
              No projects match "{searchQuery}" in {activeCategory}.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="btn-secondary text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="btn-secondary text-xs font-mono px-8 py-3.5"
            >
              Load More Projects ({filteredProjects.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>

      {/* Interactive Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
