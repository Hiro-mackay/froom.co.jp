import { useRouter } from 'next/router';
import { useState } from 'react';
import { GlobalNavItem } from '../GlobalNavItem';
import { GlobalNavigationItems } from '../../constants/GlobalNavigationItems';

export const Header = () => {
  const { pathname } = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(true);

  return (
    <header className="fixed z-10 flex flex-wrap items-center justify-between w-full bg-white box-border md:pl-5 lg:pl-10 md:pr-10 lg:pr-16 xl:pr-28 md:py-2 lg:py-3">
      <div className="flex flex-wrap items-center justify-between w-full px-6 py-3 box-border">
        <div className="flex items-center flex-shrink-0 mr-6">
          <h1 className="text-xl font-semibold tracking-tight">Froom</h1>
        </div>

        <div className="block md:hidden">
          <button
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
            className="flex items-center px-3 py-2 focus:outline-none"
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <nav
          className={`w-full ${
            isMenuOpen ? 'block' : 'hidden'
          } bg-orange md:bg-white md:flex md:w-max md:space-x-10 lg:space-x-10 2xl:space-x-24`}
        >
          {GlobalNavigationItems.map((item) => (
            <span
              className="block px-8 py-4 text-sm border-b border-gray-200 lg:text-base md:p-1 text-gray-50 md:text-gray-800 md:inline-block transition duration-100 lg:hover:text-orange lg:hover:border-orange"
              key={item.label}
            >
              <GlobalNavItem pathname={pathname} {...item} />
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
};
