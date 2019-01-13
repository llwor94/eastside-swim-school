import React from 'react';
import Layout from '../components/Layout';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

import Map from '../components/Map';
const Wrapper = styled.div`
	margin: 0 30px;
	padding-top: 20px;
	max-width: 880px;
	margin: 0 auto;
	display: flex;
	margin-bottom: 100px;
	@media (max-width: 700px) {
		flex-direction: column-reverse;
		width: 100%;
	}
	.location-page {
		padding: 30px;
		display: flex;
		width: 40%;
		flex-direction: column;
		justify-content: center;
		@media (max-width: 700px) {
			width: 100%;
		}
	}
`;
const LocationPage = () => (
	<Layout>
		<Typography
			gutterBottom
			variant='h2'
			component='h2'
			style={{ paddingTop: '100px', maxWidth: '880px', margin: '0 auto' }}
		>
			Location
		</Typography>

		<Wrapper>
			<Paper className='location-page'>
				<Typography gutterBottom variant='h6' component='h2'>
					Willows Prep:
				</Typography>

				<Typography variant='subtitle1'>
					The Willows Prep Pool is located on the campus of the Willows Preparatory School
				</Typography>

				<Typography gutterBottom variant='body1' component='p'>
					(1.5 miles from the South of Hollywood Schoolhouse on Woodinville Redmond Road
					the former property of Washington Cathedral)
				</Typography>

				<Typography gutterBottom variant='body1' component='p'>
					*The pool is located in the North East corner of the two story brick colored
					building with the blue roof.
				</Typography>

				<Typography variant='subtitle1'>
					12280 Redmond-Woodinville Rd. NE<br />
					Redmond, WA 98052
				</Typography>
			</Paper>

			<Map />
		</Wrapper>
	</Layout>
);

export default LocationPage;
