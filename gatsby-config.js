module.exports = ({
  siteMetadata: {
    siteTitle: `Joseph Malovic`,
    siteTitleAlt: `Joseph | Home`,
    siteHeadline: `Joseph | Home`,
    siteUrl: `https://wwww.malovic.ca/`,
    siteDescription: `A simple portfolio`,
    siteLanguage: `en`,
    siteImage: ``,
    author: `@josephmalovic`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
})
