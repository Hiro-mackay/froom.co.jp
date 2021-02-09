import React from 'react';
import { Navigation } from '../Navigation';

export const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  return (
    <header className="fixed z-50 flex flex-wrap items-center justify-between w-full px-6 px-20 py-8 bg-white md:px10">
      <div className="flex items-center flex-shrink-0 mr-6">
        <h1 className="text-xl font-semibold tracking-tight">Froom</h1>
      </div>

      <div className="block lg:hidden">
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
      <Navigation isMenuOpen={isMenuOpen} />
    </header>
  );
};
