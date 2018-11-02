import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		useNextVariants: true,
	},
	palette: {
		primary: {
			light: '#b4ffff',
			main: '#80deea',
			dark: '#4bacb8',
			contrastText: '#455a64',
		},
		secondary: {
			light: '#ffffff',
			main: '#fafafa',
			dark: '#c7c7c7',
			contrastText: '#455a64',
		},
		accent: {
			main: '#66bc4a',
		},
	},
});

export default theme;
