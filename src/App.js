import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Section from './Components/Section/Section';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Navbar />
        <Section>
            <Services />
        </Section>
        <Section>
            <Contact />
        </Section>
        <Footer/>
      </div>
    );
  }
}

export default App;