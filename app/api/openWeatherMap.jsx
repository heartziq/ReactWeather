var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f7e0ded2ed4546fd1b9daf57e99a4aae&units=imperial';

//f7e0ded2ed4546fd1b9daf57e99a4aae

module.exports = {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res){
    //  debugger;
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res){
      throw new Error(res.data.message);
    });
  }
}
