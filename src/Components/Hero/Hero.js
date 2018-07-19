import React, { Component } from 'react';
import './Hero.css';

class Header extends Component {
  render() {
    return (
        <div className="hero">
      <div className="container">
        <h1><strong>OHMAGE SOUND LLC</strong></h1>
        <h2>Event production done right.</h2>
        <p>Ohmage Sound is a Miami-Based production company founded by Jonathan Morales and Israel Jimenez who have a combined 15+ years of experience in the DJ industry. Ohmage sound was founded this year with limited assets and inventory but we hope to grow as a company to produce the largest events in South Florida. That's why we need you, our early customers, to help us move in the right direction. Every event we put on is another opportunity to grow and scale our business. So come, talk to us and we'll try our best to provide the best event production services possible.</p>
        <a className="button" href="#contact">CONTACT US</a>
      </div>
      </div>
    );
  }
}

export default Header;