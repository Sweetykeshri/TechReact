import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaDraftingCompass, FaCloud, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import './HomeWhatWeDo.css';

const ServiceCard = ({ icon, title, desc }) => (
  <motion.div className="service-card" whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
    <div className="service-icon">{icon}</div>
    <h3 className="service-name">{title}</h3>
    <p className="service-desc">{desc}</p>
  </motion.div>
);

const HomeWhatWeDo = () => {
  return (
    <section className="services-section" id="services">
      <span className="section-tag">WHAT WE DO</span>
      <h2 className="section-title">
        <span style={{ color: '#ffffff' }}>TECH SERVICES THAT HELP STARTUPS</span> <span>GROW</span>
      </h2>
      <p className="section-subtitle">
        From idea to market, we build custom digital solutions that drive growth and create real impact.
      </p>

      <div className="services-grid">
        <ServiceCard
          icon={<FaCode />}
          title="PRODUCT DEVELOPMENT"
          desc="End-to-end development of scalable web, mobile, and cross-platform products."
        />
        <ServiceCard
          icon={<FaDraftingCompass />}
          title="UI / UX DESIGN"
          desc="Designing intuitive and engaging experiences that users love."
        />
        <ServiceCard
          icon={<FaCloud />}
          title="CLOUD & DEVOPS"
          desc="Secure, scalable, and high-performance cloud infrastructure & DevOps."
        />
        <ServiceCard
          icon={<FaChartLine />}
          title="DATA & ANALYTICS"
          desc="Data-driven insights and analytics to make smarter business decisions."
        />
        <ServiceCard
          icon={<FaShieldAlt />}
          title="TECH CONSULTING & STRATEGY"
          desc="Helping startups choose the right tech and build winning strategies."
        />
      </div>

      <div className="view-all-wrapper">
        <a href="#contact" className="view-all">
          EXPLORE ALL SERVICES <FaArrowRight />
        </a>
      </div>
    </section>
  );
};

export default HomeWhatWeDo;
