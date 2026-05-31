import React from 'react';
import './HomePartners.css';

const partners = [
  'playo',
  'FANZIO',
  'SPORTZIFY',
  'ATHLOCITY',
  'FITVERSE',
  'GAMEON',
  'QuickCourt',
];

const HomePartners = () => {
  const track = [...partners, ...partners];

  return (
    <section className="partners-section home-section" aria-label="Trusted partners">
      <div className="partners-wrap">
        <p className="partners-title">Trusted by Innovative Startups &amp; Brands</p>
        <div className="partners-marquee">
          <div className="partners-track">
            {track.map((name, i) => (
              <span key={`${name}-${i}`} className="partner-logo">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
