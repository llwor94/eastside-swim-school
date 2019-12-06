import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import Footer from './footer';

import '../styles/index.css';

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
			return (
				<>
					<Helmet
						title={data.site.siteMetadata.title}
						meta={[
							{ name: 'description', content: 'Swim School in Redmond' },
							{
								name: 'keywords',
								content:
									'swim, redmond, swimming, lessons, kids, woodinville, youth, adult, learn, instruction, woodinville, bothell, redmond, kirkland, eastside, school, bellevue, kenmore, snohomish, king, seattle, north, east, babies, toddler, instruction, triathlon, masters, class, video, analysis',
							},
						]}
					>
						<html lang="en" />
						<meta name="description" content={data.site.siteMetadata.description} />
						<link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap" rel="stylesheet"/>
						<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
						<link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet"/>
					</Helmet>
					<CssBaseline />
					<Header siteTitle={data.site.siteMetadata.title} />

					{children}
					<Footer />
					</>
			);
		}}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
