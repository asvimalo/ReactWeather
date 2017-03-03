var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6f3bb208f5efc8eb9cb26172882b4fb3&units=metric';
//6f3bb208f5efc8eb9cb26172882b4fb3
//http://api.openweathermap.org/data/2.5/weather?q=Lund&units=metric&appid=6f3bb208f5efc8eb9cb26172882b4fb3
//http://api.openweathermap.org/data/2.5/weather?appid=6f3bb208f5efc8eb9cb26172882b4fb3&units=metric&q=Paris
module.exports = {
  getTemp: function (location) {
    //debugger;
    var encodedLocation = encodeURIComponent(location);
    //debugger;
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    //debugger;

    return axios.get(requestUrl).then(function (res) {
        if (res.data.cod && res.data.message) {

          throw new Error(res.data.message);
        } else {
          return res.data.main.temp; //return needed to then in Weather.jsx to work
        }
      }, function (res) {

        throw new Error(res.data.message);
    });
  }
}
