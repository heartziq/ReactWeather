var React = require('react');
//var {Link} = require('react-router');

//statement
var About =  () => {
  return (
    <div>
          <h1 className="text-center page-title">Mission</h1>
          <h3>to deliver worldwide temperature instantly</h3>
          <table>
            <thead>
              <tr>
                <th width="150">Staff</th>
                <th width="150">Contact No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shayla (Head of Developer)</td>
                <td>+65 8303 2231</td>
              </tr>
              <tr>
                <td>Cameron (Head of Designer)</td>
                <td>+65 9311 1322</td>
              </tr>
              <tr>
                <td>Hadziq (Chief Of Everything)</td>
                <td>+65 8189 6094</td>
              </tr>
            </tbody>
          </table>
          <h2>Developed by..</h2>
          <h3>x0, j0ker, eb_, fish!</h3>
          <h2>Shoutz to</h2>
          <a href="http://openweathermap.org">OpenWeatherMap</a>
    </div>

  );
};

module.exports = About;
