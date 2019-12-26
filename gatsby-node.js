const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    if (fileNode.sourceInstanceName === 'pages') {
      const slug = createFilePath({ node, getNode, basePath: `pages` });
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  console.log(JSON.stringify(result, null, 4));

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.fields && node.fields.slug) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/custom-page.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    }
  });
};
