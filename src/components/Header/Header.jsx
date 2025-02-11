import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='header__left'>
          <h1>
            Develop<span>er</span>
          </h1>
        </div>
        <div className='header__right'>
          <Link to='about' smooth={true} duration={500}>
            About Me
          </Link>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
          <Link to='exp' smooth={true} duration={500}>
            Experience
          </Link>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          <button className='join_me'>Join with Me</button>
        </div>
      </div>
    </>
  );
};

export default Header;
