import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowNarrowRight, HiLightBulb } from 'react-icons/hi';
import { 
  HiOutlineCodeBracket, 
  HiOutlineDevicePhoneMobile, 
  HiOutlineCloud, 
  HiOutlineChartBar, 
  HiOutlineShieldCheck, 
  HiOutlineLockClosed, 
  HiOutlineCubeTransparent, 
  HiOutlineArrowRight, 
  HiOutlineArrowTrendingUp,
  HiOutlineRocketLaunch, 
  HiOutlineClipboardDocumentList 
} from 'react-icons/hi2';
import { IoCalendarOutline } from 'react-icons/io5';
import { FiShield, FiTrendingUp, FiLayers, FiLayout } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiPython, SiGraphql, SiFirebase, SiDocker, SiKubernetes, SiPostgresql, SiMongodb } from 'react-icons/si';
import { FaAws, FaArrowRight, FaThLarge, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import BrandLogo from '../components/BrandLogo';
import './TechServices.css';
import Projects from './Projects';

const techStack = [
  { icon: <SiReact color="#61DAFB" />, name: "React" },
  { icon: <SiNextdotjs color="#FFF" />, name: "Next.js" },
  { icon: <SiNodedotjs color="#339933" />, name: "Node.js" },
  { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
  { icon: <SiPython color="#3776AB" />, name: "Python" },
  { icon: <SiGraphql color="#E10098" />, name: "GraphQL" },
  { icon: <FaAws color="#FF9900" />, name: "AWS" },
  { icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
  { icon: <SiDocker color="#2496ED" />, name: "Docker" },
  { icon: <SiKubernetes color="#326CE5" />, name: "Kubernetes" },
  { icon: <SiPostgresql color="#4169E1" />, name: "PostgreSQL" },
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB" }
];

const processSteps = [
  {
    id: "01",
    title: "Discover",
    desc: "We analyze your idea, market & requirements.",
    icon: <HiLightBulb />
  },
  {
    id: "02",
    title: "Plan",
    desc: "We define the strategy, architecture & roadmap.",
    icon: <HiOutlineClipboardDocumentList />
  },
  {
    id: "03",
    title: "Build",
    desc: "We design, develop & iterate in agile sprints.",
    icon: <HiOutlineCodeBracket />
  },
  {
    id: "04",
    title: "Test",
    desc: "We ensure quality, security and performance.",
    icon: <HiOutlineShieldCheck />
  },
  {
    id: "05",
    title: "Launch",
    desc: "We deploy, launch and ensure a smooth go-live.",
    icon: <HiOutlineRocketLaunch />
  },
  {
    id: "06",
    title: "Scale",
    desc: "We optimize, scale and support your growth.",
    icon: <HiOutlineArrowTrendingUp />
  }
];

const services = [
  {
    icon: <HiOutlineCodeBracket />,
    title: "Startup Product Development",
    items: ["MVP Development", "Web Applications", "Mobile Apps (iOS/Android)", "SaaS Product Development"]
  },
  {
    icon: <FiLayout />,
    title: "UI / UX Design",
    items: ["User Research", "UI/UX Design", "Prototyping", "Design Systems"]
  },
  {
    icon: <HiOutlineCloud />,
    title: "Cloud & DevOps",
    items: ["Cloud Architecture", "CI/CD Automation", "Infrastructure as Code", "Monitoring & Logging"]
  },
  {
    icon: <HiOutlineChartBar />,
    title: "Data & Analytics",
    items: ["Data Engineering", "Business Intelligence", "Analytics Dashboards", "AI/ML Solutions"]
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Tech Consulting & Strategy",
    items: ["Product Strategy", "Technology Roadmap", "Digital Transformation", "Architecture Consulting"]
  },
  {
    icon: <HiOutlineDevicePhoneMobile />,
    title: "Mobile Solutions",
    items: ["Cross-platform Apps", "Native Android & iOS", "App Modernization", "Maintenance & Support"]
  },
  {
    icon: <HiOutlineLockClosed />,
    title: "Security & Compliance",
    items: ["Application Security", "Vulnerability Assessment", "Penetration Testing", "Compliance (GDPR, SOC2)"]
  },
  {
    icon: <HiOutlineCubeTransparent />,
    title: "Emerging Tech",
    items: ["AI & Machine Learning", "Blockchain Development", "IoT Solutions", "AR/VR Experiences"]
  }
];

const TechServices = () => {
  return (
    <div className="tech-services-page">
      <section className="tech-hero">
        <div className="container">
          <div className="hero-split">
            {/* ... hero content ... */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <div className="tech-badge">
                <span className="dot"></span>
                TECH SERVICES
              </div>
              
              <h1 className="hero-title">
                Powerful Technology<br />
                Solutions to <span>Build,</span><br />
                <span>Launch & Scale</span> Your<br />
                Startup
              </h1>

              <p className="hero-desc">
                From idea to impact, we build custom digital products and 
                scalable solutions that drive growth and create real value.
              </p>

              <div className="hero-btns">
                <button className="btn-primary">
                  EXPLORE SERVICES <HiArrowNarrowRight />
                </button>
                <button className="btn-secondary">
                  <IoCalendarOutline /> BOOK FREE CONSULTATION
                </button>
              </div>
            </motion.div>

            {/* ... hero visual ... */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hero-visual"
            >
              <div className="visual-wrapper">
                <img 
                  src="/assets/tech-hero-bg.png" 
                  alt="Operations Control Center" 
                  className="main-image"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200';
                  }}
                />
                <div className="glow-overlay"></div>
                <div className="stat-card">
                  <div className="stat-circle">
                    <svg viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" className="bg" />
                      <circle cx="50" cy="50" r="45" className="fill" />
                    </svg>
                    <span className="stat-value">98%</span>
                  </div>
                </div>
                <div className="k-logo">K</div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Features */}
          <div className="bottom-features">
            <FeatureItem 
              icon={<HiLightBulb />} 
              title="Innovation Driven" 
              desc="We solve real problems with creativity & tech" 
            />
            <FeatureItem 
              icon={<FiShield />} 
              title="Secure & Scalable" 
              desc="Enterprise grade security with future-ready scale" 
            />
            <FeatureItem 
              icon={<FiTrendingUp />} 
              title="Performance First" 
              desc="High-performance solutions built for results" 
            />
            <FeatureItem 
              icon={<FiLayers />} 
              title="End-to-End Support" 
              desc="We're with you at every step of the journey" 
            />
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="sub-badge">WHAT WE OFFER</span>
            <h2 className="section-title">Our <span>Tech Services</span></h2>
            <p className="section-desc">
              High-impact, scalable and future-ready solutions tailored for startups and modern businesses.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="service-card"
              >
                <div className="card-bg-gradient"></div>
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <ul className="card-list">
                  {service.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
                <a href="#" className="card-link">
                  LEARN MORE <HiOutlineArrowRight />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <div className="tech-stack-banner">
            <div className="tech-stack-left">
              <span className="sub-badge">BUILT WITH THE BEST</span>
              <h2 className="stack-title">Our Technology Stack</h2>
              <p className="stack-desc">
                We use modern, reliable and high-performance technologies to build scalable and secure solutions.
              </p>
              <button className="stack-btn">
                VIEW ALL TECHNOLOGIES <HiOutlineArrowRight />
              </button>
            </div>
            <div className="tech-stack-right">
              <div className="stack-grid">
                {techStack.map((tech, index) => (
                  <div key={index} className="stack-item">
                    <div className="stack-icon">{tech.icon}</div>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="how-we-work-section">
        <div className="container">
          <div className="section-header">
            <span className="sub-badge">OUR PROCESS</span>
            <h2 className="section-title">How We <span>Work</span></h2>
            <p className="section-desc">
              A transparent and agile process that turns your idea into a market-ready product.
            </p>
          </div>

          <div className="process-flow-container">
            <div className="process-flow">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-icon-wrapper">
                    <div className="step-icon">{step.icon}</div>
                    {index < processSteps.length - 1 && <div className="step-connector"></div>}
                  </div>
                  <div className="step-content">
                    <span className="step-number">{step.id}</span>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        {/* CTA Banner */}
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

        <div className="footer-main">
          <div className="footer-branding">
            <BrandLogo className="footer-logo" />
            <p>
              Kreed Tech is the technology & innovation arm of Kreedashala,
              empowering startups and organizations with cutting-edge digital solutions.
            </p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>QUICK LINKS</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/tech-services">Tech Services</a></li>
                <li><a href="/startup-support">Startup Support</a></li>
                <li><a href="/sports-tech">Sports Tech</a></li>
                <li><a href="/projects">Projects</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>COMPANY</h4>
              <ul>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-col contact-col">
            <h4>CONTACT US</h4>
            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              <a href="mailto:hello@kreed.tech">hello@kreed.tech</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><FaPhoneAlt /></div>
              <span>+91 12345 67890</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <span>India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Ars Kreedashala Tech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureItem = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="feature-item"
  >
    <div className="f-icon">{icon}</div>
    <div className="f-text">
      <h4>{title}</h4>
      <p>{desc}</p>
      
    </div>
  </motion.div>
);

export default TechServices;
