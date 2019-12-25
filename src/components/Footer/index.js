import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

import './index.styl';
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Footer = () => {
	const mobile = useMediaQuery('(max-width:600px)');

	return (
		<footer className='footer'>
				<div className='icons'>
					{mobile && <div className='icon'>
						<a href='tel:1-425-248-0908'>
							<FontAwesomeIcon icon={faPhoneSquare} size='3x' />
						</a>
					</div> }
					<div className='icon'>
						<a href='mailto:eastsideswimschool@comcast.net'>
							<FontAwesomeIcon icon={faEnvelope} size='3x' />
						</a>
					</div>
					<div className='icon'>
						<a
							href='https://www.instagram.com/eastsideswim/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon icon={faInstagram} size='3x' />
						</a>
					</div>
					<div className='icon'>
						<a
							href='https://www.facebook.com/eastsideswimschool/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon icon={faFacebookSquare} size='3x' />
						</a>
					</div>
				</div>
		</footer>
	);
}

export default Footer;
