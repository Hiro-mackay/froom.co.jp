import { DateProperties, TitleProperties } from './BaseObject';
import { DatabaseResponseResult } from './DatabaseResult';

export type NewsProperties = Record<'Title', TitleProperties> & Record<'Date', DateProperties>;
export type NewsResults = Array<DatabaseResponseResult<NewsProperties>>;
