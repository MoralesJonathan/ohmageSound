import React, { Component } from 'react';
import './Footer.css';
import KeenTracking from 'keen-tracking';

class Footer extends Component {

  handleClick(event){
    let client = new KeenTracking({
      projectId: process.env.REACT_APP_KEEN_PROJECT_ID, 
      writeKey: process.env.REACT_APP_KEEN_WRITE_KEY
    });
    client.recordEvent('socialMediaClick', {
      "ip_address" : "${keen.ip}",
      "page" : event.target.dataset.socialMediaPage
    });
    
  }

  render() {
    return (
      <footer>
        <span>&copy; 2018 Ohmage Sound LLC</span>
      </footer>
    );
  }
}

export default Footer;