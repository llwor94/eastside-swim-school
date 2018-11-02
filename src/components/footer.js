import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Icon from '@material-ui/core/Icon';
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
		<div className="icons">
			<div className="icon">
				<a href="mailto:eastsideswimschool@comcast.net">
					<FontAwesomeIcon icon={faEnvelope} size="3x" />
				</a>
			</div>
			<div className="icon">
				<a href="https://www.facebook.com/eastsideswimschool/" target="_blank">
					<FontAwesomeIcon icon={faFacebook} size="3x" />
				</a>
			</div>
		</div>
	</footer>
);

export default Footer;
