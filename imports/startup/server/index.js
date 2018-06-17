import React from 'react'
import cors from 'cors'
import { Helmet } from 'react-helmet'
import { Meteor } from 'meteor/meteor'
import LRUCache from 'lru-cache'
import { createApolloServer } from 'meteor/apollo'
import { onPageLoad } from 'meteor/server-render'
import { renderToStaticMarkup, renderToStaticNodeStream } from 'react-dom/server'
import ServerRoutes from './routes'
import * as dbs from '/imports/api/server/collections'
import schema from '../../api/server/graphql/schema'

const whitelist = ['https://hanzluo.com', 'https://hanzdream.com']

const corsOptions = {
  origin(origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1 || origin === Meteor.absoluteUrl()
    callback(null, originIsWhitelisted)
  },
  credentials: true,
}

createApolloServer(
  {
    rootValue: {
      dbs,
    },
    schema,
  },
  {
    configServer: graphQLServer => graphQLServer.use(cors(corsOptions)),
  },
)

const ssrCache = new LRUCache({
  maxAge: 1000 * 60 * 60 * 24 * 60,
})

const getSSRCache = url => {
  if (ssrCache.has(url.pathname)) {
    return ssrCache.get(url.pathname)
  } else {
    const bodyReactHtml = renderToStaticNodeStream(<ServerRoutes url={url} />)
    const helmet = Helmet.renderStatic()
    const title = helmet.title.toString()
    Meteor.defer(() => {
      const bodyReactHtml = renderToStaticMarkup(<ServerRoutes url={url} />)
      const SSRCache = { bodyReactHtml, title }
      ssrCache.set(url.pathname, SSRCache)
    })
    return { bodyReactHtml, title }
  }
}

onPageLoad(sink => {
  const cache = getSSRCache(sink.request.url)
  sink.appendToHead(cache.title.toString())
  sink.renderIntoElementById('app', cache.bodyReactHtml)
})
