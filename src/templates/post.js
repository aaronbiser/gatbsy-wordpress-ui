import React from 'react';
import Helmet from 'react-helmet';

const PostTemplate = ({ data }) => {
  const { title, date, content } = data.wordpressPost;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <div>
      <Helmet
        title={`${title} : ${siteTitle}`}
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

export default PostTemplate;

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
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
