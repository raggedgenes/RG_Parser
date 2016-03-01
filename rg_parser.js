var Parser = Object.create(null);

var striptags = require('striptags');
Parser.parseFasta = function(string) {
	var rows = striptags(string).split('\n');
	var obj = {desc: rows[0], sequence: "", accession: getAccession(rows[0])};
	for (i = 1; i < rows.length; i++) {
		obj.sequence += rows[i];
	}
	return obj;
}
//inner utilities
function getAccession(desc) {
	regAcc = new RegExp("gb|emb\\|[A-Za-z0-9(.)]*");
	ret = desc.match(regAcc);
	if (ret) return ret[0]; else return '';
}
module.exports = Parser;