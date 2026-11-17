import { Heart, Lamp, Sparkles, Sun } from 'lucide-react';
import { Reveal } from './Reveal';

const moments = [
  { icon: Sun, label: 'A homecoming', text: 'After 14 years in exile, Lord Rama returned to Ayodhya. The city welcomed him home with rows of glowing lamps.' },
  { icon: Lamp, label: 'A light within', text: 'Every diya is a small reminder that light can outshine darkness, and that goodness will find its way.' },
  { icon: Heart, label: 'A light we share', text: 'Across homes and generations, prayers, sweets, decorations and time together turn the evening into a celebration.' },
];

export function StorySection() {
  return (
    <section className="story-section section-light" id="story" aria-labelledby="story-title">
      <div className="section-wrap story-layout">
        <Reveal className="story-art-wrap">
          <div className="story-art" aria-hidden="true">
            <div className="story-moon" />
            <div className="temple-arch temple-arch--outer"><div className="temple-arch temple-arch--inner"><div className="temple-door" /></div></div>
            <div className="temple-roof temple-roof--left" />
            <div className="temple-roof temple-roof--right" />
            <div className="temple-spire" />
            <div className="story-lotus story-lotus--left"><span /><span /><span /><span /><span /><i /></div>
            <div className="story-lotus story-lotus--right"><span /><span /><span /><span /><span /><i /></div>
            <div className="story-diya story-diya--left"><span /><i /></div>
            <div className="story-diya story-diya--right"><span /><i /></div>
            <div className="story-ground" />
            <span className="story-art-caption">AYODHYA · THE NIGHT OF LIGHTS</span>
          </div>
          <div className="story-stamp"><Sparkles size={16} /><span>Light<br />over darkness</span></div>
        </Reveal>
        <div className="story-copy">
          <Reveal>
            <p className="eyebrow"><span /> The story behind the glow</p>
            <h2 className="section-title" id="story-title">When the lamps<br /><em>found their way home.</em></h2>
            <p className="story-intro">Diwali, the Festival of Lights, tells a story we return to every year: of coming home, choosing hope and sharing the warmth we find.</p>
          </Reveal>
          <div className="story-points">
            {moments.map(({ icon: Icon, label, text }, index) => (
              <Reveal key={label} delay={index * 85} className="story-point">
                <div className="story-point-icon"><Icon size={17} strokeWidth={1.7} /></div>
                <div><h3>{label}</h3><p>{text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
