import { useRouter } from 'next/router';
import { useState } from 'react';
import { GlobalNavItem } from '../GlobalNavItem';
import { GlobalNavigationItems } from '../../constants/GlobalNavigationItems';
import Link from 'next/link';
import FroomSVG from '../svgs/froom';
import styles from '../../styles/header.module.css';

export const Header = () => {
  const { pathname } = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-10 flex flex-wrap items-center justify-between w-full bg-white box-border md:pl-5 lg:pl-10 md:pr-10 lg:pr-16 xl:pr-28 md:py-2 lg:py-3">
      <div className="flex flex-wrap items-center justify-between w-full box-border">
        <div className="flex items-center flex-shrink-0 mr-6 pl-6 py-3">
          <Link href="/">
            <a>
              <FroomSVG className={`w-20 ${styles.logo} ${pathname === '/' && styles.homeLogo}`} />
            </a>
          </Link>
        </div>
        <div className="block md:hidden pr-6">
          <button
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
            className="flex items-center px-3 py-2 focus:outline-none"
          >
            {!isMenuOpen ? (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
        <nav className={`w-full ${isMenuOpen ? 'block' : 'hidden'}  bg-orange bg-opacity-80 md:bg-opacity-100 md:bg-white md:flex md:w-max md:space-x-10 lg:space-x-10 2xl:space-x-24`}>
          {GlobalNavigationItems.map((item) => (
            <span
              className="block px-8 py-4 text-sm border-b border-gray-200 lg:text-base md:p-1 text-gray-50 md:text-gray-800 md:inline-block transition duration-100 lg:hover:text-orange lg:hover:border-orange"
              key={item.label}
              onClick={() => setMenuOpen(false)}
            >
              <GlobalNavItem pathname={pathname} {...item} />
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
};
