import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/Layout';
import Lisa from '../images/lisa.png';
import { StaticQuery, graphql } from 'gatsby';

const Wrapper = styled.div`
	margin: 0 30px;
	padding-top: 100px;
	max-width: 880px;
	margin: 0 auto;
	display: flex;
	align-items: flex-start;

	img {
		display: block;
		width: 100%;
		border-radius: 0 3px 0 0;
	}

	.about-contact {
		margin-right: 30px;
		margin-top: calc(50vh + 30px);
		padding: 30px;
		width: 100%;
	}
`;

const TextWrapper = styled.div`
	padding: 30px;
	text-align: justify;
`;

const BgImg = styled.img`
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	height: 450px;
	object-fit: cover;
	z-index: -1;
	filter: blur(5px) saturate(25%);
`;

const About = () => (
	<Layout>
		<StaticQuery
			query={graphql`
				{
					file(name: { eq: "about-bg" }) {
						name
						childImageSharp {
							fluid(maxWidth: 1800) {
								sizes
								src
								srcSet
							}
						}
					}
				}
			`}
			render={({ file: { childImageSharp: { fluid: { sizes, src, srcSet } }, name } }) => {
				return <BgImg src={src} srcSet={srcSet} sizes={sizes} alt={name} />;
			}}
		/>

		<Wrapper>
			<Paper className='about-contact'>
				<Typography variant='h4' gutterBottom>
					Contact
				</Typography>
				<Typography variant='body1' component='p'>
					Call: (425)-248-0908
				</Typography>
				<Typography variant='body1' component='p'>
					Email: eastsideswimschool@comcast.net
				</Typography>
			</Paper>
			<Paper className='about-content'>
				<TextWrapper>
					<Typography gutterBottom variant='h2' component='h2'>
						Lisa Worthington
					</Typography>
					<img src={Lisa} alt='' />
					<Typography gutterBottom variant='body1' component='div'>
						<p>
							Lisa is the business owner, swim instructor and triathlon coach. She has
							been teaching swim lessons for over 30 years and competing in triathlons
							of all distances for 25 years . Lisa learned to swim at a young age,
							competed thru the collegiate level and has continued swimming
							competitively thru her adult life.
						</p>
						<p>
							Lisa has grown up with a passion for the water and teaching others how
							to swim. She love to teach the new beginner and watch them advance. She
							has grown Eastside Swim school and hired additional professional
							instructors to teach under the “eastside style”.
						</p>
						<p>
							Lisa has raised two children, volunteered in classrooms and taught
							children swimming, and loves kids! She is comfortable with babies, and
							kids of all ages and abilities.
						</p>
						<p>
							Lisa has tremendous experience with the advanced level swimmer. She has
							experience with age group coaching, Masters swimming as well as
							triathlon specific swimming. Lisa offers a wide array of services for
							the advanced swimmer, she utilizes an underwater camera to analyze and
							correct a swimmers stroke and technique.
						</p>
						<p>
							Lisa is currently the head triathlon coach for the University of
							Washington Husky Tri Team. She also is the head coach for the Masters
							swim program at the Gold Creek Club. Lisa is the co-founder/owner of
							Finish Strong Events (a local events company) as well as the founder and
							Manager of Elevation Multisport, a local triathlon club.
						</p>
						<p>
							Besides swimming, Lisa is also an avid cyclist and currently road races
							with a local bike team. Current certifications include:USA Triathlon
							Coach Level 2, USA Cycling Coach Level 3, Adult Learn to Swim, Heart
							Zones Cycling and Personal Training, Certified Lifeguard, First Aid, and
							CPR.
						</p>
						<p>
							Lisa teaches both at her private residence and Gold Creek Club in
							Woodinville.
						</p>
						{/* <img src={instructors} alt="" />
			<p>Deanna, Lisa, Tiffani and Lori. All professional adults with decades of experience.</p>
			<Link to="/">Go back to the homepage</Link> */}
					</Typography>
				</TextWrapper>
			</Paper>
		</Wrapper>
	</Layout>
);

export default About;
