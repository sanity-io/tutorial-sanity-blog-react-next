const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: process.env.projectId, // you can find this in sanity.json
  dataset: process.env.dataset, // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})

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
