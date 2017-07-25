import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';

import { ApolloProvider } from 'react-apollo';
import { client } from './apollo'
import store from './store';
import Routes from './routes';

Meteor.startup(() => {
  render(
    <ApolloProvider client={client} store={store}>
      <Routes />
    </ApolloProvider>,
    document.getElementById('app')
  );
});
