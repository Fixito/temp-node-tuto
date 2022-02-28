const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req);

  if (req.url === '/') {
    res.write('Bienvenu sur mon serveur');
    res.end();
  } else if (req.url === '/about') {
    res.end("Voici une p'tite hstoire");
  } else {
    res.end(`
    <h1>Oups !</h1>
    <p>Nous ne trouvons pas la page que vous cherchez</p>
    <a href="/">retourner à l'accueil</a>
    `);
  }
});

server.listen(5000);
