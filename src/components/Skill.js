import React from 'react';

const Skill = (props) => (
  <div className="skill__container">
    <div className="skill__name">{props.techName}</div>
    <div className="skill__bar">
      <div className={props.tech}>{props.percent}</div>
    </div>
  </div>
)

export default Skill;