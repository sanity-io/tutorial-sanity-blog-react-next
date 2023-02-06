import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'your-project-id',
    dataset: 'production'
  }
})
