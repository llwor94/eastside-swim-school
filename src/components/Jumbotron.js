import React from 'react';

import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import styles from './Jumbotron.module.styl';
import image from '../images/swim.jpg';

const Jumbotron = () => (
  <div
    className={styles.wrapper}
    style={{
      backgroundImage: `linear-gradient(to right bottom, rgba(180, 255, 255, 0.8), rgba(75, 172, 184, 0.8)), url(${image})`,
    }}
  >
    <div className={styles.textBox}>
      <h1 className={styles.title}>Eastside Swim School</h1>
      <Typography
        variant="h5"
        component="h1"
        style={{ textTransform: 'none', marginBottom: '2rem' }}
      >
        Swim Lessons in Redmond, WA
      </Typography>
    </div>
    <Fab
      variant="extended"
      component="a"
      href="#classes"
      size="large"
      classes={{
        root: styles.btn,
      }}
    >
      Jump In!
    </Fab>
    <svg
      style={{ position: 'absolute', bottom: 0 }}
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <linearGradient id="MyGradient" x1="0%" y1="5%" x2="0%" y2="95%">
        <stop offset="5%" stopColor="#ffffff" />
        <stop offset="95%" stopColor="#f3f4f5" />
      </linearGradient>
      <path
	width="100%"
	fill="url(#MyGradient)"
	fillOpacity="1"
	d="M0,96L48,117.3C96,139,192,181,288,192C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
	/>
    </svg>
  </div>
);

export default Jumbotron;
