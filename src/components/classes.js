import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridCard from './GridCard';
import styles from './Classes.module.styl';

const Classes = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/classes/" } }
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                time
                day
                ageGroup
                difficulty
                thumbnail
                link
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => {
      // console.log(allMarkdownRemark)
      return (
        <section className={styles.wrapper} name="classes">
          <Typography variant="h2" component="h2">
            Group Classes
          </Typography>
          <div className={styles.grid}>
            <Grid container spacing={40} alignItems="stretch">
              {allMarkdownRemark.edges
                .filter(({ node }) => node.frontmatter.ageGroup === 'Preschool')
                .map(({ node }) => (
                  <GridCard
                    time={`${node.frontmatter.day}s at ${
                      node.frontmatter.time
                    }`}
                    key={node.frontmatter.title}
                    img={node.frontmatter.thumbnail}
                    header={node.frontmatter.title}
                    level={node.frontmatter.difficulty}
                    size={4}
                    link={node.frontmatter.link}
                    ages="3-5"
                    text={node.html}
                  />
                ))}
            </Grid>

            <Grid container spacing={40} className={styles.grid}>
              {allMarkdownRemark.edges
                .filter(
                  ({ node }) => node.frontmatter.ageGroup === 'Grade School',
                )
                .map(({ node }) => (
                  <GridCard
                    time={`${node.frontmatter.day}s at ${
                      node.frontmatter.time
                    }`}
                    img={node.frontmatter.thumbnail}
                    header={node.frontmatter.title}
                    size={4}
                    level={node.frontmatter.difficulty}
                    ages="5-12"
                    key={node.frontmatter.title}
                    link={node.frontmatter.link}
                    text={node.html}
                  />
                ))}
            </Grid>

            <Grid container spacing={40} className={styles.grid}>
              {allMarkdownRemark.edges
                .filter(({ node }) => node.frontmatter.ageGroup === 'Jr. High')
                .map(({ node }) => (
                  <GridCard
                    time={`${node.frontmatter.day}s at ${
                      node.frontmatter.time
                    }`}
                    img={node.frontmatter.thumbnail}
                    header={node.frontmatter.title}
                    size={4}
                    ages="18 and under"
                    level={node.frontmatter.difficulty}
                    key={node.frontmatter.title}
                    link={node.frontmatter.link}
                    text={node.html}
                  />
                ))}
            </Grid>

            <Grid container spacing={40} className={styles.grid}>
              {allMarkdownRemark.edges
                .filter(({ node }) => node.frontmatter.ageGroup === 'Adult')
                .map(({ node }) => (
                  <GridCard
                    time={`${node.frontmatter.day}s at ${
                      node.frontmatter.time
                    }`}
                    img={node.frontmatter.thumbnail}
                    header={node.frontmatter.title}
                    size={4}
                    ages="18 +"
                    level={node.frontmatter.difficulty}
                    key={node.frontmatter.title}
                    link={node.frontmatter.link}
                    text={node.html}
                  />
                ))}
            </Grid>
          </div>
        </section>
      );
    }}
  />
);

export default Classes;
