import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './Jumbotron.module.styl';

const styles1 = theme => ({
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
});

const Jumbotron = ({ classes }) => (
  <div className={styles.wrapper}>
    <div className={styles.textBox}>
      <Typography className={classes.title} variant="h2" component="h1">
        Eastside Swim School
      </Typography>
    </div>
    <Button
      variant="contained"
      color="secondary"
      component="a"
      href="#classes"
      size="large"
      classes={{
        root: styles.btn,
      }}
    >
      Jump In!
    </Button>
    {/* <Button to="#classes">Jump In!</Button> */}
  </div>
);

export default withStyles(styles1)(Jumbotron);
