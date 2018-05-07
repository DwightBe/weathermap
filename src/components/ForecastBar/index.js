import React from 'react';
import { ContentContainer } from './styles';

class ForecastBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
  }
  render() {
    let weathericon = () => {
    switch(this.props.weather.main){
      case 'Clear':
        return <img className='weathericon' src='https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-256.png' />
      case 'Clouds':
        return <img className='weathericon' src='https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-256.png' />
      case 'Rain':
        return <img className='weathericon' src='https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-31-256.png' />
      }
    }
    return (
      <ContentContainer>
        <h2>{this.props.date}</h2>
        <div> {this.props.weather.main}</div>
        <div>
          {weathericon()}
        </div>
        <div> {this.props.weather.description}</div>
        <h3> {this.props.temp}&deg; C</h3>
        <div> {this.props.humidity}% humidity </div>
      </ContentContainer>
    );
  }
}

export default ForecastBar;
