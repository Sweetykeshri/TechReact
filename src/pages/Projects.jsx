import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight, HiOutlineCalendar, HiOutlineBriefcase, HiOutlineUserGroup, HiOutlineGlobeAlt, HiOutlineTrophy, HiOutlineFunnel } from 'react-icons/hi2';
import Footer from '../components/Footer';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page">
    {/* Hero Section */}
    <section className="projects-hero">
      <div className="hero-content">
        <motion.div 
          className="breadcrumb"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          HOME &gt; <span className="highlight">PROJECTS</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          REAL PROJECTS. <br />
          <span className="highlight">REAL IMPACT.</span>
        </motion.h1>

        <motion.p 
          className="hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We partner with startups and enterprises to build powerful digital solutions 
          that solve real problems and drive measurable results.
        </motion.p>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#contact" className="btn-primary">
            START YOUR PROJECT <HiOutlineArrowRight />
          </a>
          <a href="#consultation" className="btn-outline">
             <HiOutlineCalendar /> BOOK A CONSULTATION
          </a>
        </motion.div>
      </div>

      <div className="hero-visual">
         {/* Futuristic decorative elements could be added here */}
         <div className="futuristic-grid"></div>
      </div>
    </section>

    {/* Stats Strip */}
    <section className="projects-stats-strip">
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <HiOutlineBriefcase className="stat-icon" />
          </div>
          <div className="stat-info">
            <span className="stat-number">250+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <HiOutlineUserGroup className="stat-icon" />
          </div>
          <div className="stat-info">
            <span className="stat-number">120+</span>
            <span className="stat-label">Startups Empowered</span>
          </div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <HiOutlineGlobeAlt className="stat-icon" />
          </div>
          <div className="stat-info">
            <span className="stat-number">20+</span>
            <span className="stat-label">Industries Served</span>
          </div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <HiOutlineTrophy className="stat-icon" />
          </div>
          <div className="stat-info">
            <span className="stat-number">98%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>

    {/* Filter Navigation */}
    <section className="projects-filter-nav">
      <div className="filter-wrapper">
        <button className="filter-btn active">ALL PROJECTS</button>
        <button className="filter-btn">SPORTS TECH</button>
        <button className="filter-btn">FINTECH</button>
        <button className="filter-btn">HEALTHCARE</button>
        <button className="filter-btn">E-COMMERCE</button>
        <button className="filter-btn">EDUCATION</button>
        <button className="filter-btn">ENTERPRISE</button>
        <div className="filter-dropdown">
           <HiOutlineFunnel /> <span>FILTER</span> <span className="chevron">▼</span>
        </div>
      </div>
    </section>

    {/* Footer */}
    <Footer showCTA={false} />
  </div>
  );
};

export default Projects;
