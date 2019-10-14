exports.createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: '/',
    component: require.resolve('./src/templates/Home')
  })
}
