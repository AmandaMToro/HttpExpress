const express = require('express');
const { Server } = require('http');
const app = express()

app.get('/', function (request, response) {
    console.log("request method: " + request.method);
    console.log("request url: " + request.url);
    console.log(request.headers['user-agent']);
    response.send('recibido')
  })

  app.get('/bye', function (request, response){
    console.log("request method: " + request.method);
    console.log("request url: " + request.url);
    console.log(request.headers['user-agent']);
    response.send('adios')
  })
 app.listen(4000)
