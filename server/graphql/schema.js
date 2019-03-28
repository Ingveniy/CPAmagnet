const graphql = require('graphql');

// TODO: Добавить автованическое подсасывание схем как в деке
const PaintingType = require('./PaintingType');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    painting: {
      type: PaintingType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // logic
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
