import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	background-color: black;
	color: white;

	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Footer = () => (
	<Wrapper>
		Made by <a href="http://www.cooltable.io">Cool Table</a>
	</Wrapper>
);

export default Footer;
