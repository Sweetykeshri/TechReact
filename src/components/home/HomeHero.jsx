import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './HomeHero.css';

const stats = [
  { value: '50+', label: 'Startups Built' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

const HomeHero = () => {
  return (
    <section className="hero-section">
      <div className="hero-glow hero-glow--left" aria-hidden />
      <div className="hero-glow hero-glow--right" aria-hidden />

      <div className="hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
        <div className="badge">
          <span className="dot" />
          ARS KREEDASHALA TECH
        </div>

        <h1 className="hero-title">
          WE BUILD
          <br />
          TECHNOLOGY
          <br />
          THAT <span>POWERS STARTUPS</span>.
        </h1>

        <p className="hero-description">
          Kreed Tech is the technology and innovation arm of Kreedashala,
          empowering startups with cutting-edge digital solutions to build,
          launch, and scale with confidence.
        </p>

        <div className="hero-btns">
          <Link to="/tech-services" className="btn-primary">
            BUILD YOUR STARTUP <FaArrowRight aria-hidden />
          </Link>
          <Link to="/contact" className="btn-secondary">
            BOOK FREE CONSULTATION
          </Link>
        </div>

        <div className="trust-section">
          {stats.map((item) => (
            <div key={item.label} className="trust-stat">
              <span className="trust-stat-value">{item.value}</span>
              <span className="trust-stat-label">{item.label}</span>
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
