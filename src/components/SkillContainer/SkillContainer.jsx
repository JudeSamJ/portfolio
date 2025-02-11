import React from 'react';
import { Element } from 'react-scroll';
import LinearProgress from '@mui/material/LinearProgress';
import skillimg from '../../assets/skills.jpg';
import './SkillContainer.css';
const SkillContainer = () => {
  return (
    <Element id='skills'>
      <div className='skill__title'>
        <h1>SKILLSET</h1>
      </div>
      <div className='skill__container'>
        <img className='skill__img' src={skillimg} />
        <div className='skills__set'>
          <div className='skills_type1'>
            <h4>ReactJS</h4>
            <div className='skills__slider1'>
              <LinearProgress variant='determinate' value={80} />
            </div>
          </div>
          <div className='skills_type1'>
            <h4>NodeJS</h4>
            <div className='skills__slider2'>
              <LinearProgress variant='determinate' value={40} />
            </div>
          </div>
          <div className='skills_type1'>
            <h4>ThreeJS</h4>
            <div className='skills__slider3'>
              <LinearProgress variant='determinate' value={60} />
            </div>
          </div>
          <div className='skills_type1'>
            <h4>Django</h4>
            <div className='skills__slider4'>
              <LinearProgress variant='determinate' value={20} />
            </div>
          </div>
          <div className='skills_type1'>
            <h4>FastAPI</h4>
            <div className='skills__slider5'>
              <LinearProgress variant='determinate' value={90} />
            </div>
          </div>
          <div className='skills_type1'>
            <h4>NextJS</h4>
            <div className='skills__slider6'>
              <LinearProgress variant='determinate' value={75} />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
