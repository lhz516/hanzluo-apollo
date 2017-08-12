import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from 'antd/lib/layout';
const { Header } = Layout;
// import SideBar from '/imports/modules/main-sider';
import Nav from '/imports/modules/main-nav';
import MainFooter from '/imports/modules/main-footer';
import Home from '/imports/modules/home';
import Resume from '/imports/modules/resume';

const Router = () => (
  <BrowserRouter>
    {/*<Layout>*/}
      {/*<SideBar />*/}
      <Layout>
        <Header><Nav /></Header>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        {/*<Route path="/topics" component={Topics}/>*/}
        <MainFooter />
      </Layout>
    {/*</Layout>*/}
  </BrowserRouter>
);

export default Router;
