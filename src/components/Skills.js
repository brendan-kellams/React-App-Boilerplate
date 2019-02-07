import React from 'react';
import Skill from './Skill';
import SoftSkill from './Soft-Skill';
import FlipCard from './Flip-Card';

const Skills = (props) => (
  <div className="grid-container">
    <div className="skills__softSkills-container">
      <SoftSkill
        icon="./images/mobile-response.png"
        skill="Mobile Responsiveness"
        description="The web layouts I create are optimized to work on multiple devices."
      />
      <SoftSkill
        icon="./images/communication.png"
        skill="Communications"
        description="I'm a team player who communicates well his team so we are all on the same page."
      />
      <SoftSkill
        icon="./images/lightbulb.png"
        skill="Innovative"
        description="There are many problems and challenges to solve. I do my best to find the most effective and efficient way to solve them."
      />
      <SoftSkill
        icon="./images/fire.png"
        skill="Motivated"
        description="As a self-taught developer, I a great passion for creating somehting awesome!"
      />

    </div>
    <div className="skills__percentages-container">
      <Skill
        techName='HTML'
        tech='html'
        percent='90%' />
      <Skill
        techName='CSS/SCSS'
        tech='css'
        percent='80%' />
      <Skill
        techName='Bootstrap'
        tech='bootstrap'
        percent='70%' />
      <Skill
        techName='Javascript'
        tech='javascript'
        percent='75%' />
      <Skill
        techName='React'
        tech='react'
        percent='65%' />
      <Skill
        techName='AngularJS'
        tech='angular'
        percent='30%' />
      <Skill
        techName='Node.js'
        tech='node'
        percent='60%' />
      <Skill
        techName='MySQL'
        tech='mysql'
        percent='40%' />
      <Skill
        techName='Express.js'
        tech='express'
        percent='45%' />
      <Skill
        techName='Git'
        tech='git'
        percent='80%' />
    </div>
    <div className="skills__photo">
      <FlipCard />
    </div>
  </div>
)

export default Skills;
