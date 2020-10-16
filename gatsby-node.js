const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const customPage = path.resolve(`./src/templates/custom-page.js`)
    resolve(
      graphql(
        `
          {
            allContentfulPage {
              edges {
                node {
                  title
                  slug 
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pages = result.data.allContentfulPage.edges
        pages.forEach((page, index) => {
          createPage({
            path: `/${page.node.slug}`,
            component: customPage,
            context: {
              slug: page.node.slug
            },
          })
        })
      })
    )
  })
}

//
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   // **Note:** The graphql function call returns a Promise
//   // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `);
//
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     if (node.fields && node.fields.slug) {
//       createPage({
//         path: node.fields.slug,
//         component: path.resolve(`./src/templates/custom-page.js`),
//         context: {
//           // Data passed to context is available
//           // in page queries as GraphQL variables.
//           slug: node.fields.slug,
//         },
//       });
//     }
//   });
// };
