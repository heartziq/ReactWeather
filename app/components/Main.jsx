var React = require('react');
var Nav = require('Nav');

//this.props.children is handled by react-router

var Main = (other) => {
  return (
    <div>
      <Nav />
      <h2>Main component</h2>
      {other.children}
    </div>

  );
}

module.exports = Main;
