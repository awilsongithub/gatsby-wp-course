import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

const PortfolioItems = () => (

  <section className="section">
    <div className="columns is-mobile">
      <StaticQuery
        query={ graphql`
        {
          allWordpressWpPortfolio {
            edges {
              node {
                title
                id
                slug
                acf {
                  portfolio_name
                  portfolio_title
                  portfolio_email
                  portfolio_bio
                  portfolio_image {
                    source_url
                  }
                }
              }
            }
          }
        }
      `}
        render={ props => (
          props.allWordpressWpPortfolio.edges.map( post => (

            // TODO this is a bunch of bulma classes. can add just what we want
            <div className="column is-four-quarters-desktop is-half-tablet is-one-third-desktop" key={ post.node.id }>
              <div className="card" >
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={ post.node.acf.portfolio_image.source_url } alt="Thumbnail" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={ post.node.acf.portfolio_image.source_url } alt="Thumbnail" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{ post.node.acf.portfolio_name }</p>
                      <p className="subtitle is-6">{ post.node.acf.portfolio_title }</p>
                    </div>
                  </div>
                  <div className="content" >
                    <p className="pr-3">{ post.node.acf.portfolio_bio }</p>
                    <Link to={ `mailto:${post.node.acf.portfolio_email}` }>
                      { post.node.acf.portfolio_email }
                    </Link>
                  </div>
                </div>
              </div>
            </div>


          ) )

        ) }
      />

    </div>
  </section>

);

export default PortfolioItems;