import { graphql } from 'graphql'
import { print } from 'graphql/language/printer'
import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'
import schema from '../../api/server/graphql/schema'

const client = new ApolloClient({
  // simple local interface to query graphql directly
  networkInterface: {
    query: ({ query, variables, operationName }) => graphql(schema, print(query), {}, {}, variables, operationName),
  },
  link: new SchemaLink({
    schema,
    context: {},
  }),
  cache: new InMemoryCache(),
  ssrMode: true,
})

export default client
