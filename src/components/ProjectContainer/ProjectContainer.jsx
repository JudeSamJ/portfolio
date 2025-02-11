import React from 'react';
import './ProjectContainer.css';
import { Element } from 'react-scroll';
import Project from '../Project/Project.jsx';
const ProjectContainer = () => {
  const projects = [
    {
      img: '../../src/assets/Projects.jpg',
      title: 'Project1',
      desc: 'This is one of my projects',
      link: 'https://www.google.com',
    },
    {
      img: '../../src/assets/Projects.jpg',
      title: 'Project2',
      desc: 'This is one of my projects',
      link: 'https://www.google.com',
    },
    {
      img: '../../src/assets/Projects.jpg',
      title: 'Project3',
      desc: 'This is one of my projects',
      link: 'https://www.google.com',
    },
    {
      img: '../../src/assets/Projects.jpg',
      title: 'Project4',
      desc: 'This is one of my projects',
      link: 'https://www.google.com',
    },
    {
      img: '../../src/assets/Projects.jpg',
      title: 'Project5',
      desc: 'This is one of my projects',
      link: 'https://www.google.com',
    },
    {
      img: '../../src/assets/Projects.jpg',
      title: 'Project6',
      desc: 'This is one of my projects',
      link: 'https://www.google.com',
    },
  ];
  return (
    <Element id='projects'>
      <div className='project__container'>
        <h1>PROJECTS</h1>
        <div className='project__content'>
          <p className='project__description'>
            Here are some of the projects that I have worked on
          </p>
          <div className='project__item'>
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  img={project.img}
                  title={project.title}
                  desc={project.desc}
                  link={project.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ProjectContainer;
