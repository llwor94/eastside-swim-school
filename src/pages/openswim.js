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
	text-align: center;

	.faq {
		padding: 30px;
	}
	h1 {
		padding-top: 20px;
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

const OpenSwim = props => (
	<Layout>
		<Wrapper>
			<Paper className='faq'>
				<Typography gutterBottom variant='h2' component='h1'>
					Open Swim
				</Typography>
				<Typography gutterBottom variant='h5' component='h5'>
					 <b>single swim:</b> 18+ - 7$ | youth/senior - 5$ | 2 and under - free 
				</Typography>
				<Typography gutterBottom variant='h5' component='h5'>
					 <b>5 punch swim pass:</b> 18+ - 30$ | youth/senior - 20$
				</Typography>
				<Typography gutterBottom variant='h4' component='h2'>
					Monday-Thursday:
				</Typography>
				<Typography gutterBottom variant='h5' component='h2'>
					11:30 - 1:00
				</Typography>
				<Typography gutterBottom variant='h4' component='h2'>
					Saturday/Sunday:
				</Typography>
				<Typography gutterBottom variant='h5' component='h2'>
					11:30 – 1:00
				</Typography>
				<Typography gutterBottom variant='h5' component='h2'>
					2:00 - 4:00
				</Typography>
				<Typography gutterBottom variant='h2' component='h1'>
					Adult Swim
				</Typography>
				<Typography gutterBottom variant='h4' component='h2'>
					Monday-Thursday:
				</Typography>
				<Typography gutterBottom variant='h5' component='h2'>
					10:00 AM - 11:00 AM
				</Typography>
				
			</Paper>
		</Wrapper>
	</Layout>
);

export default OpenSwim;
