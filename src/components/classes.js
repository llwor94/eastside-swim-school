import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';

import GridCard from './gridCard';

import Logo from '../images/evelationlogo.png';
import PreSchool1 from '../assets/preschool1.jpg';
import PreSchool2 from '../assets/preschool2.jpg';
import PreSchool3 from '../assets/preschool3.jpg';
import Elementary1 from '../assets/elementary1.jpg';
import Elementary2 from '../assets/elementary 2.jpg';
import Elementary3 from '../assets/elementary3.jpg';
import AdvancedEl from '../assets/advancedelementary1.jpg';
import AdvancedEl2 from '../assets/advancedelementary2.jpg';
import Adult1 from '../assets/adult1.jpg';
import Adult2 from '../assets/MASTERS.jpg';
import Adult3 from '../assets/triathlon.jpg';

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
							internal {
								content
							}
							frontmatter {
								title
								time
								day
								ageGroup
								difficulty
								thumbnail
								link
							}
						}
					}
				}
			}
		`}
		render={(data) => {
			// let PreKind = data.allMarkdownRemark.edges.filter(node => node.node.frontmatter.ageGroup === 'Preschool');
			// console.log(PreKind)

			return (
				<Wrapper name="classes">
					<h1>Group Classes</h1>
					<GridWrapper>
						<Grid container spacing={40} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
							{data.allMarkdownRemark.edges
								.filter((node) => node.node.frontmatter.ageGroup === 'Preschool')
								.map((node) => (
									<GridCard
										img={node.node.frontmatter.thumbnail}
										header={node.node.frontmatter.title}
										text={node.node.internal.content}
										size={4}
										ages="3-5"
									/>
								))}
						</Grid>

						<Grid container spacing={40} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
							{data.allMarkdownRemark.edges
								.filter((node) => node.node.frontmatter.ageGroup === 'Grade School')
								.map((node) => (
									<GridCard
										img={node.node.frontmatter.thumbnail}
										header={node.node.frontmatter.title}
										text={node.node.internal.content}
										size={4}
										ages="5-12"
									/>
								))}
						</Grid>

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
			);
		}}
	/>
);

export default Classes;
