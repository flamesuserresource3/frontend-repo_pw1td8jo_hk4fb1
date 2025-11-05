import { Code, Cpu, Database, Palette } from 'lucide-react';
import { useInView } from './useInView';

export default function About() {
  const { ref, inView } = useInView();

  const base = 'opacity-0 translate-y-5';
  const shown = 'opacity-100 translate-y-0';

  const Skill = ({ icon: Icon, label }) => (
    <div className="p-4 border border-[var(--primary-ink-blue)]/20 rounded-lg bg-white/50 dark:bg-white/[0.02]">
      <div className="flex items-center gap-3">
        <Icon className="text-[var(--primary-ink-blue)]" size={20} />
        <span className="font-sans text-[var(--text-ink)]">{label}</span>
      </div>
    </div>
  );

  return (
    <section id="about" ref={ref} className="relative bg-[var(--bg-parchment)] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`font-serif text-3xl sm:text-4xl text-[var(--text-ink)] transition-all duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${inView ? shown : base}`}>My Philosophy</h2>
        <p className={`mt-4 max-w-3xl text-[var(--text-ink)]/80 transition-all duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${inView ? shown : base}`} style={{ transitionDelay: '120ms' }}>
          I blend the intentionality of an artisan with the precision of engineering. My practice centers on clarity, performance, and human-centered detail—software that reads like a modern manuscript and feels crafted, not cobbled.
        </p>

        <div className={`mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${inView ? shown : base}`} style={{ transitionDelay: '220ms' }}>
          <Skill icon={Code} label="TypeScript / React" />
          <Skill icon={Database} label="MongoDB / SQL" />
          <Skill icon={Cpu} label="Node / FastAPI" />
          <Skill icon={Palette} label="UI/UX Systems" />
        </div>
      </div>
    </section>
  );
}
