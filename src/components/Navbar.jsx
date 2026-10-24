import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { GitHub as Github, LinkedIn as Linkedin } from './Icons';
import { personalInfo } from '../data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education & Certs', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-4">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-5 sm:px-7 py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-cyber-900/85 backdrop-blur-xl border border-primary-500/25 shadow-xl shadow-black/50'
            : 'bg-cyber-900/50 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 via-primary-500 to-cyan-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-cyber-950 rounded-[10px] flex items-center justify-center">
              <span className="font-display font-extrabold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-cyan-300">
                NG
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-primary-300 transition-colors">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] text-slate-400 -mt-1 hidden sm:block">
              Software Engineer & AI
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 bg-cyber-950/70 p-1.5 rounded-xl border border-primary-500/15 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-primary-600/30 border border-primary-500/35 shadow-inner'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-gradient-to-r from-primary-400 to-cyan-400 rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn-cyber-outline gap-1.5"
            title="Download Nikshith's Resume"
          >
            <Download size={14} className="text-primary-400" />
            <span>Resume</span>
          </a>

          <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-lg bg-cyber-900/60 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500/40 hover:bg-primary-500/10 transition-all"
            >
              <Github size={17} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-lg bg-cyber-900/60 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500/40 hover:bg-primary-500/10 transition-all"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-cyber-900/60 border border-slate-700/60"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-cyber-900/95 backdrop-blur-2xl border border-primary-500/20 p-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-mono text-primary-400">NAVIGATION</span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Available for Hire
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-primary-500/10 border border-transparent hover:border-primary-500/20 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-primary py-2.5 px-4 text-xs flex-1 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download size={14} /> Download Resume
            </a>
            <div className="flex gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-700 bg-cyber-950 text-slate-300"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-700 bg-cyber-950 text-slate-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
