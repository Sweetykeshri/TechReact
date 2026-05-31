import React from 'react';
import { Link } from 'react-router-dom';
import { FaAws, FaArrowRight } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiFlutter, SiFirebase, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';
import './HomeTechnologies.css';

const technologies = [
  { icon: <SiReact color="#61DAFB" />, name: 'React' },
  { icon: <SiNextdotjs color="#FFFFFF" />, name: 'Next.js' },
  { icon: <SiNodedotjs color="#339933" />, name: 'Node.js' },
  { icon: <SiPython color="#3776AB" />, name: 'Python' },
  { icon: <SiFlutter color="#02569B" />, name: 'Flutter' },
  { icon: <FaAws color="#FF9900" />, name: 'AWS' },
  { icon: <SiFirebase color="#FFCA28" />, name: 'Firebase' },
  { icon: <SiMongodb color="#47A248" />, name: 'MongoDB' },
];

const HomeTechnologies = () => {
  return (
    <section className="tech-section home-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="tech-header"
      >
        <span className="section-tag-center">Technologies We Work With</span>
        <p className="tech-subtitle">
          Modern, battle-tested tools chosen to ship faster and scale smarter.
        </p>
      </motion.div>

      <div className="tech-grid">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.name}
            className="tech-item"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            whileHover={{ y: -8 }}
          >
            <div className="tech-icon">{tech.icon}</div>
            <span className="tech-name">{tech.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="view-all-tech">
        <Link to="/tech-services">
          View Full Tech Stack <FaArrowRight aria-hidden />
        </Link>
      </div>
    </section>
  );
};

export default HomeTechnologies;
