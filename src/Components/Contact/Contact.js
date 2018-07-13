import React, { Component } from 'react';
import './Contact.css';
import SectionTitle from '../../Components/Section/SectionTitle/SectionTitle';

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <SectionTitle title="Want to reach us?"/>
        <form id="contactForm">
          <div className="row">
            <div className="six columns">
              <label htmlFor="nameInput">Your Name</label>
              <input className="u-full-width" type="text" placeholder="John Smith" id="nameInput"/>
              <label htmlFor="emailInput">Your Email</label>
              <input required className="u-full-width" type="email" placeholder="Smith@mailbox.com" id="emailInput"/>
            </div>
            <div className="six columns">
              <label htmlFor="messageInput">Message</label>
              <textarea required className="u-full-width" placeholder="Write your message here!" id="messageInput"/>
            </div>
          </div>
          <input className="button-primary u-pull-right button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contact;