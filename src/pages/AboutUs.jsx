import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaGlobe, FaCode, FaTrophy, FaLightbulb, FaShieldAlt, FaHandshake, FaChartLine, FaFlag, FaMapMarkerAlt, FaBullseye, FaSearch, FaPalette, FaCheckCircle, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  const stats = [
    { icon: <FaRocket />, value: '5+', label: 'YEARS OF INNOVATION', sub: 'Building digital products that make a difference.' },
    { icon: <FaUsers />, value: '120+', label: 'STARTUPS EMPOWERED', sub: 'Trusted by founders across the globe.' },
    { icon: <FaGlobe />, value: '20+', label: 'INDUSTRIES SERVED', sub: 'Diverse experience, Global impact.' },
    { icon: <FaCode />, value: '250+', label: 'PROJECTS DELIVERED', sub: 'From MVPs to enterprise grade solutions.' },
    { icon: <FaTrophy />, value: '98%', label: 'CLIENT SATISFACTION', sub: 'Long-term relationships built on trust.' },
  ];

  const approachSteps = [
    { label: 'Discover', desc: 'We dive deep into your vision.', icon: <FaSearch /> },
    { label: 'Design', desc: 'We craft user-centric, future-ready designs.', icon: <FaPalette /> },
    { label: 'Develop', desc: 'We build scalable and secure solutions.', icon: <FaCode /> },
    { label: 'Deploy', desc: 'We ensure a smooth launch.', icon: <FaRocket /> },
    { label: 'Grow', desc: 'We stay with you to scale and optimize.', icon: <FaChartLine /> },
  ];

  const timeline = [
    { year: '2020', title: 'The Beginning', desc: 'An idea to empower startups with tech.', icon: <FaMapMarkerAlt />, pos: { bottom: '15%', left: '5%' } },
    { year: '2021', title: 'First Steps', desc: 'Built our team and delivered first MVPs.', icon: <FaFlag />, pos: { top: '25%', left: '10%' } },
    { year: '2022', title: 'Growth Phase', desc: 'Scaled solutions and expanded globally.', icon: <FaChartLine />, pos: { top: '5%', left: '50%', transform: 'translateX(-50%)' } },
    { year: '2023', title: 'Diversification', desc: 'Ventured into sports tech, enterprise & beyond.', icon: <FaGlobe />, pos: { top: '25%', right: '10%' } },
    { year: '2024 & Beyond', title: 'Building Impact', desc: 'Continuing to innovate, scale & create impact across industries.', icon: <FaRocket />, pos: { bottom: '15%', right: '5%' } },
  ];

  const values = [
    { icon: <FaBullseye />, title: 'CLIENT FIRST', desc: 'We put our clients success at the heart of everything we do.' },
    { icon: <FaLightbulb />, title: 'INNOVATION', desc: 'We challenge the status quo and build solutions for the future.' },
    { icon: <FaShieldAlt />, title: 'INTEGRITY', desc: 'We believe in transparency, honesty, and ethical partnerships.' },
    { icon: <FaHandshake />, title: 'COLLABORATION', desc: 'We grow together with our clients, as one team.' },
    { icon: <FaChartLine />, title: 'IMPACT', desc: 'We measure success by the impact we create for businesses and society.' },
  ];

  return (
    <div className='about-page'>
      <section className='about-hero'>
        <div className='about-content-wrapper'>
          <motion.div 
            className='about-text-section'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='about-badge-line'>
                <span className='line'></span>
                <span className='badge-text'>ABOUT US</span>
            </div>
            <h1 className='about-main-title'>
              WE ARE BUILDERS.<br />
              WE ARE PARTNERS.<br />
              WE ARE <span className='highlight'>KREED TECH.</span>
            </h1>
            
            <div className='title-underline'></div>

            <p className='about-paragraph'>
              Ars Kreedashala Tech (Kreed Tech) is a technology and 
              innovation arm dedicated to empowering startups and 
              businesses with cutting-edge digital solutions.
            </p>
            <p className='about-paragraph'>
              We don't just write code — we build products, scale ideas, 
              and create impact.
            </p>
          </motion.div>

          <motion.div 
            className='about-image-section'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className='office-image-container'>
                <img src='/src/assets/tech-hero-bg.png' alt='Kreed Tech Office' className='office-img' />
                <div className='image-overlay-glow'></div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className='stats-bar'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className='stat-item'>
              <div className='stat-icon'>{stat.icon}</div>
              <div className='stat-info'>
                <h3>{stat.value}</h3>
                <p className='stat-label'>{stat.label}</p>
                <p className='stat-subtext'>{stat.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Story & Timeline Section */}
      <section className='story-section'>
        <div className='story-container'>
          <div className='story-content'>
            <div className='story-badge'>OUR STORY</div>
            <h2 className='story-title'>FROM A VISION<br />TO A <span className='highlight'>MOVEMENT</span></h2>
            <p className='story-desc'>
              Kreed Tech was born from a simple belief — technology can transform ideas into reality and change the world.
            </p>
            <p className='story-desc'>
              What started as a mission to help startups has grown into a full-service technology partner for businesses worldwide.
            </p>
            <p className='story-desc'>
              Today, we stand as a team of dreamers, developers, strategists, and problem-solvers — building products that create real-world impact.
            </p>
          </div>

          <div className='timeline-visual'>
            <div className='arc-path'></div>
            <div className='central-visual'>
                <div className='silhouette-mountain'></div>
                <div className='glow-circle'></div>
            </div>
            {timeline.map((item, idx) => (
                <div key={idx} className='timeline-item' style={item.pos}>
                    <div className='time-icon-wrapper'>
                        {item.icon}
                        <div className='dot-glow'></div>
                    </div>
                    <div className='time-content'>
                        <span className='time-year'>{item.year}</span>
                        <h4 className='time-title'>{item.title}</h4>
                        <p className='time-desc'>{item.desc}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='values-section'>
        <div className='values-header'>
            <div className='line'></div>
            <span className='values-title-text'>OUR VALUES</span>
            <div className='line'></div>
        </div>
        <div className='values-grid'>
            {values.map((v, i) => (
                <div key={i} className='value-card'>
                    <div className='value-icon'>{v.icon}</div>
                    <h4 className='value-title'>{v.title}</h4>
                    <p className='value-desc'>{v.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className='approach-section'>
        <div className='approach-container'>
          <div className='approach-visual-side'>
            <div className='approach-central-hub'>
              <div className='hub-k'>K</div>
              <div className='hub-rings'>
                <div className='ring ring-1'></div>
                <div className='ring ring-2'></div>
                <div className='ring ring-3'></div>
              </div>
              
              <div className='approach-node node-discover'>
                <div className='node-icon'><FaSearch /></div>
                <div className='node-label'>DISCOVER</div>
                <div className='node-sub'>Understand goals and challenges</div>
              </div>
              <div className='approach-node node-design'>
                <div className='node-icon'><FaPalette /></div>
                <div className='node-label'>DESIGN</div>
                <div className='node-sub'>Plan and plan creative prototypes</div>
              </div>
              <div className='approach-node node-develop'>
                <div className='node-icon'><FaCode /></div>
                <div className='node-label'>DEVELOP</div>
                <div className='node-sub'>Build scalable and secure solutions</div>
              </div>
              <div className='approach-node node-deploy'>
                <div className='node-icon'><FaRocket /></div>
                <div className='node-label'>DEPLOY</div>
                <div className='node-sub'>Launch and ensure transition</div>
              </div>
              <div className='approach-node node-grow'>
                <div className='node-icon'><FaChartLine /></div>
                <div className='node-label'>GROW</div>
                <div className='node-sub'>Optimize, scale, and drive continuous</div>
              </div>
            </div>
          </div>

          <div className='approach-text-side'>
            <div className='approach-badge'>OUR APPROACH</div>
            <h2 className='approach-main-title'>BUILD. LAUNCH. GROW.</h2>
            <p className='approach-desc'>
              We follow a proven approach to turn ideas into impactful digital products.
            </p>
            <div className='approach-steps-list'>
              {approachSteps.map((step, idx) => (
                <div key={idx} className='approach-step-item'>
                  <FaCheckCircle className='step-check-icon' />
                  <div className='step-text-content'>
                    <strong>{step.label}</strong> — {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team & CTA Section */}
      <section className='team-cta-wrapper'>
        <div className='people-section'>
          <div className='people-content'>
            <div className='people-badge'>OUR PEOPLE</div>
            <h2 className='people-title'>A TEAM UNITED BY <span className='highlight'>PURPOSE</span></h2>
            <p className='people-desc'>
              We are a diverse team of engineers, designers, strategists, and innovators who love solving complex problems and building meaningful products.
            </p>
            <button className='meet-team-btn'>
              MEET OUR TEAM <FaArrowRight />
            </button>
          </div>
          <div className='people-visual'>
            <div className='team-silhouette-overlay'></div>
            <img src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1470' alt='Our Team' className='team-bg-img' />
          </div>
        </div>

        <div className='bottom-cta-banner'>
          <div className='cta-banner-bg'></div>
          <div className='cta-content-inner'>
            <div className='cta-left'>
              <div className='cta-badge'>LET'S BUILD THE FUTURE TOGETHER</div>
              <h2 className='cta-title'>Your vision. Our technology.<br />Limitless possibilities.</h2>
            </div>
            <div className='cta-right'>
              <button className='talk-expert-btn'>
                TALK TO OUR EXPERTS <FaArrowRight />
              </button>
              <button className='book-consult-btn'>
                <FaCalendarAlt /> BOOK A FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer (shared) rendered from App.jsx */}
    </div>
  );
};

export default AboutUs;