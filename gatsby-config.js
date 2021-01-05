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
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [ `gatsby-remark-images` ],
        plugins: [ `gatsby-remark-images` ],
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 100,
            },
          },
        ],
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
})
