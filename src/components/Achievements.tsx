import React from 'react';
import { motion } from 'framer-motion';
import { Award, Smartphone, Users, Zap, Cloud, Code2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="py-24 relative z-10 w-full max-w-5xl mx-auto px-4"
    >
      <div className="flex flex-col space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
            Milestones & <span className="text-gradient-cyan">Achievements</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-full" />
          <p className="text-secondary-text max-w-xl text-sm md:text-base">
            Quantifiable impact and technical capabilities demonstrated across projects.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: 2.5+ Years Experience (Small Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 glass-card p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group glass-card-hover"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-accent-cyan">Experience</span>
              <Award className="w-5 h-5 text-accent-cyan" />
            </div>
            <div className="space-y-2 mt-8">
              <div className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-none">
                2.5+ <span className="text-accent-cyan text-2xl font-semibold">Years</span>
              </div>
              <p className="text-secondary-text text-sm leading-relaxed">
                Building enterprise-grade applications, driving performance profiling, and shipping production mobile releases.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Multiple Apps Published (Wide Card - span 2 on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 rounded-3xl border border-white/10 glass-card p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl relative overflow-hidden group glass-card-hover"
          >
            <div className="space-y-4 max-w-md">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-accent-blue">Deployments</span>
              <h3 className="text-3xl font-display font-extrabold text-white tracking-tight leading-none">
                Multiple Apps Live
              </h3>
              <p className="text-secondary-text text-sm leading-relaxed">
                Proven track record publishing applications to the Apple App Store and Google Play Store, managing test tracks, provisioning, and store assets.
              </p>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-4 rounded-2xl shadow-inner">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-white/10 shadow-lg">
                  <Smartphone className="w-6 h-6 text-accent-cyan" />
                </div>
                <span className="text-[10px] font-display font-bold text-white/60 mt-1 uppercase">App Store</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-white/10 shadow-lg">
                  <Smartphone className="w-6 h-6 text-accent-blue" />
                </div>
                <span className="text-[10px] font-display font-bold text-white/60 mt-1 uppercase">Play Store</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Firebase Expert (Small Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl border border-white/10 glass-card p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group glass-card-hover"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-amber-400">Services</span>
              <Cloud className="w-5 h-5 text-amber-400" />
            </div>
            <div className="space-y-2 mt-8">
              <div className="text-3xl font-display font-extrabold text-white tracking-tight leading-none">
                Firebase Expert
              </div>
              <p className="text-secondary-text text-sm leading-relaxed">
                Leveraging Firestore, Realtime Database, Cloud Functions, and Firebase Auth to engineer offline-first synchronization.
              </p>
            </div>
          </motion.div>

          {/* Card 4: React Native Specialist (Small Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl border border-white/10 glass-card p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group glass-card-hover"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-emerald-400">Specialization</span>
              <Zap className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="space-y-2 mt-8">
              <div className="text-3xl font-display font-extrabold text-white tracking-tight leading-none">
                RN Specialist
              </div>
              <p className="text-secondary-text text-sm leading-relaxed">
                Expertise in bridge components, Native Modules, complex animations (Reanimated), deep linking routing, and startup time reductions.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Client Facing Experience (Small Card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-3xl border border-white/10 glass-card p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group glass-card-hover"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-purple-400">Communication</span>
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <div className="space-y-2 mt-8">
              <div className="text-3xl font-display font-extrabold text-white tracking-tight leading-none">
                Client Facing
              </div>
              <p className="text-secondary-text text-sm leading-relaxed">
                Direct engagement with clients for scoping requirements, defining milestones, sprint planning, and system demonstration.
              </p>
            </div>
          </motion.div>

          {/* Card 6: Certifications & Competitive Programming (Wide Card - span 3 on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2 lg:col-span-3 rounded-3xl border border-white/10 glass-card p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl relative overflow-hidden group glass-card-hover"
          >
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-accent-cyan">Certifications & Algorithms</span>
              <h3 className="text-3xl font-display font-extrabold text-white tracking-tight leading-none flex items-center gap-2">
                Java & Problem Solving
              </h3>
              <p className="text-secondary-text text-sm leading-relaxed">
                Earned the Java Certification from HackerRank. Active practitioner of Data Structures & Algorithms, regularly solving challenges on platforms like LeetCode and HackerRank to build optimized, high-performance logic.
              </p>
            </div>
            
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-5 py-4 rounded-2xl shadow-inner self-stretch md:self-auto justify-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-white/10 shadow-lg">
                  <Code2 className="w-6 h-6 text-accent-cyan" />
                </div>
                <span className="text-[10px] font-display font-bold text-white/60 mt-1 uppercase">HackerRank</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-white/10 shadow-lg">
                  <Code2 className="w-6 h-6 text-amber-500" />
                </div>
                <span className="text-[10px] font-display font-bold text-white/60 mt-1 uppercase">LeetCode</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
