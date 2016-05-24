var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e){

    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0){
      this.refs.location.value = ''; //clear input field
      this.props.onSearch(location);
    }

  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
              <input type="search" placeholder="Search weather by city" ref="location"/>
          </div>
          <div className="text-center">
            <button className="hollow button expanded">Get Weather</button>
          </div>

        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
