import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import Layout from '../components/layout';
import Swimmer from '../images/swimmer.png';
import { moveInLeft, moveInRight } from '../styles/keyframes';
import { flex } from '../styles/mixins';

const Wrapper = styled.div`
	height: 90vh;
	background-image: linear-gradient(
			27deg,
			rgba(124, 186, 90, 0.8) 0%,
			rgba(5, 130, 126, 0.8) 79%,
			rgba(0, 128, 128, 0.8) 83%
		),
		url(${Swimmer});
	background-size: cover;
	background-position: center;
	${flex('column', 'center', 'center')};
	clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

const TextBox = styled.h1`
	color: white;
	text-transform: uppercase;
	${flex('column')};
	margin-bottom: 5rem;
`;

const Text = styled.span`
	font-size: ${(props) => (props.sub ? '3.1rem' : '6.3rem')};
	font-weight: ${(props) => (props.sub ? '700' : '400')};
	letter-spacing: ${(props) => (props.sub ? '2.5rem' : '2.7rem')};
	animation: ${moveInLeft} 1s ease-out;
`;

const Button = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    border: .1rem solid white;
    position: relative;
    font-size: 1.6rem;
    color: white;
    background: ${(props) => props.theme.shamrock};

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
    }
`;

const IndexPage = () => (
	<Layout>
		<Wrapper>
			<TextBox>
				<Text>Eastside</Text>
				<Text sub>Swim School</Text>
			</TextBox>

			<Button to="/page-2/">Jump In!</Button>
		</Wrapper>
	</Layout>
);

export default IndexPage;
