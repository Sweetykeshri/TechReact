import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';
import './Footer.css';

const CTA = ({ className = '' }) => (
  <div className={`cta-container ${className}`.trim()}>
    <motion.div 
      className="cta-banner"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="cta-content">
        <h2 className="cta-title">
          Ready to Build Something <br />
          <span className="highlight">Extraordinary?</span>
        </h2>
        <p className="cta-subtitle">
          Let's turn your vision into a powerful digital product <br />
          that drives growth and creates impact.
        </p>
      </div>
      <div className="cta-actions">
        <button className="cta-btn primary">
          TALK TO OUR EXPERTS <HiArrowNarrowRight className="icon" />
        </button>
        <button className="cta-btn secondary">
          <span className="view-icon">⠿</span> VIEW OUR WORK
        </button>
      </div>
    </motion.div>
  </div>
);

export default CTA;
