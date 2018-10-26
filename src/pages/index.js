import React from 'react';
import Layout from '../components/layout';

import Jumbotron from '../components/Jumbotron';
import Classes from '../components/Classes';
import Instructors from '../components/Instructors';

const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <Classes />
    <Instructors />
  </Layout>
);

export default IndexPage;
