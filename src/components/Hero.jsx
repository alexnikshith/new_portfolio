import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { GitHub as Github } from './Icons';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-mesh">
      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Open to opportunities
          </div>
          <h1 className="heading-hero mb-6">
            Building the future <br /> 
            <span className="text-white">with code & intelligence.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl leading-relaxed">
            I'm <span className="text-white font-semibold">{personalInfo.name}</span>, a Software Engineer specializing in building exceptional digital experiences and intelligent systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href={personalInfo.resumeUrl} download className="btn-secondary">
              Download Resume <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[450px] h-[450px] mx-auto">
            {/* Abstract Shape / Decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-4 border border-slate-800 rounded-3xl backdrop-blur-sm bg-slate-900/40 p-8 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl border border-slate-700 overflow-hidden shrink-0">
                    <img src={personalInfo.profilePic} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] font-mono text-primary-400 uppercase tracking-widest leading-none mb-1">Location</p>
                    <p className="text-sm text-white font-medium leading-none">{personalInfo.location}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-zinc-300 font-medium">Recently updated:</p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  A high-performance service booking platform built with React, Node.js, and MongoDB. Includes real-time scheduling and secure payment gateways.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-primary-500/10 text-primary-400 text-[10px] rounded border border-primary-500/20">Active Dev</span>
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-[10px] rounded border border-green-500/20">98% Complete</span>
                </div>
              </div>
              <div className="pt-8 border-t border-zinc-800">
                <p className="text-xs font-mono text-zinc-500 mb-2">LAST_PROJECT_COMMITTED</p>
                <p className="text-sm font-mono text-primary-400">Book-Your-Service-Online-</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-zinc-800 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary-500 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
