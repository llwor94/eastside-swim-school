import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import GridCard from './gridCard';

import Logo from '../images/evelationlogo.png';

const Wrapper = styled.div`
	margin: 3rem;
	padding-top: 2rem;
	max-width: 96rem;
	margin: 0 auto;
`;

const GridWrapper = styled.div`margin: 3rem;`;

const Classes = () => (
	<Wrapper name="classes">
		<h1>Group Classes</h1>
		<GridWrapper>
			<h2>PreSchool:</h2>

			<Grid container spacing={40} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
				<GridCard 
          img={Logo} 
          header="Lizard" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque nisl nibh, mattis eget massa a, rhoncus viverra est. 
          Etiam et posuere ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos." 
          size={4} 
          />
				<GridCard 
          img={Logo} 
          header="Lizard" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque nisl nibh, mattis eget massa a, rhoncus viverra est. 
          Etiam et posuere ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos." 
          size={4} 
          />
				<GridCard 
          img={Logo} 
          header="Lizard" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque nisl nibh, mattis eget massa a, rhoncus viverra est. 
          Etiam et posuere ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos." 
          size={4} 
          />
			</Grid>

			<h2>Grade School:</h2>

			<Grid container spacing={40} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
				<GridCard img={Logo} text="Lizard" size={4} />
				<GridCard img={Logo} text="Lizard" size={4} />
				<GridCard img={Logo} text="Lizard" size={4} />
			</Grid>

			<h2>Junior High/ High School:</h2>

			<Grid container spacing={40} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
				<GridCard img={Logo} text="Lizard" size={6} />
				<GridCard img={Logo} text="Lizard" size={6} />
			</Grid>

			<h2>Adult:</h2>

			<Grid container spacing={40} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
				<GridCard img={Logo} text="Lizard" size={4} />
				<GridCard img={Logo} text="Lizard" size={4} />
				<GridCard img={Logo} text="Lizard" size={4} />
			</Grid>
		</GridWrapper>
	</Wrapper>
);

export default Classes;
