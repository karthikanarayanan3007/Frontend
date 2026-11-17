import { useState } from 'react';
import { Lamp, Menu, Sparkles, X } from 'lucide-react';

type SiteHeaderProps = { onCelebrate: () => void };

const links = [
  ['Story', '#story'],
  ['My day', '#timeline'],
  ['Sweets', '#sweets'],
  ['Memories', '#memories'],
  ['Decor', '#decor'],
] as const;

export function SiteHeader({ onCelebrate }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="My Diwali Memories home" onClick={closeMenu}>
        <span className="brand-mark"><Lamp size={20} strokeWidth={1.7} /></span>
        <span className="brand-name">Diwali <i>Memories</i><small>2026 · A festival of lights</small></span>
      </a>
      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav id="primary-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <button type="button" className="nav-celebrate" onClick={() => { closeMenu(); onCelebrate(); }}>
          <Sparkles size={15} /> Celebrate
        </button>
      </nav>
    </header>
  );
}
