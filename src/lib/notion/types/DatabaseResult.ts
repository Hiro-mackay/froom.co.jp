import { BaseObject, TitleProperties } from './BaseObject';

export const databaseId = process.env.NOTION_DATABASE_ID;
export const notionToken = process.env.NOTION_TOKEN;

export type DatabaseResponseResult = BaseObject & {
  object: 'page';
  properties: Record<'Name', TitleProperties>;
};
