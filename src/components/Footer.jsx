import React from 'react';
import { Link } from 'react-router-dom';
import {
  HiArrowNarrowRight,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineArrowUp,
} from 'react-icons/hi';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import BrandLogo from './BrandLogo';
import './Footer.css';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/tech-services', label: 'Tech Services' },
  { to: '/startup-support', label: 'Startup Support' },
  { to: '/sports-tech', label: 'Sports Tech' },
  { to: '/projects', label: 'Projects' },
];

const COMPANY_LINKS = [
  { to: '/about-us', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/tech-services', label: 'Our Services' },
  { to: '/projects', label: 'Case Studies' },
];

const SOCIAL_LINKS = [
  { href: 'https://facebook.com', label: 'Facebook', icon: <FaFacebookF /> },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: <FaLinkedinIn /> },
  { href: 'https://instagram.com', label: 'Instagram', icon: <FaInstagram /> },
  { href: 'https://youtube.com', label: 'YouTube', icon: <FaYoutube /> },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__container">
        {/* CTA strip */}
        <div className="site-footer__cta">
          <div className="site-footer__cta-text">
            <span className="site-footer__eyebrow">Let&apos;s Collaborate</span>
            <h2 className="site-footer__cta-title">
              Ready to build something <span>extraordinary?</span>
            </h2>
            <p className="site-footer__cta-desc">
              Turn your vision into a digital product that drives real growth.
            </p>
          </div>
          <div className="site-footer__cta-btns">
            <Link to="/contact" className="site-footer__btn site-footer__btn--fill">
              Talk to Experts <HiArrowNarrowRight aria-hidden />
            </Link>
            <Link to="/projects" className="site-footer__btn site-footer__btn--outline">
              View Our Work <HiArrowNarrowRight aria-hidden />
            </Link>
          </div>
        </div>

        {/* Main columns */}
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__logo" aria-label="Kreed Tech home">
              <BrandLogo className="site-footer__logo-img" />
            </Link>
            <p className="site-footer__about">
              Kreed Tech empowers startups and organizations with cutting-edge digital
              solutions — from strategy to launch and scale.
            </p>
            <div className="site-footer__socials">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="site-footer__social"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="site-footer__col">
            <h3 className="site-footer__heading">Quick Links</h3>
            <ul className="site-footer__list">
              {QUICK_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h3 className="site-footer__heading">Company</h3>
            <ul className="site-footer__list">
              {COMPANY_LINKS.map(({ to, label }) => (
                <li key={`${to}-${label}`}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col site-footer__col--contact">
            <h3 className="site-footer__heading">Get in Touch</h3>
            <ul className="site-footer__contacts">
              <li>
                <a href="mailto:hello@kreed.tech" className="site-footer__contact">
                  <HiOutlineMail aria-hidden />
                  <span>hello@kreed.tech</span>
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="site-footer__contact">
                  <HiOutlinePhone aria-hidden />
                  <span>+91 12345 67890</span>
                </a>
              </li>
              <li>
                <span className="site-footer__contact">
                  <HiOutlineLocationMarker aria-hidden />
                  <span>India</span>
                </span>
              </li>
            </ul>

            <form className="site-footer__newsletter" onSubmit={handleNewsletter}>
              <label className="site-footer__newsletter-label" htmlFor="footer-email">
                Newsletter
              </label>
              <div className="site-footer__newsletter-row">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Email address"
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  <HiArrowNarrowRight aria-hidden />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="site-footer__bar">
          <p className="site-footer__copy">
            &copy; {new Date().getFullYear()} Ars Kreedashala Tech. All rights reserved.
          </p>
          <nav className="site-footer__legal" aria-label="Legal links">
            <Link to="/contact">Privacy</Link>
            <Link to="/contact">Terms</Link>
            <Link to="/contact">Support</Link>
          </nav>
          <button
            type="button"
            className="site-footer__top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <HiOutlineArrowUp aria-hidden />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
