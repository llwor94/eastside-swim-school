import { Location } from '@reach/router';
import React from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

const links = [
  { href: '#classes', title: 'Group Classes' },
  { href: '#coaching', title: 'Private Lessons' },
];

export const PageLinks = ({ mobile, handleClick }) => (
  <Location>
    {({ location }) => {
      if (location.pathname === '/') {
        return links.map(({ href, title }) =>
          mobile ? (
            <MenuItem onClick={handleClick} component="a" href={href}>
              {title}
            </MenuItem>
          ) : (
            <Button color="inherit" component="a" href={href}>
              {title}
            </Button>
          ),
        );
      } else
        return mobile ? (
          <MenuItem onClick={handleClick} component="a" href="/">
            Home
          </MenuItem>
        ) : (
          <Button color="inherit" component="a" href="/">
            Home
          </Button>
        );
    }}
  </Location>
);
