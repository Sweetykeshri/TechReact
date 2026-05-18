import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaUsers, FaCheckCircle } from 'react-icons/fa';
import './HomeHero.css';

const HomeHero = () => {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
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
          Kreed Tech is the technology & innovation arm of Kreedashala,
          empowering startups with cutting-edge digital solutions to build,
          launch and scale with confidence.
        </p>

        <div className="hero-btns">
          <a href="#services" className="btn-primary">
            BUILD YOUR STARTUP <FaArrowRight />
          </a>
          <a href="#contact" className="btn-secondary">
            BOOK FREE CONSULTATION
          </a>
        </div>

        <div className="trust-avatars">
          <div className="trust-text">
            <span>50+ Startups</span>
            Trust Kreed Tech
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
    
      </motion.div>
    </section>
  );
};

export default HomeHero;
