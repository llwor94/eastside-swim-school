import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Announcement extends React.Component {
	state = {
		open: true,
	};
	render() {
		return (
			<StaticQuery
				query={graphql`
					query {
						allMarkdownRemark(
							filter: { fileAbsolutePath: { regex: "/announcements/" } }
						) {
							edges {
								node {
									html
									frontmatter {
										title
									}
								}
							}
						}
					}
				`}
				render={({ allMarkdownRemark }) => {
					console.log(allMarkdownRemark);
					return (
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
								message={
									<span>{allMarkdownRemark.edges[0].node.frontmatter.title}</span>
								}
								style={{
									maxWidth: '100%',
									width: '100vh',
									flexWrap: 'nowrap',
									padding: '10px 24px 20px',
								}}
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
					);
				}}
			/>
		);
	}
}

export default Announcement;
