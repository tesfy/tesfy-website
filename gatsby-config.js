module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-theme-docz`,
    `gatsby-plugin-chakra-ui`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
