import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './Jumbotron.module.styl';

const Jumbotron = ({ text, button, link, about }) => (
	<div className={about ? styles.aboutWrapper : styles.wrapper}>
		<div className={styles.textBox}>
			<Typography className={styles.title} variant="h2" component="h1">
				{!about && text}
			</Typography>
		</div>
		{!about && (
			<Button
				variant="contained"
				color="secondary"
				component="a"
				href={link}
				size="large"
				classes={{
					root: styles.btn,
				}}
			>
				{button}
			</Button>
		)}
		{/* <Button to="#classes">Jump In!</Button> */}
	</div>
);

export default Jumbotron;
