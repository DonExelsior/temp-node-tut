const {readFileSync, writeFileSync} = require('fs');
console.log('start');

// this is the same as this up: const fs = require('fs);
// and the same as we write: fs.readFileSync

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
)

console.log('done with this task');
console.log('starting the next one');