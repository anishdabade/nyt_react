// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

//NYT API Key & search query
var nytKey = '9A0DE5D8173FEF34BC4052DFB166838F669EDE';
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  nytKey + "&q=";

// Helper functions for making API Calls
var helper = {

	// This function serves our purpose of running the query to geolocate.
	runQuery: function(title,stYear,endYear) {

		var queryURL = queryURLBase + title;

		// If the user provides a startYear -- the startYear will be included in the queryURL
		if (parseInt(stYear)) {
		  queryURL = queryURL + "&begin_date=" +stYear+ "0101";
		}
		// If the user provides a startYear -- the endYear will be included in the queryURL
		if (parseInt(endYear)) {
		  queryURL = queryURL + "&end_date=" +endYear+ "0101";
		}

		return axios.get(queryURL).then(function(response) {
			// If get get a result, return that result's formatted address property
			if (response.data.results[0]) {
			  return response.data.results;
			}
			// If we don't get any results, return an empty string
			return "";
		});
	}

};

// We export the API helper
module.exports = helper;