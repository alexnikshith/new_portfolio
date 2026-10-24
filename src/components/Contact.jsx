import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, Download } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-black font-mono text-xs uppercase tracking-widest font-bold mb-3 border border-yellow-500 shadow-sm">
            <Sparkles size={12} className="text-black" />
            Get In Touch
          </div>
          <h2 className="section-title mb-4">
            Let's build something <span className="yellow-highlight">extraordinary.</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Whether you have an engineering opportunity, want to discuss scalable architectures, or explore collaboration on applied AI systems — I'd love to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxe-card p-8 bg-white border border-zinc-200">
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Direct Channels</h3>
              <p className="text-xs font-mono text-zinc-500 mb-6 font-medium">
                Fastest response via email or LinkedIn
              </p>

              <div className="space-y-4">
                {/* Email with copy button */}
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between gap-3 group hover:border-black transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-yellow-400 border border-yellow-500 flex items-center justify-center text-black shrink-0 font-bold">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Email Address</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-mono font-bold text-zinc-900 hover:text-yellow-600 truncate block transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white hover:bg-yellow-400 text-zinc-700 hover:text-black border border-zinc-300 transition-colors shrink-0 cursor-pointer shadow-sm"
                    title={copied ? "Copied!" : "Copy email to clipboard"}
                    aria-label="Copy email"
                  >
                    {copied ? <Check size={16} className="text-black font-bold" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-black text-yellow-400 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-mono font-bold text-zinc-900 hover:text-yellow-600 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-400 text-black border border-yellow-500 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase font-bold">Location</p>
                    <p className="text-xs sm:text-sm font-mono font-bold text-zinc-900">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-zinc-200">
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3 font-bold">
                  Online Profiles & CV
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white border border-zinc-200 hover:bg-black hover:text-yellow-400 text-zinc-900 flex items-center justify-center gap-2 text-xs font-mono font-bold transition-all shadow-sm"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-white border border-zinc-200 hover:bg-black hover:text-yellow-400 text-zinc-900 flex items-center justify-center gap-2 text-xs font-mono font-bold transition-all shadow-sm"
                  >
                    <Linkedin size={15} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="py-2.5 px-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black border border-yellow-500 flex items-center justify-center gap-1.5 text-xs font-mono font-bold shadow-sm transition-all"
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
            <div className="luxe-card p-8 sm:p-10 bg-white border border-zinc-200">
              <h3 className="text-xl font-bold text-zinc-950 mb-2">Send a Message</h3>
              <p className="text-xs font-mono text-zinc-500 mb-6 font-medium">
                Direct transmission via Formspree integration
              </p>

              {state === 'success' ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-400">
                  <div className="w-16 h-16 rounded-full bg-yellow-400 border border-yellow-500 flex items-center justify-center text-black mb-4 shadow-md shadow-yellow-500/20">
                    <Send size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-950 mb-2">
                    Transmission Dispatched!
                  </h4>
                  <p className="text-zinc-600 text-sm max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out. I've received your message and will respond promptly.
                  </p>
                  <button
                    onClick={() => setState('idle')}
                    className="btn-secondary text-xs font-mono font-bold"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-zinc-900">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ada Lovelace"
                        className="w-full bg-white border-2 border-zinc-200 rounded-xl px-4 py-3 text-zinc-950 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-950 transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold text-zinc-900">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="ada@domain.com"
                        className="w-full bg-white border-2 border-zinc-200 rounded-xl px-4 py-3 text-zinc-950 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-950 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-zinc-900">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Opportunity / Collaboration / Project Discussion"
                      className="w-full bg-white border-2 border-zinc-200 rounded-xl px-4 py-3 text-zinc-950 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-950 transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-zinc-900">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="4"
                      placeholder="Hello Nikshith, I'd like to talk about..."
                      className="w-full bg-white border-2 border-zinc-200 rounded-xl px-4 py-3 text-zinc-950 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-950 transition-all resize-none shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="btn-primary w-full py-4 text-sm font-bold tracking-wide disabled:opacity-50 cursor-pointer"
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
                    <p className="text-rose-600 text-xs font-mono text-center font-bold">
                      Transmission could not be dispatched. Please try again or email directly at {personalInfo.email}.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2 font-semibold text-zinc-700">
            <span className="w-2 h-2 rounded-full bg-yellow-400 border border-yellow-600" />
            <span>Systems Normal • All Telemetry Operational</span>
          </div>

          <p className="font-medium text-zinc-600">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React, Next.js tech, Tailwind CSS & Framer Motion.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
