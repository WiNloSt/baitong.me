module.exports = {
  plugins: [
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
    }
  ]
}
