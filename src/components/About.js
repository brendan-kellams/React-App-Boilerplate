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
          <div style={{ marginBottom: '10px' }}>
            <h3>The name is Brendan</h3>
            <p>and</p>
            <h3>Creating is my game!</h3>
          </div>
          <p>I love to build and design beautiful, clean websites for people and businesses.</p>
          <p>
            I enjoy many different things in life like music, video games, building computers
            and being at peace with nature.</p>
          <p> But first and foremost, I always enjoy spending time with my family.</p>
        </div>
      </div>
    )
  }
}



export default About;
