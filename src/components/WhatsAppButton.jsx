import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

/**
 * Floating WhatsApp button.
 * Props:
 * - phone: phone number in international format without + (default: '911234567890')
 * - message: default message text
 */
const WhatsAppButton = ({ phone = '911234567890', message = "Hi! I'm interested in your services." }) => {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="wa-inner">
        <FaWhatsapp size={22} />
      </span>
    </a>
  );
};

export default WhatsAppButton;
