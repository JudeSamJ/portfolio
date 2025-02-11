import React from 'react';
import './Experience.css';
const Experience = ({ number, text, style }) => {
  return (
    <>
      <div className='ExperienceBox' style={{ ...style }}>
        <h1>{number}</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Experience;
