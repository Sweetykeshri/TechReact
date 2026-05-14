import React from 'react';
import { 
  HiOutlineArrowRight, 
  HiOutlineCalendar, 
  HiOutlineLightBulb, 
  HiOutlineChartBar, 
  HiOutlineUserGroup, 
  HiOutlineGlobeAlt, 
  HiOutlinePresentationChartLine,
  HiOutlineVideoCamera,
  HiOutlineViewfinderCircle,
  HiOutlineTrophy,
  HiOutlineUsers,
  HiOutlineBuildingOffice2,
  HiOutlineCpuChip,
  HiOutlineFire,
  HiOutlineBolt
} from 'react-icons/hi2';
import './SportsTech.css';

const SportsTech = () => {
  const solutions = [
    {
      icon: <HiOutlinePresentationChartLine />,
      title: "PERFORMANCE ANALYTICS",
      features: ["Player & team analytics", "Performance tracking", "Advanced statistics", "Data visualization"]
    },
    {
      icon: <HiOutlineVideoCamera />,
      title: "LIVE SCORING & BROADCASTING",
      features: ["Real-time scoring", "Live streaming", "Multi-platform support", "Engaging fan experience"]
    },
    {
      icon: <HiOutlineViewfinderCircle />,
      title: "PLAYER TRACKING SYSTEMS",
      features: ["GPS & wearable tracking", "Movement analytics", "Load management", "Injury prevention"]
    },
    {
      icon: <HiOutlineTrophy />,
      title: "TOURNAMENT & LEAGUE SYSTEMS",
      features: ["Tournament management", "League & standings", "Fixture management", "Automated workflows"]
    },
    {
      icon: <HiOutlineUsers />,
      title: "FAN ENGAGEMENT PLATFORMS",
      features: ["Fan communities", "Gamification", "Rewards & loyalty", "Interactive features"]
    },
    {
      icon: <HiOutlineBuildingOffice2 />,
      title: "FACILITY & CLUB MANAGEMENT",
      features: ["Facility bookings", "Member management", "Finance & billing", "Operations control"]
    }
  ];

  return (
    <div className="sports-container">
      {/* Background Image Layer */}
      <div className="sports-bg">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000" 
          alt="Sports Technology Stadium" 
        />
      </div>

      {/* Floating UI Markers (Exact Copy of the design layout) */}
      <div className="visual-markers">
        <div className="marker m-performance">
          <div className="marker-circle"><HiOutlineLightBulb /></div>
          <span className="marker-label">Performance<br/>Analytics</span>
        </div>
        <div className="marker m-live">
          <div className="marker-circle"><HiOutlinePresentationChartLine /></div>
          <span className="marker-label">Live Match<br/>Analytics</span>
        </div>
        <div className="marker m-player">
          <div className="marker-circle"><HiOutlineUserGroup /></div>
          <span className="marker-label">Player<br/>Tracking</span>
        </div>
        <div className="marker m-scouting">
          <div className="marker-circle"><HiOutlineChartBar /></div>
          <span className="marker-label">Smart<br/>Scouting</span>
        </div>
        <div className="marker m-fan">
          <div className="marker-circle"><HiOutlineGlobeAlt /></div>
          <span className="marker-label">Fan<br/>Engagement</span>
        </div>
      </div>

      {/* Hero Content Section */}
      <section className="sports-hero">
        <div className="hero-text">
          <div className="sports-badge">
            <div className="badge-dot"></div>
            <span className="badge-label">Sports Tech</span>
          </div>

          <h1 className="hero-main-title">
            <span>Technology</span>
            <span>That Elevates</span>
            <span className="highlight">Performance.</span>
          </h1>

          <p className="hero-sub">
            We build smart digital products and data-driven solutions that help athletes, teams, leagues, and sports organizations perform at their best.
          </p>

          <div className="sports-btns">
            <a href="#solutions" className="btn-primary">
              EXPLORE SOLUTIONS <HiOutlineArrowRight />
            </a>
            <a href="#consultation" className="btn-outline">
              <HiOutlineCalendar className="icon-yellow" /> BOOK A CONSULTATION
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar Section */}
      <section className="sports-stats-bar">
        <div className="stats-track">
          <div className="stat-item">
            <div className="stat-icon-circ"><HiOutlinePresentationChartLine /></div>
            <div className="stat-info">
              <span className="stat-num">100+</span>
              <span className="stat-label">Sports Projects</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circ"><HiOutlineUserGroup /></div>
            <div className="stat-info">
              <span className="stat-num">50+</span>
              <span className="stat-label">Teams & Leagues</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circ"><HiOutlineChartBar /></div>
            <div className="stat-info">
              <span className="stat-num">25+</span>
              <span className="stat-label">Sports Verticals</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circ"><HiOutlineLightBulb /></div>
            <div className="stat-info">
              <span className="stat-num">10M+</span>
              <span className="stat-label">Athletes Impacted</span>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon-circ"><HiOutlineGlobeAlt /></div>
            <div className="stat-info">
              <span className="stat-num">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Solutions Description Section */}
      <section className="sports-intro-section">
        <div className="intro-content">
          <div className="intro-line-wrapper">
            <div className="gold-line"></div>
            <h2 className="intro-title">SMART SOLUTIONS FOR THE FUTURE OF SPORTS</h2>
            <div className="gold-line"></div>
          </div>
          <p className="intro-text">
            We combine technology, analytics and innovation to build solutions that transform the way sports are played, managed and experienced.
          </p>
        </div>
      </section>

      {/* Solutions Grid Section */}
      <section className="sports-solutions-grid">
        <div className="solutions-container">
          {solutions.map((item, index) => (
            <div className="solution-card" key={index}>
              <div className="sol-icon">{item.icon}</div>
              <h3 className="sol-title">{item.title}</h3>
              <ul className="sol-features">
                {item.features.map((feature, fIndex) => (
                  <li key={fIndex}>• {feature}</li>
                ))}
              </ul>
              <a href="#learn-more" className="sol-learn">
                LEARN MORE <HiOutlineArrowRight />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Winning Strategies Section */}
      <section className="sports-strategy-section">
        <div className="strategy-card">
          <div className="strategy-content">
            <span className="strategy-tag">DATA. INSIGHTS. VICTORY.</span>
            <h2 className="strategy-title">TURNING DATA INTO <span className="highlight">WINNING STRATEGIES.</span></h2>
            <p className="strategy-desc">
              From grassroots to professional leagues, our sports tech solutions help you make smarter decisions and stay ahead of the game.
            </p>
          </div>
          <div className="strategy-stats">
            <div className="strat-stat-item">
              <div className="strat-stat-header">
                <div className="icon-badge">
                  <HiOutlineCpuChip className="strat-icon" />
                </div>
                <span className="strat-value">85%</span>
              </div>
              <span className="strat-label">Better Performance</span>
            </div>
            <div className="strat-stat-item">
              <div className="strat-stat-header">
                <div className="icon-badge">
                  <HiOutlineFire className="strat-icon" />
                </div>
                <span className="strat-value">35%</span>
              </div>
              <span className="strat-label">Injury Reduction</span>
            </div>
            <div className="strat-stat-item">
              <div className="strat-stat-header">
                <div className="icon-badge">
                  <HiOutlineBolt className="strat-icon" />
                </div>
                <span className="strat-value">60%</span>
              </div>
              <span className="strat-label">Operational Efficiency</span>
            </div>
          </div>
          {/* Decorative Graph/Vector could be added here via CSS or SVG */}
          <div className="strategy-graph-overlay"></div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="sports-trusted-section">
        <div className="trusted-header">
          <div className="title-with-lines">
            <div className="deco-line"></div>
            <h2 className="trusted-title">TRUSTED BY SPORTS LEADERS</h2>
            <div className="deco-line"></div>
          </div>
        </div>
        <div className="trusted-logos">
          <div className="logo-item">playo</div>
          <div className="logo-item">FANZIO</div>
          <div className="logo-item">SPORTZIFY</div>
          <div className="logo-item">ATHLOCITY</div>
          <div className="logo-item">FITVERSE</div>
          <div className="logo-item">GAME ON</div>
          <div className="logo-item">QuickCourt</div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="sports-cta-section">
        <div className="sports-cta-card">
          <div className="cta-content-grid">
            <div className="cta-text-side">
              <span className="cta-pre">LET'S BUILD THE FUTURE OF SPORTS TOGETHER</span>
              <h2 className="cta-main-title">Ready to <span className="highlight">Transform</span> Your Sports Organization?</h2>
              <p className="cta-description">
                Connect with our experts and discover how technology can take your performance to the next level.
              </p>
            </div>
            
            <div className="cta-visual-side">
              <div className="ball-container">
                <div className="glowing-ball">
                  <div className="ball-img-wrap">
                    <img src="https://images.unsplash.com/photo-1546519156-d501308ee403?auto=format&fit=crop&q=80&w=600" alt="Tech Sports" />
                    <div className="ball-overlay-text">SPORTS</div>
                  </div>
                  <div className="ball-orbit"></div>
                </div>
              </div>
            </div>

            <div className="cta-actions-side">
              <a href="#contact" className="cta-btn-solid">
                TALK TO OUR EXPERTS <HiOutlineArrowRight />
              </a>
              <a href="#work" className="cta-btn-outline">
                <HiOutlineCalendar /> VIEW OUR WORK
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsTech;
