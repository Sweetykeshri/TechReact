import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';
import BrandLogo from './BrandLogo';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/', label: 'HOME' },
  { to: '/tech-services', label: 'TECH SERVICES' },
  { to: '/startup-support', label: 'STARTUP SUPPORT' },
  { to: '/sports-tech', label: 'SPORTS TECH' },
  { to: '/projects', label: 'PROJECTS' },
  { to: '/about-us', label: 'ABOUT US' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [closeMenu]);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Link to="/" aria-label="Kreed Tech home" onClick={closeMenu}>
            <BrandLogo className="navbar-brand-logo" />
          </Link>
        </div>

        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <HiOutlineXMark aria-hidden /> : <HiOutlineBars3 aria-hidden />}
        </button>

        <div
          className={`navbar-backdrop ${isOpen ? 'active' : ''}`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        <ul
          id="navbar-menu"
          className={`navbar-links ${isOpen ? 'active' : ''}`}
        >
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={closeMenu}
                className={location.pathname === to ? 'is-active' : ''}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mobile-cta">
            <Link to="/contact" className="nav-cta" onClick={closeMenu}>
              LET&apos;S TALK <FaArrowRight size={12} aria-hidden />
            </Link>
          </li>
        </ul>

        <Link to="/contact" className="nav-cta desktop-cta">
          LET&apos;S TALK <FaArrowRight size={12} aria-hidden />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
