import Client from './Client';
import { DatabaseResponseResult } from './types/DatabaseResult';

export const getDatabase = async (databaseId: string) => {
  const res = await Client.databases.query({
    database_id: databaseId,
  });

  return (res.results as any) as Array<DatabaseResponseResult>;
};
