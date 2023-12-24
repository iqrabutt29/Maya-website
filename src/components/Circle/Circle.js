// Circle.js
import React from 'react';
import './Circle.scss'; // Import your Circle component styles

// import Line from "../../assets/images/line.png"

// Updated function declaration with proper props
function Circle({ text }) {
  return (
    <div className="circle-container">
      <div className="circle">{text}</div>
    </div>
  );
}

export default Circle;
