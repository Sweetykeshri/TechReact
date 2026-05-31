import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';
import './Contact.css';

const Contact = () => (
  <div className="contact-page">
    <section className="contact-hero">
      <div className="contact-container">
        <span className="contact-badge">Get In Touch</span>
        <h1 className="contact-title">
          Let's Start a <span>Conversation</span>
        </h1>
        <p className="contact-subtitle">
          Tell us about your project. Our team will respond within one business day.
        </p>
      </div>
    </section>

    <section className="contact-body">
      <div className="contact-container contact-grid">
        <form className="contact-form glass-card" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <label>
              Full Name
              <input type="text" placeholder="John Doe" />
            </label>
            <label>
              Email
              <input type="email" placeholder="john@company.com" />
            </label>
          </div>
          <label>
            Company
            <input type="text" placeholder="Your company name" />
          </label>
          <label>
            Message
            <textarea rows={5} placeholder="Describe your project or inquiry..." />
          </label>
          <button type="submit" className="btn-primary contact-submit">
            Send Message <FaArrowRight size={12} />
          </button>
        </form>

        <div className="contact-info">
          <div className="info-card glass-card">
            <HiOutlineMail className="info-icon" />
            <h3>Email</h3>
            <p>hello@kreedtech.com</p>
          </div>
          <div className="info-card glass-card">
            <HiOutlinePhone className="info-icon" />
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="info-card glass-card">
            <HiOutlineLocationMarker className="info-icon" />
            <h3>Office</h3>
            <p>123 Innovation Drive, Tech City</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
