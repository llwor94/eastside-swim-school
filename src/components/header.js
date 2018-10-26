import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Logo from '../images/logo.png';
import { flex } from '../styles/mixins';

const Wrapper = styled.div`
	background: transparent;
	position: absolute;
	margin: 0 auto;
	padding: 10px 0;
	height: 7vh;
	width: 100%;
	z-index: 100;
	${flex('row', 'space-between', 'center')};
	img {
		margin: 0;
		max-width: 100px;
	}
`;

const Header = () => (
	<Wrapper>
		<Link to="/">
			<img src={Logo} />
		</Link>
		<div>
			<Link to="#coaches">Private Lessons</Link>
			<Link to="#classes">Group Classes</Link>
			<Link to="/about">About</Link>
		</div>
	</Wrapper>
);

export default Header;
