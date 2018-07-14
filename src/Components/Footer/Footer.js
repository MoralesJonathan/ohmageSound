import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="socialMediaIconsWrapper">
          <a href="https://www.facebook.com/Ohamge-Sound-207050473476335/"><img src="socialMedia/facebook/2.svg" alt="Facebook" /></a>
          <a href="https://www.instagram.com/ohmagesound/"><img src="socialMedia/instagram/1.png" alt="Instagram"/></a>
          <a href="https://www.youtube.com/channel/UCX_vmrVfLxt_apHK8k9A5dQ"><img src="socialMedia/youtube/2.png" alt="Youtube"/></a>
        </div>
        <span>&copy; 2018 Ohmage Sound LLC</span>
      </footer>
    );
  }
}

export default Footer;