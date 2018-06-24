import React from 'react';

// If country and city don't exist or are not written in Form
// Do not get the data
class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.temperature && <p> temperature: {this.props.temperature}</p>}
        {this.props.city && this.props.country && <p> location: {this.props.city}, {this.props.country}</p>}
        {this.props.humidity && <p>humidity: {this.props.humidity}</p>}
        {this.props.description && <p>conditions: {this.props.description}</p>}
      </div>
    );
  }
};

export default Weather;

// Use && as Truthy statement in place of if
