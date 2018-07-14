import React, { Component } from 'react';
import './ServiceItem.css';

class ServiceItem extends Component {
  render() {
    return (
      <div className="card">
        <i className="material-icons">
        {this.props.icon}
        </i>
        <h5>{this.props.title}</h5>
        <p>{this.props.paragraph}</p>
        <span className="underLine" />
      </div>
    );
  }
}

export default ServiceItem;