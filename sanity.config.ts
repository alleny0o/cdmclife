'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion } from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

const schemaTypes = ['homeHero', 'aboutHero', 'worshipHero', 'missionsHero', 'announcements'];

export default defineConfig({
  basePath: '/studio',
  projectId: '4lgit6r7',
  dataset: 'production',
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  document: {
    actions: (prev, { schemaType }) => {
      if (schemaTypes.includes(schemaType)) {
        return prev.filter(({ action }) => action && !['unpublish', 'delete', 'duplicate'].includes(action))}
      return prev
    },
  },
})
