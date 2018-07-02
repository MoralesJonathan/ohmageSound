import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Serivces from './Components/Services/Services';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Serivces />
      </div>
    );
  }
}

export default App;