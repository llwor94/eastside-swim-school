import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#b4ffff',
			main: '#80deea',
			dark: '#4bacb8',
			contrastText: '#455a64',
		},
		secondary: {
			light: '#718792',
			main: '#455a64',
			dark: '#1c313a',
			contrastText: '#f5f5f5',
		},
	},
	typography: {
		useNextVariants: true,
	},
});

export default theme;
