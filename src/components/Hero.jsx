import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Sparkles, MapPin, CheckCircle2, Server } from 'lucide-react';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-mesh">
      {/* Decorative cyber grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none -z-10" />

      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-600/20 blur-[130px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-cyan-500/15 blur-[140px] rounded-full -z-10 pointer-events-none" />

      <div className="section-padding w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headline, Bio & CTAs */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyber-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium mb-6 shadow-sm shadow-emerald-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Hero Headline */}
          <h1 className="heading-hero mb-6">
            Engineering scalable <br />
            <span className="cyber-gradient-text">systems & applied AI.</span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
            I'm <span className="text-white font-semibold">{personalInfo.name}</span>, a Computer Science Engineer at <span className="text-primary-300 font-medium">Amrita Vishwa Vidyapeetham</span> specializing in high-performance full-stack architectures (<span className="text-white font-medium">React, FastAPI, Go, Docker</span>) and applied machine learning solutions.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a href="#projects" className="btn-primary group">
              <span>Explore Featured Work</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-secondary group"
            >
              <Download size={17} className="text-primary-400 transition-transform group-hover:-translate-y-0.5" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Get in Touch →
            </a>
          </div>

          {/* Live Quick Stats Strip */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
            {personalInfo.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-3.5 rounded-xl bg-cyber-900/50 border border-primary-500/10 backdrop-blur-sm"
              >
                <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-cyan-300 font-mono">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight mt-1 font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Holographic Cyber Terminal Card */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Cyber Card Container */}
          <div className="relative mx-auto max-w-md w-full">
            {/* Outer Glow Halo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/30 via-cyan-500/20 to-primary-600/30 rounded-3xl blur-2xl opacity-75 animate-pulse-slow pointer-events-none" />

            <div className="cyber-card p-6 border-primary-500/30 bg-cyber-900/85">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                    <Terminal size={12} className="text-primary-400" />
                    nikshith@terminal:~$
                  </span>
                </div>
                <span className="font-mono text-[10px] text-primary-400/90 px-2 py-0.5 rounded bg-primary-500/10 border border-primary-500/20">
                  v2.6.0-stable
                </span>
              </div>

              {/* Profile Card Header Inside Terminal */}
              <div className="flex items-center gap-4 mb-5 p-3 rounded-xl bg-cyber-950/70 border border-primary-500/15">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-primary-500/50 p-0.5 shrink-0 shadow-lg shadow-primary-500/20">
                  <img
                    src={personalInfo.profilePic}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-[10px]"
                    loading="eager"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-cyber-950" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white text-base truncate">
                      {personalInfo.name}
                    </h3>
                    <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                  </div>
                  <p className="text-xs text-primary-300 font-mono">B.Tech Computer Science</p>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin size={11} className="text-rose-400" />
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Live JSON Telemetry Block */}
              <div className="p-4 rounded-xl bg-cyber-950 border border-slate-800 font-mono text-[11px] leading-relaxed text-slate-300 mb-4 overflow-x-auto">
                <div className="text-slate-500">// System Environment & Current Focus</div>
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">developerProfile</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-emerald-300">"SDE & AI/ML Engineer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">primaryStack:</span> [
                  <span className="text-amber-300">"Python"</span>,{' '}
                  <span className="text-amber-300">"Go"</span>,{' '}
                  <span className="text-amber-300">"React"</span>,{' '}
                  <span className="text-amber-300">"FastAPI"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">internship:</span>{' '}
                  <span className="text-cyan-300">"Bluestock Fintech (SDE)"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">cloudArchitecture:</span>{' '}
                  <span className="text-violet-300">"Docker • AWS • Fog Computing"</span>
                </div>
                <div>{'}'}</div>
              </div>

              {/* Floating Highlight Capsule */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-primary-950/60 via-cyber-900 to-cyan-950/60 border border-primary-500/20">
                <div className="flex items-center gap-2">
                  <Server size={15} className="text-cyan-400" />
                  <span className="text-xs font-mono text-slate-300">Recent Milestone</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-300 font-medium">
                  EduAnalytics SaaS Live
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
