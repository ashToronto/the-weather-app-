import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/form'
import Weather from './components/weather'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
