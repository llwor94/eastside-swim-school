import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Index from './Class';
import styles from './index.module.styl';
import { ToolTip } from './tooltip';

const query = graphql`
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
`;

const Classes = () => {
  const [toolTipOpen, setToolTipOpen] = useState(false);
  const { allMarkdownRemark } = useStaticQuery(query);

  console.log(allMarkdownRemark);
  return (
    <section className={styles.wrapper} id="classes">
      <Typography variant="h2" component="h2" gutterBottom>
        Class Sessions
        <ToolTip open={toolTipOpen} setOpen={setToolTipOpen} />
      </Typography>

      <div className={styles.grid}>
        <Grid container spacing={40} alignItems="stretch">
          {allMarkdownRemark.edges
            .filter(
              ({ node }) =>
                node.frontmatter.ageGroup === 'Preschool' &&
                node.frontmatter.classPeriods,
            )
            .map(({ node }) => (
              <Index node={node} ages="3-5" />
            ))}
        </Grid>
        <Grid container spacing={40} alignItems="stretch">
          {allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.ageGroup === 'Grade School')
            .map(({ node }) => (
              <Index node={node} ages="5-12" />
            ))}
          {allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.ageGroup === 'Pre Comp')
            .map(({ node }) => (
              <Index node={node} ages="6-14" />
            ))}
          {allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.ageGroup === 'Adult')
            .map(({ node }) => (
              <Index node={node} ages="18 +" />
            ))}
          {allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.ageGroup === 'Baby')
            .map(({ node }) => (
              <Index node={node} ages="0-2" />
            ))}
        </Grid>
      </div>
    </section>
  );
};

export default Classes;
