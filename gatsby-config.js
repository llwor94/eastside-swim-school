module.exports = {
	siteMetadata: {
		title: 'Eastside Swim School',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `cms-images`,
				path: `${__dirname}/static/assets/`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/assets/favicon.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-netlify-cms',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `testimonials`,
				path: `${__dirname}/testimonials/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `classes`,
				path: `${__dirname}/classes/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `coaches`,
				path: `${__dirname}/coaches/`,
			},
		},
		'gatsby-transformer-remark',
		'gatsby-plugin-stylus',
	],
};
