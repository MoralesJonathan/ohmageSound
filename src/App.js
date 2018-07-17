import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Section from './Components/Section/Section';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import KeenTracking from 'keen-tracking';


var client = new KeenTracking({
  projectId: process.env.REACT_APP_KEEN_PROJECT_ID, 
  writeKey: process.env.REACT_APP_KEEN_WRITE_KEY
});


client.recordEvent('pageviews', {
  "ip_address" : "${keen.ip}",
  "user_agent" : "${keen.user_agent}",
  "keen" : {
    "addons" : [
      {
        "name" : "keen:ip_to_geo",
        "input" : {
          "ip" : "ip_address"
        },
        "output" : "ip_geo_info"
      },
      {
        "name" : "keen:ua_parser",
        "input" : {
          "ua_string" : "user_agent"
        },
        "output" : "parsed_user_agent"
      }
    ]
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero /> 
        <Navbar /> 
        <Section id="services" type="dark">
            <Services />
        </Section>
        <Section id="contact" type="light">
            <Contact />
        </Section> 
        <Footer/> 
      </div>
    );
  }
}

export default App;