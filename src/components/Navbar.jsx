import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';
import BrandLogo from './BrandLogo';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" aria-label="Kreed Tech home">
          <BrandLogo className="navbar-brand-logo" />
        </Link>
      </div>

      <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
        <li><Link to="/tech-services" onClick={() => setIsOpen(false)}>TECH SERVICES</Link></li>
        <li><Link to="/startup-support" onClick={() => setIsOpen(false)}>STARTUP SUPPORT</Link></li>
        <li><Link to="/sports-tech" onClick={() => setIsOpen(false)}>SPORTS TECH</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>PROJECTS</Link></li>
        <li><Link to="/about-us" onClick={() => setIsOpen(false)}>ABOUT US</Link></li>
        <li className="mobile-cta">
          <Link to="/contact" className="nav-cta" onClick={() => setIsOpen(false)}>
            LET'S TALK <FaArrowRight size={12} />
          </Link>
        </li>
      </ul>

      <Link to="/contact" className="nav-cta desktop-cta">
        LET'S TALK <FaArrowRight size={12} />
      </Link>
    </nav>
  );
};

export default Navbar;
