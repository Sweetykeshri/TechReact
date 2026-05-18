import React from 'react';
import { FaArrowRight, FaThLarge } from 'react-icons/fa';
import './HomeFAQ.css';

const HomeFAQ = () => {
  return (
    <div className="cta-banner">
      <div className="cta-content">
        <h3>READY TO BUILD <span>SOMETHING AMAZING?</span></h3>
        <p>Let's turn your idea into a powerful digital product.</p>
      </div>
      <div className="cta-actions">
        <a href="#contact" className="btn-cta-primary">
          TALK TO OUR EXPERTS <FaArrowRight />
        </a>
        <a href="#projects" className="btn-cta-secondary">
          <FaThLarge /> VIEW OUR WORK <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default HomeFAQ;
