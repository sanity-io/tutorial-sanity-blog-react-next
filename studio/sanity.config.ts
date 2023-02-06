import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity-tutorial-blog',

  projectId: 'your-project-id',
  dataset: 'your-dataset-name',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
