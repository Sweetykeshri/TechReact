import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaThLarge } from 'react-icons/fa';
import './HomeFAQ.css';

const HomeFAQ = () => {
  return (
    <section className="cta-section home-section" id="contact">
      <motion.div
        className="cta-banner"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="cta-content">
          <span className="cta-eyebrow">Start Your Journey</span>
          <h3>
            Ready to Build <span>Something Amazing?</span>
          </h3>
          <p>Let&apos;s turn your idea into a powerful digital product that drives growth.</p>
        </div>
        <div className="cta-actions">
          <Link to="/contact" className="btn-cta-primary">
            Talk to Our Experts <FaArrowRight aria-hidden />
          </Link>
          <Link to="/projects" className="btn-cta-secondary">
            <FaThLarge aria-hidden /> View Our Work <FaArrowRight aria-hidden />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeFAQ;
