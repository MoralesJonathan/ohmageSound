import React, { Component } from 'react';
import './Navbar.css';
import NavMenuItem from './NavMenuItem/NavMenuItem';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="navContainer">
          <img className="navlogo" src="/images/HeroTitle.png" />
          <input type="checkbox" id="navMobile" className="hidden"/>
          <label htmlFor="navMobile" className="navMobile-open"><i/><i/><i/></label>
          <div className="navMenuContainer">
          <ul className="navMenu">
            <NavMenuItem title="Home" link="/"/>
            <NavMenuItem title="About Us" link="#services"/>
            <NavMenuItem title="Contact Us" link="#contact"/>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;