import { type SchemaTypeDefinition } from 'sanity'

// schema types imports
import { highlightsType } from './highlights'
import { sermonsType } from './sermons'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    highlightsType,
    sermonsType,
  ],
}
