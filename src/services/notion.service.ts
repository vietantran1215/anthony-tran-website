import { POST_STATUS, PROPERTY } from "@/enums";
import { Client, LogLevel } from "@notionhq/client";

class NotionService {
  private ownerId = "e9b1ef39-9361-495c-8185-7994d32662e4";
  private databaseId = "522bde569de6438896af4d47edbe9f1c";

  private notion = new Client({
    auth: process.env.NOTION_SECRET,
    logLevel: LogLevel.DEBUG,
  });

  async getPosts(fieldIds: string[]) {
    const result = await this.notion.databases.query({
      database_id: this.databaseId,
      filter_properties: fieldIds,
      filter: {
        and: [
          {
            property: PROPERTY.AUTHOR,
            people: {
              contains: this.ownerId,
            },
          },
          {
            property: PROPERTY.STATUS,
            status: {
              equals: POST_STATUS.DONE,
            },
          },
        ],
      },
    });

    return result;
  }
}

export default new NotionService();
