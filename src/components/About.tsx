import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Smartphone, Share2, Layers } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: <Smartphone className="w-5 h-5 text-accent-cyan" />,
    title: 'React Native Expertise',
    desc: 'Crafting cross-platform apps with native-level speed, animations, and responsive interactions.',
  },
  {
    icon: <Layers className="w-5 h-5 text-accent-blue" />,
    title: 'Production-Grade Quality',
    desc: 'Writing clean, typed, modular code with rigorous optimization for memory and render cycles.',
  },
  {
    icon: <Share2 className="w-5 h-5 text-purple-400" />,
    title: 'Seamless Integrations',
    desc: 'Deep Linking setups, third-party authentication (Meta, Google), payment systems, and SDK setups.',
  },
  {
    icon: <Shield className="w-5 h-5 text-emerald-400" />,
    title: 'Stability & Monitoring',
    desc: 'Proactive error tracking with Firebase Crashlytics, logging pipelines, and hot-fix deployment.',
  },
];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 relative z-10 w-full max-w-5xl mx-auto px-4"
    >
      <div className="flex flex-col space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
            Architecting <span className="text-gradient-cyan">Mobile Experiences</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />
          <p className="text-secondary-text max-w-xl text-sm md:text-base">
            Bridging the gap between design and high-performance native systems.
          </p>
        </div>

        {/* Bento/Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Description Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl border border-white/10 glass-card p-8 flex flex-col justify-between space-y-6 shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent-cyan">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-display font-semibold uppercase tracking-wider">
                  The Philosophy
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">
                Specialized in building applications published on the Google Play Store and Apple App Store.
              </h3>
              <p className="text-secondary-text text-sm md:text-base leading-relaxed">
                As a React Native Mobile Engineer, I specialize in combining the agility of JavaScript and TypeScript with the robustness of native environments. My core focus lies in performance optimization, custom native-module bridges, offline data persistence, and fluid user interfaces.
              </p>
              <p className="text-secondary-text text-sm md:text-base leading-relaxed">
                I have a strong track record of collaborating in multi-disciplinary teams to deliver software that scales. From implementing appointment scheduling applications to integrating FaceNet and TensorFlow models on devices, I strive for engineering excellence.
              </p>
            </div>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {['React Native', 'TypeScript', 'GraphQL', 'Firebase', 'Deep Linking', 'REST APIs', 'Crashlytics'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-display font-medium text-white/70 bg-white/5 border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 glass-card p-6 flex gap-4 glass-card-hover hover:border-white/20 shadow-lg"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-white text-base">
                    {item.title}
                  </h4>
                  <p className="text-secondary-text text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
