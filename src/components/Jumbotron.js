import React from 'react';

import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import styles from './Jumbotron.module.styl';

const Jumbotron = () => (
	<div className={styles.wrapper}>
		<div className={styles.textBox}>
			<Typography className={styles.title} variant='h2' component='h1'>
				Eastside <span className={styles.green}>Swim</span> School
			</Typography>
		</div>
		<Fab
			variant='extended'
			color='secondary'
			component='a'
			href='#classes'
			size='large'
			classes={{
				root: styles.btn,
			}}
		>
			Jump In!
		</Fab>
		{/* <Button to="#classes">Jump In!</Button> */}
	</div>
);

export default Jumbotron;
