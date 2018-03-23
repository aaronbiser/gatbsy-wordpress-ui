require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: 'The Right Place',
		subtitle: 'Find the right bed for your patient',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`,
			},
		},
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				/*
      * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
      * Example : 'gatsbyjswpexample.wordpress.com' or 'www.example-site.com'
      */
				baseUrl: 'dev-gatbsyjswp.pantheonsite.io',
				// The protocol. This can be http or https.
				protocol: 'http',
				// Indicates whether the site is hosted on wordpress.com.
				// If false, then the asumption is made that the site is self hosted.
				// If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
				// If your site is hosted on wordpress.org, then set this to false.
				hostingWPCOM: false,
				// If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
				// This feature is untested for sites hosted on Wordpress.com
				useACF: true,
				auth: {
					htaccess_user: process.env.AUTH_HTACCESS_USER,
					htaccess_pass: process.env.AUTH_HTACCESS_PASSWORD,
					htaccess_sendImmediately: true,
					wpcom_app_clientSecret: '',
					wpcom_app_clientId: '',
					wpcom_user: '',
					wpcom_pass: '',
				},
				verboseOutput: false,
			},
		},
	],
};
