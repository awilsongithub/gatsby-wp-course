
const _ = require( `lodash` )
const Promise = require( `bluebird` )
const path = require( `path` )
const slash = require( `slash` )

// TODO goes futher than storing the data. it CREATES ALL THE PAGES upfront using the stores actions object
exports.createPages = ( { graphql, actions } ) => {

  const { createPage, createRedirect } = actions;
  createRedirect( {
    fromPath: '/',
    toPath: '/home',
    redirectInBrowser: true,
    isPermanent: true
  } );

  return new Promise( ( resolve, reject ) => {

    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
                template
              }
            }
          }
        }
      `
    )
      .then( result => {
        if ( result.errors ) {
          console.log( result.errors );
          reject( result.errors );
        }

        _.each( result.data.allWordpressPage.edges, page => {
          let template;

          // TODO use php file only to configure which template via admin 
          if ( page.node.template == 'portfolio_under_content.php' ) {
            template = path.resolve( "./src/templates/portfolioUnderContent.js" );
          } else {
            template = path.resolve( "./src/templates/page.js" );
          }

          createPage( {
            path: `/${page.node.slug}/`,
            component: slash( template ),
            context: page.node // all page props 
          } );
        } )
      } )

      .then( () => {
        graphql(
          `{
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
          `
        ).then( result => {
          if ( result.errors ) {
            console.log( result.errors );
            reject( result.errors );
          }
          const template = path.resolve( "./src/templates/portfolio.js" );
          const posts = result.data.allWordpressWpPortfolio.edges;

          _.each( posts, post => {
            createPage( {
              path: `/portfolio/${post.node.slug}/`,
              component: slash( template ),
              context: post.node
            } );
          } )
          resolve();
        } )
      } )
  } )
}