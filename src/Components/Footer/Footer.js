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
        <div className="socialMediaIconsWrapper">
          <a onClick={this.handleClick} href="https://www.facebook.com/Ohamge-Sound-207050473476335/"><img data-social-media-page="Faceook" src="socialMedia/facebook/2.svg" alt="Facebook" /></a>
          <a onClick={this.handleClick} href="https://www.instagram.com/ohmagesound/"><img data-social-media-page="Instagram" src="socialMedia/instagram/1.png" alt="Instagram"/></a>
          <a onClick={this.handleClick} href="https://www.youtube.com/channel/UCX_vmrVfLxt_apHK8k9A5dQ"><img data-social-media-page="Youtube" src="socialMedia/youtube/2.png" alt="Youtube"/></a>
        </div>
        <span>&copy; 2018 Ohmage Sound LLC</span>
      </footer>
    );
  }
}

export default Footer;