import { useState } from 'react';
import { ArrowUpRight, Flower2, Heart, Lamp, Lightbulb, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { FireworksCanvas } from './FireworksCanvas';
import { Reveal } from './Reveal';

type SkyProps = {
  trigger: number;
  soundOn: boolean;
  onSoundToggle: () => void;
  onLightUp: () => void;
};

export function FireworksExperience({ trigger, soundOn, onSoundToggle, onLightUp }: SkyProps) {
  return (
    <section className="fireworks-section" id="fireworks" aria-labelledby="fireworks-title">
      <div className="fireworks-sky" aria-hidden="true" />
      <FireworksCanvas trigger={trigger} auto className="fireworks-scene-canvas" />
      <div className="fireworks-section-glow" aria-hidden="true" />
      <div className="fireworks-content section-wrap">
        <Reveal className="fireworks-heading">
          <p className="eyebrow eyebrow-light"><span /> A little wonder, on demand</p>
          <h2 className="section-title" id="fireworks-title">Make a wish.<br /><em>Light up the sky.</em></h2>
          <p className="fireworks-lede">A handful of sparks, a sky full of colour — go on, send a little light upward.</p>
        </Reveal>
        <Reveal className="fireworks-controls" delay={100}>
          <button type="button" className="button button-primary fireworks-button" onClick={onLightUp}>
            <Sparkles size={17} /> Light Up the Sky <ArrowUpRight size={17} />
          </button>
          <button type="button" className={`sound-toggle ${soundOn ? 'is-on' : ''}`} onClick={onSoundToggle} aria-pressed={soundOn}>
            {soundOn ? <Volume2 size={17} /> : <VolumeX size={17} />}
            <span>Sound effects <b>{soundOn ? 'On' : 'Off'}</b></span>
            <span className="sound-switch" aria-hidden="true"><i /></span>
          </button>
          <p className="sound-hint">Soft chimes play only after you choose to launch.</p>
        </Reveal>
      </div>
      <div className="fireworks-caption" aria-hidden="true"><span /> A quiet kind of magic <span /></div>
    </section>
  );
}

type Decoration = {
  name: string;
  label: string;
  copy: string;
  icon: typeof Flower2;
  art: string;
};

const decorations: Decoration[] = [
  { name: 'rangoli', label: 'Rangoli', copy: 'A welcome drawn in colour, made by hand at the threshold.', icon: Flower2, art: 'rangoli' },
  { name: 'diyas', label: 'Diyas', copy: 'Little clay lamps, each holding its own steady glow.', icon: Lamp, art: 'diyas' },
  { name: 'flowers', label: 'Marigolds', copy: 'Garlands of golden petals bring a fragrant warmth indoors.', icon: Flower2, art: 'flowers' },
  { name: 'lanterns', label: 'Lanterns', copy: 'A gentle light overhead, casting shapes across the evening.', icon: Lightbulb, art: 'lanterns' },
  { name: 'lights', label: 'Festive lights', copy: 'A thread of colour tracing the edges of home.', icon: Sparkles, art: 'lights' },
];

function RangoliMark() {
  return <div className="rangoli-mark" aria-hidden="true"><span className="rangoli-ring rangoli-ring--outer" /><span className="rangoli-ring rangoli-ring--middle" /><span className="rangoli-ring rangoli-ring--inner" /><i /></div>;
}

function DecorationArt({ art, icon: Icon }: Pick<Decoration, 'art' | 'icon'>) {
  if (art === 'rangoli') return <RangoliMark />;
  if (art === 'diyas') return <div className="diya-art" aria-hidden="true"><span className="diya-flame" /><span className="diya-bowl" /><i className="diya-shadow" /></div>;
  if (art === 'flowers') return <div className="flower-art" aria-hidden="true"><span /><span /><span /><span /><span /><i /></div>;
  if (art === 'lanterns') return <div className="lantern-art" aria-hidden="true"><span /><i /></div>;
  return <div className="light-art" aria-hidden="true"><Icon size={48} strokeWidth={1} /><i /><b /></div>;
}

export function DecorationsSection() {
  const [selected, setSelected] = useState('rangoli');
  const active = decorations.find((item) => item.name === selected) ?? decorations[0];

  return (
    <section className="decor-section section-light" id="decor" aria-labelledby="decor-title">
      <div className="section-wrap">
        <Reveal className="section-heading decor-heading">
          <p className="eyebrow"><span /> The details that make a home</p>
          <h2 className="section-title" id="decor-title">A little <em>Diwali magic.</em></h2>
          <p className="section-lede">Choose a favourite and let its small story unfold.</p>
        </Reveal>
        <div className="decor-experience">
          <div className="decor-display" aria-live="polite">
            <div className={`decor-display-art decor-display-art--${active.art}`}><DecorationArt art={active.art} icon={active.icon} /></div>
            <p className="decor-display-kicker">A SMALL FESTIVE RITUAL</p>
            <h3>{active.label}</h3>
            <p>{active.copy}</p>
          </div>
          <div className="decor-picker" role="group" aria-label="Choose a Diwali decoration">
            {decorations.map(({ name, label, icon: Icon, art }, index) => (
              <button type="button" key={name} className={`decor-choice ${selected === name ? 'is-selected' : ''}`} onClick={() => setSelected(name)} aria-pressed={selected === name}>
                <span className={`decor-choice-art decor-choice-art--${art}`}><Icon size={23} strokeWidth={1.4} /></span>
                <span className="decor-choice-copy"><b>{label}</b><small>0{index + 1} · Explore</small></span>
                <span className="decor-choice-arrow"><ArrowUpRight size={16} /></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FamilySection() {
  return (
    <section className="family-section" id="family" aria-labelledby="family-title">
      <div className="family-light-string" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="section-wrap family-layout">
        <Reveal className="family-copy">
          <p className="eyebrow eyebrow-light"><span /> The best part of the day</p>
          <h2 className="section-title" id="family-title">The light is lovely.<br /><em>Being together is brighter.</em></h2>
          <p>Passing a plate of sweets. Finding a movie everyone can agree on. Saving the best photos for the family group. These are the little things that make the celebration ours.</p>
          <div className="family-signoff"><Heart size={16} /><span>Made brighter by the people we love.</span></div>
        </Reveal>
        <Reveal className="family-motif" delay={130}>
          <div className="family-halo" />
          <div className="family-window"><span className="family-window-arch" /><i className="family-star family-star--one" /><i className="family-star family-star--two" /><i className="family-star family-star--three" /><div className="family-floor" /></div>
          <div className="family-diya family-diya--one"><i /><span /></div>
          <div className="family-diya family-diya--two"><i /><span /></div>
          <div className="family-motif-caption"><Lamp size={14} /> HOME, LIT FROM WITHIN</div>
        </Reveal>
      </div>
    </section>
  );
}

type ClosingProps = { trigger: number; onCelebrate: () => void };

export function ClosingSection({ trigger, onCelebrate }: ClosingProps) {
  return (
    <section className="closing-section" id="celebrate" aria-labelledby="closing-title">
      <div className="closing-backdrop" aria-hidden="true" />
      <FireworksCanvas trigger={trigger} auto className="closing-fireworks" />
      <Reveal className="closing-content">
        <div className="closing-lamp" aria-hidden="true"><span /><i /></div>
        <p className="eyebrow eyebrow-light"><span /> Until the next bright beginning <span /></p>
        <h2 id="closing-title">May Your Life Shine<br />Like a <em>Diya!</em></h2>
        <p className="closing-note">Keep the good moments close. Carry the light with you.</p>
        <button type="button" className="button button-primary" onClick={onCelebrate}>
          Celebrate Again <Sparkles size={16} />
        </button>
      </Reveal>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand"><span className="footer-diya"><Lamp size={16} /></span><span>My Diwali Memories <b>2026</b></span></div>
      <p>Made with Love &amp; Diwali Magic – 2026</p>
      <a href="#top" className="footer-top">Back to the beginning <span>↑</span></a>
    </footer>
  );
}
