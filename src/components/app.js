import React, { Component } from 'react';
import Intro from './Intro';
import Qualifications from './Qualifications';
import Story from './Story';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Intro profile="https://i.imgur.com/uB0GzuR.jpg" logo="https://i.imgur.com/POi0JcO.png"/>
        <div className="row container">
          <div className="col-12 col-md-6">
            <Qualifications />
          </div>
          <div className="col-12 col-md-6">
            <Story />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
