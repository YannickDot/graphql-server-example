const { graphql } = require('graphql')
const { PhotoGraphQLSchema } = require('../schemas/photo+GraphQL.js')

const requestBuilder = query => graphql( PhotoGraphQLSchema, query )
const requestHandler = function (fn, res) {
  fn
  .then(data => res.send(data))
  .catch(error => res.send(error))
}

const routes = [
  {
    verb: 'get',
    path: '/graphql',
    handler: (req, res) => requestHandler( requestBuilder( req.query.graphql ), res )
  },
  {
    verb: 'post',
    path: '/graphql',
    handler: (req, res) => requestHandler( requestBuilder( req.body ), res ),
  }
]


module.exports = {routes}
