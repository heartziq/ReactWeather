var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function (){
//     var {temperature, country} = this.props;//es6 de-structuring
//     return (
//       <p> It's {temperature} in {country}!</p>
//     );
//   }
// });

var WeatherMessage = ({temperature, country}) => {
  //var {temperature, country} = props;//es6 de-structuring
  return (
    <p className="text-center"> It's {temperature} in {country}!</p>
  );
}
module.exports = WeatherMessage;
