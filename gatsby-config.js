module.exports = {
  siteMetadata: {
    title: `Minecraft Page serwer - oficial page`,
    description: `Minecraft Page - oficial`,
    author: `Szymon Brud - szymonqqaz22@gmail.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-stylelint',
      options: { files: ['**/*.js'] },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#219653`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'CRAFT',
        fieldName: 'craft',
        url:
          'https://api-euwest.graphcms.com/v1/cjv9i8vnd09zi01etv6omqt89/master',
      },
    },
  ],
};
