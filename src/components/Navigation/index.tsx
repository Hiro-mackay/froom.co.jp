import React from 'react';

type Props = {
  isMenuOpen: boolean;
};

export const navItems = [
  {
    link: '',
    name: 'Home',
  },
  {
    link: '#service',
    name: 'Service',
  },
  {
    link: '#member',
    name: 'Member',
  },
  {
    link: '#contact',
    name: 'Contact',
  },
];

export const HeaderNavigation: React.FC<Props> = React.memo(({ isMenuOpen }) => {
  return (
    <nav
      className={`w-full ${
        isMenuOpen ? 'block' : 'hidden'
      } bg-orange md:bg-white md:flex md:w-max md:space-x-10 lg:space-x-10 2xl:space-x-24`}
    >
      {navItems.map((item) => (
        <a
          href={item.link}
          className="block px-8 py-4 text-sm border-b border-gray-200 lg:text-base md:p-1 text-gray-50 md:text-gray-800 md:inline-block transition duration-100 lg:hover:text-orange lg:hover:border-orange"
          key={item.name}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
});

export const FooterNavigation: React.FC = React.memo(() => (
  <nav className={`w-full flex space-x-6 md:space-x-20`}>
    {navItems.map((item) => (
      <a href={item.link} className="inline-block  hover:text-orange" key={item.name}>
        {item.name}
      </a>
    ))}
  </nav>
));
