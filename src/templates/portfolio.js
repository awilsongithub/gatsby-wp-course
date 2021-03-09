import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const FeaturedImage = styled.img`
  object-fit: cover;
  object-position: top;
`;

export default ( { pageContext } ) => (
  (
    <Layout>
      { /* children go inside the layout component .... */ }
      <figure class="image is-5by3 mb-5 mt-5">
        <FeaturedImage src={ pageContext.featured_media.source_url } />
      </figure>
      <h1 className="title">{ pageContext.title }</h1>
      <div dangerouslySetInnerHTML={ { __html: pageContext.content } } />
    </Layout>
  )
);