import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import Layout from '../components/layout';

import Jumbotron from '../components/jumbotron';
import Classes from '../components/classes';

const Main = styled.div`
	margin: 20px;
	height: 100vh;
`;

const IndexPage = () => (
	<Layout>
		<Jumbotron />
		<Classes name="classes" />
	</Layout>
);

export default IndexPage;
