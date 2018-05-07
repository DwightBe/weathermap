import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import ForecastBar from './components/ForecastBar';
import PlacesSearch from './components/PlacesSearch';
import PlacesAutocomplete from 'react-places-autocomplete';
import { fetchForecastByCityName } from './services/openweathermap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      forecast:[]
    }
  }

	getForecastData = async (city) => {
		const result = await fetchForecastByCityName(city);
    console.log('result', result);
		this.setState({
			forecast: result.list.map(item => ({
				date: moment(item.dt * 1000).format('MMMM Do YYYY, h:mm:ss a'),
				temp: item.main.temp,
				humidity: item.main.humidity,
				weather: item.weather[0],
        high: item.main.temp_max,
        low: item.main.temp_min
			}))
		});
	}

  render() {
    return (
      <div className="App">
      <PlacesSearch
        getForecastData={this.getForecastData}
      />
      {this.state.forecast.map((item, key) => {
          return(
            <ForecastBar
              key = {key}
              date={item.date}
              temp={Math.round(item.temp)}
              humidity={Math.round(item.humidity)}
              weather={item.weather.main}
              description={item.weather.description}
              high={item.high}
              low={item.low}
            />
          )
      })}
      </div>
    );
  }
}

export default App;
