import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import { Github, Linkedin } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState('light');

  // Inject Google Fonts, CSS variables, and global styles without editing index.html
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Merriweather:wght@300;400;700;900&display=swap';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.innerHTML = `
      :root { 
        --bg-parchment: #F8F5F1; 
        --text-ink: #2C2C2C; 
        --primary-ink-blue: #3A5A8A; 
        --accent-gold: #C0A06E; 
      }
      .dark { 
        --bg-parchment: #1A1D24; 
        --text-ink: #EAE6E1; 
        --primary-ink-blue: #6A89B8; 
        --accent-gold: #C0A06E; 
      }
      html { scroll-behavior: smooth; }
      body { background: var(--bg-parchment); color: var(--text-ink); }
      h1, h2, h3 { font-family: 'Merriweather', serif; }
      body, p, a, button, input, textarea { font-family: 'Lato', system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
      document.head.removeChild(link);
    };
  }, []);

  // Theme persistence
  useEffect(() => {
    const saved = localStorage.getItem('theme-preference');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme-preference', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-[var(--bg-parchment)] text-[var(--text-ink)]">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />

        {/* Contact Section */}
        <section id="contact" className="bg-[var(--bg-parchment)] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-ink)]">Get In Touch</h2>
            <p className="mt-3 text-[var(--text-ink)]/80">Let's build something remarkable.</p>

            <form className="mt-8 max-w-2xl">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[var(--text-ink)]/70">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-[var(--text-ink)]/20 focus:border-[var(--primary-ink-blue)] outline-none py-2 transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-ink)]/70">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-[var(--text-ink)]/20 focus:border-[var(--primary-ink-blue)] outline-none py-2 transition-colors" placeholder="you@example.com" />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm text-[var(--text-ink)]/70">Message</label>
                <textarea rows={5} className="w-full bg-transparent border-b border-[var(--text-ink)]/20 focus:border-[var(--primary-ink-blue)] outline-none py-2 transition-colors" placeholder="Tell me about your project" />
              </div>
              <button type="submit" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary-ink-blue)] text-white hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 dark:border-white/10 bg-[var(--bg-parchment)]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-ink)]/70">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/" className="text-[var(--text-ink)]/80 hover:text-[var(--text-ink)]" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://linkedin.com/" className="text-[var(--text-ink)]/80 hover:text-[var(--text-ink)]" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
