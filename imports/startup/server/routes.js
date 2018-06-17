import React from 'react'
import { StaticRouter, Switch, Route } from 'react-router'
import Layout from 'antd/lib/layout'
import { ApolloProvider } from 'react-apollo'
const { Header } = Layout
import Nav from '/imports/modules/main-nav'
import MainFooter from '/imports/modules/main-footer'
import Home from '/imports/modules/home'
import Resume from '/imports/modules/resume'
import client from './apollo-client'

const ServerRoutes = ({ url, context = {} }) => (
  <ApolloProvider client={client}>
    <StaticRouter location={url.pathname} context={context}>
      <Layout>
        <Header>
          <Nav />
        </Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <MainFooter />
      </Layout>
    </StaticRouter>
  </ApolloProvider>
)

export default ServerRoutes
