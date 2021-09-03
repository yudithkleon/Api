const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middleware = jsonServer.defaults();

//aqui digo que use midleware que lo cree arriba
server.use(middleware);
server.use(router);
//le asigno un puerto dinamico
const port = process.env.PORT || 4000;

server.listen(port, ()=>{
    console.log ("Estoy dentro de el server")
})

