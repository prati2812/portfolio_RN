
import { BackgroundGlows } from './components/BackgroundGlows';
import { LiquidGlassNavbar } from './components/LiquidGlassNavbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#050816]">
      {/* Visual background layers */}
      <BackgroundGlows />

      {/* Floating navigation */}
      <LiquidGlassNavbar />

      {/* Main sections */}
      <main className="flex-1 w-full flex flex-col relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-slate-950/20 backdrop-blur-md py-12 px-4 w-full">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="font-display font-bold text-base text-white">
              Pratik Prajapati
            </span>
            <span className="text-xs text-secondary-text">
              React Native Mobile Engineer • 2.5+ Years Experience
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-secondary-text font-display">
            <button
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Back to Top
            </button>
            <span>•</span>
            <a
              href="https://github.com/prati2812"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/pratik-prajapati-b50744248/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
  >
              LinkedIn
            </a>
          </div>

          <div className="text-[10px] text-white/30 font-display">
            © {new Date().getFullYear()} Pratik.dev. Built with React & Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
