import React from 'react';
import Helmet from 'react-helmet';

const PageTemplate = ({ data }) => {
  const { title, date, content } = data.wordpressPage;
  const siteTitle = data.site.siteMetadata.title;
  const headTitle = title ? `${title} : ${siteTitle}` : 'Foo';

  return (
    <div>
      <Helmet
        title={headTitle}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query currentPageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      id
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
