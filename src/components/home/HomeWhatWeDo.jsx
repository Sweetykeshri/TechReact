import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaDraftingCompass, FaCloud, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import './HomeWhatWeDo.css';

const services = [
  {
    icon: <FaCode />,
    title: 'Product Development',
    desc: 'End-to-end development of scalable web, mobile, and cross-platform products.',
  },
  {
    icon: <FaDraftingCompass />,
    title: 'UI / UX Design',
    desc: 'Designing intuitive and engaging experiences that users love.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & DevOps',
    desc: 'Secure, scalable, and high-performance cloud infrastructure and DevOps.',
  },
  {
    icon: <FaChartLine />,
    title: 'Data & Analytics',
    desc: 'Data-driven insights and analytics to make smarter business decisions.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Tech Consulting',
    desc: 'Helping startups choose the right tech and build winning strategies.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const HomeWhatWeDo = () => {
  return (
    <section className="services-section home-section" id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
      >
        <span className="section-tag">What We Do</span>
        <h2 className="section-title">
          Tech Services That Help Startups <span>Grow</span>
        </h2>
        <p className="section-subtitle">
          From idea to market, we build custom digital solutions that drive growth and create real impact.
        </p>
      </motion.div>

      <div className="services-grid">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="service-card"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
            whileHover={{ y: -8 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-name">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="view-all-wrapper">
        <Link to="/tech-services" className="view-all">
          Explore All Services <FaArrowRight aria-hidden />
        </Link>
      </div>
    </section>
  );
};

export default HomeWhatWeDo;
