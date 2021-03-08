import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

const PortfolioItems = () => (

  <div className="columns is-mobile is-four-quarters-mobile is-half-tablet is-one-quarter-desktop">
    <StaticQuery
      query={ graphql`
      {
        allWordpressWpPortfolio{
          edges{
            node{
              title
              excerpt
              content
              featured_media{
                source_url
              }
              slug
            }
          }
        }
        }
      `}
      render={ props => (
        props.allWordpressWpPortfolio.edges.map( item => (

          <div className="column" key={ item.node.id }>
            <div className="card" >
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={ item.node.featured_media.source_url } alt="Thumbnail" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={ item.node.featured_media.source_url } alt="Thumbnail" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{ item.node.title }</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>
                <div className="content" >
                  { item.node.excerpt }
                  <Link to={ '/portfolio/${item.node.slug}' }>Read more...</Link>
                  <time datetime={ "2016-1-1" }>11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>


        ) )

      ) }
    />

  </div>

);

export default PortfolioItems;