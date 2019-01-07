import React from 'react';

const Card = (props) => (
  <div className="project-card">
    <div className="project-card__title">
      <p>{props.title}</p>
    </div>
    <div className="project-card__description">
      <h2>{props.description}</h2>
      <div className="project-card__links">
        <h3>
          <a href={props.code} target="_blank">Code</a>
        </h3>
        <h3>
          <a href={props.live} target="_blank">Live</a>
        </h3>
      </div>
    </div>
    <img className="project-card__image" src={props.projectImage} />
  </div>
);

export default Card;
