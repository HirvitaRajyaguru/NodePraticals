const fs= require('fs');
const yargs= require('yargs');

console.log(yargs.argv);
yargs.version('1.1.0');

fs.writeFileSync('note.txt','New file created by Hirvita Rajyaguru');