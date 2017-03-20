var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var openWeatherMap = require('../../api/openWeatherMap');
var ErrorModal = require('./ErrorModal')

var Weather = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this; //This needs to be outside then

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
  
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function () {
    var isLoading = this.state.isLoading;
    var location = this.state.location;
    var temp = this.state.temp;
    var errorMessage = this.state.errorMessage;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return  <WeatherMessage location={location} temp={temp}/>
      }
    }
    function renderError () {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )

      }
    }
    //var {temp,location} = this.state;
    return (
      <div>
        <h3 className="text-center">Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
