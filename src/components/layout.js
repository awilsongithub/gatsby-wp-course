/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import Header from "./header"
import MainMenu from "./MainMenu"
// import "./layout.css"
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

  body{
    font-family: 'Open Sans', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`;

 const LayoutWrapper = styled.div`
  max-width: 960px;
  width: 90vw;
  margin: 0 auto;
`;

const Layout = ( { children } ) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      { children }
    </LayoutWrapper>
  </div>
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout;
