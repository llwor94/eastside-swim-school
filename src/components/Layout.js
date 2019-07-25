import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './footer';
import theme from '../styles/theme';

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`}
		render={(data) => {
			// console.log(data)
			return (
				<MuiThemeProvider theme={theme}>
					<Helmet
						title={data.site.siteMetadata.title}
						meta={[
							{ name: 'description', content: 'Swim School in Redmond' },
							{
								name: 'keywords',
								content:
									'swim, swimming, lessons, kids, woodinville, youth, adult, learn, instruction, woodinville, bothell, redmond, kirkland, eastside, school, bellevue, kenmore, snohomish, king, seattle, north, east, babies, toddler, instruction, triathlon, masters, class, video, analysis',
							},
						]}
					>
						<html lang="en" />
						<meta name="description" content={data.site.siteMetadata.description} />
						<link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet" />
						<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
						<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
					</Helmet>
					<CssBaseline />
					<Header siteTitle={data.site.siteMetadata.title} />

					{children}
					<Footer />
				</MuiThemeProvider>
			);
		}}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
