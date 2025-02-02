import React from 'react'
import Layout from '../components/layout'

export default ( { pageContext } ) => (
  (
    <Layout>
      <section className="section">
        <h1 dangerouslySetInnerHTML={ { __html: pageContext.title } } />
        <div dangerouslySetInnerHTML={ { __html: pageContext.content } } />
      </section>
    </ Layout>
  )
);