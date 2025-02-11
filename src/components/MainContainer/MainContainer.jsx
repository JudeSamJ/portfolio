import React from 'react';
import { Element } from 'react-scroll';
import profile from '../../assets/profile.jpg';
import './MainContainer.css';
const MainContainer = () => {
  return (
    <Element id='about'>
      <div className='main__container'>
        <img className='main__profile' src={profile} />
        <div className='main__content'>
          <h1>Mr.Jude Sam J</h1>
          <p>A budding full stack developer</p>
          <button className='main__downloadCV'>Download CV</button>
          <button className='main__workButton'>My Work</button>
        </div>
      </div>
    </Element>
  );
};

export default MainContainer;
