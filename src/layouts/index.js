import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/index.module.css';

const TemplateWrapper = ({ data, children, location }) => {
  const { title } = data.site.siteMetadata;

  return (
    <div>
      <Header
        pages={data.allWordpressPage.edges}
        activePage={location.pathname}
      />
      <div className={styles.wrapper}>{children()}</div>
      <Footer title={title} />
    </div>
  );
};

export default TemplateWrapper;

export const indexLayoutQuery = graphql`
  query indexLayoutQuery {
    allWordpressPage(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          id
          title
          slug
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
