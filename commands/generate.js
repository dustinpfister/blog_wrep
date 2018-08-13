let klaw = require('klaw'),
through2 = require('through2');



exports.command = 'generate';

exports.describe = 'generate a report'

exports.handler = function (argv) {

    console.log('generating');
	console.log(argv.target);
	console.log(argv);

};
