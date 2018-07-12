import React, { Component } from 'react';
import './NavMenuItem.css';

class NavMenuItem extends Component {
  render() {
    return (
      <li className="navMenuItem">
        <a href={this.props.link}>{this.props.title}</a>
      </li>
    );
  }
}

export default NavMenuItem;