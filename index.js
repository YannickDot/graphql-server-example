const {openDBConnection} = require('./src/db-dummy.js')
const {setResponseHeaders, logger} = require('./src/middlewares.js')
const restify = require('restify');
const {routes, registerRoutes} = require('./src/routes/')

const server = restify.createServer({
  name: 'GraphQL Server Example'
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(logger);
server.use(setResponseHeaders);

server.on('uncaughtException',function(request, response, route, error){
  console.error(error.stack);
  response.send(error);
});

server.listen(8081, function() {
  console.log('%s listening at %s', server.name, server.url);
  openDBConnection()
});

registerRoutes(server, routes)
