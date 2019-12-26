import React, { useState } from 'react';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';

import Logo from '../../images/logo.png';
import styles from './index.module.styl';
import { PageLinks } from './pageLinks';

const routes = [
  { url: '/openswim', title: 'Open Swim' },
  { url: '/about', title: 'About' },
  { url: '/services', title: 'Services' },
  { url: '/faq', title: 'FAQ' },
  { url: '/location', title: 'Location' },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.toolbar}>
      <Link to="/">
        <img src={Logo} className={styles.img} alt="logo" />
      </Link>

      <Hidden xsDown>
        <div>
          <PageLinks />
          {routes.map(({ url, title }) => (
            <Button color="inherit" component={Link} to={url}>
              {title}
            </Button>
          ))}
        </div>
      </Hidden>
      <Hidden smUp>
        <div>
          <IconButton
            aria-owns={Boolean(anchorEl) ? 'menu-appbar' : null}
            aria-haspopup="true"
            onClick={handleClick}
            color="inherit"
          >
            <Icon>menu</Icon>
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <PageLinks mobile handleClick={handleClose} />
            {routes.map(({ url, title }) => (
              <MenuItem onClick={handleClose} component={Link} to={url}>
                {title}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Hidden>
    </div>
  );
};

export default Header;
