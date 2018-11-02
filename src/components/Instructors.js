import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import styles from './Instructors.module.styl';

const BottomBar = ({ styles, link }) => (
	<div>
		<Typography variant="h6" component="h4" className={styles.mr} gutterBottom>
			Schedule Private Lessons
		</Typography>
		<div className={styles.bottomBar}>
			<Button
				variant="contained"
				color="primary"
				size="small"
				href={link}
				component="a"
				className={styles.mr}
				target="_blank"
			>
				1-on-1
			</Button>
			<Button variant="contained" color="primary" size="small" href={link} component="a" target="_blank">
				1-on-2
			</Button>
		</div>
	</div>
);

const Instructors = () => (
	<StaticQuery
		query={graphql`
			query {
				allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/coaches/" } }) {
					edges {
						node {
							html
							frontmatter {
								title
								oneStudent
								twoStudents
								thumbnail
								link
							}
						}
					}
				}
			}
		`}
		render={({ allMarkdownRemark }) => {
			// console.log(allMarkdownRemark);
			// const { classes } = props
			return (
				<section className={styles.instructors} id="coaches">
					<div className={styles.container}>
						<Typography gutterBottom variant="h2" component="h2">
							Private Lessons
						</Typography>
						<Paper className={styles.instructor}>
							<Grid container spacing={40}>
								{allMarkdownRemark.edges.map(
									(
										{
											node: {
												frontmatter: { thumbnail, title, oneStudent, twoStudents, link },
												html,
											},
										},
										idx,
									) => (
										<Grid className={styles.bottomLineWrapper} item xs={12} key={thumbnail}>
											<Grid container spacing={40} className={styles.bottomLine}>
												<Grid item className={styles.grow} xs={12} sm={7} md={8}>
													<div className={styles.wrapper}>
														<Typography gutterBottom variant="h5" component="h3">
															{title}
														</Typography>
														<Typography
															gutterBottom
															variant="body1"
															component="div"
															dangerouslySetInnerHTML={{ __html: html }}
														/>
														<BottomBar styles={styles} link={link} />
													</div>
												</Grid>
												<Grid
													item
													className={`${idx % 2 === 0 && styles.first} ${styles.pic}`}
													xs={12}
													sm={5}
													md={4}
												>
													<div className={styles.imgWrapper}>
														<img src={thumbnail} alt={title} className={styles.img} />
													</div>
												</Grid>
											</Grid>
										</Grid>
									),
								)}
							</Grid>
						</Paper>
					</div>
				</section>
			);
		}}
	/>
);

export default Instructors;
