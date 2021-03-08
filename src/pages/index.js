import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby'
import PortfolioItems from "../components/PortfolioItems"
import './myStyles.scss';

const IndexPage = () => (
  <>
    <Layout>
      <StaticQuery query={ graphql`
      {
        allWordpressPage {
          edges {
            node {
              id
              title
              excerpt
              content
            }
          }
        }
      }
    `} render={ props => (
          <div>
            {props.allWordpressPage.edges.map( page => (
              <div key={ page.node.id }>
                <h1 className="title">{ page.node.title }</h1>
                <div dangerouslySetInnerHTML={ { __html: page.node.excerpt } } />
              </div>
            ) ) }
          </div>
        ) } />
    </Layout>
    <PortfolioItems />
  </>
)

export default IndexPage
