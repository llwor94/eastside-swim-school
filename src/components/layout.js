import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './header';

const theme = {
	shamrock: '#7cba5a',
};

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: @grey-dark;
    padding: 0 3rem;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    font-size: 1.5rem;
    color: ${(props) => props.theme.shamrock};
    font-weight: 700;
    padding: 1rem;
  }
`;

const LayoutWrapper = styled.div`margin: 0 auto;`;

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={(data) => (
			<ThemeProvider theme={theme}>
				<div>
					<Helmet
						title={data.site.siteMetadata.title}
						meta={[
							{ name: 'description', content: 'Sample' },
							{ name: 'keywords', content: 'sample, something' },
						]}
					>
						<html lang="en" />
						<link
							href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i"
							rel="stylesheet"
						/>
						<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
						<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
					</Helmet>

					<Header siteTitle={data.site.siteMetadata.title} />

					<GlobalStyle />
					<LayoutWrapper>{children}</LayoutWrapper>
				</div>
			</ThemeProvider>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
