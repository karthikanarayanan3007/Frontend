import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Camera, Images, Lamp, Landmark, Moon, Shirt, Sparkles, X } from 'lucide-react';
import { Reveal } from './Reveal';

type Memory = { title: string; moment: string; icon: typeof Camera; art: string; image?: string };

// To add a personal photo, place it in public/photos/ and set image to '/photos/your-file.jpg'.
// Leaving image empty keeps the illustrated, clearly marked replacement placeholder.
const memories: Memory[] = [
   { title: 'My Diwali Look', moment: 'My favourite photo', icon: Camera, art: 'morning', image: '/images/gallery/photo1.jpeg' },
  { title: 'A Beautiful Moment', moment: 'My memories', icon: Landmark, art: 'outfit', image: '/images/gallery/photo2.jpeg' },
  { title: 'Festive Vibes', moment: 'Diwali celebration', icon: Shirt, art: 'outfit', image: '/images/gallery/photo3.jpeg' },
  { title: 'A Happy Day', moment: 'Special moments', icon: Camera, art: 'table', image: '/images/gallery/photo4.jpeg' },
  { title: 'My Favourite Memories', moment: 'Special moments', icon: Moon, art: 'family', image: '/images/gallery/photo5.jpeg' },
  { title: 'A sky to remember', moment: 'After dark', icon: Sparkles, art: 'night',image: '/images/gallery/photo6.jpeg' },

  
];

export function PhotoMemories() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : memories[activeIndex];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const go = (step: number) => setActiveIndex((current) => current === null ? null : (current + step + memories.length) % memories.length);

  useEffect(() => {
    if (activeIndex === null) {
      openerRef.current?.focus();
      openerRef.current = null;
      return;
    }

    closeButtonRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setActiveIndex((current) => current === null ? null : (current + 1) % memories.length);
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setActiveIndex((current) => current === null ? null : (current - 1 + memories.length) % memories.length);
      }
      if (event.key === 'Tab') {
        const controls = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])');
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex]);

  return (
    <section className="memories-section section-light" id="memories" aria-labelledby="memories-title">
      <div className="section-wrap">
        <Reveal className="section-heading memories-heading">
          <p className="eyebrow"><span /> A place for the little things</p>
          <h2 className="section-title" id="memories-title">My photo <em>memories.</em></h2>
          <p className="section-lede">Six little frames, ready for the moments only you can fill.</p>
        </Reveal>
        <div className="memories-grid">
          {memories.map(({ title, moment, icon: Icon, art, image }, index) => (
            <Reveal className="memory-reveal" key={title} delay={(index % 3) * 65}>
              <button
                type="button"
                className={`memory-card memory-card--${art}`}
                onClick={(event) => { openerRef.current = event.currentTarget; setActiveIndex(index); }}
                aria-label={`Preview photo placeholder: ${title}`}
              >
                {image ? <img className="memory-image" src={image} alt={title} loading="lazy" /> : (
                  <span className={`memory-art memory-art--${art}`}>
                    <span className="memory-art-glow" />
                    <Icon className="memory-art-icon" size={34} strokeWidth={1.1} />
                    <span className="memory-art-spark memory-art-spark--one" />
                    <span className="memory-art-spark memory-art-spark--two" />
                    <span className="memory-art-caption"><Camera size={13} /> ADD YOUR PHOTO</span>
                  </span>
                )}
                <span className="memory-meta"><small>{moment}</small><b>{title}</b></span>
                <span className="memory-open" aria-hidden="true"><Images size={15} /></span>
              </button>
            </Reveal>
          ))}
        </div>
        <Reveal className="gallery-footnote"><Camera size={14} /><p>To make these yours, add your photos in <code>public/photos/</code> and update the image path in <code>PhotoMemories.tsx</code>.</p></Reveal>
      </div>
      {active && activeIndex !== null && (
        <div className="lightbox-backdrop" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
          <div ref={dialogRef} className="lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-title" aria-describedby="lightbox-description">
            <button ref={closeButtonRef} type="button" className="lightbox-close" onClick={() => setActiveIndex(null)} aria-label="Close photo preview"><X size={20} /></button>
            <button type="button" className="lightbox-arrow lightbox-arrow--left" onClick={() => go(-1)} aria-label="Previous memory"><ArrowLeft size={19} /></button>
            <div className={`lightbox-image lightbox-image--${active.art}`}>
              {active.image ? <img src={active.image} alt={active.title} /> : <><active.icon size={58} strokeWidth={1} /><span><Camera size={15} /> YOUR PHOTO GOES HERE</span></>}
            </div>
            <div className="lightbox-caption"><p>{active.moment} · 0{activeIndex + 1} / 06</p><h3 id="lightbox-title">{active.title}</h3><span id="lightbox-description">{active.image ? 'A favourite moment from your Diwali.' : 'Replace this placeholder with a photo from your Diwali.'}</span></div>
            <button type="button" className="lightbox-arrow lightbox-arrow--right" onClick={() => go(1)} aria-label="Next memory"><ArrowRight size={19} /></button>
          </div>
        </div>
      )}
    </section>
  );
}
