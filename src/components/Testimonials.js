import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const Testimonials = (props) => (
	<StaticQuery
		query={graphql`
			query {
				allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/testimonial/" } }) {
					edges {
						node {
							frontmatter {
								title
								testimonial
							}
						}
					}
				}
			}
		`}
		render={({ allMarkdownRemark }) => {
			console.log(allMarkdownRemark);
			// const { classes } = props
			return (
				<div>
					<Typography variant="h2" component="h2">
						Testimonials
					</Typography>
					<Grid
						container
						spacing={40}
						style={{
							marginTop: '2rem',
							marginBottom: '2rem',
							justifyContent: 'center',
						}}
					>
						{allMarkdownRemark.edges.map(({ node }) => (
							<Grid item md={5} key={node.frontmatter.title}>
								<Card>
									<CardActionArea>
										<CardContent>
											<Typography component="p" variant="subtitle1">
												{node.frontmatter.testimonial}
											</Typography>
											<Typography gutterBottom variant="title" component="h3">
												-{node.frontmatter.title}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			);
		}}
	/>
);

export default Testimonials;
