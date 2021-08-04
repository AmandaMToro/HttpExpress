const http = require("http");


let entrada= {
    ok:true, message:'Recibido'
}

let salida={
    ok:true, message:'Adios'
}
const server= http.createServer (function (request, response)
{
    console.log('Petición recibida del cliente');
    console.log("request method: " + request.method);
    console.log("request url: " + request.url);
    console.log('Responsable Status Code: ' + response.statusCode);
    console.log(request.headers['content-type']);
    console.log(request.headers['content-length']);
    console.log(request.headers['user-agent']);

    response.writeHead(200, {'content-type':'aplication/json'});



    if (request.url=== '/bye'){
        response.write(JSON.stringify(entrada))
    } else {
        response.write(JSON.stringify(salida))
    }
    response.end()

    }) 
    server.listen(3000)