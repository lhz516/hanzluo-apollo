import ApolloClient from 'apollo-client'
import { createApolloClient } from 'meteor/apollo'

export const client = new ApolloClient(createApolloClient())
