import React, { Component } from 'react';
import './Services.css';
import ServiceItem from './ServiceItem/ServiceItem';
import SectionTitle from '../../Components/Section/SectionTitle/SectionTitle';

class Services extends Component {
  render() {
    return (
      <div className="container">
        <SectionTitle/>
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </div>
    );
  }
}

export default Services;