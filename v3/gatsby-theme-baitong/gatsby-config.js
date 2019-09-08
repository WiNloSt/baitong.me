const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`)
})

module.exports = {
  siteMetadata: {
    title: 'Baitong.me Theme',
    description: `Theme for Baitong.me`,
    author: 'Baitong'
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Nunito',
            subsets: ['latin']
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'ma7q43kx1i9j',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: `preview.contentful.com`
      }
    }
  ]
}
