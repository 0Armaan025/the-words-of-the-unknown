import React from "react";
import "./middlepart.css";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <div className="middlePart">
      <div className="message-container">
        {/* Demo Image */}
        <img
          src="https://via.placeholder.com/300x200" /* Replace with a relevant image URL */
          alt="Anonymous Message Visual"
          className="message-image"
        />
        {/* Title */}
        <h3 className="message-title">A message by anonymous:</h3>
        {/* Message Content */}
        <p className="message-text">
          "Change begins with a single step forward. Let's make the world a
          better place together!"
        </p>
        {/* Decorative Element */}
        <div className="icon-container">
          <span className="icon">🌍</span>
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
