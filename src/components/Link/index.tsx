import NextLink, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

export const Link = ({ children, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <NextLink {...props}>
      <a className="text-blue-600 duration-100 border-b border-transparent hover:border-blue-600">{children}</a>
    </NextLink>
  );
};
