import React from 'react';

const FlipCard = () => (
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
)

export default FlipCard;