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
            <ServiceItem icon="speaker_group" title="Rentals" paragraph="Rent our equipment hourly. Equipment can include speakers, lighting, projector screen and projectors."/>
            <ServiceItem icon="supervisor_account" title="DJ Services" paragraph="Hire us to DJ your next event! We have different pricing tiers to suit your needs whether its a small birthday or large party!."/>
            <ServiceItem icon="location_city" title="Events" paragraph="Our events package is a current work in progress to please contact us to recieve personal quotes and more information."/>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;