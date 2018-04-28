import React from 'react';

class Footer extends React.Component {
  render(){
    return (
      <div>
        <footer className="container-fluid footer">
           <div className="footer-area">
               <p className="footer-p">You can check out my other online profiles below:</p>
               <ul className="footer-nav">
                   <li className="footer-icons">
                       <a href="https://github.com/mcooperstein" target="_blank">
                           <i className="fa fa-github-square fa-2x"></i>
                       </a>
                   </li>
                   <li className="footer-icons">
                       <a href="https://www.linkedin.com/in/mcooperstein1990" target="_blank">
                           <i className="fa fa-linkedin-square fa-2x"></i>
                       </a>
                   </li>
                   <li className="footer-icons">
                       <a href="https://angel.co/marc-cooperstein" target="_blank">
                           <i className="fa fa-angellist fa-2x"></i>
                       </a>
                   </li>
               </ul>
           </div>
       </footer>
      </div>
    )
  }
}

export default Footer;
