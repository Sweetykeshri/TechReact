import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowNarrowRight, HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ showCTA = true }) => {
  return (
    <footer className="footer-section">
      {showCTA && (
        <div className="cta-container">
          <motion.div 
            className="cta-banner"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Build Something <br />
                <span className="highlight">Extraordinary?</span>
              </h2>
              <p className="cta-subtitle">
                Let's turn your vision into a powerful digital product <br />
                that drives growth and creates impact.
              </p>
            </div>
            <div className="cta-actions">
              <button className="cta-btn primary">
                TALK TO OUR EXPERTS <HiArrowNarrowRight className="icon" />
              </button>
              <button className="cta-btn secondary">
                <span className="view-icon">⠿</span> VIEW OUR WORK
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="logo-k">K</span>
              <span className="logo-r">R</span>
              <span className="logo-e">E</span>
              <span className="logo-e2">E</span>
              <span className="logo-d">D</span>
              <div className="logo-tech">TECH</div>
            </div>
            <p className="brand-desc">
              Kreed Tech is the technology & innovation arm of Kreedashala, 
              empowering startups and organizations with cutting-edge digital solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-label">QUICK LINKS</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Tech Services</a></li>
              <li><a href="/startup-support">Startup Support</a></li>
              <li><a href="/sports-tech">Sports Tech</a></li>
              <li><a href="/projects">Projects</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-label">COMPANY</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-label">CONTACT US</h4>
            <div className="contact-item">
              <HiOutlineMail className="contact-icon" />
              <span>hello@kreed.tech</span>
            </div>
            <div className="contact-item">
              <HiOutlinePhone className="contact-icon" />
              <span>+91 12345 67890</span>
            </div>
            <div className="contact-item">
              <HiOutlineLocationMarker className="contact-icon" />
              <span>India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Ars Kreedashala Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
