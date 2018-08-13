let yargs = require('yargs');

yargs

// default command
.command(require('./commands/default.js'))

// generate command
.command(require('./commands/generate.js'))

.option('target', {

    alias: 't',
    default:process.cwd()

})

.argv
