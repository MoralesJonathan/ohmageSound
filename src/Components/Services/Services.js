import React, { Component } from 'react';
import './Services.css';
import ServiceItem from './ServiceItem/ServiceItem';

class Services extends Component {
  render() {
    return (
      <div className="services">
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </div>
    );
  }
}

export default Services;