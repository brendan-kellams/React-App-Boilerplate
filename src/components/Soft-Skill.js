import React from 'react';

const SoftSkill = (props) => (
  <div className="soft-skill-element">
    <div className="hexagon">
      <img src={props.icon} />
    </div>
    <h2>{props.skill}</h2>
    <h3>{props.description}</h3>
  </div>
)

export default SoftSkill;
