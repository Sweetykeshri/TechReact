import React from 'react';
import { FaUsers, FaCheckCircle, FaClock, FaHandshake } from 'react-icons/fa';
import runnerImg from '../../assets/runner.png';
import './HomeWhyChooseUs.css';

const WhyItem = ({ icon, title, desc }) => (
  <div className="why-item">
    <div className="why-icon-circle">{icon}</div>
    <div className="why-text">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

const HomeWhyChooseUs = () => {
  return (
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
  );
};

export default HomeWhyChooseUs;
