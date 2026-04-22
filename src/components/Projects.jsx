import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GitHub as Github } from './Icons';
import { projects } from '../data';

const Projects = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'Web', 'ML', 'Blockchain', 'Cybersecurity', 'IoT'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            A selection of projects that showcase my technical capabilities and problem-solving skills in various fields.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' 
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid md:grid-cols-2 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            layout
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card overflow-hidden"
          >
            <div className="h-48 bg-slate-800 relative overflow-hidden flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-slate-900 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative flex flex-wrap gap-3 items-center justify-center">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-4 py-2 bg-slate-950/40 backdrop-blur-xl rounded-xl text-xs font-bold text-primary-400 uppercase tracking-widest border border-primary-500/10 shadow-2xl group-hover:bg-primary-500 group-hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center gap-6">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <Github size={18} /> Source Code
                </a>
                {project.demo !== "#" && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
