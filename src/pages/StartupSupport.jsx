import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineCodeBracket } from 'react-icons/hi2';
import { HiOutlineCalendar, HiOutlineLightBulb, HiOutlineChartBar, HiOutlineRocketLaunch } from 'react-icons/hi2';
import { FiTarget, FiDollarSign, FiZap, FiLayers, FiShield, FiTrendingUp, FiPenTool, FiCheckCircle } from 'react-icons/fi';
import './StartupSupport.css';

const whyCards = [
  {
    icon: <FiTarget />,
    title: 'Startup Focused',
    desc: 'We understand startups because we build and scale with them.'
  },
  {
    icon: <FiDollarSign />,
    title: 'Cost Effective',
    desc: 'High quality tech solutions that match your budget.'
  },
  {
    icon: <FiZap />,
    title: 'Agile & Fast',
    desc: 'We move fast and adapt quickly to your changing needs.'
  },
  {
    icon: <FiLayers />,
    title: 'End-to-End Support',
    desc: 'From strategy to launch and beyond, we are with you all the way.'
  },
  {
    icon: <FiShield />,
    title: 'Risk Free',
    desc: 'Transparent process, no hidden costs, complete security.'
  },
  {
    icon: <FiTrendingUp />,
    title: 'Growth Partner',
    desc: 'We build scalable solutions that grow with your startup.'
  }
];

const supportSteps = [
  {
    id: '01',
    icon: <HiOutlineLightBulb />,
    title: 'Idea Validation',
    desc: 'We help validate your concept with research, user interviews, and rapid prototypes so you build what users actually want.'
  },
  {
    id: '02',
    icon: <FiPenTool />,
    title: 'Product Strategy & Design',
    desc: 'Define clear product goals, customer journeys and UX that converts — ready for engineering handoff.'
  },
  {
    id: '03',
    icon: <HiOutlineCodeBracket />,
    title: 'MVP Development',
    desc: 'Ship a lean, testable MVP quickly using modern stacks so you can learn from real users.'
  },
  {
    id: '04',
    icon: <FiLayers />,
    title: 'Scalable Architecture',
    desc: 'Build maintainable, secure and scalable backends and infrastructure that grow with your startup.'
  },
  {
    id: '05',
    icon: <FiCheckCircle />,
    title: 'Launch & Ongoing Support',
    desc: 'From launch planning to continuous improvements and monitoring — we stay on to help you grow.'
  }
];

const getOffers = [
  {
    title: 'MVP Development',
    desc: 'Launch your product fast and validate in the real market.'
  },
  {
    title: 'Scalable Architecture',
    desc: 'Future-ready solutions built to scale as you grow.'
  },
  {
    title: 'Modern Tech Stack',
    desc: 'We use the latest technologies to give you a competitive edge.'
  },
  {
    title: 'Product Design & UX',
    desc: 'Beautiful, intuitive and user-friendly experiences.'
  },
  {
    title: 'Ongoing Support',
    desc: 'Continuous support and iteration for long term success.'
  }
];

const StartupSupport = () => (
  <div className="startup-support-page">
    <section className="startup-hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <span className="hero-chip">STARTUP SUPPORT</span>
            <h1 className="hero-title">
              WE DON'T JUST SUPPORT STARTUPS.
              <span> WE BUILD THEM.</span>
            </h1>
            <p className="hero-subtitle">
              From idea validation to product launch and growth - we are your technology partner in every step
              of your startup journey.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#get-support">
                GET STARTUP SUPPORT <FaArrowRight />
              </a>
              <a className="btn-secondary" href="#consultation">
                <HiOutlineCalendar /> BOOK FREE CONSULTATION
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatar-group">
                <span className="avatar" />
                <span className="avatar" />
                <span className="avatar" />
                <span className="avatar" />
                <span className="avatar" />
              </div>
              <div className="proof-text">
                <strong>50+ Startups</strong>
                <span>Trust Kreed Tech</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-scene">
              <div className="scene-overlay" />
              <div className="process-steps">
                <div className="process-item">
                  <HiOutlineLightBulb />
                  <span>IDEA</span>
                </div>
                <div className="process-item">
                  <HiOutlineCodeBracket />
                  <span>BUILD</span>
                </div>
                <div className="process-item">
                  <HiOutlineRocketLaunch />
                  <span>LAUNCH</span>
                </div>
                <div className="process-item">
                  <HiOutlineChartBar />
                  <span>GROW</span>
                </div>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-value">50+</div>
                <div className="stat-label">Startups Supported</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">20+</div>
                <div className="stat-label">Industries</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">98%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">10+</div>
                <div className="stat-label">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="startup-highlights">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">WHY <span>STARTUPS</span> CHOOSE KREED TECH?</h2>
        </div>
        <div className="why-grid">
          {whyCards.map((card, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="section-head support-head">
          <h2 className="section-title">HOW WE <span>SUPPORT</span> STARTUPS</h2>
        </div>
        <div className="support-steps">
          {supportSteps.map((step, index) => (
            <div key={index} className="support-step">
              <div className="step-line" />
              <div className="step-icon">
                {step.icon}
              </div>
              <div className="step-meta">
                <span className="step-num">{step.id}</span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="offers-section">
          <div className="section-head">
            <h2 className="section-title">WHAT <span>YOU GET</span> WITH KREED TECH</h2>
          </div>
          <div className="offers-grid">
            <div className="offer-panel-left">
              <div className="puzzle-image" />
            </div>
            <div className="offer-panel-right">
              {getOffers.map((item, idx) => (
                <div key={idx} className="offer-item">
                  <div className="offer-check">
                    <FiCheckCircle />
                  </div>
                  <div className="offer-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cta-banner">
          <div className="cta-content">
            <span className="cta-chip">READY TO TURN YOUR IDEA INTO REALITY?</span>
            <h3>We're ready when you are.</h3>
            <p>Let's build something extraordinary together.</p>
          </div>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">
              TALK TO OUR EXPERTS <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn-outline">
              <HiOutlineCalendar /> BOOK FREE CONSULTATION
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Footer (shared) - removed inline footer to use global Footer component */}
  </div>
);

export default StartupSupport;
