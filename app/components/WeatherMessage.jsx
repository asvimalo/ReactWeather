var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     debugger;
//     var location = this.props.location;
//     var temp = this.props.temp;
//
//     return (
//       <h2>The temperature is {temp} in {location} </h2>
//     )
//   }
// });

var WeatherMessage = (props) => {
  var location = props.location;
  var temp = props.temp;

  return (
    <h3 className="text-center">The temperature is {temp} in {location} </h3>
  )
}
module.exports = WeatherMessage;
