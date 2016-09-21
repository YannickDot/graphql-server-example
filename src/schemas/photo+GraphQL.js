const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt
} = require('graphql')

const { find, findById } = require('../controllers/photos-controllers+GraphQL.js')

const PhotoType = new GraphQLObjectType({
  name: 'Photo',
  description: 'Single Photo schema',
  fields: () => ({
    title: {
      type: new GraphQLNonNull (GraphQLString),
      description: 'The title of the photo',
    },
    url: {
      type: new GraphQLNonNull (GraphQLString),
      description: 'The url of the source',
    },
    thumbnailUrl: {
      type: new GraphQLNonNull (GraphQLString),
      description: 'The url of the thumbnail',
    },
    id: {
      type: new GraphQLNonNull (GraphQLInt),
      description: 'The id of the photo',
    }
  }),
});


const baseType = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    photo: {
      type: PhotoType,
      args: {
        id: {
          description: 'If omitted replies with all the photos, if provided it returns the photo with this id',
          type: GraphQLInt
        }
      },
      resolve: (root, {id}) => id ? findById(id) : null
    },
    photos: {
      type: new GraphQLList(PhotoType),
      args: {
        id: {
          description: 'If omitted replies with all the photos, if provided it returns the photo with this id',
          type: GraphQLInt
        }
      },
      resolve: (root, {id}) => id ? find({id}) : find({})
    },
  })
});

const PhotoGraphQLSchema = new GraphQLSchema({
  query : baseType
});

module.exports = {PhotoGraphQLSchema}
