import ApolloClient from 'apollo-boost'
import { createApolloClient } from 'meteor/apollo'

export const client = new ApolloClient(createApolloClient())
