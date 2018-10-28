import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styles from './Instructors.module.styl';

const Instructors = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/coach-dummy/" } }
        ) {
          edges {
            node {
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
      return (
        <section className={styles.instructors} name="coaches">
          <div className={styles.container}>
            <Typography gutterBottom variant="h2" component="h2">
              Private Lessons
            </Typography>
            <Grid container spacing={16}>
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
                    },
                  },
                  idx,
                ) => (
                  <Grid item xs={12}>
                    <Paper className={styles.instructor}>
                      <Grid container wrap="nowrap" spacing={40}>
                        <Grid item className={styles.grow} md="auto">
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
                              component="p"
                            >
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Itaque odio architecto nam
                              similique ratione! Non distinctio doloribus
                              blanditiis placeat soluta numquam consequuntur qui
                              totam possimus earum! Veniam quaerat velit
                              provident. Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Quae eum, in velit praesentium
                              quibusdam dolor. Tempore provident ad in
                              aspernatur minima corrupti repellat delectus ex
                              voluptates quas illum, sapiente sequi? Lorem ipsum
                              dolor sit, amet consectetur adipisicing elit. Odit
                              perferendis excepturi nostrum, porro recusandae
                              exercitationem soluta quaerat magnam voluptatem,
                              consectetur pariatur quidem facilis laboriosam sit
                              ipsam, animi atque provident? Suscipit!
                            </Typography>
                          </div>
                        </Grid>
                        <Grid
                          item
                          className={idx % 2 === 0 && styles.first}
                          md="auto"
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
                      <div className={styles.bottomBar}>
                        <Typography
                          variant="h6"
                          component="h4"
                          className={styles.mr}
                        >
                          Schedule Private Lessons
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          href={link}
                          component="a"
                          className={styles.mr}
                          target="_blank"
                        >
                          1-on-1
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          size="large"
                          href={link}
                          component="a"
                          target="_blank"
                        >
                          1-on-2
                        </Button>
                      </div>
                    </Paper>
                  </Grid>
                ),
              )}
            </Grid>
          </div>
        </section>
      );
    }}
  />
);

export default Instructors;
