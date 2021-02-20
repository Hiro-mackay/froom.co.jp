import React from 'react';
import Link from 'next/link';
import { GlobalNavigation } from '../../constants/GlobalNavigationItems';

export const GlobalNavItem: React.FC<GlobalNavigation & { pathname: string }> = ({ label, page, link, pathname }) => {
  return page ? (
    <Link href={page}>
      <a className={pathname === page ? 'text-orange-light' : undefined}>{label}</a>
    </Link>
  ) : (
    <a href={link}>{label}</a>
  );
};
