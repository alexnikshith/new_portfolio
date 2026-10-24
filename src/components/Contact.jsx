import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, ExternalLink, Download } from 'lucide-react';
import { GitHub as Github, LinkedIn as Linkedin } from './Icons';
import { personalInfo } from '../data';

const Contact = () => {
  const [state, setState] = useState('idle'); // idle | loading | success | error
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState('loading');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjgjalnd", {
        method: "POST",
        body: data,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setState('success');
        form.reset();
      } else {
        setState('error');
      }
    } catch (error) {
      setState('error');
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-primary-600/5 blur-[160px] -z-10 rounded-full w-2/3 h-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles size={12} />
            Get In Touch
          </div>
          <h2 className="section-title mb-4">
            Let's build something <span className="cyber-gradient-text">extraordinary.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Whether you have an engineering opportunity, want to discuss scalable architectures, or explore collaboration on applied AI systems — I'd love to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="cyber-card p-8 bg-cyber-900/80">
              <h3 className="text-xl font-bold text-white mb-2">Direct Channels</h3>
              <p className="text-xs font-mono text-slate-400 mb-6">
                Fastest response via email or LinkedIn
              </p>

              <div className="space-y-4">
                {/* Email with copy button */}
                <div className="p-4 rounded-xl bg-cyber-950/80 border border-slate-800 flex items-center justify-between gap-3 group hover:border-primary-500/30 transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-slate-500 uppercase">Email Address</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-mono text-slate-200 hover:text-primary-300 truncate block transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-cyber-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/60 transition-colors shrink-0 cursor-pointer"
                    title={copied ? "Copied!" : "Copy email to clipboard"}
                    aria-label="Copy email"
                  >
                    {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-cyber-950/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-300 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-cyber-950/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase">Location</p>
                    <p className="text-xs sm:text-sm font-mono text-slate-200">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-3">
                  Online Profiles & CV
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-cyber-950 border border-slate-800 hover:border-primary-500/40 text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-all"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-cyber-950 border border-slate-800 hover:border-primary-500/40 text-slate-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono transition-all"
                  >
                    <Linkedin size={15} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="py-2.5 px-3.5 rounded-xl bg-primary-600/20 border border-primary-500/30 hover:bg-primary-600/40 text-primary-300 flex items-center justify-center gap-1.5 text-xs font-mono transition-all"
                  >
                    <Download size={14} />
                    <span>CV</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <div className="cyber-card p-8 sm:p-10 bg-cyber-900/80">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs font-mono text-slate-400 mb-6">
                Direct transmission via Formspree integration
              </p>

              {state === 'success' ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-400">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-lg shadow-emerald-500/20">
                    <Send size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Transmission Dispatched!
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out. I've received your message and will respond promptly.
                  </p>
                  <button
                    onClick={() => setState('idle')}
                    className="btn-secondary text-xs font-mono"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ada Lovelace"
                        className="w-full bg-cyber-950/80 border border-slate-700/80 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="ada@domain.com"
                        className="w-full bg-cyber-950/80 border border-slate-700/80 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Opportunity / Collaboration / Project Discussion"
                      className="w-full bg-cyber-950/80 border border-slate-700/80 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      placeholder="Hello Nikshith, I'd like to talk about..."
                      className="w-full bg-cyber-950/80 border border-slate-700/80 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="btn-primary w-full py-4 text-sm font-semibold tracking-wide disabled:opacity-50 cursor-pointer"
                  >
                    {state === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting Message...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Message</span>
                        <Send size={16} />
                      </span>
                    )}
                  </button>

                  {state === 'error' && (
                    <p className="text-rose-400 text-xs font-mono text-center">
                      Transmission could not be dispatched. Please try again or email directly at {personalInfo.email}.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Cyber Footer */}
        <footer className="mt-24 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Systems Normal • All Telemetry Operational</span>
          </div>

          <p>
            © {new Date().getFullYear()} {personalInfo.name}. Built with React, Tailwind CSS & Framer Motion.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
