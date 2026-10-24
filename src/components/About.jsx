import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Server, ShieldCheck, Sparkles, GraduationCap, Building2, MapPin, Activity, CheckCircle2, Award } from 'lucide-react';
import { personalInfo } from '../data';

const About = () => {
  const pillars = [
    {
      title: "Full-Stack & Systems",
      icon: Code2,
      badge: "Core Engineering",
      color: "bg-yellow-400 text-black border-yellow-500",
      description: "Building production-grade web applications using Next.js 14, React, Go, FastAPI, and Node.js with high responsiveness, clean REST APIs, and strict typing."
    },
    {
      title: "Applied Machine Learning",
      icon: Cpu,
      badge: "Predictive Models",
      color: "bg-zinc-950 text-yellow-400 border-zinc-900",
      description: "Developing practical predictive pipelines, automated resume intelligence scoring, and achieving 90%+ prediction accuracy in fintech recommendation tasks."
    },
    {
      title: "Cloud-Fog & Edge Systems",
      icon: Server,
      badge: "Distributed Systems",
      color: "bg-yellow-400 text-black border-yellow-500",
      description: "Architecting multi-tier cloud-fog telemetry platforms reducing latency by 60%, and orchestrating multi-service containerized stacks on Docker & AWS."
    },
    {
      title: "Security & Cryptographic Rigor",
      icon: ShieldCheck,
      badge: "Zero-Trust",
      color: "bg-zinc-950 text-yellow-400 border-zinc-900",
      description: "Implementing AES-256 encryption, HMAC tamper verification, JWT authentication, and strict RBAC security policies to protect mission-critical platforms."
    }
  ];

  const quickStats = [
    { label: "Financial Records Analyzed", value: "10,000+", note: "Bluestock Fintech" },
    { label: "ML Model Prediction Rate", value: "90%+", note: "Scikit-Learn & PyTorch" },
    { label: "Docker Multi-Service QA", value: "99.6%", note: "260+ Automated Tests" },
    { label: "Degree CGPA / Intermediate", value: "95.5%", note: "New Vision / Amrita" }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400 text-black font-mono text-xs uppercase tracking-widest font-bold mb-3 border border-yellow-500 shadow-sm">
            <Sparkles size={13} className="text-black" />
            Engineering Philosophy
          </div>
          <h2 className="section-title mb-4">
            Engineering with <span className="yellow-highlight">purpose & precision.</span>
          </h2>
          <p className="text-zinc-600 max-w-4xl text-base sm:text-lg leading-relaxed">
            I combine academic rigor in Computer Science with real-world engineering experience to design scalable software, automated pipelines, and intelligent AI applications.
          </p>
        </div>

        {/* Narrative & Profile Meta - Expanded Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Narrative with Highlight Strip */}
          <motion.div
            className="lg:col-span-8 luxe-card p-7 sm:p-9 bg-white border border-zinc-200 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-100">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-zinc-950" />
                  The Journey So Far
                </h3>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                  Amrita Vishwa Vidyapeetham • 2023–2027
                </span>
              </div>

              <div className="space-y-4 text-zinc-700 text-base leading-relaxed">
                <p>
                  Currently pursuing my <span className="text-zinc-950 font-bold">B.Tech in Computer Science and Engineering</span> at <span className="text-zinc-950 font-bold underline decoration-yellow-400 decoration-2">Amrita Vishwa Vidyapeetham, Coimbatore</span> (2023–2027), I have developed a strong foundation in Data Structures, Algorithms, Distributed Systems, and Machine Learning.
                </p>
                <p>
                  During my internship at <span className="text-zinc-950 font-bold">Bluestock Fintech</span>, I built stock market analysis tools processing over <span className="bg-yellow-200 text-black font-bold px-1.5 py-0.5 rounded">10,000+ financial records</span> and engineered ML prediction models that achieved <span className="bg-yellow-200 text-black font-bold px-1.5 py-0.5 rounded">90%+ prediction accuracy</span> for analytical recommendations.
                </p>
                <p>
                  Beyond code, I serve as an <span className="text-zinc-950 font-bold">NSS Coordinator</span>, leading community service camps, blood donation drives, and literacy campaigns. I believe true engineering brilliance lies in utilizing technology as an engine for societal progress.
                </p>
              </div>
            </div>

            {/* Quick Metrics Strip Inside Narrative */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-zinc-100">
              {quickStats.map((stat) => (
                <div key={stat.label} className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/80">
                  <div className="text-xl sm:text-2xl font-black font-mono text-zinc-950 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span>{stat.value}</span>
                  </div>
                  <div className="text-[11px] font-bold text-zinc-800 mt-1 leading-snug">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
                    {stat.note}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Quick Profile & Academic Highlights */}
          <motion.div
            className="lg:col-span-4 flex flex-col justify-between gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {/* Quick Profile Card */}
            <div className="luxe-card p-6 bg-white border border-zinc-200 flex-1">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-100">
                <h4 className="font-mono text-xs text-zinc-950 uppercase tracking-widest font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-sm" />
                  Engineering Profile
                </h4>
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm">
                <li className="flex items-start gap-3 text-zinc-700">
                  <GraduationCap size={18} className="text-yellow-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 text-[11px] font-mono block">DEGREE</span>
                    <strong className="text-zinc-950">B.Tech CSE (2023–2027)</strong>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-zinc-700">
                  <Building2 size={18} className="text-zinc-950 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 text-[11px] font-mono block">UNIVERSITY</span>
                    <strong className="text-zinc-950">Amrita Vishwa Vidyapeetham</strong>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-zinc-700">
                  <MapPin size={18} className="text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 text-[11px] font-mono block">LOCATION & TIMEZONE</span>
                    <strong className="text-zinc-950">Hyderabad, India (IST)</strong>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-zinc-700">
                  <Cpu size={18} className="text-yellow-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 text-[11px] font-mono block">SPECIALIZATION</span>
                    <strong className="text-zinc-950">Full-Stack SaaS & Applied AI</strong>
                  </div>
                </li>
              </ul>
            </div>

            {/* Academic Track Record Card */}
            <div className="p-5 rounded-2xl bg-yellow-50 border-2 border-yellow-300 shadow-sm">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-950 font-bold uppercase tracking-wider mb-2">
                <Award size={15} className="text-black" />
                Academic Track Record
              </div>
              <p className="text-xs text-zinc-800 leading-relaxed font-medium">
                <strong className="text-black">95.5%</strong> in Intermediate Board Examinations • Perfect <strong className="text-black">10.0 CGPA</strong> in Secondary Schooling (SSC Class X).
              </p>
            </div>
          </motion.div>
        </div>

        {/* 4 Feature Pillars Grid - Full Width & Spacious */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="luxe-card p-6 sm:p-7 hover:-translate-y-1.5 group bg-white border border-zinc-200 hover:border-zinc-950 hover:shadow-black-glow flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 ${pillar.color} transition-transform group-hover:scale-110 shadow-sm`}>
                    <pillar.icon size={22} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-yellow-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Yellow Indicator */}
              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 group-hover:text-black transition-colors font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 group-hover:scale-125 transition-transform" />
                <span>Production Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
