import React from 'react'
import { StaticRouter } from 'react-router';
import { Switch, Route } from 'react-router'
import Layout from 'antd/lib/layout';
const { Header } = Layout;
import Nav from '/imports/modules/main-nav';
import MainFooter from '/imports/modules/main-footer';
import Home from '/imports/modules/home';
import Resume from '/imports/modules/resume';

const ServerRoutes = ({req, context = {}}) => (
  <StaticRouter
    location={req.url}
    context={context}
  >
    <Layout>
      <Header><Nav /></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <MainFooter />
    </Layout>
  </StaticRouter>
);

export default ServerRoutes;
