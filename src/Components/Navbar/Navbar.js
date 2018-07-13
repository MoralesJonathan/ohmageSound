import React, { Component } from 'react';
import './Navbar.css';
import NavMenuItem from './NavMenuItem/NavMenuItem';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="navContainer">
          <img className="navlogo" src="http://via.placeholder.com/100x100" />
          <input type="checkbox" id="navMobile" class="hidden"/>
          <label for="navMobile" className="navMobile-open"><i></i><i></i><i></i></label>
          <div className="navMenuContainer">
          <ul className="navMenu">
            <NavMenuItem title="Home" link="/"/>
            <NavMenuItem title="About Us" link="#"/>
            <NavMenuItem title="Contact Us" link="#"/>
          </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;