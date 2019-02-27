import React from 'react';
import Banner from './Banner';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';


const Main = () => (
  <div>
    <div>
      <Banner />
    </div>
    <div className="content-container">
      <About />
    </div>
    <div className="content-container">
      <Skills />
    </div>
    <Projects />
  </div>

);

export default Main;