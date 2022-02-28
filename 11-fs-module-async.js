const { readFile, writeFile } = require('fs');

console.log('début');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  // console.log(first);

  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    // console.log(second);

    writeFile(
      './content/result-async.txt',
      `Voice le résult: ${first} ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        // console.log(result);
        console.log('travail terminé');
      }
    );
  });
});
console.log('début de la prochaine');
