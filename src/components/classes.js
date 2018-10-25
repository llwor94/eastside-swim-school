import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid';

import GridCard from './gridCard';

import Logo from '../images/evelationlogo.png';
import PreSchool1 from '../assets/preschool1.jpg'
import PreSchool2 from '../assets/preschool2.jpg'
import PreSchool3 from '../assets/preschool3.jpg'
import Elementary1 from '../assets/elementary1.jpg'
import Elementary2 from '../assets/elementary 2.jpg'
import Elementary3 from '../assets/elementary3.jpg'
import AdvancedEl from '../assets/advancedelementary1.jpg'
import AdvancedEl2 from '../assets/advancedelementary2.jpg'
import Adult1 from '../assets/adult1.jpg'
import Adult2 from '../assets/MASTERS.jpg'
import Adult3 from '../assets/triathlon.jpg'

const Wrapper = styled.div`
	margin: 30px;
  
	padding-top: 10px;
  
	max-width: 960px;
	margin: 0 auto;
  margin-top: 100px;
`;

const GridWrapper = styled.div`margin: 3rem;`;

const Classes = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                testimonial
               }
              }
            }
          }
      }
    `}
    render={data => {console.log(data)
    return (
	<Wrapper name="classes">
		<h1>Group Classes</h1>
		<GridWrapper>
			<h2>PreSchool:</h2>

			<Grid container spacing={40} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
				<GridCard 
          img={PreSchool1} 
          header="Lizard" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque nisl nibh, mattis eget massa a, rhoncus viverra est. 
          Etiam et posuere ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos." 
          size={4} 
          />
				<GridCard 
          img={PreSchool2} 
          header="Lizard" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque nisl nibh, mattis eget massa a, rhoncus viverra est. 
          Etiam et posuere ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos." 
          size={4} 
          />
				<GridCard 
          img={PreSchool3} 
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
      <GridCard 
          img={Elementary1} 
          header="Lizard" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque nisl nibh, mattis eget massa a, rhoncus viverra est. 
          Etiam et posuere ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos." 
          size={4} 
          />
				<GridCard 
          img={Elementary2} 
          header="Lizard" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque nisl nibh, mattis eget massa a, rhoncus viverra est. 
          Etiam et posuere ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos." 
          size={4} 
          />
				<GridCard 
          img={Elementary3} 
          header="Lizard" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque nisl nibh, mattis eget massa a, rhoncus viverra est. 
          Etiam et posuere ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos." 
          size={4} 
          />
			</Grid>

			<h2>Elementary/JH:</h2>

			<Grid container spacing={40} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
				<GridCard 
          img={AdvancedEl} 
          header="Lizard" 
          size={6}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque nisl nibh, mattis eget massa a, rhoncus viverra est. 
          Etiam et posuere ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos." 
        />
				<GridCard 
          img={AdvancedEl2} 
          header="Lizard" 
          size={6}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque nisl nibh, mattis eget massa a, rhoncus viverra est. 
          Etiam et posuere ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos." 
        />
			</Grid>

			<h2>Adult:</h2>

			<Grid container spacing={40} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <GridCard 
          img={Adult1} 
          header="Lizard" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque nisl nibh, mattis eget massa a, rhoncus viverra est. 
          Etiam et posuere ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos." 
          size={4} 
          />
				<GridCard 
          img={Adult2} 
          header="Lizard" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque nisl nibh, mattis eget massa a, rhoncus viverra est. 
          Etiam et posuere ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos." 
          size={4} 
          />
				<GridCard 
          img={Adult3} 
          header="Lizard" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque nisl nibh, mattis eget massa a, rhoncus viverra est. 
          Etiam et posuere ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos." 
          size={4} 
          />
			</Grid>
		</GridWrapper>
	</Wrapper>
  )}}
  />
);

export default Classes;
