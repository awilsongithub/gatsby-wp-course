import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import SiteInfo from './SiteInfo';

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: rgb(3, 27, 77);
`;

const MainMenuInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  width: 90vw;
  height: 55px;
  align-items: center;
`;

const MenuItem = styled( Link )`
  color: white;
  display: block;
  padding: 8px 16px;
  text-decoration: none;
`;

const MainMenu = () => (

  // static query component takes props query and render 
  // query takes a graphql query
  // render takes a fn taking result of query as props & returning jsx 
  <StaticQuery query={ graphql`
    {
      allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Main menu"}}) {
        edges {
          node {
            name
            items {
              title
              object_slug
            }
          }
        }
      }
    }

  `} render={ props => (
      <MainMenuWrapper>
        <MainMenuInner>
          <SiteInfo />
          { props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map( item => (
            <MenuItem to={ `/${item.object_slug}` } key={ item.title }>
              { item.title }
            </MenuItem>
          ) ) };
        </MainMenuInner>
      </MainMenuWrapper>
    ) } />

  // <div>
  //   Main Menu
  // </div>
);

export default MainMenu;