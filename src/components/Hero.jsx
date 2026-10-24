import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Sparkles, MapPin, CheckCircle2, Server } from 'lucide-react';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-mesh-light">
      {/* Decorative architectural grid */}
      <div className="absolute inset-0 bg-theme-grid opacity-60 pointer-events-none -z-10" />

      {/* Ambient yellow sun glow orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-yellow-300/20 blur-[140px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-amber-400/15 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="section-padding w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headline, Bio & CTAs */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-yellow-400 text-black text-xs font-mono font-bold mb-6 shadow-sm border border-yellow-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
            </span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Hero Headline */}
          <h1 className="heading-hero mb-6">
            Engineering scalable <br />
            systems &{' '}
            <span className="relative inline-block bg-yellow-300 text-black px-3 py-0.5 rounded-xl border-b-4 border-yellow-500 shadow-sm mt-1">
              applied AI.
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg text-zinc-600 mb-8 max-w-2xl leading-relaxed">
            I'm <span className="text-zinc-950 font-bold">{personalInfo.name}</span>, a Computer Science Engineer at <span className="text-zinc-900 font-semibold underline decoration-yellow-400 decoration-2">Amrita Vishwa Vidyapeetham</span> specializing in high-performance full-stack architectures (<span className="text-zinc-950 font-semibold">Next.js 14, React, FastAPI, Go, Docker</span>) and applied machine learning systems.
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
              <Download size={17} className="text-zinc-900 transition-transform group-hover:-translate-y-0.5" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-3.5 rounded-xl text-sm font-semibold text-zinc-800 hover:text-black hover:bg-yellow-100 transition-all cursor-pointer"
            >
              Get in Touch →
            </a>
          </div>

          {/* Live Quick Stats Strip */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-200">
            {personalInfo.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-3.5 rounded-xl bg-white border border-zinc-200/90 shadow-sm hover:border-black transition-colors"
              >
                <div className="text-2xl font-black text-zinc-950 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                  <span>{stat.value}</span>
                </div>
                <div className="text-[11px] text-zinc-500 leading-tight mt-1 font-sans font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: High-Contrast Obsidian & Yellow Terminal Card */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mx-auto max-w-md w-full">
            {/* Outer Glow Halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 rounded-3xl blur-xl opacity-40 animate-pulse-slow pointer-events-none" />

            <div className="relative rounded-2xl bg-zinc-950 text-white p-6 border-2 border-zinc-800 shadow-2xl">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 font-mono text-[11px] text-zinc-400 flex items-center gap-1.5">
                    <Terminal size={12} className="text-yellow-400" />
                    nikshith@terminal:~$
                  </span>
                </div>
                <span className="font-mono text-[10px] text-black font-bold px-2 py-0.5 rounded bg-yellow-400">
                  v3.0.0-gold
                </span>
              </div>

              {/* Profile Card Header Inside Terminal */}
              <div className="flex items-center gap-4 mb-5 p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-yellow-400 p-0.5 shrink-0 shadow-md shadow-yellow-500/20">
                  <img
                    src={personalInfo.profilePic}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-[10px]"
                    loading="eager"
                  />
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-yellow-400 border-2 border-zinc-950" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white text-base truncate">
                      {personalInfo.name}
                    </h3>
                    <CheckCircle2 size={15} className="text-yellow-400 shrink-0" />
                  </div>
                  <p className="text-xs text-yellow-400 font-mono font-medium">B.Tech Computer Science</p>
                  <p className="text-[11px] text-zinc-400 flex items-center gap-1 mt-0.5">
                    <MapPin size={11} className="text-rose-400" />
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* Live JSON Telemetry Block */}
              <div className="p-4 rounded-xl bg-black border border-zinc-800 font-mono text-[11px] leading-relaxed text-zinc-300 mb-4 overflow-x-auto">
                <div className="text-zinc-500">// System Profile & Flagship Releases</div>
                <div>
                  <span className="text-yellow-400 font-bold">const</span>{' '}
                  <span className="text-white">engineerProfile</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">role:</span>{' '}
                  <span className="text-yellow-300">"SDE & AI/ML Engineer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">topReleases:</span> [
                  <span className="text-yellow-300">"TalentScope AI"</span>,{' '}
                  <span className="text-yellow-300">"FinSage"</span>,{' '}
                  <span className="text-yellow-300">"EduAnalytics"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">primaryStack:</span> [
                  <span className="text-emerald-300">"Next.js"</span>,{' '}
                  <span className="text-emerald-300">"FastAPI"</span>,{' '}
                  <span className="text-emerald-300">"Python"</span>,{' '}
                  <span className="text-emerald-300">"Go"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">internship:</span>{' '}
                  <span className="text-cyan-300">"Bluestock Fintech (SDE)"</span>
                </div>
                <div>{'}'}</div>
              </div>

              {/* Floating Highlight Capsule */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-yellow-500/30">
                <div className="flex items-center gap-2">
                  <Server size={15} className="text-yellow-400" />
                  <span className="text-xs font-mono text-zinc-300">Latest Live App</span>
                </div>
                <span className="text-[11px] font-mono text-yellow-400 font-bold">
                  TalentScope AI Live 🚀
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
