const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

// Implement the Gatsby API “createPages"
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const pageTemplate = path.resolve(`./src/templates/page.js`);
  const postTemplate = path.resolve(`./src/templates/post.js`);

  return new Promise((resolve, reject) => {
    // Query for markdown nodes to use in creating pages.
    resolve(
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
                }
              }
            }
            allWordpressPost {
              edges {
                node {
                  id
                  slug
                  status
                  template
                  format
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create Page pages.
        _.each(result.data.allWordpressPage.edges, edge => {
          createPage({
            path: `${edge.node.slug}`,
            component: slash(pageTemplate),
            context: {
              // id is used to identify page to pull data for template page
              id: edge.node.id,
            },
          });
        });

        _.each(result.data.allWordpressPost.edges, edge => {
          createPage({
            path: `${edge.node.slug}`,
            component: slash(postTemplate),
            context: {
              // id is used to identify page to pull data for template page
              id: edge.node.id,
            },
          });
        });
      })
    );
  });
};
