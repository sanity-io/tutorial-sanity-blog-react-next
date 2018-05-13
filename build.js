const fs = require('fs')
const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'anokeucs', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})
function build() {
  client.fetch('*[_type == "post"].slug.current').then(data => {
      data.forEach(file => fs.createReadStream('./pages/blog.js').pipe(fs.createWriteStream(`./pages/${file}.js`)))
      return data
  }).then(data => {
    console.log('Done with building pages 👇\n', data.join('\n'))
    process.exit(0)
  }).catch(console.error)
}
build()