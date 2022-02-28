const { readFileSync, writeFileSync } = require('fs');

console.log('début');
//* lire un ficher
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
// console.log(first, second);

//* écrire ou créer dans un fichier
writeFileSync('./content/result-sync.txt', `écoute Quentin`, {
  flag: 'a'
});

console.log('tâche terminée');
console.log('début de la prochaine tâche');
