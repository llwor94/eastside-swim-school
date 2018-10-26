import React from 'react';
import { Link } from 'gatsby';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import Logo from '../images/logo.png';
import styles from './Header.module.styl';

const Header = () => (
  <AppBar color="primary">
    <Toolbar className={styles.toolbar}>
      <Link to="/">
        <img src={Logo} className={styles.img} alt="logo" />
      </Link>
      <div>
        <Button color="inherit">
          <Link className={styles.link} to="#coaches">
            Private Lessons
          </Link>
        </Button>
        <Button color="inherit">
          <Link className={styles.link} to="#classes">
            Group Classes
          </Link>
        </Button>
        <Button color="inherit">
          <Link className={styles.link} to="/about">
            About
          </Link>
        </Button>
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;
