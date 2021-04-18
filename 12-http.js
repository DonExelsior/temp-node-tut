const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('WELCOME TO OUR HOME PAGE!');
    }
    if(req.url === '/about') {
        res.end('Here is our short history.');
    }
    res.end(
    `<h1>Ooops!</h1>
    <p>We can't see to find the page!</p>
    <a href="/">Back to home page!</a>`
    )
})

server.listen(5000)