import React from 'react';
import { ContentContainer } from './styles';

class ForecastBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
  }
  render() {
    const {date, weather, description, temp, humidity} = this.props;
    const weathericon = () => {
    switch(weather.main){
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
        <h2>{date}</h2>
        <div> {weather}</div>
        <div>
          {weathericon()}
        </div>
        <div> {description}</div>
        <h3> {temp}&deg; C</h3>
        <div> {humidity}% humidity </div>
      </ContentContainer>
    );
  }
}

export default ForecastBar;
