import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Server, ShieldCheck, Sparkles, GraduationCap, Building2, MapPin } from 'lucide-react';
import { personalInfo } from '../data';

const About = () => {
  const pillars = [
    {
      title: "Full-Stack & Systems",
      icon: Code2,
      color: "bg-yellow-400 text-black border-yellow-500",
      description: "Building production-grade applications using Next.js 14, React, Go, FastAPI, and Node.js with modular API architecture and high responsiveness."
    },
    {
      title: "Applied Machine Learning",
      icon: Cpu,
      color: "bg-black text-yellow-400 border-black",
      description: "Developing practical predictive pipelines, resume intelligence models, and achieving 90%+ prediction accuracy in fintech recommendation tasks."
    },
    {
      title: "Cloud-Fog & Edge Systems",
      icon: Server,
      color: "bg-yellow-400 text-black border-yellow-500",
      description: "Architecting multi-tier cloud-fog telemetry systems reducing latency by 60% and orchestrating containerized services on Docker & AWS."
    },
    {
      title: "Security & Cryptographic Rigor",
      icon: ShieldCheck,
      color: "bg-black text-yellow-400 border-black",
      description: "Implementing AES-256 encryption, HMAC tamper verification, and RBAC security policies to protect mission-critical digital platforms."
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-black font-mono text-xs uppercase tracking-widest font-bold mb-3 border border-yellow-500 shadow-sm">
            <Sparkles size={12} className="text-black" />
            About Me
          </div>
          <h2 className="section-title mb-4">
            Engineering with <span className="yellow-highlight">purpose & precision.</span>
          </h2>
          <p className="text-zinc-600 max-w-3xl text-base sm:text-lg leading-relaxed">
            I combine academic rigor in Computer Science with real-world engineering experience to design scalable software, automated pipelines, and intelligent AI applications.
          </p>
        </div>

        {/* Narrative & Profile Meta */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          <motion.div
            className="lg:col-span-8 luxe-card p-8 bg-white border border-zinc-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-zinc-950 mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-yellow-600" />
              The Journey So Far
            </h3>
            <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
              <p>
                Currently pursuing my <span className="text-zinc-950 font-bold">B.Tech in Computer Science and Engineering</span> at <span className="text-zinc-900 font-semibold underline decoration-yellow-400 decoration-2">Amrita Vishwa Vidyapeetham, Coimbatore</span> (2023–2027), I have developed a strong foundation in Data Structures, Algorithms, Distributed Systems, and Machine Learning.
              </p>
              <p>
                During my internship at <span className="text-zinc-950 font-bold">Bluestock Fintech</span>, I built stock market analysis tools processing over <span className="bg-yellow-200 text-black font-bold px-1.5 py-0.5 rounded">10,000+ financial records</span> and engineered ML prediction models that achieved <span className="bg-yellow-200 text-black font-bold px-1.5 py-0.5 rounded">90%+ prediction accuracy</span> for analytical recommendations.
              </p>
              <p>
                Beyond code, I serve as an <span className="text-zinc-950 font-bold">NSS Coordinator</span>, leading community service camps, blood donation drives, and literacy campaigns. I believe true engineering brilliance lies in utilizing technology as an engine for societal progress.
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
            <div className="luxe-card p-6 bg-white border border-zinc-200">
              <h4 className="font-mono text-xs text-zinc-950 uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-sm" />
                Quick Profile
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li className="flex items-center gap-3 text-zinc-700">
                  <GraduationCap size={16} className="text-yellow-500 shrink-0" />
                  <span>
                    <strong className="text-zinc-950">Degree:</strong> B.Tech CSE (2023-27)
                  </span>
                </li>
                <li className="flex items-center gap-3 text-zinc-700">
                  <Building2 size={16} className="text-zinc-950 shrink-0" />
                  <span>
                    <strong className="text-zinc-950">University:</strong> Amrita Coimbatore
                  </span>
                </li>
                <li className="flex items-center gap-3 text-zinc-700">
                  <MapPin size={16} className="text-rose-500 shrink-0" />
                  <span>
                    <strong className="text-zinc-950">Location:</strong> Hyderabad, India
                  </span>
                </li>
                <li className="flex items-center gap-3 text-zinc-700">
                  <Cpu size={16} className="text-yellow-600 shrink-0" />
                  <span>
                    <strong className="text-zinc-950">Primary Focus:</strong> Full-Stack & Applied AI
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-yellow-100/70 border border-yellow-300">
              <p className="text-xs font-mono text-zinc-900 font-bold mb-1">
                // ACADEMIC TRACK RECORD
              </p>
              <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                95.5% in Intermediate Board Examinations • Perfect 10.0 CGPA in Schooling.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="luxe-card p-6 hover:-translate-y-1 group bg-white border border-zinc-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 mb-5 ${pillar.color} transition-transform group-hover:scale-110 shadow-sm`}>
                <pillar.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-yellow-600 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
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
