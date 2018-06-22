const http = require('http');

http.createServer((req, resp) => {

        resp.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Jesus Moreno ',
            edad: 34,
            url: req.url
        }

        resp.write(JSON.stringify(salida));
        resp.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');