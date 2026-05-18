import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaArrowRight } from 'react-icons/fa';
import './HomeRealState.css';

const propertyData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&w=800&q=80',
    price: '$2,450,000',
    title: 'Modern Silicon Valley Villa',
    location: 'Palo Alto, CA',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    tag: 'PREMIUM'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687940-4e5a48a259b3?auto=format&fit=crop&w=800&q=80',
    price: '$1,890,000',
    title: 'Minimalist Tech Hub Loft',
    location: 'San Francisco, CA',
    beds: 3,
    baths: 2,
    sqft: '2,800',
    tag: 'TRENDING'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&w=800&q=80',
    price: '$3,100,000',
    title: 'Luxury Smart Penthouse',
    location: 'Austin, TX',
    beds: 4,
    baths: 3,
    sqft: '3,500',
    tag: 'NEWLY ADDED'
  }
];

const PropertyCard = ({ property }) => (
  <motion.div 
    className="property-card"
    whileHover={{ y: -12 }}
    transition={{ duration: 0.3 }}
  >
    <div className="property-image-container">
      <img src={property.image} alt={property.title} className="property-image" />
      <span className="property-tag">{property.tag}</span>
      <div className="property-price">{property.price}</div>
    </div>
    <div className="property-info">
      <h3 className="property-title">{property.title}</h3>
      <p className="property-location">
        <FaMapMarkerAlt /> {property.location}
      </p>
      <div className="property-details">
        <span><FaBed /> {property.beds} Beds</span>
        <span><FaBath /> {property.baths} Baths</span>
        <span><FaRulerCombined /> {property.sqft} sqft</span>
      </div>
      <button className="view-details-btn">
        VIEW DETAILS <FaArrowRight size={12} />
      </button>
    </div>
  </motion.div>
);

const HomeRealState = () => {
  return (
    <section className="real-state-section" id="real-estate">
      <div className="real-state-container">
        <span className="section-tag">REAL ESTATE SOLUTIONS</span>
        <div className="section-header">
          <h2 className="section-title">
            <span style={{ color: '#ffffff' }}>SMART HOMES FOR THE</span> <span>FUTURE</span>
          </h2>
          <p className="section-subtitle">
            Experience the next generation of luxury living with our tech-integrated real estate solutions.
          </p>
        </div>

        <div className="properties-grid">
          {propertyData.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="view-more-wrapper">
          <a href="/projects" className="view-all-btn">
            DISCOVER ALL PROPERTIES <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeRealState;
