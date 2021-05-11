import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Class from './Class';
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

  return (
    <section className={styles.wrapper} id="classes">
      <Typography variant="h2" component="h2" gutterBottom>
        Class Sessions
        <ToolTip open={toolTipOpen} setOpen={setToolTipOpen} />
      </Typography>

      <div className={styles.grid}>
        <Grid container spacing={40}>
          {allMarkdownRemark.edges
            .filter(
              ({ node }) => node.frontmatter.ageGroup === 'Preschool')
            .map(({ node }) => (
              <Class node={node} ages="3-5" disabled={node.frontmatter.difficulty === '3'} ctaText={node.frontmatter.difficulty === '3' ? 'Not Available' : 'Register Now'} />
            ))}
        </Grid>
        <Grid container spacing={40} alignItems="stretch">
          {allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.ageGroup === 'Grade School')
            .map(({ node }) => (
              <Class node={node} ages="5-12" disabled={node.frontmatter.difficulty === '1'} ctaText={node.frontmatter.difficulty === '1' ? 'Not Available' : 'Register Now'} />
            ))}
          {allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.ageGroup === 'Pre Comp')
            .map(({ node }) => (
              <Class node={node} ages="6-14"  disabled={true} ctaText={'Call To Register'} />
            ))}
          {allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.ageGroup === 'Adult')
            .map(({ node }) => (
              <Class node={node} ages="18 +" ctaText={'Register Now'} />
            ))}
          {allMarkdownRemark.edges
            .filter(({ node }) => node.frontmatter.ageGroup === 'Baby')
            .map(({ node }) => (
              <Class node={node} ages="0-2" ctaText={'Register Now'} />
            ))}
        </Grid>
      </div>
    </section>
  );
};

export default Classes;
