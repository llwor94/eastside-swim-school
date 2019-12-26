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
  { path: 'open-swim', title: 'Open Swim' },
  { path: 'about', title: 'About' },
  { path: 'location', title: 'Location' },
];

const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

const Header = () => {
  const { allMarkdownRemark } = useStaticQuery(query);

  console.log(allMarkdownRemark);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const routes = [...allMarkdownRemark.edges.map(({node}) => node.frontmatter), ...STATIC_ROUTES];
  return (
    <div className={styles.toolbar}>
      <Link to="/">
        <img src={Logo} className={styles.img} alt="logo" />
      </Link>

      <Hidden xsDown>
        <div>
          <PageLinks />
          {routes.map(({ path }) => (
            <Button color="inherit" component={Link} to={`/${path}`}>
              {path.replace('-', ' ')}
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
            {routes.map(({ path }) => (
              <MenuItem onClick={handleClose} component={Link} to={`/${path}`}>
                {path.replace('-', ' ')}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Hidden>
    </div>
  );
};

export default Header;
