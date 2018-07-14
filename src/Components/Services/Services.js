import React, { Component } from 'react';
import './Services.css';
import ServiceItem from './ServiceItem/ServiceItem';
import SectionTitle from '../../Components/Section/SectionTitle/SectionTitle';

class Services extends Component {
  render() {
    return (
      <div className="services">
        <SectionTitle title="What we offer"/>
        <div className="row">
          <div className="twelve columns cardContainer">
            <ServiceItem icon="memory" title="Equipment Rental" paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum dictum nisi erat, id tincidunt elit vulputate et."/>
            <ServiceItem icon="memory" title="DJ Services" paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum dictum nisi erat, id tincidunt elit vulputate et."/>
            <ServiceItem icon="memory" title="Events" paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit. Vestibulum dictum nisi erat, id tincidunt elit vulputate et."/>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;