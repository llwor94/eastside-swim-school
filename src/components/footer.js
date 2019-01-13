import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import './footer.styl';

const Footer = () => (
	<footer className='footer'>
		<Typography variant='subtitle1' className='author'>
			Designed by{' '}
			<a
				className='link'
				href='https://github.com/cooltable'
				target='_blank'
				rel='noopener noreferrer'
			>
				Cool Table
			</a>
		</Typography>
		<Hidden xsDown>
			<div className='icons'>
				<div className='icon'>
					<a href='mailto:eastsideswimschool@comcast.net'>
						<FontAwesomeIcon icon={faEnvelope} size='3x' />
					</a>
				</div>
				<div className='icon'>
					<a
						href='https://www.facebook.com/eastsideswimschool/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FontAwesomeIcon icon={faFacebook} size='3x' />
					</a>
				</div>
			</div>
		</Hidden>
		<Hidden smUp>
			<div className='icons'>
				<div className='icon'>
					<a href='tel:1-425-577-9426'>
						<FontAwesomeIcon icon={faPhoneSquare} size='2x' />
					</a>
				</div>
				<div className='icon'>
					<a href='mailto:eastsideswimschool@comcast.net'>
						<FontAwesomeIcon icon={faEnvelope} size='2x' />
					</a>
				</div>
				<div className='icon'>
					<a
						href='https://www.facebook.com/eastsideswimschool/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FontAwesomeIcon icon={faFacebook} size='2x' />
					</a>
				</div>
			</div>
		</Hidden>
	</footer>
);

export default Footer;
