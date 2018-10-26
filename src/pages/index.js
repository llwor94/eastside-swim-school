import React from 'react'
import Layout from '../components/layout'

import Jumbotron from '../components/jumbotron'
import Classes from '../components/classes'
import Instructors from '../components/instructors'

const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <Classes />
    <Instructors />
  </Layout>
)

export default IndexPage
