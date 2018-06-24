import React from 'react';

// If country and city don't exist or are not written in Form
// Do not get the data
class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.temperature && <p> temperature: <span>{this.props.temperature}</span></p>}
        {this.props.city && this.props.country && <p> location: <span>{this.props.city}, {this.props.country}</span></p>}
        {this.props.humidity && <p>humidity: <span>{this.props.humidity}</span></p>}
        {this.props.description && <p>conditions: <span>{this.props.description}</span></p>}
        {this.props.error && <p> <span>{this.props.error} </span></p>}
      </div>
    );
  }
};

export default Weather;

// Use && as Truthy statement in place of if
