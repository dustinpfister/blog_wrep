let klaw = require('klaw'),
through2 = require('through2'),
path = require('path');

exports.command = 'generate';

exports.describe = 'generate a report';

exports.handler = function (argv) {

    let dir = path.resolve(argv.target);

    console.log('generating report for content at: ' + dir);

    klaw(dir)

    // filter out dirs
    .pipe(through2.obj(function (item, enc, next) {

            if (item.stats.isFile()) {

                this.push(item);

            }
            next();

        }))

    // html only
    .pipe(through2.obj(function (item, enc, next) {

            let ext = path.extname(item.path).toLowerCase();

            if (ext === '.html' || ext === '.htm') {

                this.push(item);

            }
            next();

        }))

    .on('data', function (item) {

        console.log(path.basename(item.path));
        //console.log(item)

    })

};
