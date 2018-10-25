import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Swimmer from '../images/swimmer.png';
import { moveInLeft, moveInRight } from '../styles/keyframes';
import { flex } from '../styles/mixins';

const Wrapper = styled.div`
	height: 90vh;
	background-image: linear-gradient(
			27deg,
			rgba(124, 186, 90, 0.8) 0%,
			rgba(5, 130, 126, 0.8) 79%,
			rgba(0, 128, 128, 0.8) 83%
		),
		url(${Swimmer});
	background-size: cover;
	background-position: center;
	${flex('column', 'center', 'center')};
	clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

const TextBox = styled.h1`
	color: white;
	text-transform: uppercase;
	${flex('column')};
	margin-bottom: 10px;
`;

const Text = styled.span`
	font-size: ${(props) => (props.sub ? '31px' : '50px')};
	font-weight: ${(props) => (props.sub ? '700' : '400')};
	letter-spacing: ${(props) => (props.sub ? '25px' : '27px')};
	animation: ${moveInLeft} 1s ease-out;
`;

// const Button = styled(Link)`
//     text-transform: uppercase;
//     text-decoration: none;
//     padding: 1.5rem 4rem;
//     border: .1rem solid white;
//     position: relative;
//     font-size: 1.6rem;
//     color: white;
//     background: ${(props) => props.theme.shamrock};

//     &:hover {
//       transform: translateY(-3px);
//       box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
//     }
// `;

const styles = theme => ({
  button: {
    // background: 'white',
    fontSize: '21px',
    letterSpacing: 2,
    borderColor: 'white',
    color: 'white',
    padding: '10px 30px',
    // color: '#029BD9',
    // lineSpac
  }
});


const Jumbotron = ({classes}) => (
	<Wrapper>
		<TextBox>
			<Text>Eastside</Text>
			<Text sub>Swim School</Text>
		</TextBox>
    <Button variant="outlined" className={classes.button} component="a" href="#classes" size='large'>
    Jump In!
    </Button>
		{/* <Button to="#classes">Jump In!</Button> */}
	</Wrapper>
);

export default withStyles(styles)(Jumbotron);
