import React from 'react';
import { Link } from 'gatsby';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';
import { Location } from '@reach/router';
import Logo from '../images/logo.png';
import styles from './Header.module.styl';

class Header extends React.Component {
	state = {
		auth: true,
		anchorEl: null,
	};

	handleChange = (event) => {
		this.setState({ auth: event.target.checked });
	};

	handleMenu = (event) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};
	render() {
		const { auth, anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<AppBar color="primary">
				<Toolbar className={styles.toolbar}>
					<Link to="/">
						<img src={Logo} className={styles.img} alt="logo" />
					</Link>
					<Hidden xsDown>
						<Location>
							{({ location }) => {
								//console.log(location);
								if (location.pathname === '/')
									return (
										<div>
											<Button color="inherit" component="a" href="#classes">
												Group Classes
											</Button>
											<Button color="inherit" component="a" href="#coaches">
												Private Lessons
											</Button>
											<Button
												color="inherit"
												className={styles.link}
												component={Link}
												to="/about"
											>
												About
											</Button>
										</div>
									);
								else
									return (
										<Button color="inherit" className={styles.link} component={Link} to="/">
											Home
										</Button>
									);
							}}
						</Location>
					</Hidden>

					<Hidden smUp>
						<Location>
							{({ location }) => {
								if (location.pathname === '/')
									return (
										<div>
											<IconButton
												aria-owns={open ? 'menu-appbar' : null}
												aria-haspopup="true"
												onClick={this.handleMenu}
												color="inherit"
											>
												<Icon className={styles.icon}>menu</Icon>
											</IconButton>
											<Menu
												id="menu-appbar"
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
												<MenuItem
													onClick={this.handleClose}
													className={styles.link}
													component="a"
													href="#classes"
												>
													Group Classes
												</MenuItem>
												<MenuItem
													onClick={this.handleClose}
													className={styles.link}
													component="a"
													href="#coaches"
												>
													Private Lessons
												</MenuItem>
												<MenuItem
													onClick={this.handleClose}
													className={styles.link}
													component={Link}
													to="/about"
												>
													About
												</MenuItem>
											</Menu>
										</div>
									);
								else
									return (
										<Button color="inherit" className={styles.link} component={Link} to="/">
											Home
										</Button>
									);
							}}
						</Location>
					</Hidden>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;
