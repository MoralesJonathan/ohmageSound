import React, { Component } from 'react';
import './Navbar.css';
import NavMenuItem from './NavMenuItem/NavMenuItem';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="navContainer">
            <img className="navlogo" src="http://via.placeholder.com/100x100" />
            <ul className="navMenu">
              <NavMenuItem title="Home" link="/"/>
              <NavMenuItem title="About Us" link="#"/>
              <NavMenuItem title="Contact Us" link="#"/>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;