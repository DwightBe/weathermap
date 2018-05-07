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
        return <img src='https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-256.png' />
      case 'Clouds':
        return <img src='https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-256.png' />
      case 'Rain':
        return <img src='https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-31-256.png' />
      }
    }
    console.log(weathericon)
    return (
      <ContentContainer>
        <h2>{this.props.date}</h2>
        <div> {this.props.weather.main}</div>
        <div>
          {weathericon()}
        </div>
        <h3> {this.props.weather.description}</h3>
        <h2> {this.props.temp}&deg;</h2>
        <h2> {this.props.humidity}% humidity </h2>
      </ContentContainer>
    );
  }
}

export default ForecastBar;
