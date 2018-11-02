import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import './Testimonials.styl';

const Testimonials = (props) => (
	<StaticQuery
		query={graphql`
			query {
				allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/testimonials/" } }) {
					edges {
						node {
							frontmatter {
								title
							}
							html
						}
					}
				}
			}
		`}
		render={({ allMarkdownRemark }) => {
			//console.log(allMarkdownRemark);
			// const { classes } = props
			return (
				<div className="Testimonials">
					<Typography variant="h2" component="h2" gutterBottom>
						Testimonials
					</Typography>
					<GridList className="grid-list">
						<div className="content-wrapper">
							{allMarkdownRemark.edges.map(({ node }) => (
								<Paper className="content active" key={node.frontmatter.title}>
									<Typography
										gutterBottom
										className="text"
										component="div"
										variant="subtitle1"
										dangerouslySetInnerHTML={{ __html: node.html }}
									/>
									<Typography variant="h6" className="right">
										- {node.frontmatter.title}
									</Typography>
								</Paper>
							))}
						</div>
					</GridList>
				</div>
			);
		}}
	/>
);

export default Testimonials;
