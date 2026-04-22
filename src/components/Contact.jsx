import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { GitHub as Github, LinkedIn as Linkedin } from './Icons';
import { personalInfo } from '../data';

const Contact = () => {
  const [state, setState] = React.useState('idle'); // idle | loading | success | error

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
          'Accept': 'application/json'
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
      <div className="absolute inset-0 bg-primary-500/5 blur-[120px] -z-10 rounded-full w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
          Have a question or want to work together? Feel free to reach out through any of the channels below!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-8 h-full">
            <h3 className="text-xl font-bold text-white mb-8">Contact Info</h3>
            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-widest text-[10px]">Email</p>
                  <p className="text-slate-200 font-medium group-hover:text-primary-400 transition-colors text-sm break-all">{personalInfo.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-widest text-[10px]">Phone</p>
                  <p className="text-slate-200 font-medium text-sm">{personalInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-widest text-[10px]">Location</p>
                  <p className="text-slate-200 font-medium text-sm">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800">
              <p className="text-[10px] text-slate-500 mb-6 font-mono uppercase tracking-widest text-center">Follow Me</p>
              <div className="flex justify-center gap-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500/50 hover:bg-slate-900 transition-all">
                  <Github size={18} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-500/50 hover:bg-slate-900 transition-all">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {state === 'success' ? (
            <div className="glass-card p-10 h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6 border border-green-500/20">
                <Send size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-400 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setState('idle')}
                className="btn-secondary"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="glass-card p-10 space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe" 
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Project Inquiry" 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4" 
                  placeholder="How can I help you?" 
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={state === 'loading'}
                className="btn-primary w-full justify-center py-4 text-lg disabled:opacity-50"
              >
                {state === 'loading' ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>
              {state === 'error' && (
                <p className="text-red-400 text-sm text-center">Oops! Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind CSS.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
