import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import Layout from '../components/layout';

import Jumbotron from '../components/jumbotron';
import Classes from '../components/classes';
import Instructors from '../components/instructors';

// const Main = styled.div`
// 	margin: 20px;
// 	height: 100vh;
// `;

const IndexPage = () => (
	<Layout>
		<Jumbotron />
		<Classes />
		<Instructors />
	</Layout>
);

export default IndexPage;
