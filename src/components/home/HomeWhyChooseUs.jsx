import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCheckCircle, FaClock, FaHandshake } from 'react-icons/fa';
import runnerImg from '../../assets/runner.png';
import './HomeWhyChooseUs.css';

const reasons = [
  {
    icon: <FaUsers />,
    title: 'Startup Focused',
    desc: 'We understand startups because we build and scale them every day.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'Cost Effective',
    desc: 'Enterprise-grade quality without enterprise-level budgets.',
  },
  {
    icon: <FaClock />,
    title: 'Agile & Transparent',
    desc: 'Sprint-based delivery with clear timelines and open communication.',
  },
  {
    icon: <FaHandshake />,
    title: 'Long-term Partner',
    desc: 'We stay with you from MVP through growth and beyond.',
  },
];

const WhyItem = ({ icon, title, desc }) => (
  <div className="why-item">
    <div className="why-icon-circle">{icon}</div>
    <div className="why-text">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

const HomeWhyChooseUs = () => {
  return (
    <section className="why-section home-section">
      <div className="why-container">
        <motion.div
          className="why-visual"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src={runnerImg} alt="Athlete representing speed and agility" className="runner-img" loading="lazy" />
          <div className="why-visual-badge" aria-hidden>
            <span>10+</span>
            <small>Years Experience</small>
          </div>
        </motion.div>

        <motion.div
          className="why-content"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="section-tag">Why Startups Choose Us</span>
          <h2 className="why-headline">
            Built for Speed, <span>Designed for Scale</span>
          </h2>
          <p className="why-intro">
            We combine deep technical expertise with startup mindset to deliver products that launch fast and grow reliably.
          </p>
          <div className="why-grid-items">
            {reasons.map((item) => (
              <WhyItem key={item.title} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;
