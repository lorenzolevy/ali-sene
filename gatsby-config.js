module.exports = {
  siteMetadata: {
    title: `Ali Sene Art`,
    description: `A collection of illustrations, animations, and comics by Ali Sene.`,
    image: `/static/ali-icon.png`,
    author: `@lorenzolevy`,
    url: `https://www.aliseneart.com`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/content/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `comics`,
        path: `${__dirname}/src/content/comics`,
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/content/images/ali-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`400`, `700`]
          },
          {
            family: `Roboto`,
          },
          {
            family: `Roboto Condensed`,
          },
          {
            family: `Roboto Slab`,
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
