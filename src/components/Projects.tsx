import React from 'react';
import { motion } from 'framer-motion';
import { GitFork, Smartphone, CreditCard, Shield, Scan, Sparkles } from 'lucide-react';

const FEATURED_PROJECT = {
  title: 'HelloCrowd',
  subtitle: 'Featured Enterprise Application',
  desc: 'A high-performance social networking and event check-in platform. Integrates advanced device-side machine learning, secure payments, offline-first sync pipelines, and real-time triggers.',
  tags: ['React Native', 'TensorFlow.js', 'FaceNet', 'Firebase', 'Stripe', 'Paystack', 'Deep Linking'],
  features: [
    { icon: <Smartphone className="w-4 h-4 text-accent-cyan" />, text: 'Social media feed with optimized image cache' },
    { icon: <CreditCard className="w-4 h-4 text-accent-blue" />, text: 'Multi-processor Stripe and Paystack integrations' },
    { icon: <Scan className="w-4 h-4 text-emerald-400" />, text: 'FaceNet & TensorFlow.js device facial recognition' },
    { icon: <Sparkles className="w-4 h-4 text-amber-400" />, text: 'Offline support with local DB sync & Deep Linking' },
    { icon: <Shield className="w-4 h-4 text-purple-400" />, text: 'QR Check-In & Firebase Realtime Notifications' },
  ],
};

const ADDITIONAL_PROJECTS = [
  {
    title: 'Sorting Visualizer',
    desc: 'An interactive web dashboard visualizing step-by-step sorting algorithm processes. Highly performant with controls for animation speed and array sizes.',
    tags: ['React', 'TypeScript', 'CSS Transitions', 'Algorithms'],
    github: 'https://github.com/pratik-prajapati',
  },
  {
    title: 'Women Safety App',
    desc: 'A critical utility mobile application featuring rapid SMS coordinates sharing, shake-to-alert triggers, and ambient audio recording.',
    tags: ['React Native', 'GPS Tracking', 'Native SMS', 'Background Services'],
    github: 'https://github.com/pratik-prajapati',
  },
  {
    title: 'Expense Manager',
    desc: 'A personal finance dashboard. Features transaction tracking, custom category categorization, and local SQLite data backups.',
    tags: ['React Native', 'SQLite', 'Reanimated 2', 'Data Visualizations'],
    github: 'https://github.com/pratik-prajapati',
  },
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 relative z-10 w-full max-w-5xl mx-auto px-4"
    >
      <div className="flex flex-col space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
            Engineering <span className="text-gradient-cyan">Showcase</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />
          <p className="text-secondary-text max-w-xl text-sm md:text-base">
            A hand-picked selection of production applications and technical side-projects.
          </p>
        </div>

        {/* Featured Project Card: HelloCrowd */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 glass-card p-8 lg:p-12 shadow-2xl relative overflow-hidden group"
        >
          {/* Accent glow on top-right */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent-blue/10 blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Project Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-display font-bold uppercase tracking-widest text-accent-cyan">
                  {FEATURED_PROJECT.subtitle}
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight leading-none">
                  {FEATURED_PROJECT.title}
                </h3>
              </div>

              <p className="text-secondary-text text-sm md:text-base leading-relaxed">
                {FEATURED_PROJECT.desc}
              </p>

              {/* Core features listing */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {FEATURED_PROJECT.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-white/80">
                    <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      {feat.icon}
                    </div>
                    <span>{feat.text}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-4">
                {FEATURED_PROJECT.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-[11px] font-display font-semibold text-accent-blue bg-accent-blue/5 border border-accent-blue/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://github.com/pratik-prajapati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-display font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <GitFork className="w-4 h-4" />
                  View Repository
                </a>
              </div>

            </div>

            {/* Project Visual Mockup (Right) */}
            <div className="lg:col-span-5 flex justify-center items-center py-6 relative">
              <div className="relative w-56 h-96 rounded-[36px] border-4 border-white/15 bg-[#050816] overflow-hidden shadow-2xl flex flex-col p-3">
                {/* Dynamic Island Notch */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-black flex items-center justify-center z-20">
                  <div className="w-2 h-2 rounded-full bg-slate-900 absolute right-4" />
                </div>
                
                {/* Mockup screen content */}
                <div className="flex-1 w-full bg-slate-950 rounded-[28px] overflow-hidden relative flex flex-col p-4 pt-6 space-y-4">
                  {/* Mock Profile Card inside screen */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-3 shadow-inner mt-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan" />
                      <div className="space-y-1">
                        <div className="w-16 h-1.5 bg-white/30 rounded" />
                        <div className="w-10 h-1 bg-white/15 rounded" />
                      </div>
                    </div>
                    <div className="w-full h-24 rounded-lg bg-gradient-to-b from-accent-blue/20 to-transparent border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:scale-102 transition-transform">
                      <Scan className="w-8 h-8 text-accent-cyan animate-pulse" />
                      <div className="absolute top-0 inset-x-0 h-0.5 bg-accent-cyan shadow-[0_0_8px_#22D3EE] animate-bounce" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="w-full h-2 bg-white/15 rounded" />
                    <div className="w-3/4 h-2 bg-white/10 rounded" />
                    <div className="w-1/2 h-2 bg-white/5 rounded" />
                  </div>
                </div>

                {/* Home Indicator bar */}
                <div className="w-24 h-1 bg-white/30 rounded-full mx-auto mt-2" />
              </div>
            </div>

          </div>
        </motion.div>

        {/* Grid of Additional Projects */}
        <div className="space-y-8">
          <h4 className="text-xl font-display font-extrabold text-white tracking-tight pl-2">
            More Engineering Projects
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDITIONAL_PROJECTS.map((proj, idx) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl border border-white/10 glass-card p-6 flex flex-col justify-between space-y-4 shadow-xl glass-card-hover"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h5 className="font-display font-extrabold text-white text-lg tracking-tight">
                      {proj.title}
                    </h5>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-text hover:text-white transition-colors"
                    >
                      <GitFork className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-secondary-text text-xs md:text-sm leading-relaxed">
                    {proj.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-display font-semibold text-white/60 bg-white/5 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
