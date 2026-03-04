import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // ── Page Builder ─────────────────────────────────────────────────────
      S.documentTypeListItem("page").title("Pages"),

      S.listItem()
        .title("Site Settings")
        .schemaType("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("site-settings")),

      S.divider(),

      // ── Content Collections ───────────────────────────────────────────────
      S.documentTypeListItem("highlights"),
      S.documentTypeListItem("sermons"),
      S.documentTypeListItem("gallery"),
      S.documentTypeListItem("ourTeam"),
      S.documentTypeListItem("missions"),

      S.listItem()
        .title("Announcements - Weekly Announcements")
        .schemaType("announcements")
        .child(
          S.document()
            .schemaType("announcements")
            .documentId("weekly-announcements")
        ),

      S.divider(),

      // ── Legacy Hero Singletons (remove after data migration) ──────────────
      S.listItem()
        .title("⚠️ Legacy: Home Hero")
        .schemaType("homeHero")
        .child(S.document().schemaType("homeHero").documentId("home-hero")),

      S.listItem()
        .title("⚠️ Legacy: About Hero")
        .schemaType("aboutHero")
        .child(S.document().schemaType("aboutHero").documentId("about-hero")),

      S.listItem()
        .title("⚠️ Legacy: Worship Hero")
        .schemaType("worshipHero")
        .child(S.document().schemaType("worshipHero").documentId("worship-hero")),

      S.listItem()
        .title("⚠️ Legacy: Missions Hero")
        .schemaType("missionsHero")
        .child(S.document().schemaType("missionsHero").documentId("missions-hero")),
    ]);
