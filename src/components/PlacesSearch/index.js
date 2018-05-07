import React, {PropTypes} from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

class PlacesSearch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      city:''
    }
  }
  handleChange = (city) => {
    this.setState({city});
  }
  render() {
    const {getForecastData} = this.props;
    return (
      <div>
        <h1>Choose a City</h1>
        <PlacesAutocomplete
          value={this.state.city}
          onChange={this.handleChange}
          onSelect={getForecastData}
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
                  return (
                    <div {...getSuggestionItemProps(suggestion, { className })}>
                      <span>{suggestion.description}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    );
  }
}

export default PlacesSearch;
