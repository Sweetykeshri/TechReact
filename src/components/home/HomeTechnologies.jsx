import React from 'react';
import { FaAws } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiFlutter, SiFirebase, SiMongodb } from 'react-icons/si';
import { FaArrowRight } from 'react-icons/fa';
import './HomeTechnologies.css';

const TechItem = ({ icon, name }) => (
  <div className="tech-item">
    <div className="tech-icon">{icon}</div>
    <span className="tech-name">{name}</span>
  </div>
);

const HomeTechnologies = () => {
  return (
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
  );
};

export default HomeTechnologies;
