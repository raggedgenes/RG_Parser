var striptags = require('striptags');


var Parser = Object.create(null);

module.exports = Parser;


Parser.parseFasta = function(string) {
	var rows = striptags(string).split('\n');
	var obj = {desc: rows[0], sequence: "", accession: getAccession(rows[0])};
	for (i = 1; i < rows.length; i++) {
		obj.sequence += rows[i];
	}
	return obj;
}

Parser.parseGFF = function(line) {
	
		//its not a comment, ill process it

		var parts = line.split("\t");

		if (parts.length !== 9) {
			//the file might use spaces instead of tabs
			//ill try to split it by spaces
			parts = line.trim().split(/\s+/);
		}

		if (parts.length == 9) {
			var attParts = parts[8].split(';');
			var arrayObject = {};
			for (var i = 0; i < attParts.length; ++i) {
				var pair = attParts[i].split("=");
				arrayObject[pair[0]] = pair[1];
			}

			var feature = {
				seqid: parts[0],
				source: parts[1],
				type: parts[2],
				start: parts[3],
				end: parts[4],
				score: parts[5],
				strand: parts[6],
				phase: parts[7],
				attributes: arrayObject
			};
			return feature;
		}
}
//inner utilities
function getAccession(desc) {
	regAcc = new RegExp("(gb|emb)\\|[A-Za-z0-9(.)]*");
	ret = desc.match(regAcc);
	if (ret) return ret[0]; else return '';
}

