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

const Services = props => {
	return (
		<Layout>
			<Wrapper>
				<Paper className='faq'>
					<Typography gutterBottom variant='h2' component='h1'>
						What We Offer
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Lessons
					</Typography>
					<Typography gutterBottom variant='body1' component='p'>
						Eastside Swim School specializes in private classes of one or two students
						at a time. We feel that the best way to develop sound swimming technique for
						anything from basic safety to triathlon-level competition, from toddler to
						senior-citizen, is to have the devoted attention of a qualified
						professional. We offer larger classes of three to four students as needed.
						Our instructors have decades of teaching experience and are proud parents
						themselves.
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Adult Learn To Swim
					</Typography>
					<Typography gutterBottom variant='body1' component='p'>
						It’s never too late to learn to swim. Eastside Swim School offers
						instruction to adults who have little to no in-water experience as well as
						adults who simply want to improve. Whether you want to simply learn to keep
						your head above the water or brush up on your breaststroke our instructors
						will help you achieve your goals.
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Pre-Competition Swim Team
					</Typography>
					<Typography gutterBottom variant='body1' component='p'>
						Eastside Swim School offers beginner swimmers the opportunity to get
						prepared for more advanced swim teams. We coach pre-comp swimmers in all 4
						swimming strokes as well as flip turns and other swim team basics. We offer
						both a beginner level and a more advanced level for those swimmers that may
						be seeking additional personal help with their technique.
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Advanced Swim Technique and Triathlon Classes
					</Typography>
					<Typography gutterBottom variant='body1' component='p'>
						Eastside Swim School features instructors who are certified and trained in
						Triathlon Coaching and advanced swimming techniques. Using high resolution
						underwater cameras we can break down a swimmer’s stroke in granular detail
						to achieve peak speed and efficiency.
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Seniors and Disabled
					</Typography>
					<Typography gutterBottom variant='body1' component='p'>
						Pools that are appropriate for competition-level instruction are rarely
						accessible but ours is. It features a ramped entry and can also be brought
						to 87 degrees for comfort.
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Open Swim
					</Typography>
					<Typography gutterBottom variant='body1' component='p'>
						Splish, splash! Jump in and have fun during our unprogrammed hours.
					</Typography>
					<Typography gutterBottom variant='h5' component='h2'>
						Pool Rental
					</Typography>
					<Typography gutterBottom variant='body1' component='p'>
						We offer pool rental for groups and parties. Contact us at 425-248-0908 to
						make an appointment.
					</Typography>
				</Paper>
			</Wrapper>
		</Layout>
	);
};

export default Services;