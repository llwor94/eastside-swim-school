import { graphql } from "gatsby";

export default graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/classes/" } }
      sort: { fields: frontmatter___difficulty }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            link
            ageGroup
            difficulty
            thumbnail
            classPeriods {
              dateRange {
                startDate
                endDate
              }
              days
              times {
                time
                available
              }
            }
          }
        }
      }
    }
    allFile(filter: { sourceInstanceName: { regex: "/cms/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, jpegProgressive: true) {
              srcSet
              src
              sizes
              originalName
            }
          }
        }
      }
    }
  }
`
