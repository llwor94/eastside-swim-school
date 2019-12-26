import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import styles from './index.module.styl';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default ({data}) => {
  console.log(data);
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Paper>
          <Typography style={{color: 'rgba(0, 0, 0, 0.87)', textTransform: "capitalize"}} gutterBottom variant='h2' component='h1'>
            {data.markdownRemark.frontmatter.title}
          </Typography>
          <div className={styles.paper} dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
        </Paper>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
