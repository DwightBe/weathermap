import React from 'react';
import { ContentContainer } from './styles';

class ForecastBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
  }
  render() {
    return (
      <ContentContainer>
        <h2>{this.props.date}</h2>
        <div> {this.props.weather.main}</div>
        <div> {this.props.weather.description}</div>
        <div> {this.props.temp}&deg;</div>
        <div> {this.props.humidity}% humidity </div>
      </ContentContainer>
    );
  }
}

export default ForecastBar;
