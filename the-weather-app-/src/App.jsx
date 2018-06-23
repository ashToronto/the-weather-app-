import React from 'react';
import Titles from './components/Titles';
import Form from './components/form'
import Weather from './components/weather';


const API_KEY = 'f7afc45d61c4404dc6b260b68ff3d063';


class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Toronto,Canada&appid=f7afc45d61c4404dc6b260b68ff3d063&units=metric`);
    const data = await api_call.json();
    console.log(data)
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather = {this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
