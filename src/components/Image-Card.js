import React from 'react';

const ImageCard = () => (
  <div className="imageCard__div">
    <img src="/images/brendan_thumbnail.jpg" />
    <h2>Connect with Me!</h2>
    <div className="imageCard__link__div">
      <h3>
        <a href="https://github.com/brendan-kellams" target="__blank">Github</a>
      </h3>
      <h3>
        <a href="https://www.linkedin.com/in/brendan-kellams/" target="__blank">LinkedIn</a>
      </h3>
    </div>
  </div>
)

export default ImageCard;
