# RG_Parser
File parsing utility for Ragged Genes

It's very basic at the moment as I am currently porting my scripts from AS3.

It parses files used in bioinformatics.

Usage:

Parser = require('rg_parser');

var seqRGO = Parser.parseFasta(data);

data contains one single fasta formatted sequence in text format. 
It returns an object with a 'desc' and a 'sequence' property.
