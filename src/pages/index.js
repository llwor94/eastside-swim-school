import React from 'react';
import Layout from '../components/Layout';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Jumbotron from '../components/Jumbotron';
import Classes from '../components/Classes';
import Instructors from '../components/Instructors';
import Testimonial from '../components/Testimonials';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class IndexPage extends React.Component {
	state = {
		open: true,
	};
	render() {
		return (
			<Layout>
				<Jumbotron />
				<Classes />
				<Instructors />
				<Testimonial />
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					open={this.state.open}
					onClose={() => this.setState({ open: false })}
				>
					<SnackbarContent
						variant='success'
						message='Eastside Swim School has found a new location! Classes will begin February
						1st. Watch for registration to open in a few weeks.'
						style={{ maxWidth: '100%', width: '100vh' }}
						action={[
							<IconButton
								key='close'
								aria-label='Close'
								color='inherit'
								onClick={() => this.setState({ open: false })}
							>
								<CloseIcon />
							</IconButton>,
						]}
					/>
				</Snackbar>
			</Layout>
		);
	}
}

export default IndexPage;
