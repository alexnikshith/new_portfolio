import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { GitHub as Github, LinkedIn as Linkedin } from './Icons';
import { personalInfo } from '../data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const isClickScrollingRef = React.useRef(false);
  const clickTimeoutRef = React.useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isClickScrollingRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);

          // 1. If user scrolled near the bottom of page, highlight contact
          if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
            setActiveSection('contact');
            ticking = false;
            return;
          }

          // 2. If in hero area, clear active section
          if (window.scrollY < 260) {
            setActiveSection('');
            ticking = false;
            return;
          }

          const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
          const focusY = Math.min(290, window.innerHeight * 0.38);
          let currentSection = '';

          // 3. Focal point intersection: exactly one section contains the user's primary reading line
          for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= focusY && rect.bottom > focusY) {
                currentSection = sectionId;
                break;
              }
            }
          }

          // 4. Fallback: maximum visible height in viewport
          if (!currentSection) {
            let maxVisibleH = 0;
            for (const sectionId of sections) {
              const el = document.getElementById(sectionId);
              if (el) {
                const rect = el.getBoundingClientRect();
                const visibleH = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
                if (visibleH > maxVisibleH) {
                  maxVisibleH = visibleH;
                  currentSection = sectionId;
                }
              }
            }
          }

          if (currentSection) {
            setActiveSection(currentSection);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId === 'hero' ? '' : targetId);
    setIsMobileMenuOpen(false);

    // Lock scroll spy briefly while smooth scroll glides to destination
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 850);

    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 110;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementTop - navOffset),
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

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
        className={`max-w-[1560px] mx-auto rounded-2xl transition-all duration-300 px-5 sm:px-7 py-3 flex items-center justify-between ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border border-zinc-300/80 shadow-md shadow-zinc-900/5'
            : 'bg-white/70 backdrop-blur-md border border-zinc-200/60 shadow-sm'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-xl bg-zinc-950 p-0.5 transition-transform duration-300 group-hover:scale-105 shadow-sm flex items-center justify-center">
            <span className="font-display font-black text-sm tracking-wider text-yellow-400">
              NG<span className="text-white">.</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-zinc-950 text-base tracking-tight group-hover:text-yellow-600 transition-colors">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] text-zinc-500 -mt-1 hidden sm:block">
              Software Engineer & AI
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 bg-zinc-100/80 p-1.5 rounded-xl border border-zinc-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-black bg-yellow-400 font-bold shadow-sm'
                    : 'text-zinc-600 hover:text-black hover:bg-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-yellow-400 hover:bg-yellow-300 text-black border border-yellow-500 shadow-sm transition-all active:scale-95 cursor-pointer"
            title="Download Nikshith's Resume"
          >
            <Download size={14} className="text-black" />
            <span>Resume</span>
          </a>

          <div className="flex items-center gap-2 pl-2 border-l border-zinc-200">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-black hover:border-black hover:bg-yellow-50 transition-all shadow-sm"
            >
              <Github size={17} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-black hover:border-black hover:bg-yellow-50 transition-all shadow-sm"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="lg:hidden p-2 text-zinc-700 hover:text-black rounded-lg bg-white border border-zinc-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden max-w-[1560px] mx-auto mt-2 rounded-2xl bg-white/95 backdrop-blur-2xl border border-zinc-200 p-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
            <span className="text-xs font-mono font-bold text-zinc-900">NAVIGATION</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] bg-yellow-400 text-black font-mono font-bold border border-yellow-500">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
              Available for Hire
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-all cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-yellow-400 text-black font-bold border-yellow-500'
                    : 'text-zinc-700 hover:text-black hover:bg-yellow-100/60 border-transparent'
                }`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-200 flex items-center justify-between gap-3">
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-yellow py-2.5 px-4 text-xs flex-1 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download size={14} /> Download Resume
            </a>
            <div className="flex gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-200 bg-white text-zinc-800"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-200 bg-white text-zinc-800"
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
