import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter((listItem) => listItem.getId() !== "announcements"),

      S.listItem()
        .title("Weekly Announcements")
        .child(
          S.document()
            .schemaType("announcements")
            .documentId("weekly-announcements")
        ),
    ]);
