// Common JS, every file is module (by default)
// Modules - Encapsulated Code (only share minimums)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');
require('./7-mind-grenade')
//console.log(data);

//console.log(names);
//console.log(sayHi);

sayHi('Susan');
sayHi(names.peter);
sayHi(names.john);