import React from "react";
import "./LogoLoop.css"; // Import the styles

/**
 * LogoLoop Component
 * @param {Array} logos - Array of logo image URLs
 * @param {number} speed - Animation speed in seconds (default: 20)
 */
const LogoLoop = ({ logos = [], speed = 20 }) => {
  if (!Array.isArray(logos) || logos.length === 0) {
    return <p>No logos to display</p>;
  }

  // Duplicate the logos array to create a seamless loop
  const loopLogos = [...logos, ...logos];

  return (
    <div className="logo-loop">
      <div
        className="logo-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {loopLogos.map((Icon, index) => (
          <div className="logo-item" key={index}>
             <Icon size={40} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
