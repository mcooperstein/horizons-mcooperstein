import React from 'react';

class Qualifications extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){

    this.setState({
      open: !this.state.open
    })
  }
  render(){
    let skills = ["JavaScript", "React", "jQuery", "HTML/CSS", "Flexbox", "Bootstrap", "Git", "NPM", "Webpack"]
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick}>My Qualifications</button>
        {!this.state.open ? null :
          <div id="qualifications">
            <h3>Programming Skills:</h3>
            <ul style={{"marginTop": "20px"}}>
              {skills.map((skill)=>{
                return <li>{skill}</li>
              })}
            </ul>
          </div>
        }
      </div>
    )
  }
}

export default Qualifications;
