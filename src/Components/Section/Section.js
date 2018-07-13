import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
  render() {
    return (
      <div id={this.props.id} className={"section "+(this.props.type === 'dark'?'dark':'light' )}>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;