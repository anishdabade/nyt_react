var React = require("react");

var Form = require("./children/Form");
var Results = require("./children/Results");
var Saved = require("./children/Saved");

var helpers = require("./utils/helpers");

var Main = React.createClass({

	getInitialState: function() {
    	return { title: "", startYear:"", endYear: ""};
  	},

  	// componentDidMount: function() {

  	// 	helpers.getArticles
  	// }

  	componentDidUpdate: function() {
  		helpers.runQuery(this.state.title,this.state.startYear,this.state.endYear).then(function(data) {
  			console.log(data);
  		})
  	},
  	setTerm: function(title,startYear,endYear) {
    this.setState({ title: title,startYear:startYear,endYear:endYear});
  	},
	  render: function() {
	    return (
	      <div className="container">
	        <div className="row">
	          <div className="jumbotron">
	            <h2 className="text-center">New York Times Articles!</h2>
	          </div>

	          <div className="col-md-6">

	            <Form setTerm={this.setTerm} />

	          </div>

	          {/*<div className="col-md-6">

	            <Results address={this.state.results} />

	          </div>*/}

	        </div>

	      </div>
	    );
	  }

});