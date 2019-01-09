import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';

import Logo from '../images/logo.png';
import styles from './Header.module.styl';

class Header extends React.Component {
	state = {
		auth: true,
		anchorEl: null,
	};

	handleChange = event => {
		this.setState({ auth: event.target.checked });
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};
	render() {
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		return (
			<AppBar color='primary'>
				<Toolbar className={styles.toolbar}>
					<Link to='/'>
						<img src={Logo} className={styles.img} alt='logo' />
					</Link>

					<Hidden xsDown>
						<div>
							<Location>
								{({ location }) => {
									if (location.pathname === '/') {
										return (
											<Fragment>
												<Button
													color='inherit'
													className={styles.link}
													component='a'
													href='#classes'
												>
													Group Classes
												</Button>
												<Button
													color='inherit'
													className={styles.link}
													component='a'
													href='#coaches'
												>
													Private Lessons
												</Button>
											</Fragment>
										);
									} else
										return (
											<Button
												color='inherit'
												className={styles.link}
												component='a'
												href='/'
											>
												Home
											</Button>
										);
								}}
							</Location>
							<Button
								color='inherit'
								className={styles.link}
								component={Link}
								to='/about'
							>
								About
							</Button>
							<Button
								color='inherit'
								className={styles.link}
								component={Link}
								to='/services'
							>
								Services
							</Button>
							<Button
								color='inherit'
								className={styles.link}
								component={Link}
								to='/faq'
							>
								FAQs
							</Button>
							<Button
								color='inherit'
								className={styles.link}
								component={Link}
								to='/location'
							>
								Location
							</Button>
						</div>
					</Hidden>
					<Hidden smUp>
						<div>
							<IconButton
								aria-owns={open ? 'menu-appbar' : null}
								aria-haspopup='true'
								onClick={this.handleMenu}
								color='inherit'
							>
								<Icon className={styles.icon}>menu</Icon>
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={this.handleClose}
							>
								<Location>
									{({ location }) => {
										if (location.pathname === '/') {
											return (
												<Fragment>
													<MenuItem
														onClick={this.handleClose}
														className={styles.link}
														component='a'
														href='#classes'
													>
														Group Classes
													</MenuItem>
													<MenuItem
														onClick={this.handleClose}
														className={styles.link}
														component='a'
														href='#coaches'
													>
														Private Lessons
													</MenuItem>
												</Fragment>
											);
										} else {
											return (
												<MenuItem
													onClick={this.handleClose}
													className={styles.link}
													component={Link}
													to='/'
												>
													Home
												</MenuItem>
											);
										}
									}}
								</Location>
								<MenuItem
									onClick={this.handleClose}
									className={styles.link}
									component={Link}
									to='/about'
								>
									About
								</MenuItem>
								<MenuItem
									onClick={this.handleClose}
									className={styles.link}
									component={Link}
									to='/services'
								>
									Services
								</MenuItem>
								<MenuItem
									onClick={this.handleClose}
									className={styles.link}
									component={Link}
									to='/faq'
								>
									FAQs
								</MenuItem>
								<MenuItem
									onClick={this.handleClose}
									className={styles.link}
									component={Link}
									to='/location'
								>
									Location
								</MenuItem>
							</Menu>
						</div>
					</Hidden>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;
