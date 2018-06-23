import React from 'react';
import Titles from './components/Titles';
import Form from './components/form'
import Weather from './components/weather';


const API_KEY = 'f7afc45d61c4404dc6b260b68ff3d063';


class App extends React.Component {

  // initial state of JSON object attributes
  // Will also error handle
  constructor(props){
    super(props)
    this.state =  {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
  }

  // On form submit run
  getWeather = async (e) => {
    e.preventDefault();
    // Define weather data dynamically with form
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    // Get Weather data
    const api_call =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // Wait for data to come in before proceeding
    const data = await api_call.json();

    // Log API data in browser terminal
    console.log(data)
    // changing the state to JSON object attributes dynamically
    // Search for where the data lives in the JSON object
    this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
    });
  }

  // Generate view with dynamic JSON data
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather = {this.getWeather} />
        <Weather
          temperature = {this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          description = {this.state.description}
          humidity = {this.state.humidity}
          />
      </div>
    );
  }
}

export default App;
