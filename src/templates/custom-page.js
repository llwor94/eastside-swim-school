import React from 'react';
import Layout from '../components/Layout';
import styles from './index.module.styl';

export default () => {
  return (
    <Layout>
      <div className={styles.wrapper}>Hello blog post</div>
    </Layout>
  );
};
