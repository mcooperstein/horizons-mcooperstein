import React, {Component} from 'react';

class Intro extends Component {
  render(){
    return (
      <div className="container">
        <div id="flexing">
          <img alt="Marc Cooperstein" id="headshot" src={this.props.profile}/>
          <img id="logo" src={this.props.logo} />
        </div>
        <h3>Hi, I'm <a href="http://mcooperstein.com" target="_blank">Marc Cooperstein</a> and this is my application for the Junior Instructor/Lead Teaching Assistant position at Horizons School of Technology.</h3>
      </div>
    )
  }
}

export default Intro;
