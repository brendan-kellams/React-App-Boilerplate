import React from 'react';

const FlipCard = () => (
  <div className="hero-image__image">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/images/brendan_thumbnail.jpg" />
        </div>
        <div className="flip-card-back">
          <h2>Connect with Me!</h2>
          <div className="flip-card-back__links">
            <h3>
              <a href="https://github.com/brendan-kellams" target="__blank">Github</a>
            </h3>
            <h3>
              <a href="https://www.linkedin.com/in/brendan-kellams/" target="__blank">LinkedIn</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FlipCard;