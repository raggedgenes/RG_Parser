var Parser = Object.create(null);

var striptags = require('striptags');
Parser.parseFasta = function(string) {
	var rows = striptags(string).split('\n');
	var obj = {desc: rows[0], sequence: ""};
	for (i = 1; i < rows.length; i++) {
		obj.sequence += rows[i];
	}
	return obj;
}
module.exports = Parser;