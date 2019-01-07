import React from 'react';
import Waypoint from 'react-waypoint';
import {CSSTransition} from 'react-transition-group';

export class WhenInView extends React.Component {
  constructor(props) {
    super(props);
    state = {
        isInView: false
      };
  }

  onEnter = this.onEnter.bind(this);

  onEnter({ previousPosition }) {
    if (previousPosition === Waypoint.below) {
      this.state({
        isInView: true
      });
    }
  }

  render() {
    return (
      <div>
        <Waypoint onEnter={
          <CSSTransition
            timeout={500}
            classNames="fade" />
        }/>
      </div >
    );
  }
};
