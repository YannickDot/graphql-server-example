var photoGraphQL = require('./photo+GraphQL.js')
var routes = [...photoGraphQL.routes]

function registerRoutes(server, routesArr) {
  return routesArr.map(r => server[r.verb.toLowerCase()](r.path, r.handler))
}

module.exports = {registerRoutes, routes}
