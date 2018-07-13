import React, { Component } from 'react';
import './SectionTitle.css';

class SectionTitle extends Component {
  render() {
    return (
      <h3 className="sectionTitle">{this.props.title}</h3>
    );
  }
}

export default SectionTitle;