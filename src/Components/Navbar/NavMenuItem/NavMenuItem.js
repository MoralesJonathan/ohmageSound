import React, { Component } from 'react';
import './NavMenuItem.css';

class NavMenuItem extends Component {
  closeMobileMenu() {
    if(document.getElementById("navMobile").checked === true) document.getElementById("navMobile").checked = false;
  }
  render() {
    return (
      <li className="navMenuItem">
        <a onClick={this.closeMobileMenu} href={this.props.link}>{this.props.title}</a>
      </li>
    );
  }
}

export default NavMenuItem;