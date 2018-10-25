import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Logo from '../images/evelationlogo.png';
import { flex } from '../styles/mixins';

const Wrapper = styled.div`
	background: white;
	margin: 0 auto;
	padding: 10px 0;
	height: 7vh;
	${flex('row', 'space-between', 'center')};
	img {
		margin: 0;
		max-width: 100px;
	}
`;

const Header = ({ siteTitle }) => (
	<Wrapper>
		<Link to="/">
			<img src={Logo} />
		</Link>
		<div>
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
		</div>
	</Wrapper>
);

export default Header;
