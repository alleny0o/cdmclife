import { type SchemaTypeDefinition } from 'sanity'

// schema types imports
import { homeHeroType } from './home-hero'
import { aboutHeroType } from './about-hero'
import { worshipHeroType } from './worship-hero'
import { missionsHeroType } from './missions-hero'
import { highlightsType } from './highlights'
import { sermonsType } from './sermons'
import { galleryType } from './gallery'
import {ourTeamType } from './leadership-team'
import { missionsType } from './missions'
import { announcementsType } from './announcements'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeHeroType,
    highlightsType,
    sermonsType,
    galleryType,
    aboutHeroType,
    ourTeamType,
    worshipHeroType,
    missionsHeroType,
    missionsType,
    announcementsType,
  ],
}
