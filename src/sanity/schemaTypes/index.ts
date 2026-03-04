import { type SchemaTypeDefinition } from 'sanity'

// existing collection schemas
import { highlightsType } from './highlights'
import { sermonsType } from './sermons'
import { galleryType } from './gallery'
import { ourTeamType } from './our-team'
import { missionsType } from './missions'
import { announcementsType } from './announcements'

// legacy hero singletons (kept for migration reference)
import { homeHeroType } from './home-hero'
import { aboutHeroType } from './about-hero'
import { worshipHeroType } from './worship-hero'
import { missionsHeroType } from './missions-hero'

// page builder
import { pageType } from './page'
import { siteSettingsType } from './site-settings'
import {
  heroBlockType,
  highlightsBlockType,
  sermonsBlockType,
  galleryBlockType,
  ourTeamBlockType,
  missionsBlockType,
  announcementsBlockType,
  tabsBlockType,
  worshipInfoBlockType,
  contactFormBlockType,
} from './section-blocks'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // page builder
    pageType,
    siteSettingsType,
    heroBlockType,
    highlightsBlockType,
    sermonsBlockType,
    galleryBlockType,
    ourTeamBlockType,
    missionsBlockType,
    announcementsBlockType,
    tabsBlockType,
    worshipInfoBlockType,
    contactFormBlockType,
    // collections
    highlightsType,
    sermonsType,
    galleryType,
    ourTeamType,
    missionsType,
    announcementsType,
    // legacy (remove after data migration)
    homeHeroType,
    aboutHeroType,
    worshipHeroType,
    missionsHeroType,
  ],
}
