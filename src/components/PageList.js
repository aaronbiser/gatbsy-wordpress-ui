import React from 'react';
import Link from 'gatsby-link';

const PageList = ({ pages, title }) => (
  <div>
    <h1>{`Site ${title}s`}</h1>
    {pages.map(page => (
      <div
        style={{ borderTop: '1px solid #eee', padding: '2rem 0' }}
        key={page.node.id}
      >
        <h2 style={{ margin: '0 0 10px 0' }}>{page.node.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: page.node.excerpt }} />
        <Link to={page.node.slug}>{`View ${title}`}</Link>
      </div>
    ))}
  </div>
);

export default PageList;
