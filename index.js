const http = require('http');
const axios = require('axios');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(response) {
        console.log(response.data);
      });


  res.end();
}).listen(8080);
