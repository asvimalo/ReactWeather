var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6f3bb208f5efc8eb9cb26172882b4fb3&units=metric';
//6f3bb208f5efc8eb9cb26172882b4fb3
//http://api.openweathermap.org/data/2.5/weather?q=Lund&units=metric&appid=6f3bb208f5efc8eb9cb26172882b4fb3
module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
        if (res.data.cod && res.data.message) {
          debugger;
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp; //return needed to then in Weather.jsx to work
        }
      }, function (res) {
        debugger;
        throw new Error(res.data.message);
    });
  }
}
