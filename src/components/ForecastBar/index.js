import React from 'react';
import PropTypes from 'prop-types';
import { ContentContainer } from './styles';

const ForecastBar = (props) => { // eslint-disable-line react/prefer-stateless-function
  const {date, weather, description, temp, humidity, high, low} = props;
  const weathericon = () => {
    switch(weather){
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
        {weathericon(weather)}
      </div>
      <h3> {temp}&deg; C</h3>
      <ul>
        <li>{humidity}% humidity</li>
        <li>High: {high}</li>
        <li>Low: {low}</li>
      </ul>
    </ContentContainer>
  );
};

ForecastBar.propTypes = {
  date: PropTypes.string,
  weather: PropTypes.string,
  description: PropTypes.string,
  temp: PropTypes.number,
  humidity: PropTypes.number,
  high: PropTypes.number,
  low: PropTypes.number,
};

export default ForecastBar;
