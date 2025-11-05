import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-[var(--bg-parchment)]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-2xl">
          <h1
            className={`font-serif text-5xl sm:text-6xl leading-tight text-white drop-shadow-md transition-all duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Crafting Digital Experiences
          </h1>
          <p
            className={`mt-5 text-lg sm:text-xl text-white/90 transition-all duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '220ms' }}
          >
            Full-Stack Developer building thoughtful, high-performance web applications.
          </p>
          <div
            className={`mt-8 flex gap-3 transition-all duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '340ms' }}
          >
            <a href="#work" className="px-5 py-3 rounded-full bg-white/90 text-gray-900 hover:bg-white transition shadow-sm">View Work</a>
            <a href="#contact" className="px-5 py-3 rounded-full border border-white/40 text-white hover:bg-white/10 transition">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
