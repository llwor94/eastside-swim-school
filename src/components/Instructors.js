import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styles from './Instructors.module.styl';

const BottomBar = ({ styles, link }) => (
  <div>
    <Button
      variant="contained"
      color="secondary"
      href={link}
      component="a"
      className={styles.mr}
      target="_blank"
    >
      Schedule Private Lessons
    </Button>
  </div>
);

const Instructors = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/coaches/" } }
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                oneStudent
                twoStudents
                thumbnail
                link
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => {
      // console.log(allMarkdownRemark);
      // const { classes } = props
      allMarkdownRemark.edges.sort(
        (
          {
            node: {
              frontmatter: { title: title1 },
            },
          },
          {
            node: {
              frontmatter: { title: title2 },
            },
          },
        ) => {
          if (title1 === 'Lisa') return -1;
          if (title2 === 'Lisa') return 1;

          return title1.localeCompare(title2);
        },
      );
      return (
        <section className={styles.instructors} name="coaches">
          <div className={styles.container}>
            <Paper className={styles.instructor}>
              <div className={styles.bline}>
                <Typography gutterBottom variant="h2" component="h2">
                  Private Lessons
                </Typography>
              </div>

              <Grid container spacing={40}>
                {allMarkdownRemark.edges.map(
                  (
                    {
                      node: {
                        frontmatter: {
                          thumbnail,
                          title,
                          oneStudent,
                          twoStudents,
                          link,
                        },
                        html,
                      },
                    },
                    idx,
                  ) => (
                    <Grid className={styles.bottomLineWrapper} item xs={12}>
                      <Grid
                        container
                        spacing={40}
                        className={styles.bottomLine}
                      >
                        <Grid
                          item
                          className={styles.grow}
                          xs={12}
                          sm={7}
                          md={8}
                        >
                          <div className={styles.wrapper}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h3"
                            >
                              {title}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="body1"
                              component="div"
                              dangerouslySetInnerHTML={{ __html: html }}
                            />
                            <BottomBar styles={styles} link={link} />
                          </div>
                        </Grid>
                        <Grid
                          item
                          className={`${idx % 2 === 0 && styles.first} ${
                            styles.pic
                          }`}
                          xs={12}
                          sm={5}
                          md={4}
                        >
                          <div className={styles.imgWrapper}>
                            <img
                              src={thumbnail}
                              alt={title}
                              className={styles.img}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  ),
                )}
              </Grid>
            </Paper>
          </div>
        </section>
      );
    }}
  />
);

export default Instructors;

