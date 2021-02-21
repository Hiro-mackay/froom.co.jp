export interface GlobalNavigation {
  label: string;
  page?: string;
  link?: string;
}

export const GlobalNavigationItems: GlobalNavigation[] = [
  { label: 'Home', page: '/' },
  { label: 'News', page: '/news' },
  { label: 'Company', page: '/company' },
  { label: 'Contact', link: 'https://forms.gle/dHLjfSBaoiTrJbpQ8' },
];