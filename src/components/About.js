import React from 'react';
import Waypoint from 'react-waypoint';

const styles = {
  transition: 'all 800ms ease-in-out'
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
            <img className={this.state.slide ? 'slide' : ''} style={{ ...styles, opacity: this.state.opacity, transform: 'translateX(`+this.state.translateX+`%)' }} src="/images/AnastasiaAndI.jpg" />
          </div>
        </Waypoint>
        <div className="about__bio">
          <p>
            As you probably already know, my name is Brendan and I'm a new web developer
            looking to grow so I can build bigger and better websites for people and businesses.
          </p>
          <p>
            In my free time when I am not trying to perfect my craft, I enjoy many different things
            and it just depends on my mood. Sometimes, I enjoy playing guitar, enjoying video games,
            or at peace with nature. But first and foremost, I always enjoy spending time with my family.
          </p>
        </div>
      </div>
    )
  }
}



export default About;
