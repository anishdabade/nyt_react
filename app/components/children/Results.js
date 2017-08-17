// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body text-center">
          {console.log(this.props)}
          {this.props.newsArticles.map(function(search, i) {
            return (
              <div>
                <p>{search.headline.main}</p>
                <p>{search.snippet}</p>
                <p>{search.web_url}</p>

              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;