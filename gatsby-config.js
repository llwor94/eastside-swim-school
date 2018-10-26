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
				icon: 'src/images/evelationlogo.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-netlify-cms',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `testimonials`,
				path: `${__dirname}/testimonial/`,
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
				name: `coach-dummy`,
				path: `${__dirname}/coach-dummy/`,
			},
		},
		'gatsby-transformer-remark',
	],
};
