import { Meteor } from 'meteor/meteor';
import { hydrate } from 'react-dom';
import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { client } from './apollo'
import store from './store';
import Routes from './routes';

Meteor.startup(() => {
  hydrate(
    <ApolloProvider client={client} store={store}>
      <Routes />
    </ApolloProvider>,
    document.getElementById('app')
  );
});
