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

        {/* Right Column: High-Contrast Obsidian & Yellow Portrait Showcase Card */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative mx-auto max-w-md w-full">
            {/* Outer Glow Halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 rounded-3xl blur-xl opacity-40 animate-pulse-slow pointer-events-none" />

            <div className="relative rounded-2xl bg-zinc-950 text-white p-5 sm:p-6 border-2 border-zinc-800 shadow-2xl">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 font-mono text-[11px] text-zinc-400 flex items-center gap-1.5">
                    <Terminal size={12} className="text-yellow-400" />
                    nikshith.dev
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-black font-bold px-2.5 py-0.5 rounded bg-yellow-400 shadow-sm">
                    ● Available for SDE / AI Roles
                  </span>
                </div>
              </div>

              {/* Big High-Res Portrait Frame */}
              <div className="relative w-full aspect-[4/4.3] rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-md shadow-yellow-500/20 mb-4 group bg-zinc-900">
                <img
                  src={personalInfo.profilePic}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />

                {/* Ambient vignette gradient for high text contrast */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-transparent pointer-events-none" />

                {/* Overlaid Bio Badge on Bottom of Photo */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 pointer-events-none">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-extrabold text-white text-lg tracking-tight truncate drop-shadow-md">
                        {personalInfo.name}
                      </h3>
                      <CheckCircle2 size={16} className="text-yellow-400 shrink-0 fill-zinc-950" />
                    </div>
                    <p className="text-xs text-yellow-300 font-mono font-medium drop-shadow-sm">
                      B.Tech CSE • Amrita Coimbatore
                    </p>
                    <p className="text-[11px] text-zinc-300 flex items-center gap-1 mt-0.5 drop-shadow">
                      <MapPin size={11} className="text-yellow-400 shrink-0" />
                      {personalInfo.location}
                    </p>
                  </div>
                  <div className="shrink-0 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-yellow-400/50 text-[10px] font-mono text-yellow-400 font-bold flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    SDE & AI
                  </div>
                </div>
              </div>

              {/* Quick Profile Indicators */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide">Focus</div>
                  <div className="text-xs font-bold text-white mt-0.5">SDE & AI/ML</div>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide">Internship</div>
                  <div className="text-xs font-bold text-yellow-400 mt-0.5">Bluestock</div>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide">Batch</div>
                  <div className="text-xs font-bold text-white mt-0.5">2023 – 2027</div>
                </div>
              </div>

              {/* Floating Highlight Capsule (Direct link to live flagship app) */}
              <a
                href="https://talentscopeai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-yellow-400/40 hover:border-yellow-400 hover:bg-zinc-850 transition-all group cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Server size={15} className="text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono text-zinc-300">Featured Live App</span>
                </div>
                <span className="text-xs font-mono text-yellow-400 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  TalentScope AI Live 🚀
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
