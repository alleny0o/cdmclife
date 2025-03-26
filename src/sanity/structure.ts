import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home - Hero")
        .schemaType("homeHero")
        .child(S.document().schemaType("homeHero").documentId("home-hero")),

      S.documentTypeListItem("highlights"),
      S.documentTypeListItem("sermons"),
      S.documentTypeListItem("gallery"),

      S.listItem()
      .title("About - Hero")
      .schemaType("aboutHero")
      .child(S.document().schemaType("aboutHero").documentId("about-hero")),

      S.documentTypeListItem("ourTeam"),

      S.listItem()
        .title("Worship - Hero")
        .schemaType("worshipHero")
        .child(S.document().schemaType("worshipHero").documentId("worship-hero")),

      S.listItem()
        .title("Missions - Hero")
        .schemaType("missionsHero")
        .child(S.document().schemaType("missionsHero").documentId("missions-hero")),

      S.documentTypeListItem("missions"),

      S.listItem()
        .title("Announcements - Weekly Announcements")
        .schemaType("announcements")
        .child(
          S.document()
            .schemaType("announcements")
            .documentId("weekly-announcements")
        ),
    ]);
