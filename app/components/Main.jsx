var React = require('react');
var Nav = require('Nav');

//this.props.children is handled by react-router

var Main = (other) => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {other.children}
        </div>
      </div>

    </div>

  );
}

module.exports = Main;
