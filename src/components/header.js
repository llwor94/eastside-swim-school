import React from 'react'
import { Link } from 'gatsby'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'

import Logo from '../images/logo.png'

const styles = theme => {
  console.log(theme)
  return {
    img: {
      maxWidth: 100,
      // filter: 'drop-shadow(0px 10px 15px rgba(0, 0,0, 0.7));',
      filter: 'hue-rotate(60deg) brightness(150%)',
    },
    grow: {
      flexGrow: 1,
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
    },
    appbar: {
      backgroundColor: theme.palette.primary['main'],
    },
  }
}

const Header = ({ classes }) => (
  <AppBar color="primary">
    <Toolbar>
      <Link className={classes.grow} to="/">
        <img src={Logo} className={classes.img} />
      </Link>
      <div>
        <Button color="inherit">
          <Link className={classes.link} to="#coaches">
            Private Lessons
          </Link>
        </Button>
        <Button color="inherit">
          <Link className={classes.link} to="#classes">
            Group Classes
          </Link>
        </Button>
        <Button color="inherit">
          <Link className={classes.link} to="/about">
            About
          </Link>
        </Button>
      </div>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)
