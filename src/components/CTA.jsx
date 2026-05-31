import React from 'react';
import { Link } from 'react-router-dom';
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
          Ready to Build Something
          <span className="highlight"> Extraordinary?</span>
        </h2>
        <p className="cta-subtitle">
          Turn your vision into a powerful digital product that drives growth and creates impact.
        </p>
      </div>
      <div className="cta-actions">
        <Link to="/contact" className="cta-btn primary">
          Talk to Our Experts <HiArrowNarrowRight aria-hidden />
        </Link>
        <Link to="/projects" className="cta-btn secondary">
          View Our Work <HiArrowNarrowRight aria-hidden />
        </Link>
      </div>
    </motion.div>
  </div>
);

export default CTA;
