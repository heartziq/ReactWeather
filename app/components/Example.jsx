var React = require('react');
var {Link} = require('react-router');
//one-liner (expression)
var Example = () => (
  <div>

    <h1 className="text-center">Examples</h1>

    <p>Here are a few example locations to try out!</p>

      <ol>
        <li>
          <Link to='/?location=Singapore'>Singapore, SG</Link>
        </li>
        <li>
          <Link to='/?location=Paris'>Paris, France</Link>
        </li>
      </ol>



  </div>
);

module.exports = Example;
