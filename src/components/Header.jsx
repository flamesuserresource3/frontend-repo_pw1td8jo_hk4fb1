import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Header({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkBase = 'text-[var(--text-ink)]/80 hover:text-[var(--text-ink)] transition-colors';

  return (
    <header className={`sticky top-0 z-50 ${scrolled ? 'backdrop-blur-md bg-[color:var(--bg-parchment)]/70 dark:bg-[color:var(--bg-parchment)]/30 border-b border-black/5 dark:border-white/10' : ''}`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-serif text-xl tracking-wide text-[var(--text-ink)]">
          <span className="font-[700]">Your</span> <span className="font-[300] italic">Name</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className={linkBase}>Home</a>
          <a href="#about" className={linkBase}>About</a>
          <a href="#work" className={linkBase}>Work</a>
          <a href="#contact" className={linkBase}>Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="h-9 w-9 grid place-items-center rounded-full border border-black/10 dark:border-white/10 text-[var(--text-ink)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border bg-[var(--accent-gold)]/10 border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-white transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
