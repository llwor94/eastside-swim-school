import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Typography from '@material-ui/core/Typography';

import './footer.styl';

const Footer = () => (
  <footer className="footer">
    <Typography variant="subtitle1" className="author">
      Designed by{' '}
      <a className="link" href="https://github.com/cooltable" target="_blank">
        Cool Table
      </a>
    </Typography>
    <div className="icon">
      <a href="https://facebook.com/" target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
    </div>
  </footer>
);

export default Footer;
