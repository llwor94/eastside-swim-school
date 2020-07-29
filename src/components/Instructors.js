import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import styles from './Instructors.module.styl';

import classesView from '../images/classesView.png';
import calendarView from '../images/calendarView.png';
import finishedView from '../images/finishedView.png';
import timeView from '../images/timeView.png';

const BottomBar = ({ styles, link }) => (
	<div>
		<Button
			variant='contained'
			href={link}
			component='a'
			className={styles.mr}
			target='_blank'
		>
			Schedule Private Lessons
		</Button>
	</div>
);

class Instructors extends React.Component {
	state = {
		open: false,
	};
	render() {
		return (
			<StaticQuery
				query={graphql`
					query {
						allMarkdownRemark(
							filter: { fileAbsolutePath: { regex: "/coaches/" } }
							sort: { fields: frontmatter___order }
						) {
							edges {
								node {
									html
									frontmatter {
										title
										oneStudent
										twoStudents
										thumbnail
										link
										order
									}
								}
							}
						}
					}
				`}
				render={({ allMarkdownRemark }) => {
					allMarkdownRemark.edges.sort((coachA, coachB) => {
						return parseInt(coachA.node.frontmatter.order) - parseInt(coachB.node.frontmatter.order)
					})

					return (
						<section className={styles.instructors} id='coaching'>
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
									<Typography gutterBottom variant='body1' component='p'>
										Booking for solo and pair private lessons is a done on a
										per-month basis. The day and time you select are yours for
										the entire month. You may also keep the same day and time
										for subsequent months.
									</Typography>
									<Typography gutterBottom variant='subtitle1' component='h2'>
										How to register for solo or pair private lessons:
									</Typography>
									<Typography gutterBottom variant='body1' component='p'>
										You must have an account created on the Wellness Living
										site. If you don’t already, you will be prompted during the
										registration process.
									</Typography>
									<Typography gutterBottom variant='body1' component='p'>
										Choose the instructor that you would like to work with and
										then click on the registration tab under their name. It will
										show “appointment booking” at the top of page. Find the
										instructor and click “privates” (these are the solo lessons)
										or “semi-privates” (these are the pair lessons) The price
										will be listed.
									</Typography>
									<img
										src={classesView}
										className={styles.modalImg}
										alt='Classes View'
									/>
									<Typography gutterBottom variant='body1' component='p'>
										Click “NEXT” on bottom right of page. This will take you to
										the calendar.
									</Typography>
									<Typography gutterBottom variant='body1' component='p'>
										Click forward to upcoming month and then find a day that is
										bolded. The non highlighted days denote that the instructor
										is not available.
									</Typography>
									<img
										src={calendarView}
										className={styles.modalImg}
										alt='Calendar View'
									/>
									<Typography gutterBottom variant='body1' component='p'>
										Select a day and the system will display the available
										times. Select a time.
									</Typography>
									<img
										src={timeView}
										className={styles.modalImg}
										alt='Time View'
									/>
									<Typography gutterBottom variant='body1' component='p'>
										Please start with a day at the beginning of the month. Once
										you have made your selection this day and time is locked in
										for you personally for the rest of the month. You may also
										keep this day and time for subsequent months.
									</Typography>
									<Typography gutterBottom variant='body1' component='p'>
										Make sure the “Book Recurring” option is switched to “On.”
									</Typography>
									<Typography gutterBottom variant='body1' component='p'>
										For the “Repeats Every” dropdowns select “1” and “Week.”,
										and ensure the day of the week you selected on the calendar
										is selected.
									</Typography>
									<Typography gutterBottom variant='body1' component='p'>
										For the “Ends” option, ensure “On Date” is selected. Click
										on the Calendar Icon and select the end of the current month
										or a subsequent month (up to three).
									</Typography>
									<img
										src={finishedView}
										className={styles.modalImg}
										alt='Finished View'
									/>
								</MuiDialogContent>
							</Dialog>
							<div className={styles.container}>
								<Paper className={styles.instructor}>
									<div className={styles.bline}>
										<Typography gutterBottom variant='h2' component='h2'>
											Private Lessons
											<Tooltip title='How to register' placement='top'>
												<IconButton
													onClick={() => this.setState({ open: true })}
												>
													<InfoIcon
														color='disabled'
														className={styles.icon}
														aria-label='How to register'
													/>
												</IconButton>
											</Tooltip>
										</Typography>
									</div>

									<Grid container spacing={40}>
										{allMarkdownRemark.edges.map(
											(
												{
													node: {
														frontmatter: {
															thumbnail,
															title,

															link,
														},
														html,
													},
												},
												idx,
											) => (
												<Grid
													key={title}
													className={styles.bottomLineWrapper}
													item
													xs={12}
												>
													<Grid
														container
														spacing={40}
														className={styles.bottomLine}
													>
														<Grid
															item
															className={styles.grow}
															xs={12}
															sm={7}
															md={8}
														>
															<div className={styles.wrapper}>
																<Typography
																	gutterBottom
																	variant='h5'
																	component='h3'
																>
																	{title}
																</Typography>
																<Typography
																	gutterBottom
																	variant='body1'
																	component='div'
																	dangerouslySetInnerHTML={{
																		__html: html,
																	}}
																/>
																<BottomBar
																	styles={styles}
																	link={link}
																/>
															</div>
														</Grid>
														<Grid
															item
															className={`${idx % 2 === 0 &&
																styles.first} ${styles.pic}`}
															xs={12}
															sm={5}
															md={4}
														>
															<div className={styles.imgWrapper}>
																<img
																	src={thumbnail}
																	alt={title}
																	className={styles.img}
																/>
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
	}
}

export default Instructors;
