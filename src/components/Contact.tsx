import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, GitFork, Link, Code2, Send, CheckCircle2 } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    name: 'Email',
    icon: <Mail className="w-5 h-5 text-accent-cyan" />,
    url: 'mailto:pratikprajapati8733@gmail.com',
    value: 'pratikprajapati8733@gmail.com',
  },
  {
    name: 'GitHub',
    icon: <GitFork className="w-5 h-5 text-white" />,
    url: 'https://github.com/prati2812',
    value: 'github.com/prati2812',
  },
  {
    name: 'LinkedIn',
    icon: <Link className="w-5 h-5 text-accent-blue" />,
    url: 'https://www.linkedin.com/in/pratik-prajapati-b50744248/',
    value: 'linkedin.com/in/pratik-prajapati',
  },
  {
    name: 'LeetCode',
    icon: <Code2 className="w-5 h-5 text-amber-500" />,
    url: 'https://leetcode.com/u/pratik28_12/',
    value: 'leetcode.com/u/pratik28_12',
  },
];

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSending(true);
    // Simulate submission
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 relative z-10 w-full max-w-5xl mx-auto px-4"
    >
      <div className="flex flex-col space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
            Let's <span className="text-gradient-cyan">Connect</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />
          <p className="text-secondary-text max-w-xl text-sm md:text-base">
            Reach out for opportunities, app development consulting, or technical discussions.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h3 className="text-xl font-display font-extrabold text-white tracking-tight">
              Get in Touch
            </h3>
            <p className="text-secondary-text text-sm leading-relaxed">
              If you have any mobile application project to build, optimize, or deploy, feel free to drop a message or reach out on social networks. I typically reply within 24 hours.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/10 glass-card glass-card-hover shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <div className="space-y-0.5 overflow-hidden">
                    <div className="text-[10px] font-display font-bold uppercase tracking-wider text-secondary-text group-hover:text-accent-cyan transition-colors">
                      {link.name}
                    </div>
                    <div className="text-sm font-display text-white/95 truncate">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl border border-white/10 glass-card p-8 lg:p-10 shadow-2xl relative"
          >
            {/* Background Glow */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {/* Name field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-display font-bold uppercase tracking-wider text-white/70">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-display font-bold uppercase tracking-wider text-white/70">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                />
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-display font-bold uppercase tracking-wider text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Describe your mobile project requirements..."
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm resize-none"
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                disabled={isSending || isSent}
                className={`w-full py-4 rounded-xl font-display font-semibold text-sm text-white flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                  isSent
                    ? 'bg-emerald-500 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-gradient-to-r from-accent-blue to-accent-cyan hover:opacity-95 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                }`}
              >
                {isSending ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Message Sent Successfully
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
