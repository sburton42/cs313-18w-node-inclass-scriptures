const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || 'postgresql://ta_user:ta_pass@localhost:5432/scripture_ta';

const pool = new Pool({
	connectionString: connectionString
});

function getScriptureList(book, callback) {
	// var result = {
	// 	status: 'success',
	// 	list: [
	// 		{book: 'John', chapter: 3, verse: 16},
	// 		{book: 'John', chapter: 7, verse: 17},
	// 		{book: 'Matthew', chapter: 5, verse: 16},
	// 		{book: 'Helaman', chapter: 5, verse: 12}
	// 	]
	// };


	pool.query('SELECT * FROM scripture WHERE book = $1::text', [book], function(err, res) {
		if (err) {
			throw err;
		} else {
			// We got a result from the db...
			console.log('Back from DB with: ' + res.rows);

			var result = {
				status: 'success',
				list: res.rows
			};

			callback(null, result);
		}

	})
}


module.exports = {
	getScriptureList: getScriptureList
};

