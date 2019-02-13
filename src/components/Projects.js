import React from 'react';
import Card from './Card';

const Projects = () => (
  <div className="project-container">
    <Card
        title="PT-Link"
        description="An education-communication application that allows parents and teachers
        to stay connected regarding class content."
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
);

export default Projects;