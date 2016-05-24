var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
var Weather = React.createClass({

  getInitialState: function (){
    return {
      isLoading: false,
      errorMessage: undefined
    }
  },
  handleSearch: function (location){

    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temperature){

      that.setState({
        country: location,
        temperature: temperature,
        isLoading: false
      })
    }, function (e){
      //alert(errorMessage);
      that.setState({
        isLoading: false,
        errorMessage: e.message
      })
    });

  },
  render: function(){
     var {isLoading, temperature, country, errorMessage} = this.state;//es6 de-structuring

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

     function renderError(){
       if (typeof errorMessage === 'string'){
         return (
           <ErrorModal message={errorMessage}/>
         );
       }
     }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>

    );
  }
});

module.exports = Weather;
