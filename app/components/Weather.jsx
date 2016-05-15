var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var Weather = React.createClass({

  getInitialState: function (){
    return {
      isLoading: false
    }
  },
  handleSearch: function (location){

    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temperature){
      debugger;
      that.setState({
        country: location,
        temperature: temperature,
        isLoading: false
      })
    }, function (errorMessage){
      alert(errorMessage);
      that.setState({
        isLoading: false
      })
    });

  },
  render: function(){
     var {isLoading, temperature, country} = this.state;//es6 de-structuring

     function renderMessage(){
       if (isLoading){
         return (
           <h3>
             Fetching weather...
           </h3>
         )
       } else if (temperature && country){
         //temp & location
         return (
           <WeatherMessage temperature={temperature} country={country}/>
         );
       }
     }
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>

    );
  }
});

module.exports = Weather;
