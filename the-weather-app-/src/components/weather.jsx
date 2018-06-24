import React from 'react';

// If country and city don't exist or are not written in Form
// Do not get the data
class Weather extends React.Component {
  render() {
    return (
      <div className= "weather__info">
        {this.props.temperature && <p className="weather__value"> temperature: <span>{this.props.temperature}</span></p>}
        {this.props.city && this.props.country && <p className="weather__value"> location: <span>{this.props.city}, {this.props.country}</span></p>}
        {this.props.humidity && <p className="weather__value">humidity: <span>{this.props.humidity}</span></p>}
        {this.props.description && <p className="weather__value">conditions: <span>{this.props.description}</span></p>}
        {this.props.error && <p className="weather__error"> {this.props.error} </p>}
      </div>
    );
  }
};

export default Weather;

// Use && as Truthy statement in place of if
