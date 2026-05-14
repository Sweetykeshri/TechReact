import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaCode, FaDraftingCompass, FaCloud, FaChartLine, FaShieldAlt, FaUsers, FaClock, FaHandshake, FaMoneyBillWave, FaCheckCircle, FaLaptopCode, FaMobileAlt, FaSearch, FaLightbulb, FaEdit, FaRocket, FaFlask, FaAws, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaThLarge } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiFlutter, SiFirebase, SiMongodb } from 'react-icons/si';
import BrandLogo from '../components/BrandLogo';
import runnerImg from '../assets/runner.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
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
            THAT <span>POWERS</span>
            <br />
            STARTUPS.
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
              <FaCalendarAlt /> BOOK FREE CONSULTATION
            </a>
          </div>

          <div className="trust-avatars">
            <div className="avatar-group" aria-hidden="true">
              <div className="avatar avatar-1" />
              <div className="avatar avatar-2" />
              <div className="avatar avatar-3" />
              <div className="avatar avatar-4" />
              <div className="avatar avatar-more">+</div>
            </div>
            <div className="trust-text">
              <span>50+ Startups</span>
              Trust Kreed Tech
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: 'easeOut' }}
        >
          <div className="stat-card stat-card-top-left">
            <span className="stat-title">SUCCESS RATE</span>
            <strong className="stat-value">99%</strong>
            <span className="stat-subtitle">Client Satisfaction</span>
            <div className="stat-bars" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="stat-card stat-card-right">
            <span className="stat-title">STARTUPS SUPPORTED</span>
            <strong className="stat-value">50+</strong>
            <span className="stat-subtitle">From MVP to Scale</span>
            <FaUsers className="mini-icon" />
          </div>

          <div className="stat-card stat-card-left-bottom">
            <span className="stat-title">PROJECTS DELIVERED</span>
            <strong className="stat-value">100+</strong>
            <span className="stat-subtitle">Across the Globe</span>
            <FaCheckCircle className="mini-icon" />
          </div>

          <div className="hero-scene" aria-hidden="true" />
        </motion.div>
      </section>

      <section className="partners-section">
        <h6 className="partners-title">TRUSTED BY INNOVATIVE STARTUPS & BRANDS</h6>
        <div className="partners-grid">
          <span className="partner-logo">playo</span>
          <span className="partner-logo">FANZIO</span>
          <span className="partner-logo">SPORTZIFY</span>
          <span className="partner-logo">ATHLOCITY</span>
          <span className="partner-logo">FITVERSE</span>
          <span className="partner-logo">GAMEON</span>
          <span className="partner-logo">QuickCourt</span>
        </div>
      </section>

      <section className="services-section" id="services">
        <span className="section-tag">WHAT WE DO</span>
        <h2 className="section-title">
          TECH SERVICES THAT HELP STARTUPS <span>GROW</span>
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

      {/* Process Section */}
      <section className="process-section">
        <span className="section-tag-center">HOW WE BUILD</span>
        <h2 className="section-title-center">
          A PROVEN PROCESS. <span>REAL RESULTS.</span>
        </h2>
        
        <div className="process-flow">
          <ProcessStep number="01" icon={<FaSearch />} title="DISCOVER" desc="We understand your idea, goals and challenges." />
          <ProcessStep number="02" icon={<FaEdit />} title="PLAN" desc="We define the strategy, scope and roadmap." />
          <ProcessStep number="03" icon={<FaDraftingCompass />} title="DESIGN" desc="We design intuitive and impactful solutions." />
          <ProcessStep number="04" icon={<FaCode />} title="DEVELOP" desc="We build scalable, secure and high-quality products." />
          <ProcessStep number="05" icon={<FaShieldAlt />} title="TEST" desc="We ensure performance, security and reliability." />
          <ProcessStep number="06" icon={<FaRocket />} title="LAUNCH & SCALE" desc="We launch and help you grow beyond." />
        </div>
      </section>

      {/* Technologies Section */}
      <section className="tech-section">
        <span className="section-tag-center">TECHNOLOGIES WE WORK WITH</span>
        <div className="tech-grid">
            <TechItem icon={<SiReact color="#61DAFB" />} name="React" />
            <TechItem icon={<SiNextdotjs color="#FFFFFF" />} name="Next.js" />
            <TechItem icon={<SiNodedotjs color="#339933" />} name="Node.js" />
            <TechItem icon={<SiPython color="#3776AB" />} name="Python" />
            <TechItem icon={<SiFlutter color="#02569B" />} name="Flutter" />
            <TechItem icon={<FaAws color="#FF9900" />} name="AWS" />
            <TechItem icon={<SiFirebase color="#FFCA28" />} name="Firebase" />
            <TechItem icon={<SiMongodb color="#47A248" />} name="MongoDB" />
        </div>
        <div className="view-all-tech">
          <a href="#projects">VIEW ALL TECHNOLOGIES <FaArrowRight /></a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section">
        <div className="why-container">
          <div className="why-visual">
            <img src={runnerImg} alt="Agile Runner" className="runner-img" />
          </div>
          <div className="why-content">
            <span className="section-tag">WHY STARTUPS CHOOSE US</span>
            <div className="why-grid-items">
              <WhyItem 
                icon={<FaUsers />} 
                title="Startup Focused" 
                desc="We understand startups because we build them." 
              />
              <WhyItem 
                icon={<FaCheckCircle />} 
                title="Cost Effective" 
                desc="High-quality solutions that fit your budget." 
              />
              <WhyItem 
                icon={<FaClock />} 
                title="Agile & Transparent" 
                desc="We work in agile sprints with complete transparency." 
              />
              <WhyItem 
                icon={<FaHandshake />} 
                title="Long-term Partner" 
                desc="We grow with you at every stage." 
              />
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

const ProcessStep = ({ number, icon, title, desc }) => (
  <div className="process-step">
    <div className="step-num">{number}</div>
    <div className="step-icon-wrapper">
      <div className="step-icon">{icon}</div>
    </div>
    <h3 className="step-title">{title}</h3>
    <p className="step-desc">{desc}</p>
  </div>
);

const TechItem = ({ icon, name }) => (
  <div className="tech-item">
    <div className="tech-icon">{icon}</div>
    <span className="tech-name">{name}</span>
  </div>
);

const WhyItem = ({ icon, title, desc }) => (
  <div className="why-item">
    <div className="why-icon-circle">{icon}</div>
    <div className="why-text">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

const ServiceCard = ({ icon, title, desc }) => (
  <motion.div className="service-card" whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
    <div className="service-icon">{icon}</div>
    <h3 className="service-name">{title}</h3>
    <p className="service-desc">{desc}</p>
  </motion.div>
);

export default Home;
