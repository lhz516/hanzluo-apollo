import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import * as dbs from '/imports/api/server/collections';
import typeDefs from '/imports/api/server/graphql/types';
import resolvers from '/imports/api/server/graphql/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({
  rootValue : {
    dbs
  },
  schema,
});
