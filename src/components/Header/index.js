import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';

import Logo from '../../images/logo.png';
import styles from './index.module.styl';
import { PageLinks } from './pageLinks';

const STATIC_ROUTES = [
  { slug: 'about', title: 'About' },
  { slug: 'location', title: 'Location' },
  { slug: 'request', title: 'Lesson Request'}
];

const query = graphql`
  query {
    allContentfulPage {
      edges {
        node {
          title
          slug 
        }
      }
    }
  }
`;

const Header = () => {
  const { allContentfulPage } = useStaticQuery(query);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const routes = [...allContentfulPage.edges.map(({node}) => node), ...STATIC_ROUTES];
  return (
    <div className={styles.toolbar}>
      <Link to="/">
        <img src={Logo} className={styles.img} alt="logo" />
      </Link>

      <Hidden xsDown>
        <div className={styles.links}>
          <PageLinks />
          {routes.map(({ slug, title }) => (
            <Button color="inherit" component={Link} to={`/${slug}`}>
              {title || slug.replace('-', ' ')}
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
            {routes.map(({ slug, title }) => (
              <MenuItem onClick={handleClose} component={Link} to={`/${slug}`}>
                {title || slug.replace('-', ' ')}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Hidden>
      <div className={styles.banner}>
        <p>Monday 2/15 we are open for lessons starting at noon</p>
      </div>
    </div>
  );
};

export default Header;
