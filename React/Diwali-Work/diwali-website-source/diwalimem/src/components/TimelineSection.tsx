import { Camera, Coffee, Droplets, Heart, Landmark, Moon, Shirt, Sparkles, Sunrise, Utensils } from 'lucide-react';
import { Reveal } from './Reveal';

type Moment = { icon: typeof Sunrise; title: string; note: string };
type Chapter = { time: string; title: string; icon: typeof Sunrise; moments: Moment[] };

const chapters: Chapter[] = [
  {
    time: '06:15 AM', title: 'Morning', icon: Sunrise,
    moments: [
      { icon: Sunrise, title: 'Woke up early', note: 'The first quiet moments of a very bright day.' },
      { icon: Droplets, title: 'Took a traditional oil bath', note: 'A fresh beginning, rooted in tradition.' },
      { icon: Landmark, title: 'Visited the temple', note: 'A little prayer to start the celebration.' },
      { icon: Shirt, title: 'Wore my new dress', note: 'Something special for the happiest day.' },
      { icon: Sparkles, title: 'Enjoyed bursting crackers', note: 'The morning filled with colour and cheer.' },
    ],
  },
  {
    time: '11:30 AM', title: 'Food Time', icon: Utensils,
    moments: [
      { icon: Utensils, title: 'Ate delicious vada and bajji', note: 'Crispy, warm and impossible to have just one.' },
      { icon: Heart, title: 'Enjoyed laddu and gulab jamun', note: 'A sweet little pause around the table.' },
    ],
  },
  {
    time: '02:00 PM', title: 'Afternoon', icon: Coffee,
    moments: [
      { icon: Coffee, title: 'Took a small rest', note: 'A moment to slow down between festivities.' },
      { icon: Moon, title: 'Slept for some time', note: 'Saving a little energy for the evening ahead.' },
    ],
  },
  {
    time: '06:30 PM', title: 'Evening', icon: Camera,
    moments: [
      { icon: Moon, title: 'Watched a movie with my family', note: 'Our own little tradition, all together.' },
      { icon: Camera, title: 'Took some beautiful photos', note: 'Keeping a few favourite moments close.' },
    ],
  },
  {
    time: '09:00 PM', title: 'Night', icon: Sparkles,
    moments: [
      { icon: Sparkles, title: 'Enjoyed fireworks', note: 'The sky saved its brightest colours for last.' },
      { icon: Heart, title: 'Ended the day with wonderful family memories', note: 'The best part of the celebration stayed with us.' },
    ],
  },
];

export function TimelineSection() {
  return (
    <section className="timeline-section section-light" id="timeline" aria-labelledby="timeline-title">
      <div className="section-wrap">
        <Reveal className="section-heading timeline-heading">
          <p className="eyebrow"><span /> One day, held close</p>
          <h2 className="section-title" id="timeline-title">My Diwali story <em>2026</em></h2>
          <p className="section-lede">From the first lamp of morning to the last sparkle in the night sky.</p>
        </Reveal>
        <div className="timeline">
          <div className="timeline-spine" aria-hidden="true" />
          {chapters.map(({ time, title, icon: Icon, moments }, chapterIndex) => (
            <Reveal className={`timeline-chapter timeline-chapter--${chapterIndex % 2 === 0 ? 'left' : 'right'}`} key={title} delay={chapterIndex * 45}>
              <div className="timeline-marker"><Icon size={17} strokeWidth={1.7} /></div>
              <div className="timeline-chapter-heading">
                <span className="timeline-time">{time}</span>
                <h3>{title}</h3>
              </div>
              <div className="timeline-cards">
                {moments.map(({ icon: MomentIcon, title: momentTitle, note }) => (
                  <article className="timeline-card" key={momentTitle}>
                    <div className="timeline-card-icon"><MomentIcon size={16} strokeWidth={1.7} /></div>
                    <div><h4>{momentTitle}</h4><p>{note}</p></div>
                  </article>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
