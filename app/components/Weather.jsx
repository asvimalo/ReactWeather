var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var openWeatherMap = require('../../api/openWeatherMap');

var Weather = React.createClass({

  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this; //This needs to be outside then

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
      debugger;
      that.setState({isLoading: false});
      alert(errorMessage);
    })
    //alert(location);
    // this.setState({
    //   location: location,
    //   temp: 25
    // });
  },
  render: function () {
    var isLoading = this.state.isLoading;
    var location = this.state.location;
    var temp = this.state.temp;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return  <WeatherMessage location={location} temp={temp}/>
      }
    }
    //var {temp,location} = this.state;
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
