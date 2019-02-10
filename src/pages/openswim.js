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
	height: calc(100vh - 112px);

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
				<Typography gutterBottom variant='h4' component='h2'>
					Mondays 11:00 – 12:00
				</Typography>
				<Typography gutterBottom variant='h4' component='h2'>
					Mon / Wed 1:00 – 3:00
				</Typography>
				<Typography gutterBottom variant='h4' component='h2'>
					Saturday 2:00 – 4:00
				</Typography>
				<Typography gutterBottom variant='h4' component='h2'>
					Sunday 12:00 – 2:00
				</Typography>
				<Typography gutterBottom variant='h2' component='h1'>
					Seniors Only
				</Typography>
				<Typography gutterBottom variant='h4' component='h2'>
					Mon / Wed 10:00 – 11:00
				</Typography>
			</Paper>
		</Wrapper>
	</Layout>
);

export default OpenSwim;
