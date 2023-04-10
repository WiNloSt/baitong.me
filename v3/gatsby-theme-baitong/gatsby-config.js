const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
})

module.exports = {
  siteMetadata: {
    title: 'Baitong.me Theme',
    description: `Theme for Baitong.me`,
    author: 'Baitong',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Inter',
              subsets: ['latin'],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'ma7q43kx1i9j',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'modal-root',
        id: 'modal-root',
      },
    },
  ],
}
