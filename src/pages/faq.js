import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
const Wrapper = styled.div`
	margin: 0 30px;
	padding-top: 100px;
	max-width: 880px;
	margin: 0 auto;
	.faq {
		padding: 30px;
	}
	h2 {
		margin-top: 30px;
		color: #909090;
	}
	p {
		color: black;
	}
	@media (max-width: 700px) {
		padding-top: 50px;
	}
`;

const PricesWrapper = styled.div`
	margin-left: 10px;
	h2 {
		font-size: 16px;
		margin-top: 15px;
	}
`;

const Faq = props => {
	return (
		<Layout>
			<Wrapper>
				<Paper className='faq'>
					<Typography gutterBottom variant='h2' component='h1'>
						Frequently Asked Questions
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Lesson Schedule
					</Typography>

					<Typography gutterBottom variant='body1' component='p'>
						Swim lessons are once a week for thirty minutes.
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Ages
					</Typography>
					<Typography gutterBottom variant='body1' component='p'>
						Adult or child, if you’re older than 6 months we can improve your swimming.
						For children we offer a Water Babies program in which parents are involved.
						For senior-citizens we offer a ramped entry and comfortable water
						temperature. For everyone in between, our advanced instructors can up your
						game.
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Prices
					</Typography>
					<PricesWrapper>
						<Typography gutterBottom variant='h6' component='h2'>
							Group:
						</Typography>
						<Typography gutterBottom variant='body1' component='p'>
							Classes average $25 a class or $100 a month.
						</Typography>
						<Typography gutterBottom variant='h6' component='h2'>
							One instructor, one student:
						</Typography>
						<Typography gutterBottom variant='body1' component='p'>
							These vary by instructor and range from $45 - $50 per class.
						</Typography>
						<Typography gutterBottom variant='h6' component='h2'>
							One instructor, two students:
						</Typography>
						<Typography gutterBottom variant='body1' component='p'>
							These are for siblings or friends and are $35 per student. We do not
							arrange the pairings.
						</Typography>
						<Typography gutterBottom variant='h6' component='h2'>
							Willows Prep Student Discount
						</Typography>
						<Typography gutterBottom variant='body1' component='p'>
							Our host facility provides its students a 15% discount on all classes.
						</Typography>
					</PricesWrapper>
					<Typography gutterBottom variant='h5' component='h2'>
						Registration/Member Fee
					</Typography>
					<Typography gutterBottom variant='body1' component='p'>
						There is no registration or monthly membership fee at Eastside Swim School.
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Makeup Policy
					</Typography>
					<Typography gutterBottom variant='body1' component='p'>
						We cannot provide credit for missed classes.
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Assigned Instructors
					</Typography>
					<Typography gutterBottom variant='body1' component='p'>
						We do our best to keep your child with the instructor they’ve become
						comfortable with but we must reserve the prerogative to use a substitute
						teacher on an occasional basis.
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Discontinued Lessons
					</Typography>
					<Typography gutterBottom variant='body1' component='p'>
						If you wish to discontinue lessons for the following month, for any reason,
						notice is required at least 10 days before the end of the month. This means
						that if you wish to stop swim lessons in May notice is required before April
						20th. All suspensions will begin on the first day of the following month.
						There are no mid-month suspensions.
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Further Questions?
					</Typography>
					<Typography gutterBottom variant='body1' component='p'>
						Please call Eastside Swim School at 425-248-0908
					</Typography>
				</Paper>
			</Wrapper>
		</Layout>
	);
};

export default Faq;
