var React = require('react');

var WeatherForm = React.createClass({

    onFormSubmit: function(e) {
        e.preventDefault();
        var location = this.refs.location.value;
        this.refs.location.value = '';
        if ( location.length>0 )
            this.props.onSearch(location);
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <h3>Get Weather</h3>
                    <input type="text" ref="location" placeholder="Enter city name" />
                    <button >Get Weather</button>
                </form>
            </div>
        );
    }

});

module.exports = WeatherForm;
