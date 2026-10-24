import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Search, Layers, ArrowUpRight } from 'lucide-react';
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
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-black font-mono text-xs uppercase tracking-widest font-bold mb-3 border border-yellow-500 shadow-sm">
              <Sparkles size={12} className="text-black" />
              Featured Engineering Projects
            </div>
            <h2 className="section-title mb-4">
              Scalable software & <span className="yellow-highlight">intelligent platforms.</span>
            </h2>
            <p className="text-zinc-600 max-w-2xl text-base sm:text-lg leading-relaxed">
              Real-world systems spanning automated resume intelligence (TalentScope AI), full-stack financial telemetry (FinSage), academic AI analytics, and decentralized protocols.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-80 relative">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6);
              }}
              placeholder="Search (e.g. Next.js, FastAPI, FinSage)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border-2 border-zinc-200 text-zinc-950 placeholder-zinc-400 text-xs font-mono focus:outline-none focus:border-zinc-950 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-yellow-400 text-black shadow-sm border border-yellow-500'
                  : 'bg-white text-zinc-700 hover:text-black hover:bg-yellow-50 border border-zinc-200'
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
                className="group luxe-card flex flex-col justify-between bg-white border border-zinc-200 hover:border-zinc-950"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="p-6 sm:p-7 border-b border-zinc-100 bg-gradient-to-b from-yellow-50/70 to-white">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-zinc-100 text-zinc-900 border border-zinc-200">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-extrabold bg-yellow-400 text-black border border-yellow-500 shadow-sm">
                            ★ Featured
                          </span>
                        )}
                      </div>

                      {project.period && (
                        <span className="text-[11px] font-mono text-zinc-500 font-medium">
                          {project.period}
                        </span>
                      )}
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-xl sm:text-2xl font-bold text-zinc-950 group-hover:text-yellow-600 transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-yellow-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                    </h3>

                    {project.subtitle && (
                      <p className="text-xs font-mono text-yellow-700 font-semibold mt-1">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Metric Capsule */}
                    {project.metrics && (
                      <div className="p-2.5 rounded-lg bg-yellow-100/70 border border-yellow-300 flex items-center gap-2 text-xs font-mono font-bold text-zinc-900">
                        <span className="w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
                        <span className="truncate">{project.metrics}</span>
                      </div>
                    )}

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-[11px] font-mono text-zinc-800 group-hover:border-zinc-400 group-hover:bg-yellow-50 transition-colors font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 sm:p-7 pt-4 border-t border-zinc-100 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono font-bold text-zinc-900 hover:text-yellow-600 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Layers size={14} className="text-yellow-500" />
                    <span>Architecture & Details</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white border border-zinc-300 text-zinc-700 hover:text-black hover:border-black hover:bg-yellow-50 transition-colors shadow-sm"
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
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black border border-yellow-500 text-xs font-mono font-bold shadow-sm transition-all"
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
          <div className="p-12 text-center luxe-card my-8 bg-white border border-zinc-200">
            <p className="text-zinc-600 font-mono text-sm mb-4">
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
              className="btn-secondary text-xs font-mono font-bold px-8 py-3.5"
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
