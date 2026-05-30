import React from 'react';
import { FaSearch, FaEdit, FaDraftingCompass, FaCode, FaShieldAlt, FaRocket } from 'react-icons/fa';
import './HomeHowWeBuild.css';

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

const HomeHowWeBuild = () => {
  return (
    <section className="process-section">
      <div className="process-inner">
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
      </div>
    </section>
  );
};

export default HomeHowWeBuild;
