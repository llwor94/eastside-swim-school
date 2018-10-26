import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Swimmer from '../images/swimmer.png'
import { moveInLeft, moveInRight } from '../styles/keyframes'
import { flex } from '../styles/mixins'

const Wrapper = styled.div`
  height: 80vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(180, 255, 255, 0.8),
      rgba(75, 172, 184, 0.8)
        /* rgba(124, 186, 90, 0.8) 0%,
      rgba(5, 130, 126, 0.8) 79%,
      rgba(0, 128, 128, 0.8) 83% */
    ),
    url(${Swimmer});
  background-size: cover;
  background-position: center;
  ${flex('column', 'center', 'center')};
  clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);
`

const TextBox = styled.h1`
  color: white;
  text-transform: uppercase;
  text-align: center;
  ${flex('column')};
  margin-bottom: 10px;
`

const Text = styled.span`
  font-size: ${props => (props.sub ? '31px' : '50px')};
  font-weight: ${props => (props.sub ? '700' : '400')};
  letter-spacing: ${props => (props.sub ? '25px' : '27px')};
  animation: ${moveInLeft} 1s ease-out;
`
const styles = theme => ({
  button: {
    fontSize: theme.typography.pxToRem(20),
    letterSpacing: 5,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
  },
  title: {
    letterSpacing: 5,
    color: '#fff',
    fontFamily: 'Lato',
    fontWeight: 300,
    marginBottom: '3rem',
  },
})

const Jumbotron = ({ classes }) => (
  <Wrapper>
    <TextBox>
      <Typography className={classes.title} variant="h2" component="h1">
        Eastside Swim School
      </Typography>
    </TextBox>
    <Button
      variant="contained"
      color="secondary"
      component="a"
      href="#classes"
      size="large"
      className={classes.button}
    >
      Jump In!
    </Button>
    {/* <Button to="#classes">Jump In!</Button> */}
  </Wrapper>
)

export default withStyles(styles)(Jumbotron)
