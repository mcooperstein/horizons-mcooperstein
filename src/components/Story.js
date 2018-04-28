import React from 'react';

class Story extends React.Component {
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
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick}>Why I Want to Work at Horizons</button>
        {!this.state.open ? null :
        <div id="story">
        <p>Hello Horizons Teaching Team:</p>
        <p>The main reason that I became interested in learning programming is that I would often notice inefficient or outdated ways of doing things, and I wanted to learn how to leverage modern technology/coding to create better solutions for these issues. What I didn’t know at the time, is that this desire to learn programming would soon evolve into a desire to teach it as well.</p>
        <p>My journey into learning how to code began in January 2016 when I left my restaurant management position and enrolled in a Web Development Bootcamp at Thinkful. After just a few months at Thinkful, I learned a lot of front-end programming languages and frameworks, including: Javascript, jQuery,  AngularJs, and HTML/CSS, which helped me get hired as the General Manager and full-time Programming Instructor at The Coder School in San Mateo. What initially excited me about The Coder School was that the company is addressing the lack of access/quality of CS education in middle schools and high schools, by offering kids coding lessons and mentorship from industry professionals (very much like the Coding Bootcamp model). In the 1.5 years that I worked at The Coder School, I increased student enrollment at the San Mateo location by over 75%, and helped with the development and expansion of the company’s franchising operations, all while also maintaining my teaching responsibilities as a full-time instructor. I’m very proud of my contributions to the company’s growth, but with that growth, I wasn’t getting as much of an opportunity to do what I really love, which is writing code and teaching others how to code. Ultimately, I decided to leave my position at The Coder School a few months ago, in order to focus on learning more and leveling-up my coding skills, with the intent of coming back to teaching after getting some more experience. That said, I didn’t want to give up teaching cold turkey, so I signed up to volunteer teaching Scratch coding workshops at the San Mateo Public Library twice a month on Saturdays.</p>
        <p>What really excites me about potentially working at Horizons is that it combines two things I’m really passionate about: programming and teaching programming! Since leaving The Coder School, I have enrolled in and completed various udemy courses (mainly focusing on React and Redux), in order to level-up my skills, but also to observe the different methods and teaching styles of the various instructors. As I’ve continued to learn new concepts, I often try explaining them to my younger sister (an undergrad software engineering student at SJ State), which exposes her to some new concepts, but also helps further my own understanding. I know that I still have a lot to learn, but I believe that my own experiences with learning programming give me a unique perspective, which helps me when teaching other students. As such, I think that I would be a great fit for the Junior Instructor/Lead Teaching Assistant at Horizons.</p>
        <p>Thanks for your consideration,</p>
        <p>Marc Cooperstein</p>
      </div>
        }
      </div>
    )
  }
}

export default Story;
