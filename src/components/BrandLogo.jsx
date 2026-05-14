import React, { useId } from 'react';

const BrandLogo = ({ className = '', ariaLabel = 'Kreed Tech logo' }) => {
  const gradientId = useId().replace(/:/g, '');

  return (
    <svg
      className={className}
      viewBox="0 0 1200 420"
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{ariaLabel}</title>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#87913a" />
          <stop offset="50%" stopColor="#7f8735" />
          <stop offset="100%" stopColor="#8c9440" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradientId})`}>
        <text
          x="108"
          y="118"
          textAnchor="start"
          fontFamily="Arial Black, Arial, Helvetica, sans-serif"
          fontSize="118"
          fontWeight="900"
          letterSpacing="2"
        >
          KREED
        </text>
        <text
          x="112"
          y="202"
          textAnchor="start"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="40"
          fontWeight="700"
          letterSpacing="10"
        >
          TECH
        </text>
      </g>
    </svg>
  );
};

export default BrandLogo;