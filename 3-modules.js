//* Modules - Code Encapsulé (il faut partager seulement le minimum)
//* CommonJS - utilisé par défaut par Node, tous les fichiers sont des modules par défaut

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
// console.log(data);

// console.log(names);

const { john, peter } = names;

// sayHi('Bob');
// sayHi(names.john);
// sayHi(peter);

const sum = require('./7-mind-grenade');
