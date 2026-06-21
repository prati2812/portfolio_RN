import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ChevronDown, Award } from 'lucide-react';

const TIMELINE_DATA = [
  {
    company: 'Techerudite',
    role: 'Software Developer',
    period: 'Aug 2025 - Present',
    description: 'Leading mobile app development initiatives with a focus on React Native architecture, high-load APIs, and scalable user authentication.',
    highlights: [
      'Medical industry mobile applications with HIPAA compliance considerations.',
      'Complex appointment booking systems with offline scheduling support.',
      'Seamless Instagram authentication via Meta APIs & Graph API integration.',
      'React Native render cycle and package-size performance optimization.',
      'Proactive stability tracking and logging via Firebase Crashlytics.',
      'GraphQL integrations using Apollo Client and schema-first architectures.',
    ],
    tech: ['React Native', 'GraphQL', 'Firebase Crashlytics', 'Meta APIs', 'Apollo Client'],
  },
  {
    company: 'La Net Team Software Solutions',
    role: 'Software Developer',
    period: 'Jan 2024 - Aug 2025',
    description: 'Developed and published cross-platform mobile apps, handled direct client communications, and delivered pixel-perfect client portals.',
    highlights: [
      'Managed direct client communication for requirements gathering and iteration demos.',
      'Cross-platform development for Android and iOS systems with 99%+ crash-free rates.',
      'Performance profiling, resolving memory leaks, and native thread scheduling.',
      'App Store and Play Store releases, managing provisioning profiles and signing keys.',
      'Pixel-perfect UI implementation using Figma designs and custom component libraries.',
    ],
    tech: ['React Native', 'iOS/Swift', 'Android/Java', 'App Publishing', 'Performance Profiling'],
  },
];

export const Timeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-24 relative z-10 w-full max-w-5xl mx-auto px-4"
    >
      <div className="flex flex-col space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
            Professional <span className="text-gradient-cyan">Timeline</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />
          <p className="text-secondary-text max-w-xl text-sm md:text-base">
            A journey of engineering robust cross-platform mobile systems.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative w-full max-w-3xl mx-auto pl-8 md:pl-0">
          
          {/* Vertical Connecting Line (Desktop: Center, Mobile: Left) */}
          <div className="absolute top-2 bottom-2 left-[15px] md:left-1/2 w-[2px] bg-gradient-to-b from-accent-blue/40 via-accent-cyan/40 to-transparent transform -translate-x-1/2 -z-10" />

          {TIMELINE_DATA.map((item, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={item.company}
                className={`relative mb-16 last:mb-0 flex flex-col md:flex-row items-start ${
                  isEven ? 'md:justify-start' : 'md:justify-end'
                } w-full`}
              >
                {/* Connecting Dot (Desktop: Center, Mobile: Left) */}
                <div className="absolute top-6 left-[-25px] md:left-1/2 w-8 h-8 rounded-full border border-accent-cyan/50 bg-[#050816] flex items-center justify-center transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Briefcase className="w-3.5 h-3.5 text-accent-cyan" />
                </div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className={`w-full md:w-[45%] rounded-3xl border border-white/10 glass-card p-6 flex flex-col space-y-4 shadow-xl relative cursor-pointer glass-card-hover ${
                    isExpanded ? 'border-accent-cyan/30' : ''
                  }`}
                  onClick={() => toggleExpand(index)}
                >
                  {/* Period badge */}
                  <div className="flex items-center justify-between w-full">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-display font-medium text-accent-blue bg-accent-blue/5 border border-accent-blue/15">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-secondary-text transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </div>

                  {/* Header Title */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-extrabold text-white tracking-tight leading-snug">
                      {item.company}
                    </h3>
                    <div className="text-sm font-display font-semibold text-accent-cyan uppercase tracking-wider">
                      {item.role}
                    </div>
                  </div>

                  <p className="text-secondary-text text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tech stack quick tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-display font-medium text-white/50 bg-white/5 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Highlights */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-white/5 pt-4 space-y-3"
                      >
                        <div className="text-xs font-display font-semibold tracking-wider uppercase text-white/70 flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-accent-cyan" />
                          Key Accomplishments
                        </div>
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-sm text-secondary-text leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
          
        </div>

      </div>
    </section>
  );
};
