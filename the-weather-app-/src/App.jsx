import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/form'
import Weather from './components/weather';
import './App.css';

const API_KEY = 'f7afc45d61c4404dc6b260b68ff3d063';


class App extends Component {
  getWeather = async() => {
    const api_call =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Toronto,Canada&appid=${API_KEY}=metric`);
    const data = await api_call.JSON()
  }

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
