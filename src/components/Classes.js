import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridCard from './GridCard';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import styles from './Classes.module.styl';

class Classes extends React.Component {
	state = {
		open: false,
	};
	render() {
		return (
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
										link
										ageGroup
										difficulty
										thumbnail
										classPeriods {
											classesCount
											dateRange {
												startDate
												endDate
											}
											days
											times {
												time
											}
										}
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
					console.log(allMarkdownRemark)
					return (
						<section className={styles.wrapper} name='classes'>
							<Dialog
								onClose={() => this.setState({ open: false })}
								aria-labelledby='customized-dialog-title'
								open={this.state.open}
							>
								<MuiDialogTitle disableTypography>
									<Typography variant='h6'>How To Register</Typography>

									<IconButton
										aria-label='Close'
										onClick={() => this.setState({ open: false })}
										style={{ position: 'absolute', top: 3, right: 3 }}
									>
										<CloseIcon />
									</IconButton>
								</MuiDialogTitle>
								<MuiDialogContent>
									<Typography gutterBottom variant='body1' component='p'>
										All registration is handled online through Wellness Living.
										You can access this directly or via our website.
									</Typography>
									<Typography gutterBottom variant='body1' component='p'>
										To register you will need to create an account. If you have
										more than one person from the same family taking lessons you
										do not need multiple accounts, simply add the names of the
										students to your profile.
									</Typography>
								</MuiDialogContent>
							</Dialog>
							<Typography variant='h2' component='h2' gutterBottom>
							Summer Sessions
								<Tooltip title='How to register' placement='top'>
									<IconButton onClick={() => this.setState({ open: true })}>
										<InfoIcon
											color='disabled'
											className={styles.icon}
											aria-label='How to register'
										/>
									</IconButton>
								</Tooltip>
							</Typography>
							
							<div className={styles.grid}>
								<Grid container spacing={40} alignItems='stretch'>
									{allMarkdownRemark.edges
										.filter(
											({ node }) => node.frontmatter.ageGroup === 'Preschool' && node.frontmatter.classPeriods,
										)
										.map(({ node }) => (
											<GridCard node={node} ages='3-5'/>
										))}
										</Grid>
										<Grid container spacing={40} alignItems='stretch'>
										{allMarkdownRemark.edges
										.filter(
											({ node }) => node.frontmatter.ageGroup === 'Grade School' 
										)
										.map(({ node }) => (
											<GridCard node={node} ages='5-12'/>
										))}
										{allMarkdownRemark.edges
										.filter(
											({ node }) => node.frontmatter.ageGroup === 'Baby' || node.frontmatter.title === 'Diving' 
										)
										.map(({ node }) => (
											<GridCard node={node} ages='up to 14 months'/>
										))}
										{/* {allMarkdownRemark.edges
										.filter(
											({ node }) => node.frontmatter.ageGroup === 'Grade School' 
										)
										.map(({ node }) => (
											<GridCard node={node} ages='5-12'/>
										))} */}
											{/* <GridCard
												time={'hi'
													// node.frontmatter.day ? (
													// 	`${node.frontmatter.day.slice(0, 3)} ${node
													// 		.frontmatter.time}`
													// ) : (
													// 	'We recommend private instruction.'
													// )
												}
												time2={
													node.frontmatter.time2 &&
													`${node.frontmatter.day2.slice(0, 3)} ${node
														.frontmatter.time2}`
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
												ages='5-12'
												text={node.html}
												color='ps'
											/>
										))}
								</Grid> */}

								{/* <Grid container spacing={40} className={styles.grid}>
									{allMarkdownRemark.edges
										.filter(
											({ node }) =>
												node.frontmatter.ageGroup === 'Grade School',
										)
										.map(({ node }) => (<div> */}
											{/* <GridCard
												time={`${node.frontmatter.day.slice(0, 3)} ${node
													.frontmatter.time}`}
												time2={
													node.frontmatter.time2 &&
													`${node.frontmatter.day2.slice(0, 3)} ${node
														.frontmatter.time2}`
												}
												time3={
													node.frontmatter.time3 &&
													`${node.frontmatter.day3.slice(0, 3)} ${node
														.frontmatter.time3}`
												}
												time4={
													node.frontmatter.time4 &&
													`${node.frontmatter.day4.slice(0, 3)} ${node
														.frontmatter.time4}`
												}
												img={allFile.edges.find(({ node: file }) => {
													return (
														file.childImageSharp.fluid.originalName ===
														node.frontmatter.thumbnail.split('/')[2]
													);
												})}
												header={node.frontmatter.title}
												level={node.frontmatter.difficulty}
												ages='5-12'
												key={node.frontmatter.title}
												link={node.frontmatter.link}
												text={node.html}
												color='gs'
											/>
										))}
								</Grid> */}

								{/* <Grid container spacing={40} className={styles.grid}>
									{allMarkdownRemark.edges
										.filter(
											({ node }) => node.frontmatter.ageGroup === 'Pre Comp',
										)
										.map(({ node }) => (
											<GridCard
												time={`${node.frontmatter.day.slice(0, 3)} ${node
													.frontmatter.time}`}
												time2={
													node.frontmatter.time2 &&
													`${node.frontmatter.day2.slice(0, 3)} ${node
														.frontmatter.time2}`
												}
												time3={
													node.frontmatter.time3 &&
													`${node.frontmatter.day3.slice(0, 3)} ${node
														.frontmatter.time3}`
												}
												img={allFile.edges.find(({ node: file }) => {
													return (
														file.childImageSharp.fluid.originalName ===
														node.frontmatter.thumbnail.split('/')[2]
													);
												})}
												header={node.frontmatter.title}
												ages='14 and under'
												level={node.frontmatter.difficulty}
												key={node.frontmatter.title}
												link={node.frontmatter.link}
												text={node.html}
												color='jh'
											/>
										))}
								</Grid>

								<Grid container spacing={40} className={styles.grid}>
									{allMarkdownRemark.edges
										.filter(({ node }) => node.frontmatter.ageGroup === 'Adult')
										.map(({ node }) => (
											<GridCard
												time={`${node.frontmatter.day.slice(0, 3)} ${node
													.frontmatter.time}`}
												time2={
													node.frontmatter.time2 &&
													`${node.frontmatter.day2.slice(0, 3)} ${node
														.frontmatter.time2}`
												}
												time3={
													node.frontmatter.time3 &&
													`${node.frontmatter.day3.slice(0, 3)} ${node
														.frontmatter.time3}`
												}
												img={allFile.edges.find(({ node: file }) => {
													return (
														file.childImageSharp.fluid.originalName ===
														node.frontmatter.thumbnail.split('/')[2]
													);
												})}
												header={node.frontmatter.title}
												ages='18 +'
												level={node.frontmatter.difficulty}
												key={node.frontmatter.title}
												link={node.frontmatter.link}
												text={node.html}
												color='ad'
											/> */}
										{/* ///)})} */}
								</Grid>
							</div>
						</section>
					);
				}}
			/>
		);
	}
}

export default Classes;
