import { type SchemaTypeDefinition } from 'sanity'

// schema types imports
import { highlightsType } from './highlights'
import { sermonsType } from './sermons'
import { galleryType } from './gallery'
import { missionsType } from './missions'
import { announcementsType } from './announcements'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    highlightsType,
    sermonsType,
    galleryType,
    missionsType,
    announcementsType,
  ],
}
