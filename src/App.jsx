import React from 'react';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import './App.css';
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <MainContainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </>
  );
}

export default App;
