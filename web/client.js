const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: '0wopf0m0', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2021-12-28'
})
