import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridCard from './GridCard';
import styles from './Classes.module.styl';

const Classes = () => (
	<StaticQuery
		query={graphql`
			query {
				allMarkdownRemark(
					filter: { fileAbsolutePath: { regex: "/classes/" } }
					sort: { fields: frontmatter___difficulty }
				) {
					edges {
						node {
							html
							frontmatter {
								title
								time
								day
								time2
								day2
								time3
								day3
								ageGroup
								difficulty
								thumbnail
								link
							}
						}
					}
				}
				allFile(filter: { sourceInstanceName: { regex: "/cms/" } }) {
					edges {
						node {
							childImageSharp {
								fluid(maxWidth: 1200, jpegProgressive: true) {
									srcSet
									src
									sizes
									originalName
								}
							}
						}
					}
				}
			}
		`}
		render={({ allMarkdownRemark, allFile }) => {
			// console.log(allMarkdownRemark)

			return (
				<section className={styles.wrapper} name="classes">
					<Typography variant="h2" component="h2">
						Group Classes
					</Typography>
					<div className={styles.grid}>
						<Grid container spacing={40} alignItems="stretch">
							{allMarkdownRemark.edges
								.filter(({ node }) => node.frontmatter.ageGroup === 'Preschool')
								.map(({ node }) => (
									<GridCard
										time={
											node.frontmatter.day ? (
												`${node.frontmatter.day}s at ${node.frontmatter.time}`
											) : (
												'We recommend private instruction.'
											)
										}
										time2={
											node.frontmatter.time2 &&
											`${node.frontmatter.day2}s at ${node.frontmatter.time2}`
										}
										key={node.frontmatter.title}
										img={allFile.edges.find(({ node: file }) => {
											return (
												file.childImageSharp.fluid.originalName ===
												node.frontmatter.thumbnail.split('/')[2]
											);
										})}
										header={node.frontmatter.title}
										level={node.frontmatter.difficulty}
										link={node.frontmatter.link}
										ages="3-5"
										text={node.html}
										color="ps"
									/>
								))}
						</Grid>

						<Grid container spacing={40} className={styles.grid}>
							{allMarkdownRemark.edges
								.filter(({ node }) => node.frontmatter.ageGroup === 'Grade School')
								.map(({ node }) => (
									<GridCard
										time={`${node.frontmatter.day}s at ${node.frontmatter.time}`}
										time2={
											node.frontmatter.time2 &&
											`${node.frontmatter.day2}s at ${node.frontmatter.time2}`
										}
										time3={
											node.frontmatter.time3 &&
											`${node.frontmatter.day3}s at ${node.frontmatter.time3}`
										}
										img={allFile.edges.find(({ node: file }) => {
											return (
												file.childImageSharp.fluid.originalName ===
												node.frontmatter.thumbnail.split('/')[2]
											);
										})}
										header={node.frontmatter.title}
										level={node.frontmatter.difficulty}
										ages="5-12"
										key={node.frontmatter.title}
										link={node.frontmatter.link}
										text={node.html}
										color="gs"
									/>
								))}
						</Grid>

						<Grid container spacing={40} className={styles.grid}>
							{allMarkdownRemark.edges
								.filter(({ node }) => node.frontmatter.ageGroup === 'Jr. High')
								.map(({ node }) => (
									<GridCard
										time={`${node.frontmatter.day}s at ${node.frontmatter.time}`}
										time2={
											node.frontmatter.time2 &&
											`${node.frontmatter.day2}s at ${node.frontmatter.time2}`
										}
										time3={
											node.frontmatter.time3 &&
											`${node.frontmatter.day3}s at ${node.frontmatter.time3}`
										}
										img={allFile.edges.find(({ node: file }) => {
											return (
												file.childImageSharp.fluid.originalName ===
												node.frontmatter.thumbnail.split('/')[2]
											);
										})}
										header={node.frontmatter.title}
										ages="14 and under"
										level={node.frontmatter.difficulty}
										key={node.frontmatter.title}
										link={node.frontmatter.link}
										text={node.html}
										color="jh"
									/>
								))}
						</Grid>

						<Grid container spacing={40} className={styles.grid}>
							{allMarkdownRemark.edges
								.filter(({ node }) => node.frontmatter.ageGroup === 'Adult')
								.map(({ node }) => (
									<GridCard
										time={`${node.frontmatter.day}s at ${node.frontmatter.time}`}
										time2={
											node.frontmatter.time2 &&
											`${node.frontmatter.day2}s at ${node.frontmatter.time2}`
										}
										time3={
											node.frontmatter.time3 &&
											`${node.frontmatter.day3}s at ${node.frontmatter.time3}`
										}
										img={allFile.edges.find(({ node: file }) => {
											return (
												file.childImageSharp.fluid.originalName ===
												node.frontmatter.thumbnail.split('/')[2]
											);
										})}
										header={node.frontmatter.title}
										ages="18 +"
										level={node.frontmatter.difficulty}
										key={node.frontmatter.title}
										link={node.frontmatter.link}
										text={node.html}
										color="ad"
									/>
								))}
						</Grid>
					</div>
				</section>
			);
		}}
	/>
);

export default Classes;
