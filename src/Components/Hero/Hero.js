import React, { Component } from 'react';
import './Hero.css';

class Header extends Component {
  render() {
    return (
        <div className="hero">
      <div className="container">
        <h1><strong>OHMAGE SOUND LLC</strong></h1>
        <h2>Catchy tagline goes here.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum
        nisi erat, id tincidunt elit vulputate et. Nam sed urna erat. Aenean turpis nunc,
        placerat quis malesuada ut, cursus scelerisque enim. Quisque eget purus risus.
        Mauris faucibus pretium ante, vitae imperdiet ex blandit non. Sed convallis
        nulla a sem luctus, ac ultricies erat dapibus. </p>
        <a className="button" href="#contact">CONTACT US</a>
      </div>
      </div>
    );
  }
}

export default Header;