import { Client, LogLevel } from '@notionhq/client';
import { notionToken } from './types/DatabaseResult';

const notion = new Client({
  auth: notionToken,
  logLevel: LogLevel.DEBUG,
});

export default notion;
