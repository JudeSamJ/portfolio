import React from 'react';
import { useState } from 'react';
import './Project.css';
const Project = ({ img, title, desc, link }) => {
  const [show, setshow] = useState(false);
  return (
    <a href={link}>
      <div
        className='project'
        onMouseEnter={() => setshow(true)}
        onMouseLeave={() => setshow(false)}
      >
        {show ? (
          <div className='project'>
            <div className='project__details'>
              <h2>{title}</h2>
              <p>{desc}</p>
            </div>
          </div>
        ) : (
          <img src={img} alt='' />
        )}
      </div>
    </a>
  );
};

export default Project;
