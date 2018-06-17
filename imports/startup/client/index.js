import { Meteor } from 'meteor/meteor'
import { hydrate } from 'react-dom'
import React from 'react'

import { ApolloProvider } from 'react-apollo'
import { client } from './apollo-client'
import Routes from './routes'

Meteor.startup(() => {
  hydrate(
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>,
    document.getElementById('app'),
  )
})
