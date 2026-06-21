import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Database, Cloud, Wrench, CheckCircle } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Mobile Architecture',
    icon: <Smartphone className="w-5 h-5 text-accent-cyan" />,
    skills: [
      { name: 'React Native', level: 'Expert' },
      { name: 'Android SDK', level: 'Advanced' },
      { name: 'Kotlin', level: 'Intermediate' },
      { name: 'Java', level: 'Advanced' },
    ],
  },
  {
    title: 'Frontend Web',
    icon: <Monitor className="w-5 h-5 text-accent-blue" />,
    skills: [
      { name: 'React.js', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'JavaScript', level: 'Expert' },
      { name: 'HTML5 / CSS3', level: 'Expert' },
    ],
  },
  {
    title: 'Backend Services',
    icon: <Database className="w-5 h-5 text-indigo-400" />,
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'GraphQL', level: 'Advanced' },
      { name: 'REST APIs', level: 'Expert' },
      { name: 'Express.js', level: 'Advanced' },
    ],
  },
  {
    title: 'Cloud & Database',
    icon: <Cloud className="w-5 h-5 text-amber-400" />,
    skills: [
      { name: 'Firebase', level: 'Expert' },
      { name: 'Cloud Firestore', level: 'Expert' },
      { name: 'Realtime DB', level: 'Expert' },
      { name: 'Authentication', level: 'Expert' },
      { name: 'Crashlytics', level: 'Expert' },
    ],
  },
  {
    title: 'Developer Tools',
    icon: <Wrench className="w-5 h-5 text-emerald-400" />,
    skills: [
      { name: 'Git & GitHub', level: 'Expert' },
      { name: 'Figma', level: 'Advanced' },
      { name: 'Xcode', level: 'Advanced' },
      { name: 'Android Studio', level: 'Advanced' },
      { name: 'VS Code', level: 'Expert' },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 relative z-10 w-full max-w-5xl mx-auto px-4"
    >
      <div className="flex flex-col space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
            Skills & <span className="text-gradient-cyan">Competency</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />
          <p className="text-secondary-text max-w-xl text-sm md:text-base">
            A breakdown of technologies, frameworks, and developer environments.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-3xl border border-white/10 glass-card p-6 flex flex-col space-y-4 shadow-xl glass-card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  {cat.icon}
                </div>
                <h3 className="font-display font-extrabold text-white text-lg tracking-tight">
                  {cat.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex-1 flex flex-col gap-3 pt-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/skill flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-cyan opacity-40 group-hover/skill:opacity-100 transition-opacity" />
                      <span className="text-sm font-display text-white/90 group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-display font-bold tracking-wider text-secondary-text group-hover/skill:text-accent-blue uppercase transition-colors">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Quick Stats Bento-Like Extra Grid Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: SKILL_CATEGORIES.length * 0.1 }}
            className="md:col-span-2 lg:col-span-1 rounded-3xl border border-white/10 glass-card p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent-blue/10 blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

            <div className="space-y-3 z-10">
              <h3 className="font-display font-extrabold text-white text-lg tracking-tight">
                Continuous Improvement
              </h3>
              <p className="text-secondary-text text-sm leading-relaxed">
                Striving to keep pace with rapid mobile updates. Constantly optimizing thread behaviors, bridging protocols, and investigating advanced React Native native compiler architectures.
              </p>
            </div>
            
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-display font-medium text-accent-cyan z-10">
              <span>Always Learning</span>
              <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_#22D3EE]" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
