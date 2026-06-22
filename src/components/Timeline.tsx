import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ChevronDown, Award, GraduationCap, MapPin } from 'lucide-react';

const TIMELINE_DATA = [
  {
    company: 'Techerudite',
    role: 'Software Developer',
    period: 'Aug 2025 - Present',
    description: 'Developed and maintained a medical industry mobile application featuring secure digital consent workflows and a high-performance appointment booking system for clinics and practitioners. Optimized components and resolved production issues using Firebase Crashlytics.',
    highlights: [
      'Built clinic management features enabling efficient handling of profiles, clients, and treatment-related data.',
      'Optimized React Native components and data handling, significantly improving performance and stability.',
      'Diagnosed and resolved production issues using Firebase Crashlytics.',
      'Managed app publishing and updates on Google Play Store and Apple App Store.',
      'Integrated Instagram authentication via Meta APIs, collaborated with Node.js and GraphQL backend services.',
      'Led teammates through module ownership, code reviews, and technical guidance.',
    ],
    tech: ['React Native', 'GraphQL', 'Firebase Crashlytics', 'Meta APIs', 'Node.js'],
  },
  {
    company: 'La Net Team Software Solutions Pvt. LTD.',
    role: 'Software Developer',
    period: 'Jan 2024 - Aug 2025',
    description: 'Developed cross-platform mobile apps using React Native, focusing on real-time data, scalable architecture, and smooth user experiences. Managed full app lifecycle from requirements gathering to App Store releases.',
    highlights: [
      'Communicated directly with clients to gather requirements, propose solutions, and deliver new features.',
      'Managed full app lifecycle, including bug fixing, performance optimization, and store deployments.',
      'Collaborated with designers to implement pixel-perfect UIs from Figma.',
      'Developed real-time social features, payment integrations (Stripe, Paystack), on-device facial recognition (TensorFlow.js), deep linking, and native Android print modules for HelloCrowd.',
    ],
    tech: ['React Native', 'Stripe / Paystack', 'TensorFlow.js', 'Firebase', 'Native Android / Java'],
  },
];

const EDUCATION_DATA = [
  {
    institution: 'Government Engineering College Patan',
    degree: 'Bachelor of Engineering (B.E) in Computer Science Engineering',
    period: '2021 - 2024',
    location: 'Gujarat, India',
    board: 'Gujarat Technological University (GTU)',
    grade: 'CGPA: 7.95/10',
  },
  {
    institution: 'K.D. Polytechnic Patan',
    degree: 'Diploma in Computer Science Engineering (Diploma-CSE)',
    period: '2018 - 2021',
    location: 'Gujarat, India',
    board: 'Gujarat Technological University (GTU)',
    grade: 'CGPA: 8.8/10',
  },
  {
    institution: 'Shree H.P. High School Unava',
    degree: 'Class X Secondary Education',
    period: '2017 - 2018',
    location: 'Gujarat, India',
    board: 'Gujarat Secondary and Higher Secondary Education Board (GSEB)',
    grade: 'Percentage: 77.5%',
  },
];

export const Timeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-24 relative z-10 w-full max-w-5xl mx-auto px-4"
    >
      <div className="flex flex-col space-y-12">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
            Journey & <span className="text-gradient-cyan">Timeline</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />
          <p className="text-secondary-text max-w-xl text-sm md:text-base">
            My professional career path and educational background.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center">
          <div className="inline-flex rounded-full p-1 bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => {
                setActiveTab('experience');
                setExpandedIndex(0);
              }}
              className={`px-6 py-2.5 rounded-full font-display font-semibold text-sm transition-all duration-300 relative cursor-pointer ${
                activeTab === 'experience' ? 'text-white' : 'text-secondary-text hover:text-white/80'
              }`}
            >
              {activeTab === 'experience' && (
                <motion.span
                  layoutId="activeTabBackground"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-cyan/20 border border-white/10 shadow-inner"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Work Experience
              </span>
            </button>
            <button
              onClick={() => {
                setActiveTab('education');
                setExpandedIndex(0);
              }}
              className={`px-6 py-2.5 rounded-full font-display font-semibold text-sm transition-all duration-300 relative cursor-pointer ${
                activeTab === 'education' ? 'text-white' : 'text-secondary-text hover:text-white/80'
              }`}
            >
              {activeTab === 'education' && (
                <motion.span
                  layoutId="activeTabBackground"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-cyan/20 border border-white/10 shadow-inner"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </span>
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="relative w-full max-w-3xl mx-auto pl-8 md:pl-0 pt-6">
          
          {/* Vertical Connecting Line (Desktop: Center, Mobile: Left) */}
          <div className="absolute top-2 bottom-2 left-[15px] md:left-1/2 w-[2px] bg-gradient-to-b from-accent-blue/40 via-accent-cyan/40 to-transparent transform -translate-x-1/2 -z-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full space-y-16"
            >
              {activeTab === 'experience' ? (
                TIMELINE_DATA.map((item, index) => {
                  const isEven = index % 2 === 0;
                  const isExpanded = expandedIndex === index;

                  return (
                    <div
                      key={item.company}
                      className={`relative flex flex-col md:flex-row items-start ${
                        isEven ? 'md:justify-start' : 'md:justify-end'
                      } w-full`}
                    >
                      {/* Connecting Dot */}
                      <div className="absolute top-6 left-[-25px] md:left-1/2 w-8 h-8 rounded-full border border-accent-cyan/50 bg-[#050816] flex items-center justify-center transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                        <Briefcase className="w-3.5 h-3.5 text-accent-cyan" />
                      </div>

                      {/* Timeline Card */}
                      <motion.div
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
                                Key Responsibilities
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
                })
              ) : (
                EDUCATION_DATA.map((item, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={item.institution}
                      className={`relative flex flex-col md:flex-row items-start ${
                        isEven ? 'md:justify-start' : 'md:justify-end'
                      } w-full`}
                    >
                      {/* Connecting Dot */}
                      <div className="absolute top-6 left-[-25px] md:left-1/2 w-8 h-8 rounded-full border border-accent-blue/50 bg-[#050816] flex items-center justify-center transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                        <GraduationCap className="w-3.5 h-3.5 text-accent-blue" />
                      </div>

                      {/* Timeline Card */}
                      <motion.div
                        className="w-full md:w-[45%] rounded-3xl border border-white/10 glass-card p-6 flex flex-col space-y-4 shadow-xl relative"
                      >
                        {/* Period & Board info */}
                        <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-display font-medium text-accent-blue bg-accent-blue/5 border border-accent-blue/15">
                            <Calendar className="w-3 h-3" />
                            {item.period}
                          </span>
                          <span className="text-[10px] font-display font-bold text-accent-cyan uppercase tracking-wider">
                            {item.grade}
                          </span>
                        </div>

                        {/* Institution Header */}
                        <div className="space-y-1">
                          <h3 className="text-lg font-display font-extrabold text-white tracking-tight leading-snug">
                            {item.institution}
                          </h3>
                          <div className="text-xs font-display font-medium text-secondary-text flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-white/40" />
                            {item.location}
                          </div>
                        </div>

                        <div className="border-t border-white/5 pt-3 space-y-1">
                          <p className="text-sm font-display text-white/90">
                            {item.degree}
                          </p>
                          <p className="text-xs text-secondary-text">
                            {item.board}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  );
                })
              )}
            </motion.div>
          </AnimatePresence>
          
        </div>

      </div>
    </section>
  );
};
