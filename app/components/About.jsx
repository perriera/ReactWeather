var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>
                This is a tutorial project used for demonstrating
                how to properly utilize React and Redux inside a Webpack
                configured project using Foundation on a NodeJS server.
            </p>
            <p>
                Here are some of the tools I used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React </a>
                    - This was the JavaScript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map </a>
                    - I used Open Weather Map to search for weather data by city name.
                </li>
            </ul>
        </div>
    );
}

module.exports = About;
