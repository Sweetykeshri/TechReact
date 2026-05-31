import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLayerGroup } from 'react-icons/fa';
import './HomeRealState.css';

const featuredProjects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tag: 'Sports Tech',
    title: 'Performance Analytics Platform',
    desc: 'Real-time athlete tracking and performance insights for professional teams.',
    stack: ['React', 'Node.js', 'AWS'],
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tag: 'Startup',
    title: 'SaaS Dashboard Suite',
    desc: 'All-in-one startup operations hub with analytics, billing, and team tools.',
    stack: ['Next.js', 'Python', 'MongoDB'],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    tag: 'Mobile',
    title: 'Fan Engagement App',
    desc: 'Cross-platform mobile experience connecting fans with live sports events.',
    stack: ['Flutter', 'Firebase', 'GraphQL'],
  },
];

const ProjectCard = ({ project }) => (
  <motion.article
    className="project-card"
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
  >
    <div className="project-image-wrap">
      <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
      <span className="project-tag">{project.tag}</span>
    </div>
    <div className="project-body">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      <div className="project-stack">
        {project.stack.map((tech) => (
          <span key={tech} className="stack-pill">{tech}</span>
        ))}
      </div>
      <Link to="/projects" className="project-link">
        View Case Study <FaArrowRight size={12} aria-hidden />
      </Link>
    </div>
  </motion.article>
);

const HomeRealState = () => {
  return (
    <section className="featured-section home-section" id="projects">
      <div className="featured-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag section-tag--center">
            <FaLayerGroup aria-hidden /> Featured Work
          </span>
          <h2 className="section-title">
            Projects That <span>Drive Results</span>
          </h2>
          <p className="section-subtitle">
            A snapshot of the digital products we have designed, built, and scaled for ambitious teams.
          </p>
        </motion.div>

        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="view-more-wrapper">
          <Link to="/projects" className="view-all-btn">
            View All Projects <FaArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeRealState;
