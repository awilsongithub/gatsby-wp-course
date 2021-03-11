import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: white;
`;

const SiteTitle = styled.div`
  font-weight: bold;
  line-height: 25px;
`;

const SiteInfo = () => (
  <StaticQuery
    query={ graphql`
      {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `} render={ props => (
      <SiteInfoWrapper>
        <SiteTitle>
          <Link to={ '/' }>
            { props.allWordpressSiteMetadata.edges[0].node.name }
          </Link>
        </SiteTitle>
      </SiteInfoWrapper>
    ) } />
)

export default SiteInfo;