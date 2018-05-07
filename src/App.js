import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import ForecastBar from './components/ForecastBar'
import { fetchForecastByCityName } from './services/openweathermap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city:'',
      forecast:[]
    }
  }
  componentDidMount() {

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
			}))
		});
	}

  handleChange = (city) => {
    this.setState({city});
  }

  render() {
    let title = this.state.title;
    let countries = this.state.countries;
    return (
      <div className="App">
      <h1>Choose a City</h1>
        <PlacesAutocomplete
          value={this.state.city}
          onChange={this.handleChange}
          onSelect={this.getForecastData}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input'
                })}
              />
              <div className="autocomplete-dropdown-container">
                {suggestions.map(suggestion => {
                  const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                       ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                       : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div {...getSuggestionItemProps(suggestion, { className, style })}>
                      <span>{suggestion.description}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        {this.state.forecast.map(item => {
            return(
              <ForecastBar
                date={item.date}
                temp={Math.round(item.temp)}
                humidity={Math.round(item.humidity)}
                weather={item.weather}
              />
            )
        })}
      </div>
    );
  }
}

export default App;
