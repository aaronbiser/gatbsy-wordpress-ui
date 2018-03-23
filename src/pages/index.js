import React from 'react';
import Helmet from 'react-helmet';
import PageList from '../components/PageList';

const IndexPage = ({ data }) => (
  <div>
    <Helmet
      title={`${data.site.siteMetadata.subtitle} : ${
        data.site.siteMetadata.title
      }`}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <PageList title="Post" pages={data.allWordpressPost.edges} />
    <PageList title="Page" pages={data.allWordpressPage.edges} />
  </div>
);

export default IndexPage;

export const indexPageQuery = graphql`
  query indexPageQuery {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          date(formatString: "/YYYY/MM/DD/")
        }
      }
    }
    allWordpressPage(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          date(formatString: "/YYYY/MM/DD/")
        }
      }
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;
