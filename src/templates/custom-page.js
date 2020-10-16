import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import styles from './index.module.styl';
import Paper from "@material-ui/core/Paper";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


export default ({data}) => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Paper>
          <h1>
            {data.contentfulPage.title}
          </h1>
          <div className={styles.paper}>
            {documentToReactComponents(data.contentfulPage.body.json)}
          </div>
        </Paper>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      body {
        json
      }
    }
  }
`;
