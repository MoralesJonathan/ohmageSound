import React, { Component } from 'react';
import './Footer.css';
import KeenTracking from 'keen-tracking';

class Footer extends Component {

  handleClick(event){
    let client = new KeenTracking({
      projectId: process.env.REACT_APP_KEEN_PROJECT_ID, 
      writeKey: process.env.REACT_APP_KEEN_WRITE_KEY
    });
    client.recordEvent('pageviews', {
      "ip_address" : "${keen.ip}",
      "page": event.target.dataset.socialMedia-page
    });
  }

  render() {
    return (
      <footer>
        <div className="socialMediaIconsWrapper">
          <a onClick={this.handleClick()} data-socialMedia-page="Faceook" href="https://www.facebook.com/Ohamge-Sound-207050473476335/"><img src="socialMedia/facebook/2.svg" alt="Facebook" /></a>
          <a onClick={this.handleClick()} data-socialMedia-page="Instagram" href="https://www.instagram.com/ohmagesound/"><img src="socialMedia/instagram/1.png" alt="Instagram"/></a>
          <a onClick={this.handleClick()} data-socialMedia-page="Youtube" href="https://www.youtube.com/channel/UCX_vmrVfLxt_apHK8k9A5dQ"><img src="socialMedia/youtube/2.png" alt="Youtube"/></a>
        </div>
        <span>&copy; 2018 Ohmage Sound LLC</span>
      </footer>
    );
  }
}

export default Footer;