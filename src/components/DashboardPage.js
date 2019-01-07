import React from 'react';
import Card from './Card';
import About from './About';
import {WhenInView} from './WhenInView';


const DashboardPage = () => (
  <div>
    <div className="hero-image__container">
      <div className="hero-image__intro">
        <h1>Hi There!</h1>
        <h3>my name is </h3><h1>Brendan Kellams</h1>
        <h2>Come and look around!</h2>
      </div>
      <div className="hero-image__image">
      <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/images/brendan_thumbnail.jpg" />
        </div>
        <div className="flip-card-back">
          <h1>Contact Info:</h1>
          <h2>
            <a href="https://github.com/brendan-kellams" target="__blank">Github</a>
          </h2>
          <h2>
            <a href="https://www.linkedin.com/in/brendan-kellams/" target="__blank">LinkedIn</a>
          </h2>
        </div>
      </div>
    </div>
      </div>
    </div>
    <div className="section-container">
      <About/>  
    </div>
    <div className="section-container">
      <div className="project-container">
        <Card
          title="PT-Link"
          description="An education-communication application that allows parents and teachers
          to stay connected regarding what content is being taught in class and so much more."
          projectImage="/images/PT-Link-new.jpg"
          code="https://github.com/brendan-kellams/PTLink"
          live="http://pt-link.herokuapp.com/" />
        <Card
          title="Whoop-It-Up"
          description="A social application that allows users to create and invite others to events that you are hosting."
          projectImage="/images/whoopitup.jpg"
          code="https://github.com/brendan-kellams/Whoop-It-Up"
          live="http://pt-link.herokuapp.com/" />
        <Card
          title="Expensify in React"
          description="A social application that allows users to create and invite others to events that you are hosting."
          projectImage="/images/expensify.jpg"
          code="https://github.com/brendan-kellams/React-Expensify"
          live="https://reactjsexpensifyapp.herokuapp.com" />
      </div>
        <div className="project-container">
        <Card
          title="Indecision"
          description="When you have several things to do but you are lost on which one to do first,
          let this app choose for you!"
          projectImage="/images/whoopitup.jpg"
          code="https://github.com/brendan-kellams/Indecision-App"
          live="http://indecision-react-app.herokuapp.com/" />
        <Card
          title="Finnegan Blue"
          description="A social application that allows users to create and invite others to events that you are hosting."
          projectImage="/images/finneganblue.jpg"
          code="hhttps://github.com/brendan-kellams/FinneganBlue"
          live="http://finneganblue.herokuapp.com/" />
        <Card
          title="Burger"
          description="Create a burger and log that burger into a queue waiting to be DEVOURED!"
          projectImage="/images/burger.gif"
          code="https://github.com/brendan-kellams/Burger"
          live="http://yumburger.herokuapp.com/" />
      </div>
      Dashboard page content
    </div>
  </div>
);

export default DashboardPage;