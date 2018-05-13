const client = require('./client')

module.exports = {
  exportPathMap: async function (defaultPathMap) {
    const path = await client
      .fetch('*[_type == "post"].slug.current')
      .then(data =>
        data.reduce(
          (acc, slug) => ({
            '/': { page: '/' },
            ...acc,
            [`/blog/${slug}`]: { page: '/blog', query: { slug } }
          }),
          {}
        )
      )
      .catch(console.error)
    return path
  }
}
