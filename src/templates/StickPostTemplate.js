import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/stickypost'
import Stickypost from '../components/Stickypost';

export default ({pageContext}) => (
    <Layout>
      <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
      <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
      <Stickypost/>
    </Layout>
  );