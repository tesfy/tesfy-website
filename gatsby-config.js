module.exports = {
  siteMetadata: {
    title: `Tesfy`,
    description: `A lightweight A/B Testing and Feature Flag JavaScript library focused on performance`,
    author: `@andresz1`,
    siteUrl: `https://tesfy.io`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': `${__dirname}/src`
        },
        extensions: []
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /src\/assets\/svgs/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1200
              }
            }
          ],
          default: require.resolve('./src/components/Docs/DocsLayout.tsx')
        }
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/images/icon.png`
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`
  ]
};
