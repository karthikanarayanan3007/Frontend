
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

const sweets = [
  {
    name: 'Laddu',
    detail: 'A little round of sweetness',
    image: '/images/food/laddu.jpg',
    className: 'sweet-card--laddu'
  },
  {
    name: 'Gulab jamun',
    detail: 'Soft, syrup-kissed comfort',
    image: '/images/food/gulab.jpg',
    className: 'sweet-card--gulab'
  },
  {
    name: 'Vada',
    detail: 'Golden, savoury and warm',
    image: '/images/food/vada.jpg',
    className: 'sweet-card--vada'
  },
  {
    name: 'Bajji',
    detail: 'A crisp taste of home',
    image: '/images/food/Bajji.jpg',
    className: 'sweet-card--bajji'
  },
];

export function SweetsGallery() {
  return (
    <section className="sweets-section section-light" id="sweets" aria-labelledby="sweets-title">
      <div className="section-wrap">
        <Reveal className="section-heading sweets-heading">
          <p className="eyebrow"><span /> The very good part</p>
          <h2 className="section-title" id="sweets-title">
            A little more <em>to share.</em>
          </h2>
          <p className="section-lede">
            Some things are best enjoyed together — especially these.
          </p>
        </Reveal>

        <div className="sweets-grid">
          {sweets.map((sweet, index) => (
            <Reveal key={sweet.name} delay={index * 65} className="sweet-card-reveal">
              <article className={`sweet-card ${sweet.className}`}>
                <div className="sweet-image-wrap">
                  <img
                    src={sweet.image}
                    alt={`${sweet.name} served for Diwali`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <span className="sweet-index">0{index + 1}</span>
                  <span className="sweet-image-glow" />
                </div>
                <div className="sweet-caption">
                  <div>
                    <h3>{sweet.name}</h3>
                    <p>{sweet.detail}</p>
                  </div>
                  <span className="sweet-arrow" aria-hidden="true">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
