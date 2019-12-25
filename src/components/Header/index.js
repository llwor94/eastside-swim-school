import React, { Fragment, useState } from "react";
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';

import Logo from '../../images/logo.png';
import styles from './index.module.styl';

const routes = [
	{url: '/openswim', title: 'Open Swim'},
	{url: '/about', title: 'About'},
	{url: '/services', title: 'Services'},
	{url: '/faq', title: 'FAQ'},
	{url: '/location', title: 'Location'}
]

const HeaderFunc = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar className={styles.toolbar}>
			<Link to='/'>
				<img src={Logo} className={styles.img} alt='logo' />
			</Link>

			<Hidden xsDown>
				<div>
					<PageLinks/>
					{routes.map(({url, title}) =>
						<Button
							color='inherit'
							component={Link}
							to={url}
						>
							{title}
						</Button>
					)}
				</div>
			</Hidden>
		</AppBar>
	)

}


class Header extends React.Component {
	// state = {
	// 	anchorEl: null,
	// };
	//
	// // handleChange = event => {
	// // 	this.setState({ auth: event.target.checked });
	// // };
	//
	// handleMenu = event => {
	// 	this.setState({ anchorEl: event.currentTarget });
	// };
	//
	// handleClose = () => {
	// 	this.setState({ anchorEl: null });
	// };
	render() {
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		return (
			<AppBar className={styles.toolbar}>

					<Hidden xsDown>
						<div>
							<Location>
								{({ location }) => {
									if (location.pathname === '/') {
										return (
											<Fragment>
												<Button
													color='inherit'
													component='a'
													href='#classes'
												>
													Group Classes
												</Button>
												<Button
													color='inherit'
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
								component={Link}
								to='/openswim'
							>
								Open Swim
							</Button>
							<Button
								color='inherit'
								component={Link}
								to='/about'
							>
								About
							</Button>
							<Button
								color='inherit'
								component={Link}
								to='/services'
							>
								Services
							</Button>
							<Button
								color='inherit'
								component={Link}
								to='/faq'
							>
								FAQ
							</Button>
							<Button
								color='inherit'
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
								<Icon>menu</Icon>
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
														component='a'
														href='#classes'
													>
														Group Classes
													</MenuItem>
													<MenuItem
														onClick={this.handleClose}
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
									component={Link}
									to='/openswim'
								>
									Open Swim
								</MenuItem>
								<MenuItem
									onClick={this.handleClose}
									component={Link}
									to='/about'
								>
									About
								</MenuItem>
								<MenuItem
									onClick={this.handleClose}
									component={Link}
									to='/services'
								>
									Services
								</MenuItem>
								<MenuItem
									onClick={this.handleClose}
									component={Link}
									to='/faq'
								>
									FAQ
								</MenuItem>
								<MenuItem
									onClick={this.handleClose}
									component={Link}
									to='/location'
								>
									Location
								</MenuItem>
							</Menu>
						</div>
					</Hidden>
			</AppBar>
		);
	}
}

export default Header;
