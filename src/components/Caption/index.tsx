import { PropsWithChildren } from 'react';

export const Caption = ({ children }: PropsWithChildren<{}>) => {
  return <caption className="text-sm text-gray-500 block text-left">{children}</caption>;
};
