var React = require('react');//installed via npm
var ReactDOM = require('react-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');

// Load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

var {
  Route, Router, IndexRoute, hashHistory
} = require('react-router');

/* ES6 de-structuring the above looks like this */
//var Route = require('react-router').Route;
//var Router = require('react-router').Router;

require('style!css!applicationStyles');
var obj = {
  name: 'me'
}

var {name} = obj; //var name = obj.name;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      <Route path="about" component={About}/>
      <Route path="example" component={Example}/>
      <IndexRoute component={Weather}/>

    </Route>
  </Router>,
  document.getElementById('app')
);
