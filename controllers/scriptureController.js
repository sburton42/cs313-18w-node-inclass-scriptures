var scriptureModel = require('../models/scriptureModel.js');

function handleScriptureList(req, res) {
	console.log('Got a request for a scripture list');

	var book = req.query.book;
	console.log('Requested book: ' + book);

	scriptureModel.getScriptureList(book, function(err, result) {
		// var result now has the result that we need

		// send back a json response to the browser
		res.json(result);
	});
}

module.exports = {
	handleScriptureList: handleScriptureList
};