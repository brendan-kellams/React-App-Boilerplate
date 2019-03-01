import React from 'react';

const Card = (props) => (
  <div className="project-card">
    <div className="project-card__title">
      <h2>{props.title}</h2>
    </div>
    <img src={props.projectImage} />
    <div className="project-card__description">
      <div>
        <p>{props.description}</p>
      </div>
      <div className="project-card__links">
        <h3>
          <a href={props.code} target="_blank">Code</a>
        </h3>
        <h3>
          <a href={props.live} target="_blank">Live</a>
        </h3>
      </div>
    </div>
  </div>
);

export default Card;
