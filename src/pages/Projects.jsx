import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineArrowRight, 
  HiOutlineCalendar, 
  HiOutlineBriefcase, 
  HiOutlineUserGroup, 
  HiOutlineGlobeAlt, 
  HiOutlineTrophy, 
  HiOutlineFunnel,
  HiOutlineShieldCheck,
  HiOutlineCpuChip
} from 'react-icons/hi2';
import { HiUserGroup } from 'react-icons/hi';
import './Projects.css';
import './Projects.css';

const showcaseProjects = [
  {
    id: 1,
    title: "AthloPro",
    category: "SPORTS TECH",
    description: "An all-in-one analytics platform for sports academies and coaches to track performance, manage athletes, and improve training outcomes.",
    tags: ["Web App", "Analytics", "Performance Tracking"],
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1000",
    icon: "⚽"
  },
  {
    id: 2,
    title: "FinEdge",
    category: "FINTECH",
    description: "A secure and intuitive fintech platform offering digital payments, expense management, and financial insights for modern businesses.",
    tags: ["Web App", "Fintech", "Dashboard"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    icon: "💳"
  },
  {
    id: 3,
    title: "MediConnect",
    category: "HEALTHCARE",
    description: "A telehealth platform connecting patients and doctors seamlessly with appointment booking, video consultation, and digital records.",
    tags: ["Mobile App", "Telehealth", "Health Records"],
    image: "https://images.unsplash.com/photo-1576091160550-2173599211d0?auto=format&fit=crop&q=80&w=1000",
    icon: "❤️"
  },
  {
    id: 4,
    title: "Shoplyte",
    category: "E-COMMERCE",
    description: "A headless e-commerce solution built for speed, scalability, and seamless shopping experiences across all devices.",
    tags: ["Web App", "E-commerce", "Headless CMS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    icon: "🛒"
  }
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-page">
    {/* Hero Section */}
    <section className="projects-hero">
      <div className="projects-hero-content">
        <motion.div 
          className="projects-breadcrumb"
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
          className="projects-hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We partner with startups and enterprises to build powerful digital solutions 
          that solve real problems and drive measurable results.
        </motion.p>

        <motion.div 
          className="projects-hero-actions"
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

      <div className="projects-hero-visual">
        {/* Futuristic decorative elements could be added here */}
        <div className="projects-futuristic-grid"></div>
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

    {/* Exact Design Showcase Section */}
    <section className="exact-showcase-section">
      <div className="showcase-container">
        {showcaseProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="exact-project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card-visual">
              <img src={project.image} alt={project.title} />
              <div className="visual-overlay"></div>
            </div>
            
            <div className="card-info">
              <div className="category-label">
                <span className="cat-icon">{project.icon}</span>
                <span className="cat-text">{project.category}</span>
              </div>
              <h2 className="card-title">{project.title}</h2>
              <p className="card-description">{project.description}</p>
              
              <div className="card-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="exact-tag">{tag}</span>
                ))}
              </div>
              
              <a href="#" className="case-study-link">
                VIEW CASE STUDY <HiOutlineArrowRight />
              </a>
            </div>
          </motion.div>
        ))}
        
        <div className="showcase-footer">
          <button className="view-all-projects-btn">
            VIEW ALL PROJECTS <HiOutlineArrowRight />
          </button>
        </div>
      </div>
    </section>

    {/* Trusted By Section */}
    <section className="trusted-by-section">
      <div className="section-label">
        TRUSTED BY <span className="highlight">INNOVATIVE COMPANIES</span>
      </div>
      <div className="partners-grid-v2">
        <div className="partner-logo-v2">playo</div>
        <div className="partner-logo-v2">FANZIO</div>
        <div className="partner-logo-v2">SPORTZIFY</div>
        <div className="partner-logo-v2">ATHLOCITY</div>
        <div className="partner-logo-v2">FITVERSE</div>
        <div className="partner-logo-v2">GAME ON</div>
        <div className="partner-logo-v2">QuickCourt</div>
      </div>
    </section>

    {/* Testimonial & Features Section */}
    <section className="testimonial-features-section">
      <div className="testimonial-container">
        <div className="quote-box">
          <div className="quote-icon">“</div>
          <p className="quote-text">
            Kreed Tech transformed our idea into a powerful platform. Their team understood our vision and delivered beyond expectations.
          </p>
          <div className="client-info">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Rahul Sharma" className="client-img" />
            <div className="client-detail">
              <h4 className="client-name">Rahul Sharma</h4>
              <p className="client-role">Founder, Sportzify</p>
            </div>
            <div className="slider-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>

        <div className="features-list-v2">
          <div className="feature-item-v2">
            <div className="feature-icon-box">
              <HiOutlineShieldCheck />
            </div>
            <div className="feature-text-v2">
              <h4>Transparent Process</h4>
              <p>Clear communication and agile execution at every step.</p>
            </div>
          </div>
          <div className="feature-item-v2">
            <div className="feature-icon-box">
              <HiOutlineCpuChip />
            </div>
            <div className="feature-text-v2">
              <h4>Scalable Solutions</h4>
              <p>Solutions built to grow with your business.</p>
            </div>
          </div>
          <div className="feature-item-v2">
            <div className="feature-icon-box">
              <HiUserGroup />
            </div>
            <div className="feature-text-v2">
              <h4>Long-term Partnership</h4>
              <p>We're with you from idea to impact and beyond.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Banner Section */}
    <section className="cta-banner-section">
      <div className="cta-card-v2">
        <div className="cta-content-v2">
          <h2>Have an idea?</h2>
          <p>Let's build something amazing together.</p>
        </div>
        <div className="cta-visual-v2">
          <img src="https://cdn.pixabay.com/photo/2021/11/04/19/39/shaking-hands-6769188_1280.png" alt="Shaking hands" />
        </div>
        <div className="cta-buttons-v2">
          <button className="talk-experts-btn">
            TALK TO OUR EXPERTS <HiOutlineArrowRight />
          </button>
          <button className="book-consult-btn">
            <HiOutlineCalendar /> BOOK A FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>

    {/* Footer (shared) rendered from App.jsx */}
  </div>
  );
};

export default Projects;
