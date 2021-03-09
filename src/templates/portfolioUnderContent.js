import React from 'react'
import Layout from '../components/layout'
import PortfolioItems from '../components/PortfolioItems'

export default ( { pageContext } ) => (
  (
    <Layout>
      {/* // TODO wrap auto generated "content" when you cannot apply bulma classes to it */}
      <section className="content section">
        <h1 dangerouslySetInnerHTML={ { __html: pageContext.title } } />
        <div dangerouslySetInnerHTML={ { __html: pageContext.content } } />
      </section>
      <PortfolioItems />
    </ Layout>
  )
);