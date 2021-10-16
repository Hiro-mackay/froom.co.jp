import { BaseObject, TitleProperties, DateProperties, Properties } from './BaseObject';

export const databaseId = process.env.NOTION_DATABASE_ID;
export const notionToken = process.env.NOTION_TOKEN;

export type DatabaseResponseResult<T extends Properties = Properties> = BaseObject & {
  object: 'page';
  properties: T;
};
