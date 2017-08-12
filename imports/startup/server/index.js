import React from 'react';
import { Helmet } from "react-helmet";
import { Meteor } from 'meteor/meteor';
import { createApolloServer } from 'meteor/apollo';
import { onPageLoad } from "meteor/server-render";
import { renderToString } from "react-dom/server";
import ServerRoutes from './routes';
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

Meteor.startup(() => {
  onPageLoad(sink => {
    const html = renderToString(<ServerRoutes req={sink.request} />);
    const helmet = Helmet.renderStatic();
    sink.appendToHead(helmet.title.toString());
    sink.renderIntoElementById('app', html);
  });
});
