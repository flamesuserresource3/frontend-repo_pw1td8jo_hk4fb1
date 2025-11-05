import { ExternalLink, Github } from 'lucide-react';
import { useInView } from './useInView';

const projects = [
  {
    title: 'Blueprint CMS',
    description: 'A content system designed like an architect\'s studio — modular, performant, and editorially refined.',
    tech: ['React', 'FastAPI', 'MongoDB'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Quill Commerce',
    description: 'Elegant storefront with focus on typography, accessibility, and micro-interactions.',
    tech: ['Vite', 'Stripe', 'Tailwind'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Atelier Analytics',
    description: 'A dashboard that balances clarity and depth, rendering insights at 60fps.',
    tech: ['Next.js', 'D3', 'Serverless'],
    demo: '#',
    code: '#',
  },
];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="work" ref={ref} className="bg-[var(--bg-parchment)] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`font-serif text-3xl sm:text-4xl text-[var(--text-ink)] transition-all duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>Selected Works</h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <article
              key={p.title}
              className={`group border border-[var(--text-ink)]/10 rounded-xl bg-white/60 dark:bg-white/[0.03] p-5 transition-transform duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] hover:-translate-y-1 hover:border-[var(--text-ink)]/25 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${120 + idx * 100}ms` }}
            >
              <h3 className="font-serif text-xl text-[var(--text-ink)]">{p.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-ink)]/80">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border border-[var(--primary-ink-blue)]/30 text-[var(--primary-ink-blue)] bg-[var(--primary-ink-blue)]/5">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href={p.demo} className="inline-flex items-center gap-1 text-[var(--primary-ink-blue)] hover:underline"><ExternalLink size={16}/> Live Demo</a>
                <a href={p.code} className="inline-flex items-center gap-1 text-[var(--primary-ink-blue)] hover:underline"><Github size={16}/> View Code</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
