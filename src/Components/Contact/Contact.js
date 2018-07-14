import React, { Component } from 'react';
import './Contact.css';
import SectionTitle from '../../Components/Section/SectionTitle/SectionTitle';
import * as emailjs from 'emailjs-com';

class Contact extends Component {
  state = {
    message: '',
    name: '',
    email:'',
    formSubmitted: false
  };

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name,value);
    this.setState({
      [name]: value
    });
  }


  handleSubmit (event) {
    event.preventDefault();

    this.sendMessage(
      'default_service',
      process.env.REACT_APP_EMAILJS_TEMPLATEID,
      this.state.email,
      this.state.name,
      this.state.message,
      process.env.REACT_APP_EMAILJS_USERID
    );

    this.setState({
      formSubmitted: true
    });
  }

  sendMessage(serviceId, templateId, email,  name, message, userId) {
    emailjs.send(serviceId, templateId, {
        reply_to: email,
        from_name: name,
        message: message
      }, userId)
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {
    return (
      <div className="container">
        <SectionTitle title="Want to reach us?"/>
        {!this.state.formSubmitted?(
        <form id="contactForm" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="six columns">
              <label htmlFor="nameInput">Your Name</label>
              <input className="u-full-width" type="text" placeholder="John Smith" id="nameInput" name="name" onChange={this.handleChange} value={this.state.name}/>
              <label htmlFor="emailInput">Your Email</label>
              <input required className="u-full-width" type="email" placeholder="Smith@mailbox.com" id="emailInput" name="email" onChange={this.handleChange} value={this.state.email}/>
            </div>
            <div className="six columns">
              <label htmlFor="messageInput">Message</label>
              <textarea required className="u-full-width" placeholder="Write your message here!" id="messageInput" name="message" onChange={this.handleChange} value={this.state.message}/>
            </div>
          </div>
          <input className="button-primary u-pull-right button" type="submit" value="Submit" />
        </form>
        ):(
          <div className="postSubmitMessage">
          <h4>Thanks{this.state.name?` ${this.state.name}`:''}! Your message was successfully sent. We'll be taking a look at it soon.</h4>
          </div>
        )}
      </div>
    );
  }
}

export default Contact;