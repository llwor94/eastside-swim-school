import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './header';


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
		render={(data) => {
      console.log(data)
    return (
			
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
          <CssBaseline />
					<Header siteTitle={data.site.siteMetadata.title} />

					
					<LayoutWrapper>{children}</LayoutWrapper>
				</div>
		
		)}}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
