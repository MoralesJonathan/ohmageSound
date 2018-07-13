import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
  render() {
    return (
      <div className={"section "+(this.props.type === 'dark'?'dark':'light' )}>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;