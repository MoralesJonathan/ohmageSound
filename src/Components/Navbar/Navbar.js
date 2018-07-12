import React, { Component } from 'react';
import './Navbar.css';
import NavMenuItem from './NavMenuItem/NavMenuItem';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="navContainer">
            <a href="#" className="navlogo">Logo</a>
            <ul className="navMenu">
              <NavMenuItem />
              <NavMenuItem />
              <NavMenuItem />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;