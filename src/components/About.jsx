import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Server, ShieldCheck, Sparkles, GraduationCap, Building2, MapPin } from 'lucide-react';
import { personalInfo } from '../data';

const About = () => {
  const pillars = [
    {
      title: "Full-Stack & Systems",
      icon: Code2,
      color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
      description: "Building production-grade applications using React, Go, FastAPI, and Node.js with emphasis on modular APIs and responsive user interfaces."
    },
    {
      title: "Applied Machine Learning",
      icon: Cpu,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      description: "Developing practical predictive pipelines and feature engineering models, achieving 90%+ prediction accuracy in fintech recommendation tasks."
    },
    {
      title: "Cloud-Fog & Edge Systems",
      icon: Server,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description: "Architecting multi-tier cloud-fog telemetry systems reducing latency by 60% and orchestrating containerized services on Docker & AWS."
    },
    {
      title: "Security & Cryptographic Integrity",
      icon: ShieldCheck,
      color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      description: "Implementing AES-256 encryption, HMAC tamper verification, and RBAC security policies to protect critical digital platforms."
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles size={12} />
            About Me
          </div>
          <h2 className="section-title mb-4">
            Engineering with <span className="cyber-gradient-text">purpose & precision.</span>
          </h2>
          <p className="text-slate-400 max-w-3xl text-base sm:text-lg leading-relaxed">
            I combine academic rigor in Computer Science with real-world engineering experience to design scalable software, automated pipelines, and intelligent AI applications.
          </p>
        </div>

        {/* Narrative & Profile Meta */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          <motion.div
            className="lg:col-span-8 cyber-card p-8 bg-cyber-900/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              The Journey So Far
            </h3>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Currently pursuing my <span className="text-white font-medium">B.Tech in Computer Science and Engineering</span> at <span className="text-primary-300 font-medium">Amrita Vishwa Vidyapeetham, Coimbatore</span> (2023–2027), I have developed a strong foundation in Data Structures, Algorithms, Distributed Systems, and Machine Learning.
              </p>
              <p>
                During my internship at <span className="text-white font-medium">Bluestock Fintech</span>, I built stock market analysis tools processing over <span className="text-cyan-300 font-medium">10,000+ financial records</span> and engineered ML prediction models that achieved <span className="text-cyan-300 font-medium">90%+ prediction accuracy</span> for analytical recommendations.
              </p>
              <p>
                Beyond code, I serve as an <span className="text-white font-medium">NSS Coordinator</span>, leading community service camps, blood donation drives, and literacy campaigns. I believe true engineering brilliance lies in utilizing technology as an engine for societal progress.
              </p>
            </div>
          </motion.div>

          {/* Quick Facts Sidebar */}
          <motion.div
            className="lg:col-span-4 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="cyber-card p-6 bg-cyber-900/70 border-primary-500/20">
              <h4 className="font-mono text-xs text-primary-400 uppercase tracking-widest mb-4">
                Quick Profile
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li className="flex items-center gap-3 text-slate-300">
                  <GraduationCap size={16} className="text-primary-400 shrink-0" />
                  <span>
                    <strong className="text-white">Degree:</strong> B.Tech CSE (2023-27)
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Building2 size={16} className="text-cyan-400 shrink-0" />
                  <span>
                    <strong className="text-white">University:</strong> Amrita Coimbatore
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <MapPin size={16} className="text-rose-400 shrink-0" />
                  <span>
                    <strong className="text-white">Location:</strong> Hyderabad, India
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <Cpu size={16} className="text-emerald-400 shrink-0" />
                  <span>
                    <strong className="text-white">Primary Focus:</strong> Full-Stack & Applied AI
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary-950/70 via-cyber-900 to-indigo-950/70 border border-primary-500/25">
              <p className="text-xs font-mono text-primary-300 mb-1">
                // ACADEMIC TRACK RECORD
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                95.5% in Intermediate Board Examinations • 10.0 CGPA in Schooling.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="cyber-card p-6 hover:-translate-y-1 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 ${pillar.color} transition-transform group-hover:scale-110`}>
                <pillar.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
