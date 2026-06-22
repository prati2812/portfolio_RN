import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FileText, ArrowRight, Mail, Smartphone, Code, Cpu, Database, Cloud } from 'lucide-react';

export const Hero: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for the 3D card tilt effect
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.4 };
  const rX = useSpring(rotateX, springConfig);
  const rY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Rotate card (max 15 degrees)
    rotateX.set(-mouseY * 20);
    rotateY.set(mouseX * 20);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  // Glass card shine overlay effect
  const shineX = useTransform(rY, [-10, 10], ['-30%', '130%']);
  const shineY = useTransform(rX, [-10, 10], ['-30%', '130%']);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="min-height-[90vh] pt-32 pb-16 flex flex-col justify-center items-center relative z-10 w-full max-w-5xl mx-auto px-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_#22D3EE]" />
            <span className="text-xs font-display font-medium text-accent-blue tracking-wide uppercase">
              2.5+ Years Experience
            </span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-none text-white"
            >
              Pratik <br className="hidden md:inline" />
              <span className="text-gradient-cyan">Prajapati</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl md:text-3xl font-display font-semibold tracking-tight text-white/80"
            >
              React Native Mobile Engineer
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg text-secondary-text max-w-lg leading-relaxed"
          >
            I architect and build high-performance, pixel-perfect, and secure mobile applications for iOS and Android. Specialized in React Native, complex animations, Native Modules, and cloud architectures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-white bg-gradient-to-r from-accent-blue to-accent-cyan hover:opacity-95 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 flex items-center gap-2 cursor-pointer group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://drive.google.com/file/d/1yKvwjin6xzHhtiZVMgt0d-Abe94etSL2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-white border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-inner"
            >
              <FileText className="w-4 h-4 text-accent-blue" />
              Download Resume
            </a>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3.5 rounded-xl font-display font-semibold text-sm text-secondary-text hover:text-white border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Hero Right: 3D Tilting Glass Profile Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-10 w-full">
          
          {/* Drifting glow behind card */}
          <div className="absolute w-72 h-72 rounded-full bg-accent-blue/10 blur-[80px] -z-10 animate-pulse" />

          {/* Floating Technology Badges */}
          {/* React Native Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-4 left-[10%] z-20 px-3.5 py-2 rounded-xl border border-white/10 glass-panel shadow-lg flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4 text-accent-blue" />
            <span className="text-xs font-display font-medium text-white">React Native</span>
          </motion.div>

          {/* Android Badge */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-6 left-[2%] z-20 px-3.5 py-2 rounded-xl border border-white/10 glass-panel shadow-lg flex items-center gap-2"
          >
            <Code className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-display font-medium text-white">Android / Java</span>
          </motion.div>

          {/* iOS Badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-20 right-[5%] z-20 px-3.5 py-2 rounded-xl border border-white/10 glass-panel shadow-lg flex items-center gap-2"
          >
            <Cpu className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-display font-medium text-white">iOS / Swift</span>
          </motion.div>

          {/* Firebase Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute bottom-16 right-[10%] z-20 px-3.5 py-2 rounded-xl border border-white/10 glass-panel shadow-lg flex items-center gap-2"
          >
            <Cloud className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-display font-medium text-white">Firebase</span>
          </motion.div>

          {/* 3D Tilt Card */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: rX,
              rotateY: rY,
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-72 h-96 rounded-3xl border border-white/10 glass-card relative overflow-hidden flex flex-col justify-between p-6 cursor-grab active:cursor-grabbing group shadow-2xl"
          >
            {/* Liquid Shine Overlay */}
            <motion.div
              style={{
                left: shineX,
                top: shineY,
              }}
              className="absolute w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 pointer-events-none"
            />

            {/* Card Header */}
            <div className="flex items-center justify-between w-full z-10" style={{ transform: 'translateZ(30px)' }}>
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <div className="h-4 px-2.5 rounded-full border border-white/10 bg-white/5 text-[9px] font-display font-semibold tracking-widest uppercase text-white/60 flex items-center justify-center">
                ACTIVE STATUS
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </div>

            {/* Card Graphic */}
            <div
              className="flex-1 flex items-center justify-center py-4 relative z-10"
              style={{ transform: 'translateZ(50px)' }}
            >
              {/* Phone Mockup or glowing symbol */}
              <div className="w-32 h-56 rounded-2xl border border-white/15 bg-slate-950/40 relative overflow-hidden flex flex-col items-center justify-between p-2 shadow-inner">
                {/* Notch */}
                <div className="w-12 h-3.5 rounded-full bg-black/90 border border-white/5 absolute top-1 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                </div>
                
                {/* Visual Content */}
                <div className="flex-1 w-full flex flex-col items-center justify-center space-y-2 mt-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-accent-blue/20 to-accent-cyan/20 border border-accent-cyan/20 flex items-center justify-center shadow-lg relative group-hover:scale-105 transition-transform duration-300">
                    <Smartphone className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div className="w-16 h-1 bg-white/10 rounded-full" />
                  <div className="w-10 h-1 bg-white/5 rounded-full" />
                </div>

                {/* Footer Bar */}
                <div className="w-10 h-1 bg-white/20 rounded-full mb-1" />
              </div>
            </div>

            {/* Card Footer Info */}
            <div className="z-10 space-y-1" style={{ transform: 'translateZ(40px)' }}>
              <div className="text-[10px] font-display font-semibold tracking-wider text-accent-cyan uppercase">
                Mobile Architect
              </div>
              <div className="text-base font-display font-bold text-white tracking-tight leading-none">
                Pratik Prajapati
              </div>
              <div className="text-[11px] text-secondary-text flex items-center gap-1.5">
                <Database className="w-3 h-3 text-white/40" />
                Cross-platform Expert
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
