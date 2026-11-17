import { type CSSProperties } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { FireworksCanvas } from './FireworksCanvas';

type HeroProps = { trigger: number; onCelebrate: () => void };
const heroBackdropStyle = { '--hero-image': 'url("/manus-storage/async-images/tSuUXELbe1R7pw1Ejhnhgc/image-1.webp")' } as CSSProperties;

export function Hero({ trigger, onCelebrate }: HeroProps) {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-backdrop" style={heroBackdropStyle} />
      <div className="hero-vignette" />
      <div className="hero-dust" aria-hidden="true" />
      <FireworksCanvas trigger={trigger} auto className="hero-fireworks" />
      <div className="hero-ornament hero-ornament--left" aria-hidden="true"><span /><span /><span /></div>
      <div className="hero-ornament hero-ornament--right" aria-hidden="true"><span /><span /><span /></div>
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow"><span /> A little journal of light <span /></p>
        <h1 id="hero-title">Happy Diwali <em>2026</em></h1>
        <p className="hero-subtitle">A Festival of Lights, Love,<br className="mobile-break" /> Happiness &amp; New Beginnings</p>
        <div className="hero-rule"><span /><Sparkles size={13} /><span /></div>
        <button type="button" className="button button-primary" onClick={onCelebrate}>
          Celebrate Diwali <ArrowUpRight size={17} />
        </button>
        <p className="hero-note">A day to carry the light a little longer.</p>
      </div>
      <div className="hero-scroll-cue" aria-hidden="true"><span>Scroll to explore</span><ArrowDown size={15} /></div>
      <div className="hero-date">DIWALI · 2026</div>
    </section>
  );
}
