import { visionTool } from '@sanity/vision';
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'
import {dataset,projectId} from './environment'

export default defineConfig({
  name: 'default',
  title: 'project-portfolio',
  dataset ,
  projectId,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
