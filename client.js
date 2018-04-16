import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'INSERT_YOUR_PROJECT_ID', // you can find this in sanity.json
  dataset: 'INSERT_DATASET_NAME', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})