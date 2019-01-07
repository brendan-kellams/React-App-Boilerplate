import React from 'react';
import Waypoint from 'react-waypoint';

const styles = {
  transition: 'all 700ms ease-in-out'
};
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity: 0,
      slide: false
    };
  }

  onEnter() {
    this.setState({
      opacity: 1,
      slide: true
    });
  }

  onLeave() {
    this.setState({
      opacity: 0,
      slide: false
    });
  }
  render() {
    return (

      <div className="grid-container">
        <Waypoint 
          onEnter={this.onEnter.bind(this)}
          onLeave={this.onLeave.bind(this)}
        >
          <div className="about__image">
              <img className={this.state.slide ? 'slide' : ''} style={{...styles, opacity: this.state.opacity, transform: 'translateX(`+this.state.translateX+`%)'}} src="/images/AnastasiaAndI.jpg" />
          </div>
        </Waypoint>
        <div className="about__bio">
          <p>As you probably already know, my name is Brendan and I'm a new web developer
          looking to grow so I can build bigger and better websites for people and businesses.  In my free
          time when I am not trying to perfect my craft, I enjoy many different things and it just depends
          on my mood. Sometimes, I enjoy playing guitar, bass, piano, and any other instruments I
          can get my hands on.
          </p>
          <p> When I want to have some down time, I enjoy playing video games (both console and PC),
            and I love building computers when I have the funds to do so.  My wife and I are big board game nerds and we are
            always down for a good game.
          </p>
          <p>  When I get out of house, I want to do many things like: play all kinds of sports,
            go longboarding, shoot some pictures and videos with my drone, travel and discover new and wonderful places, and
            meet up with friends for some good food and a beer!
          </p>
          <p>Here is a small little sldeshow of some pictures that I have taken of my travels abroad.
          I hope you enjoy!
          </p>
        </div>
      </div>
    )
  }
}



export default About;
