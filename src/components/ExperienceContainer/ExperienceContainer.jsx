import React from 'react';
import { Element } from 'react-scroll';
import Experience from '../ExperienceBox/Experience';
import './ExperienceContainer.css';
const ExperienceContainer = () => {
  return (
    <Element id='exp'>
      <h1 className='experience__title'>EXPERIENCE</h1>
      <div className='experience__container'>
        <div className='experience__items'>
          <Experience number='+10' text='Clients' />
          <Experience
            number='+20'
            text='Projects'
            style={{ backgroundColor: '#FF6200' }}
          />
          <Experience number='+6000' text='Students' />
          <Experience number='+50' text='Workshops' />
        </div>
      </div>
    </Element>
  );
};

export default ExperienceContainer;
