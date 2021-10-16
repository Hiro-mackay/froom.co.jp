import Client from './Client';
import { Properties } from './types/BaseObject';
import { DatabaseResponseResult } from './types/DatabaseResult';

export const getDatabase = async <T extends Properties>(databaseId: string) => {
  const res = await Client.databases.query({
    database_id: databaseId,
  });

  return (res.results as any) as Array<DatabaseResponseResult<T>>;
};
